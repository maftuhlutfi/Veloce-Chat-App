import './ChatContainer.scss';

import ChatBox from './ChatBox'
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

function ChatContainer(props) {
    const bottomRef = useRef();
    const chatLog = useSelector(state => state.chatLog);
    const currentUser = useSelector(state => state.user);

    const scrollToBottom = () => {
        bottomRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        });
    };
    
    useEffect(() => {
        scrollToBottom();
    })

    return (
        <div className="chat-container">
            {
                chatLog.map(({sender: {username, color}, message, timestamp}, index) => <ChatBox 
                    sender={username === currentUser.username ? false : username} 
                    color={color} 
                    message={message}
                    time={timestamp.time} 
                    key={index}
                />)
            }
            <div ref={bottomRef} />
        </div>
    );
}
 
export default ChatContainer;