import './ChatBox.scss'

const ChatBox = ({sender, message, color, time}) => {
    const fromMe = {
        alignSelf: 'flex-end',
        backgroundColor: '#d5dded',
        boxShadow: 'none',
        marginTop: '20px',
        marginBottom: '10px',
        marginInline: '15% 0'
    }
    return ( 
        <div className="chat-box" style={sender ? {} : fromMe}>
            {sender && <span className="sender" style={{color}}>{sender}</span>}
            <span className="message">{message}</span>
            <span className="timestamp">{time}</span>
        </div>
    );
}
 
export default ChatBox;