import React, {Component} from "react";
import {Link} from 'react-router';

class Details extends Component {
    
    render() {
        const personID = this.props.params.id;
        console.log(this.props.route);
        const person = this.props.route.people[personID - 1];
        return (
            <div>
                <div className="name">
                    <h3>{person.name} Details</h3>
                </div>
                <div className="details">
                    <p>Person id: {person.id}</p>
                    <p>First name: {person.name}</p>
                    <p>Age: {person.age}</p>
                    <p><Link to="/people">Go back</Link></p>
                </div>
            </div>
        )
    }
}

export default Details;