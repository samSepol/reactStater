import {useState} from "react"
import Posts from './Posts'
import classes from './PostList.module.css'
import NewPost from './NewPost';
function PostList(){
    const[author,setAuthor]=useState('')
    const [body,setBody]=useState('')
    function onAuthorChangeHandler(event){
        setAuthor(event.target.value);
    }
    function onBodyChangeHandler(event){
        setBody(event.target.value);
    }
    return(
        <>
        <NewPost onAuthorChange={onAuthorChangeHandler} onBodyChange={onBodyChangeHandler}/>
        <ul className={classes.list}>
            <li>
            <Posts name={author} body={body}/>
            </li>
            <li>
            {/* <Posts name="Elon" body="Learn something new everyday and build knowledge for yourself!"/>     */}
            </li>
        </ul>
        </>
    )
}

export default PostList;