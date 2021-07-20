const express = require("express")
const app = express()
const mongoClient = require("mongodb").MongoClient


const option = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

const url = "mongodb://localhost:27017/mydb"


app.post("/api/post-tweet", async (req, res) => {
    const text = req.body.text
    const client = await mongoClient.connect(url, option)
    const database = client.db("nns")
    const collection = database.collection("tweet")
    await collection.insertOne({text: text, created_at: new Date()})
    res.json({error: false})
})

app.get("/api/show-tweet", async (req, res) => {
    const client = await mongoClient.connect(url, option)
    const database = client.db("nns")
    const collection = database.collection("tweet")
    const result = await collection.find().limit(100)
    res.json({result: result})
})

app.post("/api/md-to-html",(req, res) => {
    const text = req.body.text

})

console.log("run")
app.listen(3000)