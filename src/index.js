import React from 'react';
import ReactDOM from 'react-dom';
import USER from './assets/images/user.png';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
}from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <nav>
        <h1>Bookstore CMS</h1>
        <ul>
          <li><Link to = '/'>Books</Link></li>
          <li><Link to = '/CATEGORIES'>CATEGORIES </Link></li>
        </ul>
        <div>
          <img src = {USER} alt ='user_photo'/>
        </div>
      </nav>
      <Switch>
        <Route exact path = '/'><Books /></Route>
        <Route path = '/CATEGORIES'><Categorie /></Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

