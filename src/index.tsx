import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Nav from './Nav';
import Footer from './Footer';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Nav />
      <div className="uk-container">
      <div className="uk-child-width-1-3@s uk-grid-match uk-grid">
        <div className="uk-container uk-container-small" style={{ padding: "10px" }}>
        <div className="uk-card uk-card-primary uk-card-body uk-card-hover">
          <h3 className="uk-card-title">My Business</h3>
          <p>We get shit done.</p>
        </div>
        </div>
        <div className="uk-container uk-container-small" style={{ padding: "10px" }}>
          <div className="uk-card uk-card-primary uk-card-body uk-card-hover">
            <h3 className="uk-card-title">Experience</h3>
            <p>Syd is the best baby in the entire world</p>
          </div>
        </div>
        <div className="uk-container uk-container-small" style={{ padding: "10px" }}>
          <div className="uk-card uk-card-primary uk-card-body uk-card-hover">
            <h3 className="uk-card-title">Projects</h3>
            <p>Kendra is the bestest wife there ever was!</p>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
