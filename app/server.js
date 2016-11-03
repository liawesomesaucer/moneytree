import path from 'path';
import util from 'util';
import { Server } from 'http';
import express from 'express';
import envvar from 'envvar';
import plaid from 'plaid';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './App';
import NotFound from './components/NotFound';

import dotenv from 'dotenv';
dotenv.config({silent: process.env.NODE_ENV !== 'development'});

// initialize the server and configure support for ejs templates
const app = new express();
const server = new Server(app);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Set up Plaid instance
const PLAID_PUBLIC_KEY = envvar.string('PLAID_PUBLIC_KEY');
const PLAID_CLIENT_ID = envvar.string('PLAID_CLIENT_ID');
const PLAID_SECRET = envvar.string('PLAID_SECRET');

var plaidClient =
  new plaid.Client(PLAID_CLIENT_ID, PLAID_SECRET, plaid.environments.tartan);

var router = express.Router();
var apiRouter = express.Router();

apiRouter.get('/accounts', function(req, res) {
  var public_token = req.query.public_token;

  plaidClient.exchangeToken(public_token, function(err, tokenResponse) {
    if (err != null) {
      res.json({error: 'Unable to exchange public_token'});
    } else {
      // The exchange was successful - this access_token can now be used to
      // safely pull account and routing numbers or transaction data for the
      // user from the Plaid API using your private client_id and secret.
      var access_token = tokenResponse.access_token;
      plaidClient.getAuthUser(access_token, function(err, authResponse) {
        if (err != null) {
          res.json({error: 'Unable to pull accounts from the Plaid API'});
        } else {
          // Return a JSON body containing the user's accounts, which
          // includes names, balances, and account and routing numbers.
          res.json({accounts: authResponse.accounts});
        }
      });
    }
  });
});

router.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

// define the folder that will be used for static assets
app.use('/static', express.static(path.join(__dirname, 'static')));

app.use("/api", apiRouter);
app.use("/", router);

// start the server
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';
server.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port} [${env}]`);
});