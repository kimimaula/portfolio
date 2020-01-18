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
import CartItems from './Components/pages/CartItems';
import AddOrderItem from './Components/pages/AddOrderItem';

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
      
      <Route exact path="/cartitem" component={CartItems} />
      <Route exact path="/addorderitem" component={AddOrderItem} />
      <Route component={Notfound} />
    </Switch>
    <Footer/>
  </Router>
</Store>

  );
}
//<Route exact path= {`item/ ${}`} component={CartItems} />
export default App;
