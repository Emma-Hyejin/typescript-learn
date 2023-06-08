import './App.css';
import {Routes, Route} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Darkmode from './darkmode/Darkmode';

const App: React.FC = () => {
  return (
      <div className="App">
        <h1 className="App-title">React x Typescript</h1>
        <div className="App-section">
          <Sidebar/>
          <Routes>
            <Route path="/" element={<Darkmode/>}/>
          </Routes>
        </div>
      </div>
  );
}

export default App;
