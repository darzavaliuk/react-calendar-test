import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import GlobalStyle from './Style/GlobalStyle';
import GlobalFonts from "./Fonts/GlobalFonts";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GlobalFonts/>
        <GlobalStyle />
        <App/>
    </React.StrictMode>
);
