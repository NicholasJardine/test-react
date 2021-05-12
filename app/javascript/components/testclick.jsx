import React, { Component } from "react";

class Tester extends Component{
    constructor(props){
        super(props);
        this.state={
          clicked: false  
        };
    }

    handleClick = () => {
        this.setState({
            clicked: !this.state.clicked
        });
    }
    render(){
        return(
            <div className={this.state.clicked ? 'clicked' : 'not-clicked'}  onClick={this.handleClick}>Hello</div>

        )
    }
}
export default Tester;