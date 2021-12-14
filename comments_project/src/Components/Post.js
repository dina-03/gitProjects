import Counter from "./Counter";
import '../css/Post.css';

export default function Post({post:{id, title, text, author, like, dislike, data},onIncClickHandler, onDecClickHandler}){
    return (
        <div className='post'>
            <h2>{title}</h2>
            <p> {text}</p>
            <h3>Author: {author}</h3>
            <p>{data=new Date().toLocaleDateString()}</p>
            <Counter id={id}
            like={like}
            dislike={dislike}
            onDecClickHandler={onDecClickHandler}
            onIncClickHandler={onIncClickHandler}
            />
        </div>
    )
}