import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './index.css';
import App from './app/App';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store';


ReactDOM.render(
  <Provider store ={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

