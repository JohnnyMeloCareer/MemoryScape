import React, { Component } from "react";
// import logo from './logo.svg';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import SkillCard from "./components/SkillCard";
import Wrapper from "./components/Wrapper";
import Modal from "./components/Modal";
import arrayShuffle from "array-shuffle";
import skill from "./skill.json";
import "./App.css";

// State the objects
class App extends Component {
  state = {
    skill,
    currentScore: 0,
    topScore: 0,
    winLoss: "",
    isModalOpen: false,

    // Add to Array if Add Click is true
    clicked: []
  };
  // Setting a setState object to listen for a click which will either Increment or decrement
  handleClick = id => {
    console.log("button clicked");
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  // Increment +1 with an alert
  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    console.log("Increment counter " + newScore);
    this.setState({
      currentScore: newScore
    });
    if (newScore === 12) {
      this.setState({ winLoss: "Congrats! Would you like to play again?" });
      this.toggleModal();
      if (newScore >= this.state.topScore) {
        this.setState({ topScore: newScore });
      }
    } else {
      this.handleShuffle();
    }
  };

  // Reset the handle with an alert
  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      winLoss: "You lose, try again!",
      clicked: []
    });
    if (this.state.currentScore >= this.state.topScore) {
      this.setState({ topScore: this.state.currentScore });
    }
    this.toggleModal();
  };

  // setState is rending the toggleable Modal
  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  };

  // Using the Modal component, they can click to replay aka refresh the page
  replayGame = () => {
    this.toggleModal();
  };
// Using the NPM package arrayShuffle, to shuffle the cards when clicked.
  handleShuffle = () => {
    let shuffleSkill = arrayShuffle(skill);
    this.setState({ skill: shuffleSkill });
  };
// The components that are being rendered on to the main page.
  render() {
    return (
      <div className="App">
        {this.state.isModalOpen ? (
          <Modal message={this.state.winLoss} replayGame={this.replayGame} />
        ) : null}

        <Navbar
          score={this.state.currentScore}
          topScore={this.state.topScore}
          winLoss={this.state.winLoss}
        />
        <Header />
        <Wrapper>
          {this.state.skill.map(skill => (
            // This going to allow us to render a component
            <SkillCard
              key={skill.id}
              handleClick={this.handleClick}
              handleIncrement={this.handleIncrement}
              handleReset={this.handleReset}
              handleShuffle={this.handleShuffle}
              id={skill.id}
              image={skill.image}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;

/* <SkillCard id="2" name="test" image="./images/Farming.png" />
<SkillCard id="3" name="test" image="./images/Firemaking.png" />
<SkillCard id="4" name="test" image="./images/Fishing.png" />
<SkillCard id="5" name="test" image="./images/Fletching.png" />
<SkillCard id="6" name="test" image="./images/Mining.png" />
<SkillCard id="7" name="test" image="./images/Agility.png" />
<SkillCard id="8" name="test" image="./images/Attack.png" />
<SkillCard id="9" name="test" image="./images/HP.png" />
<SkillCard id="10" name="test" image="./images/Prayer.png" />
<SkillCard id="11" name="test" image="./images/Runecrafti*/
