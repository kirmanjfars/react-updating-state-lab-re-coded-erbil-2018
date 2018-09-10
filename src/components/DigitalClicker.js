<<<<<<< HEAD
import React from 'react';

class DigitalClicker extends React.Component {
  constructor() {
    super();

    this.state = {
      timesClicked: 0,
    };
  }

  handleClick = () => {
    this.setState({
      timesClicked: ++this.state.timesClicked,
    });
  }

  render() {
    return (
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    );
  }
}

export default DigitalClicker;
=======
// Code DigitalClicker Component Here

import React from 'react'; 

class DigitalClicker extends React.Component{
    constructor() {
    super();
     this.state = {
      timesClicked: -1 };
  }
  
  render(){
    return(
       <button onclick="" > {this.state.timesClicked } have ben clicked </button>
      )
  }
}


export default DigitalClicker ;
>>>>>>> e83e0b1d0c7f1bf350cd99126ae71358e49047cb
