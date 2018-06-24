import React, { Component } from 'react';
import './App.css';
import Wrapper from './components/wrapper/wrapper.js';
import Title from './components/title/Title.js';
import cards from './cards.json';
import Imagecard from "./components/imagecard/imagecard.js";

class App extends Component {
  state = {
    cards
  };

 CardHandler = (id) => {
    return (console.log (id));
  }

  render() {
    return (
      <Wrapper>
        <Title />
        {this.state.cards.map(card => {
          return (
            <Imagecard
            key = {card.id}
            id = {card.id} 
            image = {card.image}
            name = {card.name}
            CardHandler = {this.CardHandler}/>

          );
        })}

      </Wrapper>  
    );
  }
}

export default App;
