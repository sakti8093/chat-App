const socket=io('http://localhost:8000')

const form=document.getElementById('form');
const messageInput=document.getElementById('messageinp');
const messageContainer=document.querySelector('.container')

const append=(message,position)=>{
    const messageElement=document.createElement('div');
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageElement.innerHTML=message;
    messageContainer.append(messageElement);

}

const name=prompt("Enter your name");
socket.emit('new-user-joined',name)

socket.on('user-joined',name=>{
    append(`${name} joined the chat`,'right') 
})

socket.on('recieve',{
    append(` received
})
