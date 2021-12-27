// import './NavBar.css';
import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import { Typography, List, ListItem, ListItemText } from '@mui/material';

const NavBar = () => {

  const pages = [
    ['', 'Dashboard'],
    ['stats', 'Statistics'],
    ['records', 'Records'],
    ['calendar', 'Calendar']
  ]

  return (
    <nav>
      {/* TODO: add relative links using ReactRouter */}
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}>
        <List>
        {
          pages.map (([link, text], index) => {
            return (
              <Link to={link} style={{ textDecoration: "none" }} key={text}>
                <ListItem button>
                  <ListItemText>
                    <Typography variant="button">
                    {text}
                    </Typography>
                  </ListItemText>
                </ListItem>
              </Link>
            );
          })
        }
        </List>
      </Drawer>
    </nav>
  )
};

export default NavBar;