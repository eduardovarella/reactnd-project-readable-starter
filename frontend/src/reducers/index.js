import { combineReducers } from 'redux'

import {
  LIST_ALL_CATEGORIES,
  LIST_ALL_POSTS,
  LIST_POSTS_BY_CATEGORY
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
    case LIST_ALL_POSTS:
      return {
        ...state,
        posts: action.posts,
      }
    case LIST_POSTS_BY_CATEGORY:
      return {
        ...state,
        posts: action.posts,
      }
    default :
      return state
  }
}

export default combineReducers({
    defaultReducer,
})