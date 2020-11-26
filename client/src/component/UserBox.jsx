import './UserBox.scss';

function UserBox(props) {
    return (
        <div className='user-box'>
            <div className='avatar-box'>
                <img src="https://robohash.org/K57.png?set=set1&size=150x150" alt="profile-pict"/>
            </div>
            <div className="detail">
                <span className="username">{props.username}</span>
                <span className="status">Online</span>
            </div>
        </div>
    );
}
 
export default UserBox;