import express from "express"

const app = express()

app.get("/health", (req, res) => {
    res.send("Hello")
})

app.listen((process.env.PORT), () => {
    console.log('Server is listening at ' + process.env.PORT)
})