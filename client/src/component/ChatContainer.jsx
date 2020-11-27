import './ChatContainer.scss';

import ChatBox from './ChatBox'
import { useEffect, useRef } from 'react';

function ChatContainer(props) {
    const bottomRef = useRef();

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
            <ChatBox sender='nyoms1' color='dodgerblue' message='Anim cupidatat do ad exercitation consequat.' time='15:24' />
            <ChatBox sender='nyoms2' color='forestgreen' message='Anim cupidatat do ad exercitation consequat.' time='15:24' />
            <ChatBox sender='nyoms3' color='deeppink' message='Dolor sunt velit in pariatur elit ullamco in laboris id pariatur exercitation deserunt amet. Magna aliquip quis non ad sit eiusmod ut commodo commodo ullamco amet enim cillum dolor. Excepteur aliquip consequat nisi exercitation est veniam fugiat quis minim occaecat consectetur eiusmod sunt ex. Aliquip ea labore elit velit veniam tempor qui dolor irure irure voluptate.' time='15:24' />
            <ChatBox sender='nyoms1' color='dodgerblue' message='Anim cupidatat do ad exercitation consequat.' time='15:24' />
            <div ref={bottomRef} />
        </div>
    );
}
 
export default ChatContainer;