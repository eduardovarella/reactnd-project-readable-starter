import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchPosts } from '../../actions'
import PostList from '../commons/PostList'

class CategoryScreen extends Component {
  state = {
    loading: true
  }

  loadPosts(){
    const { categoryId, listPosts } = this.props
    listPosts(categoryId)
      .then(() => {
        this.setState(() => ({loading: false}))
      })
  }

  componentWillReceiveProps(nextProps)
  {
    const { categoryId, listPosts } = this.props
    if(nextProps.categoryId !== categoryId)
    {
      this.setState(() => ({loading: true}))
      listPosts(nextProps.categoryId)
        .then(() => {
          this.setState(() => ({loading: false}))
        })
    }
  }

  componentWillMount(){
    this.loadPosts();
  }

  render() {
    const { loading } = this.state
    const { categoryId, posts } = this.props

    return (
        <div>
          <b>category: {categoryId}</b>
          { loading && <p>Carregando</p>}
          { !loading && 
            <PostList posts={posts}/>
        }
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
    listPosts: (data) => dispatch(fetchPosts(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryScreen)