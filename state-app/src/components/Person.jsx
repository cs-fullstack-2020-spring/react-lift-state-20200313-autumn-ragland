import React, {Component} from 'react';
// class based component that renders a name and age passed to the component as a prop and updated via state
class Person extends Component{
    constructor(props){
        super(props);
        // state will always initially be defined in the constructor
        this.state = {
            name : this.props.name,
            age : this.props.age,
        }
    }

    // state cannot be updated in render because the component will re-render each time state is updated and you will get caught in an infinite loop
    componentDidMount(){
        this.setState({age : this.state.age + 1});
    }

    render(){
        return(
            <div>
                <h3>Name : {this.state.name}</h3>
                <h3>Age : {this.state.age}</h3>
            </div>
        )
    }
}

export default Person;