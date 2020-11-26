import './App.scss';
import EnterRoom from './pages/EnterRoom';
import CreateRoom from './pages/CreateRoom';
import ChatRoom from './pages/ChatRoom';

import { Switch, Route } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Switch>
				<Route path='/join' exact render={() => <EnterRoom />} />
				<Route path='/create' exact render={() => <CreateRoom />} />
				<Route path='/' exact render={() => <ChatRoom />} />
			</Switch>
		</div>

	);
}

export default App;
