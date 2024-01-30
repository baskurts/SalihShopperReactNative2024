// import openDatabase hook
import { openDatabase } from "react-native-sqlite-storage";

// create constant object that refers to database
const shopperDB = openDatabase({name: 'Shopper.db'});

// create constant that contains the name of the lists table
const listsTableName = 'lists';

module.exports = {
    // declare function that will create lists table
    createListsTable: async function () {
        // declare transaction that will execute SQL
        (await shopperDB).transaction(txn => {
            // execute the SQL
            txn.executeSql(
                `CREATE TABLE IF NOT EXISTS ${listsTableName}(
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name TEXT,
                    store TEXT,
                    date TEXT
                );`,
                // arguments passsed when using SQL prepared statements
                [],
                // callback functions to handle results 
                () => {
                    console.log('Lists table created successfully.');
                },
                error => {
                    console.log('Error creating lists table ' + error.message);
                },
            );
        });
    },

    // declare function that will insert a row of data into the lists table
    assList: async function (name, store, date) {
        // declare transaction that will execute the SQL
        (await shopperDB).transaction(txn => {
            // execute SQL
            txn.executeSql(
                `INSERT INTO ${listsTableName} (name, store, date) VALUES ("${name}", "${store}", "${date}")`,
                // arguments passsed when using SQL prepared statements
                [],
                // callback functions to handle results 
                () => {
                    console.log(name + "added successfully.");
                },
                error => {
                    console.log('Error adding list ' + error.message);
                },
            );
        });
    },
};