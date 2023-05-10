import './App.css';
import EmojiResult from './components/Emoji/EmojiResult';
import Header from './components/Header';
import { EmojiProvider } from './context/EmojiContext';

function App() {
  return (
    <div className="App">
      <div className='container d-flex justify-content-center'>
        <div className='row'>
          <div className=''>
            <EmojiProvider>
              <Header />
              <EmojiResult />
            </EmojiProvider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;