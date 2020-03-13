import React, {Component} from 'react';

class Person extends Component{
    constructor(props){
        super(props);
        this.state = {
            name : this.props.name,
            age : this.props.age
        }
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