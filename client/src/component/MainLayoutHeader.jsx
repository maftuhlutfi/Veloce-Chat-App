import { BsThreeDots } from 'react-icons/bs';

import './MainLayoutHeader.scss';
import { useDispatch, useSelector } from 'react-redux';

import { leaveRoomStart } from "../redux/actions";
import Button from './Button';
import { useState } from 'react';

function MainLayoutHeader(props) {
	const dispatch = useDispatch();
	const roomCode = useSelector(state => state.room.roomCode);
    const username = useSelector(state => state.user.username);

    const [show, setShow] = useState(false);
    
    const handleClick = () => {
        window.location.href = window.location.origin;
        dispatch(leaveRoomStart({roomCode, username}));
    }
    
    return (
        <header className='main-layout-header'>
            <div></div>
            <div className="three-dot">
                <BsThreeDots onClick={() => setShow(!show)} color='#c1c7da' size='1.5em' />
                <div className="info" style={{display: show ? 'block' : 'none'}}>
                    <Button onClick={handleClick} label='Leave room' style={{backgroundColor: 'red', color: 'white'}} />
                </div>
            </div>
        </header>
    );
}
 
export default MainLayoutHeader;