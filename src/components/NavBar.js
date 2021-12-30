// import './NavBar.css';
import { Link } from 'react-router-dom';
import { 
  Drawer,
  Typography, 
  List, 
  ListItem, 
  ListItemText,
  ListItemAvatar
} from '@mui/material';
import {
  Dashboard,
  TimelineOutlined,
  ArchiveOutlined,
  CalendarTodayOutlined,
  AddBoxOutlined,
} from '@material-ui/icons';

const NavBar = () => {

  const pages = [
    ['', 'Dashboard', <Dashboard />],
    ['stats', 'Statistics', <TimelineOutlined />],
    ['records', 'Records', <ArchiveOutlined />],
    ['calendar', 'Calendar', <CalendarTodayOutlined />],
    ['presets', 'Presets', <AddBoxOutlined />],
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
          pages.map (([link, text, icon], index) => {
            return (
              <Link to={link} style={{ textDecoration: "none" }} key={text}>
                <ListItem button>
                  <ListItemAvatar>
                    {icon}
                  </ListItemAvatar>
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