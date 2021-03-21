import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import client from './apolloClient/client';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import Tabs from './components/Tabs/Tabs';
import Tab from './components/Tabs/Tab';
import Jobs from './components/Tabs/TabsContent/Jobs';
import Locations from './components/Tabs/TabsContent/Locations';
import City from './components/Tabs/TabsContent/City';

const App = ({ children }) => {
    return (
        <>
            <ApolloProvider client={client}>
                <Router>
                    <NavBar />
                    <Tabs>
                        <Tab title='Jobs'>
                            <Jobs />
                        </Tab>
                        <Tab title='Locations'>
                            <Locations />
                        </Tab>
                        <Tab title='City'>
                            <City />
                        </Tab>
                    </Tabs>
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
