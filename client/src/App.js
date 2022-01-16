//import from npm packages
import './App.css';
import React from 'react';
import {
  BrowserRouter as
    Router,
  Route,
  Switch
} from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


//import path specific 
import { StoreProvider } from './utils/GlobalState'

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Vaccine from './pages/Vaccine';
//import Navbar from './components/Navbar/Navbar';

const httpLink = createHttpLink({
  uri: '/graphql'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Router>
          <div>
            <StoreProvider>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Login" component={Login} />
                <Route exact path="/Signup" component={Signup} />
                <Route exact path="/Profile" component={Profile} />
                <Route exact path="/Vaccine" component={Vaccine} />
              </Switch>
            </StoreProvider>
          </div>
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
