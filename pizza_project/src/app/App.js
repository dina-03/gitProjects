import Background from './../app/img/food-bg.jpg';
import './App.css';
import AppHeader from './components/app-header/AppHeader';
import {Route, Switch} from 'react-router-dom'
import MenuList from './components/menu-list/MenuList';
import Cart from './components/cart/Cart';
import MenuItem from './components/menu-item/MenuItem'
import Order from './components/order/Order';

function App() {
  return (
    <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="App">
      <AppHeader />
      <Switch>
        <Route path = '/' exact component = {MenuList}/>
        <Route path = '/cart' exact component = {Cart} />
        <Route path = '/menu/:id' component = {MenuItem}/>
        <Route path ='/order' component = {Order} />
      </Switch>
    </div>
  );
}

export default App;

