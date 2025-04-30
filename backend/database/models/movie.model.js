
//code for creation of movie table that contains -> title, director, rating, description, release_year

const movieModel = (sequelize, DataTypes) => {
  return sequelize.define("movie", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    director: {
      type: DataTypes.STRING,
      defaultValue: "Sonam Sherpa",
    },
    rating: {
      type: DataTypes.FLOAT,
    },
    description: {
      type: DataTypes.STRING,
    },
    release_year: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  })
}

module.exports = movieModel