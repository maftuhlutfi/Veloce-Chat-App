import { BsThreeDots } from 'react-icons/bs';

import './MainLayoutHeader.scss';
import { useDispatch, useSelector } from 'react-redux';

import { leaveRoomStart } from "../redux/actions";

function MainLayoutHeader(props) {
	const dispatch = useDispatch();
	const roomCode = useSelector(state => state.room.roomCode);
    const username = useSelector(state => state.user.username);
    
    const handleClick = () => {
        dispatch(leaveRoomStart({roomCode, username}))
    }
    
    return (
        <header className='main-layout-header'>
            <div></div>
            <div className="three-dot">
                <BsThreeDots onClick={handleClick} color='#c1c7da' size='1.5em' />
            </div>
        </header>
    );
}
 
export default MainLayoutHeader;