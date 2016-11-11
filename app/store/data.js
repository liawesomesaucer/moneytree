/* Seeded Transaction Data */
// export { transaction_data } from '../components/Transactions/TransactionData';

/* Seeded Accounts Data. Note this is disconnected for now
 * Though you can play around with '/accounts' and link an account
 */
// export { account_data } from '../components/Accounts/AccountsData';

const data = require('../data.json');

const seed_data = data.seed_data;
const transaction_data = data.transaction_data;

export { transaction_data, seed_data };