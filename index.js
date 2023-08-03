const express = require("express");
const app = express();

const http = require("http");
const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server);

app.use("/", express.static(__dirname + "/public"));

io.on("connection", (socket) => {
	console.log("A user connected", socket.id);
	socket.on("disconnect", () => {
		console.log("user disconnected", socket.id);
	});

	socket.on("from-client", () => {
		console.log("Received an event from the client");
	});

	socket.on("new-msg", (data) => {
      // io.emit("msg_rcvd",data);
      io.emit("msg_rvcd",data);
   });

	// setInterval(() => {
	// 	socket.emit("from-server");
	// }, 3000);
});

server.listen(3000, () => {
	console.log("listening on PORT  :3000");
});
