import React from 'react';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import Layout from './components/Layout/Layout';
import {Route, Switch} from 'react-router-dom';
import Cart from './components/Cart/Cart';
import './App.css';

function App() {
  console.log('URL ',process.env.PUBLIC_URL);
  return (
    <div>
        <Header />
          <Switch>
            <Route path="/cart" component={Cart} />
            <Route path="/" exact component={Layout} />
           </Switch>
        <Footer/>
      </div>
  );
}

export default App;
