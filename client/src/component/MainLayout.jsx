import './MainLayout.scss';

import Header from './MainLayoutHeader';
import ChatContainer from './ChatContainer';
import SendContainer from './SendContainer';

function MainLayout(props) {
    return (
        <main className='main-layout'>
            <Header />
            <ChatContainer />
            <SendContainer />
        </main>
    );
}
 
export default MainLayout;