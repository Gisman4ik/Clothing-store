import React from 'react';
import { BrowserRouter,Switch,Route, Link } from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Catalog from './components/Catalog/Catalog';
import Contacts from './components/Contacts/Contacts';
import Other from './components/Other/Other';
import Cart from './components/Cart/Cart';

export default function App() {
    return (
      <BrowserRouter>
        <div className="app-wrapper">
            <Header />
            <Navbar />
            <div className="app-content-wrapper">
                <Switch>
                    <Route path="/" component={Home}>
                        <Home/>
                    </Route>
                    <Route path="/catalog" component={Catalog}>
                        <Catalog />
                    </Route>
                    <Route path="/contacts" component={Contacts}>
                        <Contacts />
                    </Route>
                    <Route path="/other" component={Other}>
                        <Other />
                    </Route>
                    <Route path="/cart" component={Cart}>
                        <Cart />
                    </Route>
                </Switch>
            </div>
        </div>
      </BrowserRouter>
    );
  }