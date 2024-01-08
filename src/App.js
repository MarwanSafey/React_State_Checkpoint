import React, { Component } from 'react';
import Marwan from './Marwan.JPG';
import './App.css'; 


class App extends Component {
  state = {
    person: {
      fullName: 'Marwan Safey',
      bio: 'React Developer',
      imgSrc: Marwan,
      profession: 'Software Engineer'
    },
    show: false,
    mountedTime: 0
  };

  // Set up a timer using setInterval function
  // This timer updates the 'mountedTime' every 1000 milliseconds (1 second)
  componentDidMount() {
    this.interval = setInterval(
      () => this.setState({ mountedTime: this.state.mountedTime + 1 }),
      1000
    );
  }
//clearInterval() is a JS function used to clear the timer that previously set with setInterval() above.
  componentWillUnmount() {
    clearInterval(this.interval);
  }

// update the 'show' state by toggling its current value
  toggleProfile = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    return (
      <div>
      {/* this is button used for toggling, if "show" is true will show the profile*/}
        <button onClick={this.toggleProfile}>Toggle Profile</button>
        {this.state.show && (
          <div>
            <h1>{fullName}</h1>
            <img src={imgSrc} alt="Profile" className='img' />
            <p>Bio: {bio}</p>
            <p>Profession: {profession}</p>
          </div>
        )}
        {/* the Time since mounted */}
        <p>Time since mounted: {this.state.mountedTime} seconds</p>
      </div>
    );
  }
}

export default App;
