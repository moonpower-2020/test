import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Posts } from '../pages';
import Menu from '../components/Menu';

class App extends Component {
    render() {
        return (
	    <div class="container">
                <Menu/>
                <Route exact path="/" component={Home}/>
                <Switch>
                </Switch>
                <Route path="/posts" component={Posts}/>
            </div>
        );
    }
}

export default App;
