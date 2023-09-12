const express = require('express');
const mongoose = require('mongoose')
const http = require('http');
const { Server } = require("socket.io");

const Markers = require("./src/models/MarkerSchema");
const Users = require("./src/models/UserSchema");

const app = express();
const server = http.createServer(app);
const io = new Server(server,{
  cors:{
    origin:"*"
  }
});

const port = process.env.PORT || 3001

const router = require("./src/serverIndex")
const cors = require('cors');
const { error } = require('console');

app.use(cors());
app.use(router)

const connectDB = async () => {
  try {
mongoose.connect(process.env.MONGODB_CONNECT_URI).then(() => {
  console.log("Connect to MongoDB successfully")
  server.listen(port, () => {
    console.log(`listening on port ${port}`)
  })
}).catch(()=>{console.log(error);})
} catch (error) {
  console.log("Connect failed " + error.message )
}
}

connectDB()

io.on('connection', socket => {
});

const DEBOUNCE_DELAY = 10000;
let timeoutId;

function debounceEmit(data) {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    io.emit('update', data?.fullDocument) // replace with your emit function
    console.log("aqui");  
  }, DEBOUNCE_DELAY);
}

Markers.watch().on('change', data => {
  debounceEmit(data?.fullDocument);
});

Users.watch().on('change', data => {
  debounceEmit(data?.fullDocument);
});




 module.exports = app;



