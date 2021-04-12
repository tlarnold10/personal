import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Router,} from 'react-router-dom';
import './index.css';
import App from './App';
import Nav from './Nav';
import Home from './Pages/Home';
import Experience from './Pages/Experience';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Business from './Pages/Business';
import Blog from './Pages/Blog';
import Footer from './Footer';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/experience" component={Experience} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/business" component={Business} />
        <Route exact path="/blog" component={Blog} />
      </Switch>
      </BrowserRouter>
      <Footer />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();