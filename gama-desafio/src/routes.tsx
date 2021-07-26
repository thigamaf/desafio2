import React from 'react'
import { Switch, Route, BrowserRouter} from 'react-router-dom';

import Home from './pages/Home';
import Products from './pages/Products';
import Checkout from './pages/Shop/Checkout';
import SignUp from './components/SignUp';

export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path="/produtos" component={Products} />
            <Route path="/cadastrar" component={SignUp} />
            <Route path='/finalizarpedido' exact component={Checkout} />
        </Switch>
        </BrowserRouter>

    )
}