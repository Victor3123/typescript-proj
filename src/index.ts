let socket = new WebSocket('ws://li1488-148.members.linode.com:8000');

socket.onopen = () => console.log('socket.onopen');
socket.onclose = () => console.log('socket.onclose');
socket.onmessage = response => console.log(response.data);