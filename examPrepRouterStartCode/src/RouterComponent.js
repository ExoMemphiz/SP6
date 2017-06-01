import React from "react";
import {browserHistory, Route, Router, IndexRoute} from "react-router";
import AddPerson from './AddPerson';
import App from "./App";
import Details from './Details';
import Home from "./Home";
import People from "./People";


export default class RouterComponent extends React.Component {
    
    render() {
        
        const people = this.props.facade.people;
        
        return (
            <div>
                <Router history={browserHistory}>
                    <Route path="/" component={App}>
                        <IndexRoute component={Home}></IndexRoute>
                        <Route path="people" component={People} people={people}/>
                        <Route path="people/add" component={AddPerson} facade={this.props.facade}></Route>
                        <Route path="people/details/:id" component={Details} people={people}></Route>
                    </Route>
                </Router>
            </div>
        );
    }
}


