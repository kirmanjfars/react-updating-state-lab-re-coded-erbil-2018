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
