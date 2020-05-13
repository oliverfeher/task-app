// REQUIRE MONGODB LIBRARY
const mongodb = require("mongodb");

// CREATE CONNECTION
const MongoClient = mongodb.MongoClient

// DECLARE DATABASE SERVER PATH
const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-app"


// CONNECT SERVER
MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error, client) => {
    if (error) 
    {
        return console.log("Unable to connect to database!");
    }

    const db = client.db(databaseName);

    db.collection("users").insertOne({
        name: "Oliver",
        age: 27
    })
})

