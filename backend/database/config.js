const { Sequelize, DataTypes } = require("sequelize")

const sequelize = new Sequelize(process.env.DATABASE_URL)


sequelize.authenticate()
  .then(() => {
    console.log("Successfully database connection!!")
  })
  .catch((err) => {
    console.log("Error: ", err);
  })

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.movies = require("./models/movie.model")(sequelize, DataTypes)
db.users = require("./models/user.model")(sequelize, DataTypes)

sequelize.sync({ alter: false })
  .then(() => {
    console.log("Migration sucessfull")
  })
  .catch((err) => {
    console.log("Migration failed: ", err)
  })

module.exports = db