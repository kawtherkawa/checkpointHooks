import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Erreur from './Erreur';
import NavBars from './Components/NavBars';

function App() {


//const [show, setShow] = useState(false);
  return (
    <div className="App">
      
     

<NavBars/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='*' element={<Erreur/>} />
      </Routes>
    </div>
  );
}

export default App;
