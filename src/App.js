import React, {Component} from 'react';
import './App.css';
import './components/setInterval'
import Timer from './components/setInterval';




class App extends React.Component {
  
    state = {
    fullName : 'Salma Ben Mejdouba',
    bio : 'Interior designer and JS full stack developer.',
    imgSrc : 'avatar-2.png',
    show : false,
  };

  Active = () => {
    this.setState({
      show : !this.state.show
    })
  }

  render() {
  return(
    <div className = 'App'>
  <button onClick = {this.Active}>Show</button>
  {this.state.show ? 
  (<div>
  <h1>{this.state.fullName}</h1>
  <p>{this.state.bio}</p>
  <img src = {this.state.imgSrc} alt = 'profile' />
  </div>) : (<p>Press the button!</p>)
  }
  <Timer />
  
  </div>
  )
  }

  
}


export default App;
