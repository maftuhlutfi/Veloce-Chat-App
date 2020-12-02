import './App.scss';
import EnterRoom from './pages/EnterRoom';
import CreateRoom from './pages/CreateRoom';
import ChatRoom from './pages/ChatRoom';

import { Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { socketConnect } from "./redux/actions";
import { useEffect } from 'react';

function App() {
	const dispatch = useDispatch();
	const room = useSelector(state => state.room);

	useEffect(() => {
		dispatch(socketConnect())
	}, [dispatch])

	return (
		<div className="App">
			<Switch>
				<Route path='/' exact render={() => <Redirect to='/join' />} />
				<Route path='/join' exact render={() => room ? <Redirect to='/chatroom' /> : <EnterRoom />} />
				<Route path='/create' exact render={() => room ? <Redirect to='/chatroom' /> : <CreateRoom />} />
				<Route path='/chatroom' exact render={() => room ? <ChatRoom /> : <Redirect to='/join' />} />
			</Switch>
		</div>

	);
}

export default App;
