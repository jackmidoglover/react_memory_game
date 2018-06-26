import React, { Component } from 'react';
import './App.css';
import Wrapper from './components/wrapper/wrapper.js';
import cards from './cards.json';
import Imagecard from "./components/imagecard/imagecard.js";

class App extends Component {
  state = {
    cards: cards,
    score: 0,
    highest: 0,
  };

  CardShuffle = () => {
    let shuffledDeck = [...cards];
    console.log(shuffledDeck)
    let cIndex = shuffledDeck.length, tValue, rIndex;
    while (cIndex){
        rIndex = Math.floor(Math.random() * cIndex--)
        tValue = shuffledDeck[cIndex];
        shuffledDeck[cIndex] = shuffledDeck[rIndex];
        shuffledDeck[rIndex] = tValue;
    }
    this.setState ({
      cards: shuffledDeck
    });
}


 ClickHandler = (id) => {
  let clickedCardIndex = this.state.cards.findIndex(x => {
    return x.id === id;
  });
  let clickedCard = this.state.cards[clickedCardIndex];
  let newScore = this.state.score + 1;
   if (clickedCard.clicked === false){
    clickedCard.clicked = true;
     console.log(newScore);
     this.setState({
       score: newScore
      })
   }
   else {
     console.log("second condition hits");
     if (this.state.score > this.state.highest){
     this.setState({
       cards: cards,
       score: 0,
       highest: newScore
      })
    }
    else {
      this.setState({
        cards: cards,
        score: 0,
      })
    }
   }
   console.log(clickedCard);
    this.CardShuffle();
    // return (console.log (id));
  
  }

  render() {
    return (
      <Wrapper
      score = {this.state.score}
      highest = {this.state.highest}
      >
        {this.state.cards.map(card => {
          return (
            <Imagecard
            key = {card.id}
            id = {card.id} 
            image = {card.image}
            name = {card.name}
            ClickHandler = {this.ClickHandler}/>

          );
        })}

      </Wrapper>  
    );
  }
}

export default App;
