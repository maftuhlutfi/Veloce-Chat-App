import './ChatContainer.scss';

import ChatBox from './ChatBox'
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

function ChatContainer(props) {
    const bottomRef = useRef();
    const chatLog = useSelector(state => state.chatLog);
    const currentUser = useSelector(state => state.currentUser);

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
                chatLog.map(({sender, message, timestamp}, index) => <ChatBox 
                    sender={sender === currentUser.username ? false : sender} 
                    color='dodgerblue' 
                    message={message}
                    time={timestamp} 
                    key={index}
                />)
            }
            <div ref={bottomRef} />
        </div>
    );
}
 
export default ChatContainer;