import React, { Component } from 'react';
import GameList from './gameList'
import {connect} from 'react-redux'
import {loadGames, createGame} from '../../actions/games'

class App extends Component {
  componentDidMount() {
    this.props.loadGames()
  }
onSubmit = (e) => {
    e.preventDefault()
    let gameName = this.refs['game-name'].value
    let gameCats = this.refs['game-categories'].value
    let gamePlats = this.refs['game-platforms'].value
    let gameTypes = this.refs['game-gameTypes'].value
    console.log(gameName + gameCats + gamePlats + gameTypes)
    this.props.createGame(gameName, gameCats, gamePlats, gameTypes)
  }
render() {
    return (
      <div>
        <GameList games={this.props.games}/>
        <form onSubmit={this.onSubmit}>
          <input ref="game-name"/>
          <input ref="game-categories"/>
          <input ref="game-platforms"/>
          <input ref="game-gameTypes"/>
          <button>Add new game</button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    games: state.games.games
  }
}
export default connect(mapStateToProps, {loadGames, createGame})(App)
