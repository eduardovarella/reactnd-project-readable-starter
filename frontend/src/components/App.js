import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from './logo.svg';
import { fetchCategories } from '../actions'
import './App.css';

class App extends Component {
  state = {
    loading: true
  }

  componentWillMount(){
    const { listCategories } = this.props
    listCategories()
      .then(() => {
        this.setState(() => ({loading: false}))
      })
  }

  render() {
    const { loading } = this.state
    const { categories } = this.props
    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        { loading && (<p>Carregando</p>)}
        { !loading && (
          categories.map((category) => (
            <p>{category.name}</p>
          ))
        )}
      </div>
    );
  }
}

function mapStateToProps ({ defaultReducer }) {
  return {
    categories: defaultReducer.categories
  }
}

function mapDispatchToProps (dispatch) {
  return {
    listCategories: (data) => dispatch(fetchCategories(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
