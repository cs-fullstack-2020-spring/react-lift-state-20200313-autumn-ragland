import React, { Component } from 'react';
import Person from './Person';
// class based parent component that renders 2 person components and keeps up with the state of it's child components
class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total_age: 0,
        }
    }

    render() {
        let age1 = 21;
        let age2 = 30;
        let name1 = "Autumn";
        let name2 = "Kevin";
        // alert initial values before state is updated in child components
        alert(`The initial name and age of the first person is ${age1} ${name1}\nThe initial name and age of the second person is ${age2} ${name2}`);
        return (
            <div>
                <h1>Total of all ages is {this.state.total_age}</h1>
                <Person name={name1} age={age1} />
                <Person name={name2} age={age2} />
            </div>
        )
    }
}

export default AppContainer;