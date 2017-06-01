import React from "react";
import {Link} from 'react-router';

class People extends React.Component {
    
    render() {
        
        const table = this.props.route.people.map((person, index) => {
            const personLink = "people/details/" + person.id;
            return (
                <tr key={person.id}>
                    <td>{person.name}</td>
                    <td>
                        <Link to={personLink}>{person.id}</Link>
                    </td>
                </tr>
            )
        })
        
        return (
            <div>
                <h2>Table Data</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {table}
                    </tbody>
                </table>
            </div>
        )
    }
    
}

export default People;