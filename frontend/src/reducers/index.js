import { combineReducers } from 'redux'

import {
  LIST_ALL_CATEGORIES
} from '../actions'

const initialState = {
  categories: [],
  posts: []
}

function defaultReducer (state = initialState, action) {
  switch (action.type) {
    case LIST_ALL_CATEGORIES:
      return {
        ...state,
        categories: action.categories,
      }
    default :
      return state
  }
}

export default combineReducers({
    defaultReducer,
})