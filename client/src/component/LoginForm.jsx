import { useEffect, useState } from 'react';
import './LoginForm.scss';

import { Link } from 'react-router-dom';

import TextField from '../component/TextField';
import Button from '../component/Button';
import { FaPlus } from 'react-icons/fa';
import { CgEnter } from 'react-icons/cg';

import {MdEdit} from 'react-icons/md';

import AvatarBox from '../component/AvatarBox'
import Modal from '../component/ModalBox'
import ChooseAvatar from '../component/ChooseAvatar'

import { createRoomStart, joinRoomStart } from "../redux/actions";
import { useDispatch, useSelector } from 'react-redux';
import random_rgba from '../utils/randomRGB';

function EnterRoom({create}) {
    const dispatch = useDispatch();
    let errMsgRes = useSelector(state => state.errMsg);

	const [input, setInput] = useState({ username: '', roomTitle: '', roomCode: '' });
    const { username, roomTitle, roomCode } = input;
    
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        setErrMsg(errMsgRes)
    }, [errMsgRes])

    useEffect(() => {
        setErrMsg('')
    }, [])

	const [showModal, setShowModal] = useState(false);

	const handleChange = e => {
        let { name, value } = e.target;
        if (name === 'roomCode') {
            value = value.toUpperCase();
        }
        setErrMsg('');

		setInput(prev => ({
			...prev,
			[name]: value
		}))
	}

	const [randomNumber, setRandomNumber] = useState(0);

	useEffect(() => {
		setRandomNumber(Math.floor(Math.random() * 20))
	}, [])

	const handleClick = e => {
        e.preventDefault();
        
        const color = random_rgba();

        if(create) {
            dispatch(createRoomStart({
                user: {username, avatar: randomNumber, color},
                roomTitle
            }))
        } else {
            dispatch(joinRoomStart({
                user: {username, avatar: randomNumber, color},
                roomCode
            }))
        }
	}

	return (
		<div className="login-wrapper">
			<Modal show={showModal} setShow={setShowModal}>
				<ChooseAvatar active={randomNumber} setActive={setRandomNumber} />
			</Modal>
			<form className='login-form' autoComplete='off'>
				<AvatarBox width='70px' src={`https://robohash.org/${randomNumber}.png?set=set1&size=150x150`} />
				<MdEdit className='edit-icon' onClick={() => setShowModal(true)} />
				<span className='login-title'>{create ? 'Create' : 'Join'} a room</span>
				<p className='login-sub'>Or {create ? 'join' : 'create'} <Link to={create ? '/join' : '/create'}>here</Link></p>
                {errMsg ? <span className="error-msg">{errMsg}</span> : ''}
				<TextField onChange={handleChange} value={username} type='text' name='username' placeholder='Username' required />
				<div className='button-group'>
                    {
                        create ? 
                        <TextField onChange={handleChange} value={roomTitle} type='text' name='roomTitle' placeholder='Room Title' required />
                        :
                        <TextField onChange={handleChange} value={roomCode} type='text' name='roomCode' placeholder='Room Code' required />
                    }
					<Button onClick={handleClick} style={{ color: 'white', backgroundColor: '#28ACEB', width: '20%', padding: '0' }} icon={create ? <FaPlus /> : <CgEnter />} />
				</div>
			</form>
		</div>
	);
}

export default EnterRoom;