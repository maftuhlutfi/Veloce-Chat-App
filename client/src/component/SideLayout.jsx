import UsersList from './UsersList';
import LogoFooter from './LogoFooter';

import './SideLayout.scss'

function SideLayout(props) {
    return (
        <aside className='side-layout'>
            <header>
                <span className='title'>Users List</span>
            </header>
            <UsersList />
            <LogoFooter />
        </aside>
    );
}
 
export default SideLayout;