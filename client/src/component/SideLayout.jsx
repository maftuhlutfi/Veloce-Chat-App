import UsersList from './UsersList';
import LogoFooter from './LogoFooter';

import './SideLayout.scss'
import { useSelector } from 'react-redux';

function SideLayout(props) {
    const {roomTitle, roomCode} = useSelector(state => state.room);

    return (
        <aside className='side-layout'>
            <header>
                <span className='title'>{roomTitle}</span>
                <span className="room-code">{roomCode}</span>
            </header>
            <UsersList />
            <LogoFooter />
        </aside>
    );
}
 
export default SideLayout;