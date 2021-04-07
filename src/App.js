import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="13f0a397-e3d1-4d7b-8479-f8d83d6e342a"
            userName="JSMaster"
            userSecret="123123"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/> }
        />
    );
}

export default App;