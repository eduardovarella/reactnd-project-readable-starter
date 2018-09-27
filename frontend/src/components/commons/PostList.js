import React, { Component } from 'react';
import Post from './Post';

class PostList extends Component {
    
    render() {
        const { loading, posts } = this.props

        return (
            <div>
              { loading && <p>Carregando</p>}
              { !loading && posts.length > 0 && (
                <div>
                  {
                    posts.map((post) => (
                      <Post key={post.id} post={post}/>
                    ))
                  }
                </div>
              )}
              { !loading && posts.length === 0 && (
                  <span>No posts in this category.</span>
                )
              }
            </div>
        )
    }
}

export default PostList