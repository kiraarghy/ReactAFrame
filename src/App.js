import 'aframe'
import { Entity, Scene } from 'aframe-react'
import React, { Component } from 'react';

function getRandomArbitrary(min, max) {
  return parseInt(Math.random() * (max - min) + min);
}

const colors = ['#FA8072', '#2F29C4', '#53C429']

const randomColor = () => {
  return colors[getRandomArbitrary(0, colors.length)]
}

class App extends Component {
  state = {
    entities: [],
  }

  handleClick = () => {
    const entity = <Entity key={ getRandomArbitrary(0,1000) } geometry={{ primitive: 'box' }} material={{ color: randomColor() }} position={{ x: getRandomArbitrary(0, 5), y: getRandomArbitrary(0, 5), z: getRandomArbitrary(-5, 0) }} />

    const newEntiesState = this.state.entities;
    newEntiesState.push(entity)

    this.setState({ entities: newEntiesState });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>button</button>
        <Scene>
          {this.state.entities}
        </Scene>
      </div>
    );
  }
}

export default App;
