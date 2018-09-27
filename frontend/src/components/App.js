import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchCategories } from '../actions'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import CategoryScreen from './screens/CategoryScreen';

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
      <Router>
      <div className="App">
        { loading && <p>Carregando</p>}
        { !loading && <div>
        <ul>
          <Link to='/'>all</Link>
          {
            categories.map((category) => (
              <span key={category.name}>
                <span> |</span> <Link to={category.name}>{category.name}</Link>
              </span>
              )
            )
          }
        </ul>
        
        <Route exact path="/" render={() => (
          <HomeScreen/>
        )}/>
        <Route path="/:category" render={({ match }) => (
          <CategoryScreen categoryId={match.params.category}/>
        )}/>
        </div>}
      </div>
      </Router>
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
