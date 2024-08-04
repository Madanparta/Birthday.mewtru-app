import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import {BrowserRouter} from 'react-router-dom';
import './index.css'
import DataContext from './context/dataContext.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <DataContext>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </DataContext>
  </BrowserRouter>
);
