import React from 'react';
import { BrowserRouter,Switch,Route, Link } from "react-router-dom";

export default function App() {
    return (
      <BrowserRouter>
        <div className="app-wrapper">
            <Header />
            <Navbar />
            <div className="app-content-wrapper">
                    <Switch>
                    <Route path="/" component={Home}>
                        <Home />
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