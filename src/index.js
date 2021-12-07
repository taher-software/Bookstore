import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Books from './components/Books';
import Category from './components/Categories';
import USER from './assets/images/user.png';
import store from './redux/configureStore';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <nav>
        <h1>Bookstore CMS</h1>
        <ul>
          <li><Link to="/">Books</Link></li>
          <li><Link to="/CATEGORIES">CATEGORIES </Link></li>
        </ul>
        <div>
          <img src={USER} alt="user_photo" style={{ width: '1.06rem' }} />
        </div>
      </nav>
      <Switch>
        <Route exact path="/"><Books /></Route>
        <Route path="/CATEGORIES"><Category /></Route>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
