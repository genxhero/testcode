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

    formatTime(remaining) {
       //I reckon this is what this.props.format might look like. 
        let hours = Math.floor(remaining / 3600);
        let minutes = Math.floor((remaining - (hours * 3600)) / 60);
        let seconds = remaining - (hours * 3600) - (minutes * 60);

        if (hours < 10) { hours = "0" + hours; }
        if (minutes < 10) { minutes = "0" + minutes; }
        if (seconds < 10) { seconds = "0" + seconds; }
        return `${hours}:${minutes}:${seconds}`
    }

    render(){
        return (
            <div>
                <img style={{"height":"20rem"}}src="https://cdn.britannica.com/53/180553-050-FE609C89/Thinker-Auguste-Rodin-Museum-Paris-1904.jpg" />
                <h1>I think the time remaining is {this.formatTime(this.state.seconds)} </h1>
            </div>
          
        )
    }
}

export default Countdown
// this is what the real  H1 should look like, utilizing the props
// < h1 > { this.props.format(this.state.seconds) }</h1 >