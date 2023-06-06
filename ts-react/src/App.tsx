import './App.css';
import Darkmode from './darkmode/Darkmode';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>React x Typescript</h1>
      <div className="app-tsc-section">
        <Darkmode/>
      </div>
    </div>
  );
}

export default App;
