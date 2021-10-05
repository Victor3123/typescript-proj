let socket = new WebSocket('ws://li1488-148.members.linode.com:8000');

socket.onopen = () => console.log('socket.onopen');
socket.onclose = () => console.log('socket.onclose');
socket.onmessage = response => console.log(response.data);

let confirmBtn = document.getElementById('confirm');
let sendBtn = document.getElementById('send');
confirmBtn.onclick = checkPass;
sendBtn.onclick = sendMessage;

function checkPass() {
    console.log('debug')
    let password = document.getElementById('password') as HTMLInputElement;

    if (password.value == 'Vitya2008') {
        console.log('debug 2',  document.getElementById('login-dialog'));
        document.getElementById('login-dialog').style.display = 'none';
        document.getElementById('dialog').style.display = 'flex';
    }
}

function sendMessage () {
    const messageInput = document.getElementById('message') as HTMLInputElement;
    console.log(messageInput.value);
    socket.send(messageInput.value);
    messageInput.value = '';
}