import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class AddPerson extends Component {

    addNewPerson = (event) => {
        const firstName = this.refs.first_name.value;
        if (!firstName) {
            alert("Please enter a name");
            return;
        }
        const age = this.refs.age.value;
        if (!age) {
            alert("Please enter an age");
            return;
        }
        console.log(this.props);
        const id = this.props.route.facade.newId;
        var person = {
            id: id,
            name: firstName,
            age: age
        }
        this.props.route.facade.addPerson(person);
        browserHistory.repla
        browserHistory.push('/people');
    }
    
    render() {
        return (
            <div className="row">
                <div className="col s12">
                    <input type="text" ref="first_name" id="first_name"/>
                    <label htmlFor="first_name">First Name</label>
                </div>
                <div className="col s12">
                    <input type="text" ref="age" id="age"/>
                    <label htmlFor="age">Age</label>
                </div>
                <div className="col s12">
                    <button onClick={this.addNewPerson}>Add Person</button>
                </div>
            </div>
        )
    }
    
}

export default AddPerson;