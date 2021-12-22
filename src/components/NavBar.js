import './NavBar.css';

const NavBar = () => {
  return (
    <nav>
      {/* TODO: add relative links using ReactRouter */}
      <li>
        <a href="#">Dashboard</a>
      </li>
      <li>
        <a href="#">Calendar</a>
      </li>
      <li>
        <a href="#">Statistics</a>
      </li>
      <li>
        <a href="#">Records</a>
      </li>
    </nav>
  )
};

export default NavBar;