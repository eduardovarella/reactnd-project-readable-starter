import { combineReducers } from 'redux'

/*
import {
  ADD_RECIPE,
  REMOVE_FROM_CALENDAR,
} from '../actions'
*/

const initialState = {}

function defaultReducer (state = initialState, action) {
    /*
  switch (action.type) {
    case ADD_RECIPE :
      const { recipe } = action

      return {
        ...state,
        [recipe.label]: recipe,
      }
    default :
      return state
  }
  */
 return state
}

export default combineReducers({
    defaultReducer,
})