import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation  } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import store from './behaviour/ReduxStore';
import LoginForm from './components/auth/LoginForm';
import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails';
import Home from './pages/Home';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import { PaletteColorOptions } from '@mui/material/styles/createPalette';
import Header from './header/Header';

declare module '@mui/material/styles' {
  interface Palette {
    link?: PaletteColorOptions;
  }
  interface PaletteOptions {
    link?: PaletteColorOptions;
  }
}
const theme = createTheme({
  palette: {
    primary: {
      main: '#e4002b',
    },
    secondary: {
      main: 'rgb(43, 52, 69)', 
    },
    link: { 
      main: '#7d879c',
    }
  },
  typography: {
    body1: {
      fontSize: '14px',
      color: 'rgb(43, 52, 69)', 
    },
    h1: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 'bold',
    },
    h3: {
      fontSize: '20px',
      fontWeight: 700,
    },
    h4: {
      fontSize: '14px',
      fontWeight: 500,
    },
    h5: {
      fontSize: '12px',
      fontWeight: 500,
    },
    h6: {
      fontSize: '9px',
      fontWeight: 500,
    },
  },
}); 
function GlobalStyles() {

  document.body.style.padding = '0px';
  document.body.style.margin = '0px';
  document.body.style.fontSize = '14px';
  document.body.style.background = 'rgb(246, 249, 252)';
  document.body.style.color = 'rgb(43, 52, 69)';
  document.body.style.transition = 'all 0.5s linear 0s';
  document.body.style.fontFamily = "'Open Sans', sans-serif";
  document.body.style.lineHeight = '1.5';
}

const Layout = () => {
  const location = useLocation();
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    setShowHeader(location.pathname !== '/');
  }, [location]);

  return (
    <>
      <CssBaseline />
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
};

function App() {
  GlobalStyles();

  return (
    <Provider store={store}>
      <div className="App">
        <ThemeProvider theme={theme}>
          <Router>
            <Layout />
          </Router>
        </ThemeProvider>
      </div>
    </Provider>
  );
}

export default App;
