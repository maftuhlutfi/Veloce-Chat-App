import './SendContainer.scss'

import { useEffect, useState } from 'react';

import TextField from '../component/TextField'
import Button from '../component/Button'

import { MdSend } from 'react-icons/md';
import { io } from 'socket.io-client';

function SendContainer(props) {
    const [inputMsg, setInputMsg] = useState('');

	const handleChange = e => {
		const {value} = e.target;
		setInputMsg(value);
    }

    let socket = null;

    useEffect(() => {
        socket = io('http://localhost:4000');
    })

    const handleClick = e => {
        e.preventDefault();

        socket.emit('chat message', inputMsg);
        setInputMsg('');
    }
    
    return (
        <div className="send-container">
            <TextField onChange={handleChange} value={inputMsg} required />
            <Button
                style={{
                    backgroundColor: '#28ACEB',
                    height: '40px',
                    display: inputMsg ? 'block' : 'none',
                    color: 'white',
                    fontSize: '1.2em'
                }}
                icon={<MdSend />} 
                onClick={handleClick}
            />
        </div>
    );
}
 
export default SendContainer;