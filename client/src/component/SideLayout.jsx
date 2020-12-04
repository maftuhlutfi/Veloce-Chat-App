import UsersList from './UsersList';
import LogoFooter from './LogoFooter';

import './SideLayout.scss'
import { useSelector } from 'react-redux';

import { MdInfo } from "react-icons/md";
import { useState } from 'react';

function SideLayout(props) {
    const {roomTitle, roomCode} = useSelector(state => state.room);
    const host = useSelector(state => state.room.users[0]);
    const [showInfo, setShowInfo] = useState(false);

    const handleClick = () => {
        setShowInfo(prev => !prev)
    }

    return (
        <aside className='side-layout'>
            <header>
                <span className='title'>{roomTitle}</span>
                <div className="info">
                    <MdInfo onClick={handleClick} />
                    {
                        <div className="info-tab" style={{display: showInfo ? 'block' : 'none'}}>
                            <table>
                                <tr>
                                    <td>code</td>
                                    <td>:</td>
                                    <td>{roomCode}</td>
                                </tr>
                                <tr>
                                    <td>host</td>
                                    <td>:</td>
                                    <td>{host.username}</td>
                                </tr>
                            </table>
                        </div> 
                    }
                </div>
            </header>
            <UsersList />
            <LogoFooter />
        </aside>
    );
}
 
export default SideLayout;