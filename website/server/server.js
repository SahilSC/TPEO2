// Importing required modules

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");


// Creating an instance of Express
const app = express();

// Loading environment variables from a .env file into process.env
require("dotenv").config();

// Importing the Firestore database instance from firebase.js
const db = require("./firebase.js");
const { reset } = require("nodemon");

// Middlewares to handle cross-origin requests and to parse the body of incoming requests to JSON
app.use(cors());
app.use(bodyParser.json());

// Your API routes will go here...

// GET: Endpoint to retrieve all tasks
app.get("/tasks", async (req, res) => {
  // res.send("Hello")
  try {
    // Fetching all documents from the "tasks" collection in Firestore
    const snapshot = await db.collection("tasks").get();

    let tasks = [];
    // Looping through each document and collecting data
    snapshot.forEach((doc) => {
      tasks.push({
        id: doc.id, // Document ID from Firestore
        ...doc.data(), // Document data
      });
    });
    // Sending a successful response with the tasks data
    res.status(200).send(tasks);
  } catch (error) {
    // Sending an error response in case of an exception
    res.status(500).send(error.message);
  }
});

// GET: Endpoint to retrieve all tasks for a user
// ...
app.get("/tasks/:user", async (req, res) => {
  const docs = db.collection("tasks").get();
  let tasks = []

  await docs
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        var tempData = doc.data();
        if (tempData.user == req.params.user) {
            tasks.push({id: doc.id, ...tempData})
        }
        console.log(tasks)
      });
    });
  // console.log(req.params.user)
  // console.log("OUTTAHERE")
  // console.log(tasks);
  res.send(tasks)
  // res.send("dosdadne")
});
// POST: Endpoint to add a new task
// ...
app.post("/tasks", async (req, res) => {
  // res.send(req.body);
  var task = {
    task: req.body.task,
    user: req.body.user,
    finished: false,
  };
  db.collection("tasks").add(task);
  res.send("Success!");
});

// DELETE: Endpoint to remove a task
// ...

app.delete('/tasks/:id', async (req, res) => {
  // taskCollection = db.collection("tasks")
  // taskCollection.where('id' == "3yJrExuIEamrQROVL27P")
  const docs = db.collection("tasks").doc(req.params.id)
  const snapshot = await docs.get();
  if (!snapshot.exists) {
      res.send("ID does not exist");
  }
  else {
    await docs.delete();
    res.send("Deleted!")
  }
  // console.log(docs.data())

})

// Setting the port for the server to listen on
// const PORT = process.env.PORT || 3001;
// // Starting the server
// app.listen(PORT, () => {
//   console.log(`Server started on port ${PORT}`);
// });
