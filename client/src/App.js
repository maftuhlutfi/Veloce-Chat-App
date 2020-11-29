import './App.scss';
import EnterRoom from './pages/EnterRoom';
import CreateRoom from './pages/CreateRoom';
import ChatRoom from './pages/ChatRoom';

import { Switch, Route, Redirect } from 'react-router-dom';

import { io } from "socket.io-client";
import { useEffect } from 'react';

function App() {

	useEffect(() => {
		const socket = io('http://localhost:4000');
		socket.on('connect', () => {
			console.log('Connected')
		})
	})

	return (
		<div className="App">
			<Switch>
				<Route path='/' exact render={() => <Redirect to='/join' />} />
				<Route path='/join' exact render={() => <EnterRoom />} />
				<Route path='/create' exact render={() => <CreateRoom />} />
				<Route path='/chatroom' exact render={() => <ChatRoom />} />
			</Switch>
		</div>

	);
}

export default App;
