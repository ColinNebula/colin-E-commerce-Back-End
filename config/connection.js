require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = new Sequelize('ecommerce_db', 'root', 'ultramax', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
})
// const sequelize = process.env.JAWSDB_URL
//   ? new Sequelize(process.env.JAWSDB_URL)
//   : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
//       host: 'localhost',
//       dialect: 'mysql',
//       dialectOptions: {
//         decimalNumbers: true,
//       },
//     });
sequelize.authenticate().then(() => {
  console.log('connected to database!');
}).catch(() => {
  console.log('could not connect!');
})

module.exports = sequelize;
