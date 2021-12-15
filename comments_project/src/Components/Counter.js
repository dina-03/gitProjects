//import '.../css/Counter.css';
    
const Counter=({id,like,dislike, onIncClickHandler, onDecClickHandler})=>{
    return (
        <div className='counter'>
            <button className='green' 
            onClick={()=>onIncClickHandler(id)}><span>{like?like:0}</span> 👍
            </button>            
            <button className='red' onClick={()=>onDecClickHandler(id)}><span>{dislike?dislike:0}</span> &#128078;
            </button>
            </div>
    ) 
}

export default Counter