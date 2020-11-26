import './ChatRoom.scss';

import SideLayout from '../component/SideLayout';
import MainLayout from '../component/MainLayout';

function ChatRoom(props) {
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