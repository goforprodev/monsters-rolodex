// import React from 'react';
import React,{Component} from 'react'
import { CardList } from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component.jsx'

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField:''
    }

    // bind the function to the constructor state
    // this.handleChange = this.handleChange.bind(this)
  }
  /* LIFECYCLE METHODS */
  // mounting is when react puts our code on the page for the first time
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))

  }
  // when using native function you have to bind it to the app state
  // so always use arrow function for class objecta 
  handleChange = (e) => {
    this.setState({searchField:e.target.value})
  }
  

  render() {
    const {monsters,searchField} = this.state
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase().trim()))

    return (
      <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox
      placeholder={"search monsters"}
      handleChange={this.handleChange}
       />

        <CardList monsters={filteredMonsters} />
        {/* {
          filteredMonsterv
        } */}
      </div >
    );
  }
}

export default App;
