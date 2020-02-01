import React from "react";
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Notfound from './pages/404';
import HomePage from './pages/HomePage';
import PersonalityQuiz from './pages/PersonalityQuiz';
import ShoppingApp from './pages/Shopping';
import ContactPage from './pages/Contact';
import Header from './Components/header';
import Footer from './Components/footer';
import Store from './hoc/Store';
import SignUp from './pages/Signup'
import Auth from './pages/Auth'
import Profile from './pages/Profile';
import AddNewItem from './ShopperComponents/AddNewItem';
import OrderSummary from './ShopperComponents/OrderSummary';
import OrderedItems from './ShopperComponents/OrderedItems';
import Item from './ShopperComponents/IndividualItem'

function App() {

return (

<Store>
  <Router>
    <Header/>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/quiz/" component={PersonalityQuiz} />
      <Route exact path="/contact" component={ContactPage} />
      <Route exact path="/shopper" component={ShoppingApp} />
      <Route exact path="/login" component={Auth} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/products/:pid" component={Item}/>
      <Route exact path="/profile/:user" component={Profile} />
      <Route exact path="/addnewitem/:user" component={AddNewItem} />
      <Route exact path="/ordersummary/:user" component={OrderSummary} />
      <Route exact path="/ordereditems/:user" component={OrderedItems} />
      <Route component={Notfound} />
    </Switch>
    <Footer/>
  </Router>
</Store>

  );
}
export default App;
