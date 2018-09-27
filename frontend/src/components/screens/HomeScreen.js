import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchAllPosts } from '../../actions'
import PostList from '../commons/PostList'
import PostForm from '../commons/PostForm'

class HomeScreen extends Component {

  state = {
    loading: true
  }

  componentWillMount(){
    const { listPosts } = this.props
    listPosts()
      .then(() => {
        this.setState(() => ({loading: false}))
      })
  }

  render() {
    const { loading } = this.state
    const { posts } = this.props

    return (
        <div>
          <b>all categories</b>
          { loading && <p>Carregando</p>}
          { !loading && 
            <PostList posts={posts}/>
        }
          <PostForm post={{"id": ""}}/>
        </div>
    )
  }
}

function mapStateToProps ({ defaultReducer }) {
  return {
    posts: defaultReducer.posts
  }
}

function mapDispatchToProps (dispatch) {
  return {
    listPosts: (data) => dispatch(fetchAllPosts(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)