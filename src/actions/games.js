import { getGamesDB, addGame } from '../scripts/fire'
import actionType from '../constants'

export const loadGames = () => {
 return dispatch => {
  dispatch({
   type: actionType.LOAD_GAMES_REQUEST
  })
  getGamesDB()
   .then(games => {
    dispatch({
     type: actionType.LOAD_GAMES_SUCCESS,
     payload: games.val()
    })
   })
   .catch(error => {
    dispatch({
     type: actionType.LOAD_GAMES_FAILED,
     payload: error
    })
   })
 }
}

export const createGame = (name, categories, platforms, gameTypes) => {
 return dispatch => {
  dispatch({
   type: actionType.ADD_GAME_REQUEST
  })
  addGame(name, categories, platforms, gameTypes)
   .then(res => {
    loadGames()(dispatch) //refresh the data to keep up-to-date
    dispatch({
     type: actionType.ADD_GAME_SUCCESS
    })
   })
   .catch(error => {
    dispatch({
     type: actionType.ADD_GAME_FAILED,
     payload: error
    })
   })
 }
}