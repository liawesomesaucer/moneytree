import path from 'path';
import util from 'util';
import { Server } from 'http';
import express from 'express';
import envvar from 'envvar';
import plaid from 'plaid';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import NotFound from './components/NotFound';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

dotenv.config({silent: process.env.NODE_ENV !== 'development'});

// initialize the server and configure support for ejs templates
const app = new express();
const server = new Server(app);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json())

// Set up Plaid instance
const PLAID_PUBLIC_KEY = envvar.string('PLAID_PUBLIC_KEY');
const PLAID_CLIENT_ID = envvar.string('PLAID_CLIENT_ID');
const PLAID_SECRET = envvar.string('PLAID_SECRET');

var plaidClient =
new plaid.Client(PLAID_CLIENT_ID, PLAID_SECRET, plaid.environments.tartan);

var router = express.Router();
var apiRouter = express.Router();

// Import seeded data
const data = require('./data.json');
var transaction_data = data.transaction_data; // List of transaction objects
var seed_data = data.seed_data; // List of seed objects
var account_data = [];

apiRouter.get('/transactions', function(req, res) {
  console.log("[GET] Transactions");
  res.json(transaction_data);
});

apiRouter.post('/transactions/add', function(req, res) {
  console.log("[POST] Transactions");
  transaction_data.push(req.body);
});

apiRouter.post('/transactions/addList', function(req, res) {
  console.log("[POST] Transactions List");
  transaction_data = transaction_data.concat(req.body);
});

apiRouter.get('/seeds', function(req, res) {
  console.log("[GET] Seeds");
  res.json(seed_data);
});

apiRouter.get('/seeds/delete', function(req, res) {
  console.log("[DELETE] Seed " + req.query.name);
  let result = [];
  seed_data.forEach(function(val) {
    if (val.name != req.query.name) {
      result.push(val);
    }
  });
  seed_data = result;
})

apiRouter.post('/seeds/add', function(req, res) {
  console.log("[POST] Seeds");
  seed_data.push(req.body);
});


apiRouter.get('/accounts/get', function(req, res) {
  console.log("[GET] Accounts");
  console.log(account_data);
  res.json(account_data);
});

// Need to figure out server-restarting persistence for this
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
      // plaidClient.getAuthUser(access_token, function(err, authResponse) {
      //   if (err != null) {
      //     res.json({error: 'Unable to pull accounts from the Plaid API'});
      //   } else {
      //     // Return a JSON body containing the user's accounts, which
      //     // includes names, balances, and account and routing numbers.
      //     console.log(authResponse);
      //     res.json({
      //       accounts: authResponse.accounts,
      //       transactions: authResponse.transactions,
      //     });
      //   }
      // });

      plaidClient.addConnectUser('chase', {
        username: 'plaid_test',
        password: 'plaid_good',
      }, {
        list: true,
      }, function(err, mfaRes, response) {
        // mfaRes.mfa is a list of send_methods
        plaidClient.stepConnectUser(mfaRes.access_token, null, {
          send_method: mfaRes.mfa[0],
        }, function(err, mfaRes, response) {
          // code was sent to the device we specified
          plaidClient.stepConnectUser(mfaRes.access_token, '1234', function(err, mfaRes, connectUserRes) {
            // We now have accounts and transactions
            console.log('# transactions: ' + connectUserRes.transactions.length);
            console.log('access token: ' + connectUserRes.access_token);
            account_data = account_data.concat(connectUserRes.accounts);
            console.log(connectUserRes.accounts)
            res.json({
              accounts: connectUserRes.accounts,
              transactions: connectUserRes.transactions
            });
          });
        });
      });
    }
  });
});


// const data = require('./data.json');
// apiRouter.get('/staticdata', function(req, res) {
//   res.json(data);
// });

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