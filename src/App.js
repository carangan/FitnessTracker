// import logo from './logo.svg';
import './App.css';
import { Dashboard, Records, Statistics, Calendar, Presets } from './views';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import PageLayout from './components/PageLayout';
import { red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    fontFamily: 'Roboto',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      {
        /* <Example /> */
        /* Uncomment line for React Example */
      }
      <NavBar />
      <Routes>
        <Route path="stats"    element={<PageLayout><Statistics /></PageLayout>}></Route>
        <Route path="records"  element={<PageLayout><Records /></PageLayout>}></Route>
        <Route path="calendar" element={<PageLayout><Calendar /></PageLayout>}></Route>
        <Route path="presets" element={<PageLayout><Presets /></PageLayout>}></Route>
        <Route exact path="/"  element={<PageLayout><Dashboard /></PageLayout>}></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
