import React, { Component } from 'react';

import { connect } from 'react-redux'
import { fetchCategories } from '../actions'

import HomeScreen from './screens/HomeScreen';
import CategoryScreen from './screens/CategoryScreen';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemText from '@material-ui/core/ListItemText';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar,
});

class ReadableApp extends Component {
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

    render(){
        const { classes } = this.props;
        const { categories } = this.props

        return (
            <Router>
            <div className={classes.root}>
            <AppBar position="absolute" className={classes.appBar}>
                <Toolbar>
                <Typography variant="title" color="inherit" noWrap>
                    Readable App
                </Typography>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" classes={{paper: classes.drawerPaper,}}>
                <div className={classes.toolbar} />
                <List>
                    <div>
                    <ListSubheader>Categories</ListSubheader>
                    <ListItem>
                    <Link to='/'><ListItemText primary="All" /></Link>
                    </ListItem>
                    {
                    categories.map((category) => (
                        <ListItem key={category.name}>
                        <Link to={category.name}><ListItemText primary={category.name} /></Link>
                        </ListItem>
                    ))
                    }
                </div>
                </List>
                <Divider />
                
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Route exact path="/" render={() => (<HomeScreen/>)}/>
                <Route path="/:category" render={({ match }) => (<CategoryScreen categoryId={match.params.category}/>)}/>
            </main>
            </div>
            </Router>
        );      
    }
  
}

ReadableApp.propTypes = {
  classes: PropTypes.object.isRequired,
};

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

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(ReadableApp));