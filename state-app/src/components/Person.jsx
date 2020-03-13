import React, {Component} from 'react';

class Person extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <h3>Name : {this.props.name}</h3>
                <h3>Age : {this.props.age}</h3>
            </div>
        )
    }
}

export default Person;