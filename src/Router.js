import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './Pages/homepage'
import CartPage from './Pages/cartpage'

const Router = () => (
    <Switch>
        <Route exact path='/' component={HomePage}/>

        <Route exact path='/cart' component={CartPage}/>
    </Switch>
)

export default Router;