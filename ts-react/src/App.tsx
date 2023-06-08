import './App.css';
import {Routes, Route} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Darkmode from './darkmode/Darkmode';
import Home from './Home';

const App: React.FC = () => {
  return (
      <div className="App">
        <Sidebar/>
        <div className="App-section">
          <h1 className="App-title">React x Typescript</h1>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/darkmode" element={<Darkmode/>}/>
          </Routes>
        </div>
      </div>
  );
}

export default App;
