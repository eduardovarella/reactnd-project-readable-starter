import * as API from '../utils/API'

export const LIST_ALL_CATEGORIES = 'LIST_ALL_CATEGORIES'
export const LIST_ALL_POSTS = 'LIST_ALL_POSTS'
export const LIST_POSTS_BY_CATEGORY = 'LIST_POSTS_BY_CATEGORY'
export const ADD_POST = 'ADD_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const DELETE_POST = 'DELETE_POST'
export const ADD_VOTE_TO_POST = 'ADD_VOTE_TO_POST'
export const SUB_VOTE_FROM_POST = 'SUB_VOTE_FROM_POST'
export const LIST_COMMENTS_BY_POST = 'LIST_COMMENTS_BY_POST'
export const ADD_COMMENT = 'ADD_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const ADD_VOTE_TO_COMMENT = 'ADD_VOTE_TO_COMMENT'
export const SUB_VOTE_FROM_COMMENT = 'SUB_VOTE_FROM_COMMENT'

export const receiveAllCategories = categories => ({
    type: LIST_ALL_CATEGORIES,
    categories
  });
  
export const fetchCategories = () => dispatch => (
    API.listCategories().then(categories => dispatch(receiveAllCategories(categories)))
);

export const receiveAllPosts = posts => ({
    type: LIST_ALL_POSTS,
    posts
  });
  
export const fetchAllPosts = () => dispatch => (
    API.listPosts().then(posts => dispatch(receiveAllPosts(posts)))
);

export const receivePosts = posts => ({
    type: LIST_POSTS_BY_CATEGORY,
    posts
  });
  
export const fetchPosts = (category) => dispatch => (
    API.listPostsByCategory(category).then(posts => dispatch(receivePosts(posts)))
);