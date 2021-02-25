import React from 'react';
import ReactDOM from 'react-dom';
import client from './apolloClient/client';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import Card from './components/Card';

const App = ({ children }) => {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <NavBar />
          <Card />
        </Router>
      </ApolloProvider>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
