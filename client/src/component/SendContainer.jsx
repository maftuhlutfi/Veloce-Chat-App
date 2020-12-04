import './SendContainer.scss'

import { useState } from 'react';

import TextField from '../component/TextField'
import Button from '../component/Button'

import { MdSend } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage } from '../redux/actions';

function SendContainer(props) {
    const dispatch = useDispatch();
    const sender = useSelector(state => state.user)
    const roomCode = useSelector(state => state.room.roomCode)

    const [inputMsg, setInputMsg] = useState('');

	const handleChange = e => {
		const {value} = e.target;
		setInputMsg(value);
    }

    const handleClick = e => {
        e.preventDefault();
        const date = new Date();
        const [day, month, year, hours, minutes] = [date.getDay(), date.getMonth(), date.getFullYear(), date.getHours(), date.getMinutes()];
        dispatch(sendMessage({
            sender, 
            message: inputMsg, 
            timestamp: {date:`${day}/${month}/${year}`, time: `${hours/10 < 1 ? '0' + hours : hours}:${minutes/10 < 1 ? '0' + minutes : minutes}`},
            roomCode
        }));
        setInputMsg('');
    }
    
    return (
        <form className="send-container">
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
        </form>
    );
}
 
export default SendContainer;