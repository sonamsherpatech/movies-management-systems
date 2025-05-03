const { where } = require("sequelize")
const { movies } = require("../database/config")

exports.fetchMovies = async (req, res) => {
  //fetch book logic
  const moviesList = await movies.findAll()
  res.json({
    message: "Sucesscfully fetched movie",
    moviesList
  })
}

exports.postMovie = async (req, res) => {
  console.log(req.body)

  const { title, director, description, rating, release_year } = req.body

  if (title && director && description && rating && release_year) {
    await movies.create({
      title,
      director,
      description,
      rating,
      release_year
    })
  } else {
    res.json({
      message: "Provide missing field"
    })
  }

  res.json({
    message: "Sucessfully posted movie"
  })
}

exports.deleteMovie = (req, res) => {
  res.json({
    message: "Successfully deleted movie"
  })
}

exports.updateMovie = (req, res) => {
  res.json({
    message: "Successfully updated movie"
  })
}

exports.singleFetchMovie = async (req, res) => {
  const id = req.params.id
  const datas = await movies.findByPk(id)

  // movies.findAll({
  //   where: {
  //     id: id
  //   }
  // })

  res.json({
    message: "Single movie fetched sucessfully",
    datas
  })
}