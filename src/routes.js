import react from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
//BrowserRouter é o container principal do react-router-dom

import Repositories from './Repositories';
import Home from './Home';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/repositories' component={Repositories}/>
            </Switch>
        </BrowserRouter>
    )
}