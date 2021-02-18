import './App.css';
import './styles/main.css';
import Topbar from './components/Topbar';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <p>
        <Topbar />
        <Wrapper className="wrapper"/>
        
      </p>

    </div>
  );
}

export default App;
