// import openDatabase hook 
import { openDatabase } from 'react-native-sqlite-storage'

// create constatn object that refers to database 
const shopperDB = openDatabase({name: 'Shopper.db'});

// create constant that contains the name of the tables 
const listsTableName = 'lists';
const itemsTableName = 'Items';
const listItemsTableName = 'list_items';
const userTableName = 'users'; 

module.exports = {
    // declare function the will create lists table 
    createListsTable: async function () {
        // declare transaction that will execute SQL
        (await shopperDB).transaction(txn => {
            // execute the SQL 
            txn.executeSql(
                `CREATE TABLE IF NOT EXISTS ${listsTableName}(
                    id  INTEGER PRIMARY KEY AUTOINCREMENT,
                    name TEXT,
                    store TEXT,
                    date TEXT,
                    priority TEXT
                );`,
                // arguements passed when using SQL prepared statements 
                [],
                // callback functions to handle results 
                () => {
                    console.log('Lists table created successfully');
                },
                error => {
                    console.log('Error creating lists table' + error.message);
                },
            );
        });
    },

    // declare function that will insert a row of data into the lists table 
    addList: async function (name, store, date, priority, Fname){
        // declare transaction that will execute the SQL 
        (await shopperDB).transaction(txn => {
            // execute SQL
            txn.executeSql(
                `INSERT INTO ${listsTableName} (name, store, date, priority) VALUES ("${name}","${store}","${date}","${priority}")`,
                // arguements passed when using SQL prepared statements 
                [],
                // callback functions to handle results 
                () => {
                    console.log(name + " added succesfully.");
                },
                error => {
                    console.log('Error adding lists ' + error.message);
                },
            );
        });
    },
    
    // declare function the will create lists table 
    createItemsTable: async function () {
        // declare transaction that will execute SQL
        (await shopperDB).transaction(txn => {
            // execute the SQL 
            txn.executeSql(
                `CREATE TABLE IF NOT EXISTS ${itemsTableName}(
                    id  INTEGER PRIMARY KEY AUTOINCREMENT,
                    name TEXT(100),
                    price REAL,
                    quantity INTEGER
                );`,
                // arguements passed when using SQL prepared statements 
                [],
                // callback functions to handle results 
                () => {
                    console.log('Items table created successfully');
                },
                error => {
                    console.log('Error creating lists table' + error.message);
                },
            );
        });
    },

    // declare function that will insert a row of data into the lists table 
    addItem: async function (name, price, quantity){
        // declare transaction that will execute the SQL 
        (await shopperDB).transaction(txn => {
            // execute SQL
            txn.executeSql(
                `INSERT INTO ${itemsTableName} (name, price, quantity) VALUES ("${name}","${price}","${quantity}")`,
                // arguements passed when using SQL prepared statements 
                [],
                // callback functions to handle results 
                () => {
                    console.log(name + " added succesfully.");
                },
                error => {
                    console.log('Error adding lists ' + error.message);
                },
            );
        });
    },

    // declare function the will create list_items table 
    createListItemsTable: async function () {
        // declare transaction that will execute SQL
        (await shopperDB).transaction(txn => {
            // execute the SQL 
            txn.executeSql(
                `CREATE TABLE IF NOT EXISTS ${listItemsTableName}(
                    id  INTEGER PRIMARY KEY AUTOINCREMENT,
                    list_id INTEGER,
                    item_id INTEGER
                );`,
                // arguements passed when using SQL prepared statements 
                [],
                // callback functions to handle results 
                () => {
                    console.log('List items table created successfully');
                },
                error => {
                    console.log('Error creating list items table' + error.message);
                },
            );
        });
    },

    // declare function that will insert a row of data into the lists table 
    addListItem: async function (list_id, item_id){
        // declare transaction that will execute the SQL 
        (await shopperDB).transaction(txn => {
            // execute SQL
            txn.executeSql(
                `INSERT INTO ${listItemsTableName} (list_id, item_id) VALUES ("${list_id}","${item_id}")`,
                // arguements passed when using SQL prepared statements 
                [],
                // callback functions to handle results 
                () => {
                    console.log("List item added succesfully.");
                },
                error => {
                    console.log('Error adding list item' + error.message);
                },
            );
        });
    },

    // declare function the will create user table 
    createUsersTable: async function () {
        // declare transaction that will execute SQL
        (await shopperDB).transaction(txn => {
            // execute the SQL 
            txn.executeSql(
                `CREATE TABLE IF NOT EXISTS ${userTableName}(
                    id  INTEGER PRIMARY KEY AUTOINCREMENT,
                    username TEXT,
                    password TEXT
                );`,
                // arguements passed when using SQL prepared statements 
                [],
                // callback functions to handle results 
                () => {
                    console.log('Users table created successfully');
                },
                error => {
                    console.log('Error creating users table' + error.message);
                },
            );
        });
    },

    // declare function that will insert a row of data into the user table 
    addUser: async function (username,password){
        // declare transaction that will execute the SQL 
        (await shopperDB).transaction(txn => {
            // execute SQL
            txn.executeSql(
                `INSERT INTO ${userTableName} (username, password) VALUES ("${username}","${password}")`,
                // arguements passed when using SQL prepared statements 
                [],
                // callback functions to handle results 
                () => {
                    console.log(username + " " + password + " added succesfully.");
                },
                error => {
                    console.log('Error adding user ' + error.message);
                },
            );
        });
    },
};