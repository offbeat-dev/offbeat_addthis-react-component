import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import './components/add-this-react.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
