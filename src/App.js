import React from "react";
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Notfound from './Components/pages/404';
import HomePage from './Components/pages/HomePage';
import PersonalityQuiz from './Components/pages/PersonalityQuiz';
import ShoppingApp from './Components/pages/Shopping';
import ContactPage from './Components/pages/Contact';
import Header from './Components/header';
import Footer from './Components/footer';
import Profile from './Components/pages/Profile';
import Store from './Components/pages/hoc/Store';
import AddNewItem from './Components/pages/AddNewItem';
import OrderSummary from './Components/pages/OrderSummary';
import OrderedItems from './Components/pages/OrderedItems';

function App() {

return (

<Store>
  <Router>
    <Header/>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/quiz" component={PersonalityQuiz} />
      <Route exact path="/shopping" component={ShoppingApp} />
      <Route exact path="/contact" component={ContactPage} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/addnewitem" component={AddNewItem} />
      <Route exact path="/ordersummary" component={OrderSummary} />
      <Route exact path="/ordereditems" component={OrderedItems} />
      <Route component={Notfound} />
    </Switch>
    <Footer/>
  </Router>
</Store>

  );
}
export default App;
