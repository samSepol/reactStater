import Posts from './Posts'
import classes from './PostList.module.css'
function PostList(){
    return(
        <ul className={classes.list}>
            <li>
            <Posts name="samarth" body="Learn Reactjs and build portfolio!"/>
            </li>
            <li>
            <Posts name="Elon" body="Learn something new everyday and build knowledge for yourself!"/>    
            </li>
        </ul>
    )
}

export default PostList;