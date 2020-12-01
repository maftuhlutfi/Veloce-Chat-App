const app = require('express')();
const bodyParser = require('body-parser');
const cors = require("cors");
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origin: "*",
        credentials: true
    }
});
const generateRoom = require('./generateRoom');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
	cors({
		origin: "http://localhost:3000", // <-- location of the react app were connecting to
		credentials: true,
	})
);

let room = {};
let chatLog = {};

app.post('/create', (req, res) => {
    const {user, roomTitle} = req.body;

    const roomCode = generateRoom();
    room[roomCode] = {roomCode, roomTitle, users: [user]};
    chatLog[roomCode] = [];

    const response = {
        room: room[roomCode],
        chatLog: chatLog[roomCode],
        user
    }

    res.status(200).send(response);
})

app.post('/join', (req, res) => {
    const {roomCode, user} = req.body;
    console.log(req.body);
    console.log(room[roomCode]);

    if(room[roomCode]) {
        room[roomCode].users.push(user);

        const response = {
            room: room[roomCode],
            chatLog: chatLog[roomCode],
            user
        }

        res.status(200).send(response);
    } else {
        res.status(404).send("The room doesn't exist.")
    }
})

app.get('getchat/:roomCode', (req, res) => {
    const {roomCode} = req.params;

    if(chatLog[roomCode]) {
        res.status(200).send(chatLog[roomCode])
    } else {
        res.status(404).send("The room doesn't have any chat log.")
    }
})

app.get('getusers/:roomCode', (req, res) => {
    const {roomCode} = req.params;

    if(room[roomCode]) {
        res.status(200).send(room[roomCode].users)
    } else {
        res.status(404).send("The room doesn't exist.")
    }
})

let usersConnected = 0;
io.on('connection', (socket) => {
    usersConnected++;
    console.log(usersConnected + ' users connected');

    socket.on('disconnect', () => {
        socket.broadcast.emit('update users');
        usersConnected--;
        console.log(usersConnected + ' users connected.');
    })

    socket.on('send message', msg => {
        const {roomCode} = msg;
        if(chatLog[roomCode]) {
            chatLog[roomCode].push(msg)
        }

        socket.broadcast.emit('get messages');
    })

    socket.on('join room', roomCode => {
        socket.broadcast.emit('get users');
    })

    socket.on('leave room', roomCode => {
        socket.broadcast.emit('update users');
    })
});

server.listen(4000, () => {
    console.log('Server started on port 4000')
});