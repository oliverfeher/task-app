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

    // db.collection("users").insertOne({
    //     name: "Oliver",
    //     age: 27
    // }, (error, result) => {
    //     if (error)
    //     {
    //         return console.log("Unable to insert user!");
    //     }

    //     console.log(result.ops)
    // })

    // db.collection("user").insertMany([
    //     {
    //         name: "Jen",
    //         age: 28
    //     },
    //     {
    //         name: "Gunther",
    //         age: 40
    //     }
    // ], (error, result) => {
    //     if (error)
    //     {
    //         return console.log("Unable to insert documents");
    //     }

    //     console.log(result.ops)
    // })

    db.collection("tasks").insertMany([
        {
            description: "cook dinner",
            completed: true
        },
        {
            description: "feed the dog",
            completed: false
        },
        {
            description: "work out",
            completed: false
        }
    ], (error, result) => {
        if (error)
        {
            return console.log("Unable to instert tasks!");
        }

        console.log(result.ops);
    })
})

