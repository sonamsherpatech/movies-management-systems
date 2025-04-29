const { Sequelize, DataTypes } = require("sequelize")

const sequelize = new Sequelize(process.env.DATABASE_URL)


sequelize.authenticate()
  .then(() => {
    console.log("Successfully database connection!!")
  })
  .catch((err) => {
    console.log("Error: ", err);
  })