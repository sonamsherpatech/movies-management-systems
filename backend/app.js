const express = require("express")
const app = express()

const movieRoute = require("./routes/movieRoutes")
require("./database/config")

app.use(express.json())

app.use("/api/movies", movieRoute)

app.listen(3010, () => {
  console.log("System is listening at port 3010");
})