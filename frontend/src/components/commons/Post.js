import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';

const styles = {
    card: {
      maxWidth: 345,
    },
    badge: {
        top: -10,
        right: -20,
        // The border color match the background color.
        border: `2px solid`,
      },
  };

class Post extends Component {

    render() {
        const { classes } = this.props;

        const { id, timestamp, title, body, author, category, voteScore, deleted, commentCount } = this.props.post
        
        return (
            <div>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="headline" component="h2">{title}</Typography>
                            <Typography className={classes.pos} color="textSecondary">By {author}, on {timestamp} about {category}</Typography>
                        </CardContent>
                        <CardContent>
                            <Typography component="p">{body}</Typography>
                        </CardContent>
                        <CardActions>
                            <IconButton  size="small" color="primary">
                                <Icon>edit</Icon>
                            </IconButton >
                            <IconButton  size="small" color="primary">
                            <Icon>delete</Icon>
                            </IconButton >
                            <IconButton  size="small" color="primary">
                            <Icon>thumb_up</Icon>
                            </IconButton>
                            <IconButton  size="small" color="primary">
                            <Icon>thumb_down</Icon>
                            </IconButton >
                            <Badge badgeContent={voteScore} color="primary" classes={{ badge: classes.badge }}>
                                <i class="material-icons" style={{marginLeft: '5px'}}>thumbs_up_down</i>
                            </Badge>
                            <Badge badgeContent={commentCount} color="primary" classes={{ badge: classes.badge }}>
                                <i class="material-icons" style={{marginLeft: '15px'}}>speaker_notes</i>
                            </Badge>
                        </CardActions>
                    </CardActionArea>
                </Card>
                <br/>
            </div>
            
        )
    }
}

export default withStyles(styles)(Post);