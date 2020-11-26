import './ChatRoom.scss';

import Logo from '../component/Logo';
import TextField from '../component/TextField';

import { BsThreeDots } from 'react-icons/bs';

function ChatRoom(props) {
	return (
		<div className="room-wrapper">
			<div className='container'>
				<aside className='side-layout'>
					<header>
						<span className='title'>Users List</span>
					</header>
					<footer className='logo-footer'>
						<Logo />
					</footer>
				</aside>
				<main className='main-layout'>
					<header>
						<div></div>
						<BsThreeDots color='#c1c7da' size='1.5em' />
					</header>
				</main>
			</div>
		</div>
	);
}

export default ChatRoom;