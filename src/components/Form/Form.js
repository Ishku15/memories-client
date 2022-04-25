import React, {useState, useEffect} from "react";
import useStyles from "./styles"
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";
import { useSelector } from "react-redux";

const Form = ({currentId, setCurrentId}) => {
    
    const post = useSelector((state) => currentId ? state.posts.find((message) => message._id === currentId): null)
    const [postData, setPostData] = useState({ title: '', message: ''})
    const dispatch = useDispatch()
    const classes = useStyles()
    useEffect(() => {
        if(post)
            setPostData(post)
    }, [post])
    const handleSubmit = (e) => {
        e.preventDefault()
        if(currentId === 0) {
            dispatch(createPost(postData))
        } else {
            dispatch(updatePost(currentId, postData))
        }
        clear()
    }
    const clear = () => {
        setCurrentId(0)
        setPostData({ title: '', message: ''})
    }
    return (
        <Paper className = {classes.paper}>
            <form autoComplete = "off" noValidate className = {`${classes.root} ${classes.form}`}onSubmit = {handleSubmit}>
                <Typography variant = "h6">{currentId ? 'Editing' : 'Create'} a note</Typography>
                <TextField 
                    name = "title" 
                    variant = "outlined" 
                    label = "title"
                    fullWidth
                    value = {postData.title}
                    onChange = {(e) => setPostData({
                         ...postData, title: e.target.value
                        })} />
                <TextField 
                    name = "message" 
                    variant = "outlined" 
                    label = "message"
                    fullWidth
                    value = {postData.message}
                    onChange = {(e) => setPostData({
                         ...postData, message: e.target.value
                        })} />
                <Button 
                    className={classes.buttonSubmit} 
                    variant = "contained" 
                    color = "primary"
                    size = "large"
                    type = "submit" 
                    fullWidth>Submit</Button>
                <Button  
                    variant = "contained" 
                    color = "secondary"
                    size = "small" 
                    onClick = {clear} 
                    fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form