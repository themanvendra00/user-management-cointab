const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("cointab", "root", "M@nvendra7067", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = { sequelize };
