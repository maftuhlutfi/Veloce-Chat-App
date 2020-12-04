import './ChatRoom.scss';

import SideLayout from '../component/SideLayout';
import MainLayout from '../component/MainLayout';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { leaveRoomStart } from "../redux/actions";

function ChatRoom(props) {
	const dispatch = useDispatch();
	const roomCode = useSelector(state => state.room.roomCode);
	const username = useSelector(state => state.user.username);

	useEffect(() => {
		window.addEventListener('unload', e => {
			e.preventDefault();
			dispatch(leaveRoomStart({roomCode, username}))
		})
	})

	return (
		<div className="room-wrapper">
			<div className='container'>
				<SideLayout />
				<MainLayout />
			</div>
		</div>
	);
}

export default ChatRoom;