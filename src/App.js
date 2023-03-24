import logo from './logo.svg';
import './App.css';

function App() {

  const connectWallet = async (res, request) => {
    try{
      const {ethereum} = window;
      if(!ethereum) {alert('Get MetaMask!'); return;}
      const accounts = await request({method: 'eth_requestAccounts'})
      return accounts;
    }
    catch(err) {console.log(err);}
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={connectWallet}>connect Wallet</button>
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
