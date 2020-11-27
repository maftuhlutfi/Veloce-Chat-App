import { useState } from 'react';
import './EnterRoom.scss';

import { Link, useHistory } from 'react-router-dom';

import TextField from '../component/TextField';
import Button from '../component/Button';
import { CgEnter } from 'react-icons/cg';

function EnterRoom(props) {
	const [input, setInput] = useState({username: '', roomCode: ''});
	const { username, roomCode } = input;
	const history = useHistory();

	const handleChange = e => {
		const { name, value } = e.target;

		setInput(prev => ({
			...prev,
			[name]: value
		}))
	}

	const handleClick = e => {
		e.preventDefault();
		history.push('/chatroom');
	}
	return (
		<div className="login-wrapper">
			<form className='login-form' autocomplete='off'>
				<span className='login-title'>Enter a room</span>
				<p className='login-sub'>Or create <Link to='/create'>here</Link></p>
				<TextField handleChange={handleChange} value={username} type='text' name='username' placeholder='Username' required />
				<div className='button-group'>
					<TextField handleChange={handleChange} value={roomCode} type='text' name='roomCode' placeholder='Room Code' required />
					<Button onClick={handleClick} style={{color:'white', backgroundColor:'#28ACEB', width: '20%', padding: '0'}} icon={<CgEnter size='1.3em' />} />
				</div>
			</form>
		</div>
	);
}

export default EnterRoom;