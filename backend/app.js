const express = require("express")
const app = express()
const db = require("./database/config")

app.get("/movies", (req, res) => {
  res.json({
    message: "Sucesscfully fetched movie"
  })
})

app.post("/movies", (req, res) => {
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