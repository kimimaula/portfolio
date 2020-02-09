import './App.css';

import React from "react";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';


import Auth from './pages/Auth';
import Store from './hoc/Store';
import Notfound from './pages/404';
import SignUp from './pages/Signup';
import Profile from './pages/Profile';
import HomePage from './pages/HomePage';
import Header from './Components/header';
import Footer from './Components/footer';
import ContactPage from './pages/Contact';
import ShoppingApp from './pages/Shopping';
import Item from './ShopperComponents/IndividualItem';
import AddNewItem from './ShopperComponents/AddNewItem';
import OrderedItem from './ShopperComponents/OrderedItem';
import OrderSummary from './ShopperComponents/OrderSummary';
import OrderedItems from './ShopperComponents/OrderedItems';


function App() {

return (

<Store>
  <Router>
    <Header/>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/contact" component={ContactPage} />
      <Route exact path="/shopper" component={ShoppingApp} />
      <Route exact path="/login" component={Auth} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/products/:pid" component={Item}/>
      <Route exact path="/profile/:user" component={Profile} />
      <Route exact path="/addnewitem/:user" component={AddNewItem} />
      <Route exact path="/ordersummary/:user" component={OrderSummary} />
      <Route exact path="/ordereditems/:user" component={OrderedItems} />
      <Route exact path="/ordereditem/:orderid" component={OrderedItem} />
      <Route component={Notfound} />
    </Switch>
    <Footer/>
  </Router>
</Store>

  );
}
export default App;
