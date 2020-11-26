import UserBox from '../component/UserBox';

function UsersList(props) {
    return (
        <div className='user-list'>
            <UserBox username='nyoms1' />
            <UserBox username='nyoms2' />
            <UserBox username='nyoms3' />
        </div>
    );
}
 
export default UsersList;