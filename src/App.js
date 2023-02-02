import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Test from './Test';
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
      </Routes>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Test Application
        </a>
      </header> */}
    </div>
  );
}

export default App;
