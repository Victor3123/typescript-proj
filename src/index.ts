let socket = new WebSocket('wss://li1488-148.members.linode.com:8000');

socket.onmessage = (data) => alert(data);