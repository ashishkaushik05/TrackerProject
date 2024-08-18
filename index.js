const express = require("express");
const app = express();
const socketio = require("socket.io");
const http = require("http");
const path = require("path");
const server = http.createServer(app);
const io = socketio(server);

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
  
io.on("connection" , (socket)=>{
    socket.on("send-location"  , data =>{
         io.emit("recieve-location" , {id : socket.id , ...data});
    })
    console.log("a new client connected");

    socket.on("disconnect" , ()=>{
         io.emit("user-disconnected" , socket.id) 
    })
})

app.get("/", (req, res) => {
  console.log(`req to : / ${new Date()}`);
  res.render("index");
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
