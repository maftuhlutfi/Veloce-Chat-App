import './SendContainer.scss'

import { useEffect, useState } from 'react';

import TextField from '../component/TextField'
import Button from '../component/Button'

import { MdSend } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { emitTypingStart, emitTypingStop, sendMessage } from '../redux/actions';

function SendContainer(props) {
    const dispatch = useDispatch();
    const sender = useSelector(state => state.user)
    const roomCode = useSelector(state => state.room.roomCode)

    const [inputMsg, setInputMsg] = useState('');

	const handleChange = e => {
		const {value} = e.target;
		setInputMsg(value);
    }

    const handleSend = e => {
        e.preventDefault();
        if (!inputMsg) {
            return;
        }
        const date = new Date();
        const [day, month, year, hours, minutes] = [date.getDay(), date.getMonth(), date.getFullYear(), date.getHours(), date.getMinutes()];
        dispatch(sendMessage({
            sender, 
            message: inputMsg, 
            timestamp: {date:`${day}/${month}/${year}`, time: `${hours/10 < 1 ? '0' + hours : hours}:${minutes/10 < 1 ? '0' + minutes : minutes}`},
            roomCode
        }));
        dispatch(emitTypingStop(roomCode, sender));
        setInputMsg('');
    }

    useEffect(() => {
        var timeStop;
        document.querySelector('input.input').addEventListener('keyup', e => {
            if (e.key === 'Enter') {
                return;
            }
            window.clearTimeout(timeStop);
            console.log('type');
            dispatch(emitTypingStart(roomCode, {...sender, status: 'Is typing...'}))
            timeStop = setTimeout(() => {
                dispatch(emitTypingStop(roomCode, sender))
            }, 4000)
        })

        //return () => document.querySelector('input.input').removeEventListener('keyup', () => {console.log('remove typing listener.')})
    }, [dispatch, roomCode, sender])
    
    return (
        <form className="send-container">
            <TextField onKeyDown={e => e.key === 'Enter' ? handleSend : ''} id='type' onChange={handleChange} value={inputMsg} required />
            <Button
                style={{
                    backgroundColor: '#28ACEB',
                    height: '40px',
                    display: inputMsg ? 'block' : 'none',
                    color: 'white',
                    fontSize: '1.2em'
                }}
                icon={<MdSend />} 
                onClick={handleSend}
            />
        </form>
    );
}
 
export default SendContainer;