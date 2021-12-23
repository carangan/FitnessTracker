// import logo from './logo.svg';
import './App.css';
import { Dashboard, Records, Statistics, Calendar } from './views';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';

function App() {


  return (
    <div className="Body-Container">
      {
        /* <Example /> */
        /* Uncomment line for React Example */
      }
      <NavBar className="Nav-Bar" />
      <Routes>
        <Route path="stats" element={<Statistics />}></Route>
        <Route path="records" element={<Records />}></Route>
        <Route path="calendar" element={<Calendar />}></Route>
        <Route exact path="/" element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
}

export default App;
