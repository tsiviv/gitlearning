// client.js
const params = new URLSearchParams(window.location.search);
const userId = params.get('userId');
const name = document.getElementById('name').value

const socket = io('http://localhost:3001', {
  query: {
    userId: userId,
    username: name
  },
});

// function displayInput() {

 
//   const inputValue = document.getElementById('textInput').value;
//   // socket.query.username = document.getElementById('name').value
//   socket.emit('message', inputValue);
// }
function join() {
  const group = document.getElementById('cars').value;
  console.log(group)
  socket.emit('join', group);

}

// Event handler for receiving messages from the server
socket.on('message', (message) => {
  console.log("opihygf")
  const outputDiv = document.getElementById('output');
  outputDiv.innerHTML += `${message}<br>`;
});
