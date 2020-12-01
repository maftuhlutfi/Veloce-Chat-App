const generateRoom = () => {
    const char = 'QWERTYUIOPASDFGHJKLZXCVBNM1234567890';
    let roomCode = '';
    for (let i = 0; i < 5; i++) {
        roomCode += char.charAt(Math.floor(Math.random() * char.length))
    }
    return roomCode;
}

module.exports = generateRoom;