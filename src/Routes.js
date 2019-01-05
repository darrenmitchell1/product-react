import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import ProductIndexPage from './pages/ProductIndexPage';
import ProductShowPage from './pages/ProductShowPage';

class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={ProductIndexPage}/>
        <Route exact path="/products" component={ProductIndexPage}/>
        <Route path="/products/:id" component={ProductShowPage}/>
      </div>
    );
  }
}

export default Routes;
