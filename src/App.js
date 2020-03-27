import React from 'react';
// import Layout from './components/Layout/Layout';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import Layout from './components/Layout/Layout';
import {Route, Switch} from 'react-router-dom';
import Cart from './components/Cart/Cart';
import './App.css';

function App() {
  return (
    <div>
        {/* <Layout /> */}
        <Header />

        
          <Switch>
            <Route path="/cart" component={Cart} />
           {/*  <Route path="/orders" component={Orders} /> */}
            <Route path="/" exact component={Layout} />
           </Switch>
        {/* <BurgerBuilder /> */}
          {/* {this.state.show ? <BurgerBuilder />: null} */}
          {/* <Checkout /> */}
        {/* </Layout> */}
        <Footer/>
      </div>
  );
}

export default App;
