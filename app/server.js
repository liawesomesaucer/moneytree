import path from 'path';
import { Server } from 'http';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './App';
import NotFound from './components/NotFound';

// initialize the server and configure support for ejs templates
const app = new express();
const server = new Server(app);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// define the folder that will be used for static assets
// app.use(app.router);
var router = express.Router();

app.use('/static', express.static(path.join(__dirname, 'static')));

router.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});


// app.use("/styles",  express.static(__dirname + '/public/stylesheets'));
// app.use("/scripts", express.static(__dirname + '/public/javascripts'));
// app.use("/images",  express.static(__dirname + '/public/images'));

app.use("/", router);
/*
// universal routing and rendering
app.get('*', (req, res) => {
  // match(
  //   { routes, location: req.url },
  //   (err, redirectLocation, renderProps) => {

  //     // in case of error display the error message
  //     if (err) {
  //       return res.status(500).send(err.message);
  //     }

  //     // in case of redirect propagate the redirect to the browser
  //     if (redirectLocation) {
  //       return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
  //     }

  //     // generate the React markup for the current route
  //     let markup;
  //     if (renderProps) {
  //       // if the current route matched we have renderProps
  //       console.log("Rendering");
  //       markup = renderToString(<RouterContext {...renderProps}/>);
  //     } else {
  //       // otherwise we can render a 404 page
  //       console.log("Rendering not found page");
  //       markup = renderToString(<NotFound/>);
  //       res.status(404);
  //     }

  //     // render the index template with the embedded React markup
  //     return res.render('index', { markup });
  //   }
  // );

  // The TSM Way
    match({ routes: routes, location: req.url }, function(error, redirectLocation, renderProps) {
      res.sendFile(path.join(__dirname, '/index.html'));
      
    })
});
*/

// start the server
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';
server.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port} [${env}]`);
});