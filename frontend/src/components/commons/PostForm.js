import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost, editPost  } from '../../actions';
import { LocalForm, Control } from 'react-redux-form';

class PostForm extends Component {
    
    guid() {
        function s4() {
          return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }

    handleSubmit(values) { 
        const { add } = this.props;

        add({
            ...values,
            id: this.guid(),
            author: 'me',
            timestamp: Date.now()
        }).then(() => {
            this.setState(() => ({loading: false}))
        })
    }

    render() {
        const { id, title, body, category } = this.props.post
        const { categories } = this.props
        
        return (
            /*
            <div>
                <p><b>{title}</b></p>
                <p><i>By {author}, on {timestamp} about {category}</i></p>
                <p>{body}</p>
                <p><b>Score:</b> {voteScore} - <b>Comments:</b> {commentCount}</p>
            </div>
            */
            <LocalForm
                onSubmit={(values) => this.handleSubmit(values)}>
                <Control.text model=".title" defaultValue={title}/>
                <Control.textarea model=".body" defaultValue={body} />
                <Control.select model=".category" defaultValue={category}>
                    <option key="-" value="">- category -</option>
                    {
                        categories.map((category) => (
                            <option key={category.name} value={category.name}>{category.name}</option>
                        ))
                    }
                </Control.select>
                <button>Submit</button>
            </LocalForm>
        )
    }
}

function mapStateToProps ({ defaultReducer }) {
    return {
      categories: defaultReducer.categories
    }
  }
  
  function mapDispatchToProps (dispatch) {
    return {
      add: (data) => dispatch(addPost(data)),
      edit: (data) => dispatch(editPost(data))
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(PostForm)