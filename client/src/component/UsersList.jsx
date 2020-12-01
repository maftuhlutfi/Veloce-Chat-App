import { useSelector } from 'react-redux';
import UserBox from '../component/UserBox';

function UsersList(props) {
    const users = useSelector(state => state.room.users);

    return (
        <div className='user-list'>
            {
                users.map(({username, avatar}, index) => <UserBox 
                        username={username} 
                        src={`https://robohash.org/${avatar}.png?set=set1&size=150x150`} 
                        key={index}
                    />
                )
            }
        </div>
    );
}
 
export default UsersList;