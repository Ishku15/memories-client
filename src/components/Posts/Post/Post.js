import React from "react";
import useStyles from "./styles"
import { 
    Card, 
    CardActions, 
    CardContent, 
    CardMedia, 
    Button, 
    Typography } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete"
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment'
import { useDispatch } from "react-redux";
import { deletePost } from "../../../actions/posts";

const Post = ({ post, setCurrentId }) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} title = {post.title}/>
                <div className={classes.overlay}>
                    <Typography variant = "body2">
                    {moment(post.createdAt).fromNow()}
                    </Typography>
                </div>
                <div className={classes.overlay2}>
                    <Button 
                        style = {{color: "white"}} 
                        size = "small" 
                        onClick = {() => setCurrentId(post._id)}><MoreHorizIcon fontSize="medium" /></Button>
                </div> 
                <div 
                    className={classes.title} 
                    variant = "h5"
                    gutterBottom = " &nbsp;true"><h1>{post.title}</h1>
                </div>
                <CardContent>
                <div 
                    variant = "body2"
                    gutterBottom
                    color = "textSecondary"
                    component = "p">{post.message}
                </div>
                </CardContent>
                <CardActions className={classes.cardActions}>
                </CardActions>
                <CardActions className={classes.cardActions}>
                    <Button size = "small" color = "primary" onClick = {() => dispatch(deletePost(post._id))}>
                        <DeleteIcon fontSize = "small" />
                        Delete
                    </Button>
                </CardActions>
        </Card>
    )
}

export default Post