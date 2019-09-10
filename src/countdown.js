/**
 * React Timer for Sams Club Quiz
 * So to make sure i am clear on this, the prop the component is being passed is formatting the time?
 * 
 * Assuming it also receives seconds as a prop.
 * Also going to go ahead and guess that the prop function receives seconds as a param itself
 * I mean how crazy do you want me to go with this? The instructions were pretty vague and nondescript.
 * 

 */

 import React, {Component} from 'react'

class Countdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: this.props.seconds,     
        }
        this.tick = this.tick.bind(this)
        setInterval(() => {
            this.tick();
        }, 1000);
    }

    tick() {
      this.setState({seconds: this.state.seconds - 1})
    }

    render(){
        return (
          <h1>{this.state.seconds}</h1>
        )
    }
}

export default Countdown
// this is what the real  H1 should look like, utilizing the props
    // < h1 > { this.props.formatTime(this.state.seconds) }</h1 >