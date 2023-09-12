require('dotenv').config();
const { Sequelize} = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const pg = require('pg')
const marker = require('./src/models/Markers');



const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?sslmode=disable`,
{
   logging: false, 
   native: false, 
   dialectModule: pg,
   dialectOptions: {
     ssl: {
       require: true,
       rejectUnauthorized: false 
     }
   }
 }
);
marker(sequelize);


module.exports = {
   ...sequelize.models,
   sequelize,
};