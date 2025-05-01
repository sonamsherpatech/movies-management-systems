const express = require("express")
const app = express()
const { movies, sequelize } = require("./database/config")

app.use(express.json())

app.get("/movies", async (req, res) => {
  //fetch book logic
  const moviesList = await movies.findAll()
  res.json({
    message: "Sucesscfully fetched movie",
    moviesList
  })
})

app.post("/movies", async (req, res) => {
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
})

app.patch("/movies/:id", (req, res) => {
  res.json({
    message: "Successfully updated movie"
  })
})

app.delete("/movies/:id", (req, res) => {
  res.json({
    message: "Successfully deleted movie"
  })
})

app.listen(3010, () => {
  console.log("System is listening at port 3010");
})