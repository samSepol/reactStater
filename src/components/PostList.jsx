import { useState } from 'react';
import Posts from './Posts'
import classes from './PostList.module.css'
import NewPost from './NewPost';
function PostList(){
   const [posts,setPosts]=useState([])

   function addNewPostHandler(formData){
    // update the state if it depends on the previous state

    // send POST request to backend server
    fetch('http://localhost:8000/posts',{
        method:'POST', 
        data:JSON.stringify(formData),
        headers:{
         'Content-Type':'application/json',
        },
    })
    console.log('type of data',typeof(data))

    setPosts((existingPosts)=>[formData, ...existingPosts])
   }
    return(
        <>
        <NewPost onAddNewPost={addNewPostHandler}/>
        {posts.length>0 && (<ul className={classes.list}>
            {posts.map((post,index)=>
            <Posts key={index} author={post.author} body={post.body}/>)}
        </ul>)}
        {posts.length===0 &&(
            <div style={{textAlign:'center',color:'whitesmoke'}}>
                <h2>No posts yet !</h2>
                <p>Add some posts :</p>
            </div>
        )}
        </>
    )
}

export default PostList;