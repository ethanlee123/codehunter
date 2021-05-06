// Our application entry point
const { MongoClient } = require('mongodb')
const express = require("express");
const uri = "mongodb+srv://teamfourcodehunter:cityofvancouver@codecluster.ktv41.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })

const app = express()
const port = 8000

// The database to use
const dbName = "codehunterdb"
const dbCol = "codes"

app.get("/getMapData", (req, res) => {
  async function run() {
    try {
      await client.connect()
      console.log("Connected correctly to server")
      const db = client.db(dbName)
      const col = db.collection(dbCol)
      
      const response = await col.find().toArray()

      console.log("return ", response)
      
      // Send it back
      res.send(response)
    } catch (err) {
      console.log(err.stack)
    } finally {
      await client.close()
    }
  }
})

//app.use("axios", express.static("../client/src/pages/sample-feature"));

// Call when retrieving data.
/*app.get("/example", (req, res) => {
  async function run() {
    try {
      await client.connect();
      console.log("Connected correctly to server");
      const db = client.db(dbName);

      // Use the collection "people"
      const col = db.collection("people");
  
      // Construct a document                                                                                                                                                              
      let personDocument = {
        "name": {
          "first": "Alan",
          "last": "Turing"
        },
        "birth": new Date(1912, 5, 23), // June 23, 1912                                                                                                                                 
        "death": new Date(1954, 5, 7), // June 7, 1954                                                                                                                                  
        "contribs": ["Turing machine", "Turing test", "Turingery"],
        "views": 1250000
      }
  
      // Insert a single document, wait for promise so we can read it back
      //const p = await col.insertOne(personDocument);
      // Find one document
      const myDoc = await col.findOne();
      // Send it back
      res.send(myDoc);
      
    } catch (err) {
      console.log(err.stack);
    } finally {
      await client.close();
    }
  }
  
  run().catch(console.dir);
});

app.get("/sampleGet", (req, res) => {
  async function run() {
    try {
      console.log("In server-side sampleGet");
      await client.connect();
      const db = client.db(dbName);
  
      // Use the collection "people"
      const col = db.collection("people");

      // Find one document
      const myDoc = await col.findOne();
      // Send it back
      res.send(myDoc);
      
    } catch (err) {
      console.log(err.stack);
    } finally {
      await client.close();
    }
  }
});

app.post("/samplePost", (req, res) => {
  console.log("In server-side samplePost. Req: ", req.data);
  //let request = req.query["format"];

  

  /*async function run() {
    try {
      await client.connect();
      const db = client.db(dbName);

      const profiles = db.collection("profiles");
      // create a document to be inserted
      const doc = req;
      const result = await profiles.insertOne(doc);
      res.send(result);

    } finally {
      await client.close();
    }
  }
  run().catch(console.dir);
});*/

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
