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
  <label>
    Name:
    <input type="text"  className={classes.inputField} onChange={onAuthorChangeHandler}/>
  </label>
  <br />
  <label>
    Message:
    <textarea name="message" rows="5" cols="30" className={classes.textareaField} onChange={onBodyChangeHandler}></textarea>
  </label>
  <br />
  <button className={classes.submitButton}><MdAdd></MdAdd></button>

</form>

        </>
    );
}

export default NewPost;