# MoneyTree

## About
This is an app for COGS120/CSE170.

## Setup
To set up for dev
```
$ npm i
$ npm run devserver
```
This will run the express application

To get webpack to load your frontend changes as you make them, run. Note that you'll need the express server too for this to work
```
$ webpack --watch
```
## Notes for TA
Check `data.js` in the `app/store` directory, which will contain references to seeded data in the application.

The data is being added using Redux (check out `app/store/initialization.js`).

Note that since we're using Redux with no persistent data, only a full on page refresh (ctrl+R or cmd+R) will reset the state of the app. Otherwise the data will stay as long as your session is active.

To play around with the accounts linking feature (which will import additional transactions), use these sandbox API credentials for any bank:

```
Username: plaid_test
Password: plaid_good
Code: 1234
Security Question Answer: tomato
```