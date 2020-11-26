import { useState } from 'react';
import './CreateRoom.scss';

import { Link } from 'react-router-dom';

import TextField from '../component/TextField';
import Button from '../component/Button';
import { FaPlus } from 'react-icons/fa';

function EnterRoom(props) {
	const [input, setInput] = useState({ username: '', roomTitle: '' });
	const { username, roomTitle } = input;

	const handleChange = e => {
		const { name, value } = e.target;

		setInput(prev => ({
			...prev,
			[name]: value
		}))
	}
	return (
		<div className="login-wrapper">
			<form className='login-form' autocomplete='off'>
				<span className='login-title'>Create a room</span>
				<p className='login-sub'>Or join <Link to='/join'>here</Link></p>
				<TextField handleChange={handleChange} value={username} type='text' name='username' placeholder='Username' required />
				<div className='button-group'>
					<TextField handleChange={handleChange} value={roomTitle} type='text' name='roomTitle' placeholder='Room Title' required />
					<Button style={{ color: 'white', backgroundColor: '#28ACEB', width: '20%', padding: '0' }} icon={<FaPlus />} />
				</div>
			</form>
		</div>
	);
}

export default EnterRoom;