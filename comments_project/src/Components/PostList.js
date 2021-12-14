import Post from "./Post";
import '../css/PostList.css'

const PostList=({posts, onIncClickHandler, onDecClickHandler})=>{
    return (
        <><div className='title'>Comments project</div>
        <div className='post-list'>
            {posts.map(post=>
            <Post
            key={post.id}
            post={post}
            like={post.like}
            dislike={post.dislike}
            onDecClickHandler={onDecClickHandler}
            onIncClickHandler={onIncClickHandler}
                />)}
        </div>
        </>
    )
}

export default PostList