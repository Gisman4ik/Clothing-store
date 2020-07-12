import React from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home';
import Catalog from './components/Catalog/Catalog';
import Contacts from './components/Contacts/Contacts';
import Other from './components/Other/Other';
import Cart from './components/Cart/Cart';
import './App.css';

export default function App() {
    return (
      <BrowserRouter>
        <div className="app-wrapper">
            <Layout>
                <div className="app-content-wrapper">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/catalog" component={Catalog}/>
                        <Route path="/contacts" component={Contacts}/>
                        <Route path="/other" component={Other}/>
                        <Route path="/cart" component={Cart}/>
                    </Switch>
                </div>
            </Layout>
        </div>
      </BrowserRouter>
    );
  }