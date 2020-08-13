import React, { Component } from 'react';
import {GlobalStyle} from './style';

import Header from './common/header';
import store from './store';
import { Provider } from 'react-redux';

import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/home';
import Login from './pages/login';
import Cart from './pages/cart';
import History from './pages/history';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <GlobalStyle />
                    
                    <BrowserRouter basename='/buyer'>
                        <Header />
                        <Route path='/' exact component={Home}></Route>
                        <Route path='/login' exact component={Login}></Route>
                        <Route path='/cart' exact component={Cart}></Route>
                        <Route path='/history' exact component={History}></Route>
                    </BrowserRouter>
                </div>
            </Provider>
        )
    }
}

export default App;