import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CompanyProvider } from './context/CompanyContext';
import { LoggedUserContext, LoggedUserProvider } from './context/LoggedUserContext';
import { UserJobProvider } from './context/UserJobsContext';



ReactDOM.render(
  <React.StrictMode>
    <LoggedUserProvider>
    <CompanyProvider >
      <UserJobProvider>
    <App />
    </UserJobProvider>
    </CompanyProvider>
    </LoggedUserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
