// const names=["Samarth","Elon","Bill","Mark","Steve","Dave"];

// choose random name from list
// const randomIndex=Math.floor(Math.random()*names.length);
// console.log(randomIndex)

// const randomName=names[randomIndex]

import classes from "./Posts.module.css";

function Posts(props){
return(
    <div className={classes.post}>
    <p className={classes.name}>Name:{props.author}</p>
    <p className={classes.tweet}>Tweet:{props.body}</p>
    </div>
)
       
}

export default Posts;