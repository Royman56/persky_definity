import React from 'react';
import './App.css';
import Navbar from '../src/Pages/Components/navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import Cart from "./Pages/Cart/Cart";

function App() {
  return (
    <div className="App">
      <>
      <Router>
        <Navbar />
        <Switch>
        <Route path='/persky_definity' exact component={Home} />
          <Route path='/' exact component={Home} />
          <Route path='/products' component={Products} />
          <Route path='/cart' component={Cart} />
        </Switch>
      </Router>
    </>
    </div>
  );
}

export default App;
