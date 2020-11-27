import { useEffect, useState } from 'react';
import './EnterRoom.scss';

import { Link, useHistory } from 'react-router-dom';

import TextField from '../component/TextField';
import Button from '../component/Button';
import { CgEnter } from 'react-icons/cg';

import {MdEdit} from 'react-icons/md';

import AvatarBox from '../component/AvatarBox'
import Modal from '../component/ModalBox'
import ChooseAvatar from '../component/ChooseAvatar'

function EnterRoom(props) {
	const [input, setInput] = useState({username: '', roomCode: ''});
	const { username, roomCode } = input;
	const history = useHistory();

	const [showModal, setShowModal] = useState(false);

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

	const [randomNumber, setRandomNumber] = useState(0);

	useEffect(() => {
		setRandomNumber(Math.floor(Math.random() * 20))
	}, [])

	return (
		<div className="login-wrapper">
			<Modal show={showModal} setShow={setShowModal}>
				<ChooseAvatar active={randomNumber} setActive={setRandomNumber} />
			</Modal>
			<form className='login-form' autoComplete='off'>
				<AvatarBox width='70px' src={`https://robohash.org/${randomNumber}.png?set=set1&size=150x150`} />
				<MdEdit className='edit-icon' onClick={() => setShowModal(true)} />
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