const express = require('express');

const app = express();
//const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;
//const path = require('path');
//const cors = require('cors');

const mysql = require('mysql2/promise');

const mysqlPool = mysql.createPool({
    host: 'localhost',
    user: 'testDani',
    password: 'ABCabc12',
    database: 'phone_shop',
    waitForConnections: true,
});

/*mysqlPool.query('SELECT * FROM phone')
    .then(([rows, fields]) => {
        console.log('Data from phones table:', rows);
    })
    .catch(err => {
        console.error('Error querying the database:', err);
    });*/

app.use( express.json() );

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get('/getPhoneList', (req, res) => {

    mysqlPool.query('SELECT * FROM phone')
    .then(([rows, fields]) => {
        res.send(rows);
    })
    .catch(err => {
        console.error('Error querying the database:', err);
    });

    
});