import React, { Component } from 'react';
import Person from './Person';
// class based parent component that renders 2 person components and keeps up with the state of it's child components
class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfClicks: 0,
        }
    }

    // define method to update the state - this method will be called via callback function passed to the component
    updateAge = () => {
        let updatedAge = this.state.numberOfClicks + 1;
        this.setState({numberOfClicks  : updatedAge});
    }

    render() {
        let age1 = 21;
        let age2 = 30;
        let name1 = "Autumn";
        let name2 = "Kevin";
        // log initial values before state is updated in child components
        console.log(`The initial name and age of the first person is ${age1} ${name1}\nThe initial name and age of the second person is ${age2} ${name2}`);
        return (
            <div>
                <h1>You clicked an add one buttons {this.state.numberOfClicks} times</h1>
                <Person name={name1} age={age1} updateAge ={this.updateAge}/>
                <Person name={name2} age={age2} updateAge ={this.updateAge}/>
            </div>
        )
    }
}

export default AppContainer;