
const api = "http://localhost:3001"


// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const listCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)

export const listPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)

export const listPostsByCategory = (categoryId) =>
  fetch(`${api}/${categoryId}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)

export const addPost = (post) =>
  fetch(`${api}/posts`, {
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ post })
    }).then(res => res.json())
      .then(data => data)

export const getPost = (postId) =>
  fetch(`${api}/posts/${postId}`, { headers })
    .then(res => res.json())
    .then(data => data)

export const voteOnPost = (postId) =>
  fetch(`${api}/posts/${postId}`, {
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: '{"option": "upVote"}'
    }).then(res => res.json())
      .then(data => data)

export const unVoteOnPost = (postId) =>
   fetch(`${api}/posts/${postId}`, {
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: '{"option": "downVote"}'
    }).then(res => res.json())
      .then(data => data)

export const updatePost = (post) =>
  fetch(`${api}/posts/${post.id}`, {
      method: 'PUT',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ post })
    }).then(res => res.json())
      .then(data => data)
   
export const deletePost = (postId) =>
  fetch(`${api}/posts/${postId}`, {
      method: 'DELETE',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: {}
    }).then(res => res.json())
      .then(data => data)

export const listCommentsByPost = (postId) =>
      fetch(`${api}/posts/${postId}/comments`, { headers })
        .then(res => res.json())
        .then(data => data)

export const addComment = (comment) =>
  fetch(`${api}/comments`, {
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ comment })
    }).then(res => res.json())
      .then(data => data)

export const getComment = (commentId) =>
  fetch(`${api}/comments/${commentId}`, { headers })
    .then(res => res.json())
    .then(data => data)

export const voteOnComment = (commentId) =>
  fetch(`${api}/comments/${commentId}`, {
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: '{"option": "upVote"}'
    }).then(res => res.json())
      .then(data => data)

export const unVoteOnComment = (commentId) =>
  fetch(`${api}/comments/${commentId}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: '{"option": "downVote"}'
  }).then(res => res.json())
    .then(data => data)

export const updateComment = (comment) =>
  fetch(`${api}/comments/${comment.id}`, {
      method: 'PUT',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ post })
    }).then(res => res.json())
      .then(data => data)
     
export const deleteComment = (commentId) =>
  fetch(`${api}/comments/${commentId}`, {
      method: 'DELETE',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: {}
    }).then(res => res.json())
      .then(data => data)