import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      {/* TODO: add relative links using ReactRouter */}
      <li>
        <Link className="Link" to="/">Dashboard</Link>
      </li>
      <li>
        <Link className="Link" to="/stats">Statistics</Link>
      </li>
      <li>
        <Link className="Link" to="/records">Records</Link>
      </li>
      <li>
        <Link className="Link" to="/calendar">Calendar</Link>
      </li>
    </nav>
  )
};

export default NavBar;