import './App.css';

import React, { Suspense } from "react";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';


import Store from './hoc/Store';
import HomePage from './pages/HomePage';
import Header from './Components/header';
import Footer from './Components/footer';
import PageSpinner from './Components/PageSpinner';

const Auth = React.lazy(() => import('./pages/Auth'));
const Notfound = React.lazy(() => import('./pages/404'));
const SignUp = React.lazy(() => import('./pages/Signup'));
const Profile = React.lazy(() => import('./pages/Profile'));
const ContactPage = React.lazy(() => import('./pages/Contact'));
const ShoppingApp = React.lazy(() => import('./pages/Shopping'));
const Item = React.lazy(() => import('./ShopperComponents/IndividualItem'));
const AddNewItem = React.lazy(() => import('./ShopperComponents/AddNewItem'));
const OrderSummary = React.lazy(() => import('./ShopperComponents/OrderSummary'));
const OrderedItems = React.lazy(() => import('./ShopperComponents/OrderedItems'));
const OrderedItem = React.lazy(() => import('./ShopperComponents/OrderedItem'));


function App() {

return (

<Store>
  <Router>
  <Suspense fallback={<PageSpinner/>}>
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
    </Suspense>
  </Router>
</Store>

  );
}
export default App;
