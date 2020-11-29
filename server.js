const app = require('express')();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require("cors");
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origin: "*",
        credentials: true
    }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(
// 	cors({
// 		origin: "*", // <-- location of the react app were connecting to
// 		credentials: true,
// 	})
// );

let usersConnected = 0;
io.on('connection', (socket) => {
    usersConnected++;
    console.log(usersConnected + ' users connected');

    socket.on('disconnect', () => {
        usersConnected--;
        console.log(usersConnected + ' users connected.');
    })
});

app.get('/', (req, res) => {
    res.send('Hi');
})

server.listen(4000, () => {
    console.log('Server started on port 4000')
});