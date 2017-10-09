import _ from 'lodash'
import actionType from '../constants/index'
let initialState = {
  games: []
}
export default (state = initialState, action) => {
  let newState = _.merge({}, state)
  switch(action.type) {
    case actionType.LOAD_GAMES_SUCCESS:
      newState.games = action.payload
      return newState
    default:
      return state
  }
}