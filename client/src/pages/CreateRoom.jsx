import { useEffect, useState } from 'react';
import './CreateRoom.scss';

import { Link } from 'react-router-dom';

import TextField from '../component/TextField';
import Button from '../component/Button';
import { FaPlus } from 'react-icons/fa';
import {MdEdit} from 'react-icons/md';

import AvatarBox from '../component/AvatarBox'
import Modal from '../component/ModalBox'
import ChooseAvatar from '../component/ChooseAvatar'

function EnterRoom(props) {
	const [input, setInput] = useState({ username: '', roomTitle: '' });
	const { username, roomTitle } = input;

	const [showModal, setShowModal] = useState(false);

	const handleChange = e => {
		const { name, value } = e.target;

		setInput(prev => ({
			...prev,
			[name]: value
		}))
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