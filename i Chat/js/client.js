const socket = io('http://localhost:8000');
const form = document.getElementById('form-action');
const messageInput = document.getElementById('type-message');
const messageContainer = document.querySelector('.container');
var audio = new Audio('Mtune.mp3');

const append = (message, position) =>{
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageContainer.append(messageElement);
    if (position == 'left'){
        audio.play();
    };

};

const name = prompt('ENTER YOUR NAME : ');
socket.emit('new-user-joined', name);

socket.on('user-joined', name =>{
    append(`${name} joined the chat`, 'right')

})

socket.on('recieve' , data =>{
    append(`${data.name}: ${data.message}`, 'left');

});

socket.on('left', name =>{
    append(`${name} left the chat`, 'right')
});

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const message = messageInput.value;
    append(`You: ${message}`, 'right');
    socket.emit('send', message);
    messageInput.value = ''

});