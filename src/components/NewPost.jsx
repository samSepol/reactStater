
import classes from "./NewPost.module.css"
function NewPost(props){
        return(
        <>
    <form className={classes.form}>
  <label>
    Name:
    <input type="text" name="author" className={classes.inputField} onChange={props.onAuthorChange}/>
  </label>
  <br />
  <label>
    Message:
    <textarea name="message" rows="5" cols="30" className={classes.textareaField} onChange={props.onBodyChange}></textarea>
  </label>
  <br />
  <input type="submit" value="Submit" className={classes.submitButton}/>
</form>
  {/* <button className={classes.submitButton} onClick={clickHandler}>Clicked me {count} times</button> */}

        </>
    );
}

export default NewPost;