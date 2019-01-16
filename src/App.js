import React, { Component } from 'react';
// import logo from './logo.svg';
import Navbar from "./components/Navbar";
import SkillCard from "./components/SkillCard";
import skill from "./skill.json";
import './App.css';

class App extends Component {
  state = {
    skill
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
