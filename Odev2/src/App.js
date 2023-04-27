
import './App.css';
import Contacts from './components2/Contacts';

function App() {
  return (
    <div className="todoapp">
    //contacts sayfasında toplanan diğer componentleri App bileşeninde görüntülenemek için buraya import ediyoruz.
    <Contacts ></Contacts>
    
    </div>
  );
}

export default App;
