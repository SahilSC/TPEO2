import logo from './logo.svg';
import Greeting from './Greeting'
import './App.css';

function App() {
  let name = "TPEO!";

  const names = ["TPEO", "sus", "you"];

  return (
    <div className="App">
      <header className="App-header">
        {names.map((name, index) => <Greeting name = {name} key = {index}/>)}
        <p>
          Hello World!
        </p>
        <p>
          Hello {name}!
        </p>
      </header>
    </div>
  );
}

export default App;
