import SQLite from 'react-native-sqlite-storage';

export default class LocalDB {
    static async connect() {
        return SQLite.openDatabase({name: 'inventory'});
    }
    static async init() {
    const db = await LocalDB.connect();
    db.transaction(tx => {
        tx.executeSql(
            `CREATE TABLE IF NOT EXISTS products (
            id              INTEGER         PRIMARY KEY         AUTOINCREMENT,
            nombre          VARCHAR(64)     NOT NULL,        
            precio          DECIMAL(10,2)   NOT NULL        DEFAULT '0.0', 
            minStock        INTEGER         NOT NULL        DEFAULT 0,
            currentStock    INTEGER         NOT NULL        DEFAULT 0,
            maxStock        INTEGER         NOT NULL        DEFAULT 0
        );`,
            [],
            () => console.log('CREATED TABLE products'),
            error => console.error({error}),
        );
    });
    db.transaction(tx =>{
        tx.executeSql(
            `CREATE TABLE IF NOT EXISTS materials(
            id              INTEGER         PRIMARY KEY         AUTOINCREMENT,
            nombre          VARCHAR(64)     NOT NULL,
            precio          DECIMAL(10,2)   NOT NULL        DEFAULT '0.0',
            minStock        INTEGER         NOT NULL        DEFAULT 0,
            currentStock    INTEGER         NOT NULL        DEFAULT 0,
            maxStock        INTEGER         NOT NULL        DEFAULT 0
        );`,
            [],
            () => console.log('CREATED TABLE materials'),
            error => console.error({error}),
        );
    })
    }
}
