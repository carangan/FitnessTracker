import logo from './logo.svg';
import './App.css';
import Example from './Example';
import NavBar from './components/NavBar';

function App() {

  return (
    <div className="Body-Container">
      {
        /* Uncomment line for React Example */
        /* <Example /> */
      }
      <NavBar className="Nav-Bar" />
      <h1>Dashboard</h1>
    </div>
  );
}

export default App;
