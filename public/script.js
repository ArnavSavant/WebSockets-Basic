console.log("Welcome to web sockets");

var socket = io();

let send = document.getElementById("btn");
let msg_list = document.getElementById("msg_list");
let input = document.getElementById("input");

send.addEventListener("click", () => {
	let msg = input.value;
	socket.emit("new-msg", {
		message: msg,
	});
   input.value = "";
});

socket.on("msg_rvcd", (data) => {
	let li = document.createElement("li");
   li.textContent = data.message;
   msg_list.appendChild(li);
});

// socket.on('from-server',()=>{
//    let div = document.getElementById('from-server');
//    let p =document.createElement('p');
//    p.textContent = "Received an event from the server";
//    div.appendChild(p);
// });
