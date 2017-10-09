import React, { Component } from 'react';
import _ from 'lodash'

export default (props) => {
  return (
    <ul>
      {
        _.map(props.games, (game) => <li key={game.id}>{game.name}: {game.categories} on {game.platforms} and {game.gameTypes}</li>)
      }
    </ul>
  )
}