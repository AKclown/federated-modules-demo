import logo from './logo.svg';
import './App.css';
import SayHelloFromA from './SayHelloFromA';
import SayHelloFromB from 'application_b/SayHelloFromB';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <SayHelloFromA />
        <SayHelloFromB></SayHelloFromB>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
