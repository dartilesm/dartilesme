import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { NextUIProvider, createTheme } from '@nextui-org/react';
import { HashRouterProvider } from './context/hashRouter';

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      background: '#001220',
      textPrimary: '#d0d0d0'
    },
    fonts: {
      spaceGrotesk: "'Space Grotesk', sans-serif"
    },
    sizes: {
      small: '1040px',
      medium: '1200px'
    }
  }
})


ReactDOM.render(
  <React.StrictMode>
    <NextUIProvider theme={darkTheme}>
      <HashRouterProvider>
        <App />
      </HashRouterProvider>
    </NextUIProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
