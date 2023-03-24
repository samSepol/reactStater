import { useState } from "react";
import {MdAdd} from "react-icons/md";
import classes from "./NewPost.module.css"
function NewPost(props){
    const[author,setAuthor]=useState('')
    const[body,setBody]=useState('')
    function onAuthorChangeHandler(event){
        setAuthor(event.target.value);
    }

    function onBodyChangeHandler(event){
        setBody(event.target.value);
    }
    function formHandler(event){
        event.preventDefault()
        const formData={
            author:author,
            body:body,
        };
        props.onAddNewPost(formData)
        console.log(formData)
    }
        return(
        <>
    <form className={classes.form} onSubmit={formHandler}>
 
    <input type="text"  className={classes.inputField} onChange={onAuthorChangeHandler} placeholder="Enter Your Name"/>

  <br />

    <textarea name="message" rows="5" cols="30" className={classes.textareaField} onChange={onBodyChangeHandler} placeholder="Type your post...."></textarea>

  <br />
  <button className={classes.submitButton}><MdAdd></MdAdd></button>

</form>

        </>
    );
}

export default NewPost;