import { Switch, Route } from 'react-router-dom';
import './App.scss';
import Checkout from './components/checkout/checkout';
import Cancel from './components/checkout/stripe-checkout/cancel';
import Success from './components/checkout/stripe-checkout/success';
import HomePage from './components/home-page';
import NotFound from './components/not-found';
import Cart from './components/pages/cart-page/cart-page';
import ShopPage from './components/pages/shop/ShopPage'
import SingleProduct from './components/single-product/single-product';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/product/:id" component={SingleProduct} />
        <Route path="/cart" component={Cart} />
        <Route path="/success**" component={Success} />
        <Route path="/canceled" component={Cancel} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;