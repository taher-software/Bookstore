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
import './index.css';

const Header = () => {
  const handleSwitch = (e) => {
    const lists = Array.from(document.querySelectorAll('.nav-link ul li'));
    lists.forEach((elt) => {
      const anchor = elt.querySelector('a');
      anchor.style.opacity = '0.5';
    });
    e.target.style.opacity = '1';
  };
  return (
    <nav className="header">
      <div className="nav-link">
        <h1>Bookstore CMS</h1>
        <ul>
          <li><Link to="/" onClick={handleSwitch}>Books</Link></li>
          <li><Link to="/CATEGORIES" style={{ opacity: '0.5' }} onClick={handleSwitch}>CATEGORIES</Link></li>
        </ul>
      </div>
      <div className="user-photo">
        <img src={USER} alt="user_photo" style={{ width: '1.06rem' }} />
      </div>
    </nav>
  );
};
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/"><Books /></Route>
        <Route path="/CATEGORIES"><Category /></Route>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
