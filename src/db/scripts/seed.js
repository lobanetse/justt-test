// eslint-disable-next-line @typescript-eslint/no-var-requires
const MongoClient = require('mongodb');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { customers } = require('./customers-data');

const DB_NAME = 'just_test';
const CUSTOMER_COLLECTION_NAME = 'customers';
const TRANSACTION_COLLECTION_NAME = 'transaction';

// TODO: Move to other file, utils for example
const prepareTransactionEntities = (customers, count = 10) => {
  const transactions = [];

  for (let i = 0; i < count; i++) {
    const fromCustomerIndex = Math.floor(Math.random() * customers.length);
    const toCustomerIndex = fromCustomerIndex
      ? customers.length - fromCustomerIndex
      : customers.length - 1;

    const fromCustomer = customers[fromCustomerIndex];
    const toCustomer = customers[toCustomerIndex];
    const transactionValue = Math.floor(Math.random() * 1000);
    const now = new Date();

    transactions.push(
      {
        customer_id: fromCustomer.customer_id,
        currency: fromCustomer.currency,
        value: transactionValue,
        date: now,
      },
      {
        customer_id: toCustomer.customer_id,
        currency: fromCustomer.currency,
        value: transactionValue,
        date: now,
      },
    );
  }

  return transactions;
};

const seed = async () => {
  // TODO: Get from config
  const mongoClient = await MongoClient('mongodb://localhost:27017/');

  try {
    await mongoClient.connect();

    const db = mongoClient.db(DB_NAME);

    // #region seeding customer
    console.log('seeding customer started');

    const customerCollection = db.collection(CUSTOMER_COLLECTION_NAME);

    await customerCollection.deleteMany();
    await customerCollection.insertMany(customers);

    console.log('seeding customer done');
    // #endregion

    // #region seeding Transaction
    console.log('seeding Transaction started');
    const transactionCollection = db.collection(TRANSACTION_COLLECTION_NAME);
    await transactionCollection.deleteMany();
    await transactionCollection.insertMany(
      prepareTransactionEntities(customers),
    );
    console.log('seeding Transaction done');

    // #endregion
  } finally {
    await mongoClient.close();
    process.exit();
  }
};

seed();
