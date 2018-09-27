import React, { Component } from 'react';

class CategoryScreen extends Component {

  render() {
    return (
        <b>Category: {this.props.categoryId}</b>
    )
  }
}

export default CategoryScreen