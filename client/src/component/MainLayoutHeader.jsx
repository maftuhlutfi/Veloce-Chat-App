import { BsThreeDots } from 'react-icons/bs';

import './MainLayoutHeader.scss';

function MainLayoutHeader(props) {
    return (
        <header className='main-layout-header'>
            <div></div>
            <BsThreeDots color='#c1c7da' size='1.5em' />
        </header>
    );
}
 
export default MainLayoutHeader;