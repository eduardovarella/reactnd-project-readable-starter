import React, { Component } from 'react';

class Post extends Component {
    
    render() {
        const { id, timestamp, title, body, author, category, voteScore, deleted, commentCount } = this.props.post
        
        return (
            <div>
                <p><b>{title}</b></p>
                <p><i>By {author}, on {timestamp} about {category}</i></p>
                <p>{body}</p>
                <p><b>Score:</b> {voteScore} - <b>Comments:</b> {commentCount}</p>
            </div>
        )
    }
}

export default Post