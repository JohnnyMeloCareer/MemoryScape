import React, { Component } from 'react';
// import logo from './logo.svg';
import Navbar from "./components/Navbar";
import SkillCard from "./components/SkillCard";
import skill from "./skill.json";
import './App.css';

class App extends Component {
  state = {
    skill,
    currentScore: 0,
    topScore: 0,
    winLoss: "",

      // Add to Array if Add Click is true
    clicked: []
  };

  handleClick = id => {
    console.log("button clicked");
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    }
  };

  handleIncrement = () => {

    const newScore = this.state.currentScore + 1;
    console.log("Increment counter " + newScore);
    this.setState({
      currentScore: newScore,
    });
    if (newScore === 12) {
      this.setState({ winLoss: "Congrats! Play some more?" });
      this.toggleModal()
      if (newScore >= this.state.topScore) {
        this.setState({ topScore: newScore });
      }
    } else {
      this.handleShuffle();
    }
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      winLoss: "You lose, try again!",
      clicked: [],
    });
    if (this.state.currentScore >= this.state.topScore) {
      this.setState({ topScore: this.state.currentScore });
    }
  }

  render() {
    return (
      <div className="App">
      <Navbar />
      <SkillCard id="1" name="test" image="./images/Construction.png" />
      </div>
    );
  }
}

export default App;
