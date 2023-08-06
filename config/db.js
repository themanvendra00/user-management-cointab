const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("cointab", "admin", process.env.DB_PASSWORD, {
  host: process.env.DB_URL,
  dialect: "mysql",
});

module.exports = { sequelize };
