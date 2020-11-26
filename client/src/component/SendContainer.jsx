import './SendContainer.scss'

import { useState } from 'react';

import TextField from '../component/TextField'
import Button from '../component/Button'

import { MdSend } from 'react-icons/md';

function SendContainer(props) {
    const [inputMsg, setInputMsg] = useState('');

	const handleChange = e => {
		const {value} = e.target;
		setInputMsg(value);
    }
    
    return (
        <div className="send-container">
            <TextField handleChange={handleChange} value={inputMsg} required />
            <Button
                style={{
                    backgroundColor: '#28ACEB',
                    height: '40px',
                    display: inputMsg ? 'block' : 'none',
                    color: 'white',
                    fontSize: '1.2em'
                }}
                icon={<MdSend />} />
        </div>
    );
}
 
export default SendContainer;