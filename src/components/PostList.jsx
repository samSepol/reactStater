import { useState } from 'react';
import Posts from './Posts'
import classes from './PostList.module.css'
import NewPost from './NewPost';
function PostList(){
   const [posts,setPosts]=useState([])
   function addNewPostHandler(formData){
    // update the state if it depends on the previous state
    setPosts((existingPosts)=>[formData,...existingPosts])
   }
    return(
        <>
        <NewPost onAddNewPost={addNewPostHandler}/>
        <ul className={classes.list}>
            <li>
            {posts.map((post,index)=>
            <Posts key={index} author={post.author} body={post.body}/>)}
            </li>
        </ul>
        </>
    )
}

export default PostList;