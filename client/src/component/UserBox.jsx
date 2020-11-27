import './UserBox.scss';

import AvatarBox from './AvatarBox'

function UserBox({src, username}) {
    return (
        <div className='user-box'>
            <AvatarBox width='50px' inline src={src} />
            <div className="detail">
                <span className="username">{username}</span>
                <span className="status">Online</span>
            </div>
        </div>
    );
}
 
export default UserBox;