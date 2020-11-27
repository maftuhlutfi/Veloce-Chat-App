import UserBox from '../component/UserBox';

function UsersList(props) {
    return (
        <div className='user-list'>
            <UserBox username='nyoms1' src={`https://robohash.org/${Math.floor(Math.random() * 20)}.png?set=set1&size=150x150`} />
            <UserBox username='nyoms2' src={`https://robohash.org/${Math.floor(Math.random() * 20)}.png?set=set1&size=150x150`} />
            <UserBox username='nyoms3' src={`https://robohash.org/${Math.floor(Math.random() * 20)}.png?set=set1&size=150x150`} />
        </div>
    );
}
 
export default UsersList;