// import axios from 'axios';
const params = new URLSearchParams(window.location.search);
const name = params.get('name');
const userId = params.get('userId');

const socket = io('http://18.116.57.209', {
  query: {
    userId: userId,
    username: name
  },
});
socket.on('connect', () => {
  console.log('zz connect')
})
async function startApp() {
  await Restart();
}
startApp()
async function Restart() {
  const response = await fetch('http://18.116.57.209/user');
  const users = await response.json();
  console.log(users)
  displayUsers(users)

  const response1 = await fetch('http://18.116.57.209/rooms');
  const rooms = await response1.json();
  console.log(rooms)
  displayRooms(rooms)
}
function addRoom() {
  const room = document.getElementById("newroom").value; // Replace with your actual selector
  console.log(room)
  socket.emit('addroom',room);

  //send to post room
}
function displayUsers(users) {
  const selectEl = document.getElementById("users"); // Replace with your actual selector
  selectEl.innerHTML = "";
  users.forEach((user) => {
    const optionEl = document.createElement("option");
    optionEl.value = user.name; // Set value to room ID
    optionEl.textContent = user.name; // Set text to room name
    selectEl.appendChild(optionEl);
  });
}
function displayRooms(rooms) {
  const selectEl = document.getElementById("rooms"); // Replace with your actual selector
  selectEl.innerHTML = "";
  rooms.forEach((room) => {
    const optionEl = document.createElement("option");
    optionEl.value = room.id; // Set value to room ID
    optionEl.textContent = room.roomname; // Set text to room name
    selectEl.appendChild(optionEl);
  });
}
function displayUserRooms(rooms) {
  const selectEl = document.getElementById("group"); // Replace with your actual selector
  selectEl.innerHTML = "";
  rooms.forEach((room) => {
    const optionEl = document.createElement("option");
    optionEl.value = room.id; // Set value to room ID
    optionEl.textContent = room.roomname; // Set text to room name
    selectEl.appendChild(optionEl);
  });
}
// Example usage


// const user = await axios.get("http://18.116.57.209/user")
// console.log(user)

function SendMessage() {

  const group = document.getElementById('group').value;

  const inputValue = document.getElementById('textInput').value;
  // socket.query.username = document.getElementById('name').value
  socket.emit('message', inputValue, group);
}
function talk() {

  const friend = document.getElementById('friend').value;
  socket.emit('talk', friend);
}
function join() {
  const group = document.getElementById('rooms').value;
  const selectElement = document.getElementById('rooms');
  const selectedOption = selectElement.options[selectElement.selectedIndex];
  const selectedTextContent = selectedOption.textContent;

  console.log(selectedTextContent);

  socket.emit('join', group, selectedTextContent);

}

// Event handler for receiving messages from the server
socket.on('message', (message) => {
  const outputDiv = document.getElementById('output');
  outputDiv.innerHTML += `${message}<br>`;
});
socket.on('updateRooms', (rooms) => {
  displayUserRooms(rooms)
});
socket.on('added', (message) => {
  alert(message)
});
socket.on('inventation', (message, group) => {
  const outputDiv = document.getElementById('output');
  outputDiv.innerHTML += `${message}<br>`;
  outputDiv.appendChild(document.createElement('br'));
  const button = document.createElement('button');
  button.textContent = `join to ${group}`;
  outputDiv.appendChild(button);

  outputDiv.appendChild(document.createElement('br'));
  button.addEventListener('click', () => {
    socket.emit('joinFriend', group);
    const selectElement = document.getElementById('group');
    if (!selectElement.querySelector(`option[value="${room}"]`)) {
      const option = document.createElement('option');
      option.value = group;
      option.textContent = group;
      selectElement.appendChild(option);
    }
  });

});
