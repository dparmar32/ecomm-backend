const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(routes);

// sync sequelize models to the database, then turn on the server
/* "Sync the models to the database, then start the server."

The sequelize.sync() method is used to sync the models to the database. The sync() method takes an
object as an argument. The object has a force option that can be set to true to drop the database
and re-create it.

The sync() method returns a promise. The promise is resolved when the database is synced.

The app.listen() method is used to start the server. The app.listen() method takes two arguments:
the port number and a callback function */
sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}!`);
    });
});
