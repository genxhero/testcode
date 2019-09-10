/**
 * React Timer for Sams Club Quiz
 * So to make sure i am clear on this, the prop the component is being passed is formatting the time?
 * 
 * Assuming it also receives seconds as a prop.
 * Also going to go ahead and guess that the prop function receives seconds as a param itself
 */

 import React, {Component} from 'react'

class Countdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: this.props.seconds,     
        }
        this.tick = this.tick.bind(this)
    }

    componentDidMount() {
        this.start();
        //Alternatively, this component could be part of a hierarchy of components
        //and receive its seconds prop as an input from another component.
    }

    tick() {
      this.setState({seconds: this.state.seconds - 1})
    }

   start() {
       setInterval(this.tick, 1000);
   }

    render(){
        <h1>{this.props.formatTime(this.state.seconds)}</h1>
    }
}

export default Countdown