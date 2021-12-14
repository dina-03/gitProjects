const Todo = ({index, todo, statusChangeHandler, removeHandler})=>{
    return(
        <div className = 'row'>
            <input className = 'check_box' type="checkbox"
                   checked ={todo.status}
                   onChange = {e => statusChangeHandler(index, e.target.checked)}/>
            <span style = {{textDecoration: todo.status ? 'line-through':'none' }}>{todo.text}</span>
            <button onClick = {() => removeHandler(index)}>Remove</button>       
        </div>
    )
}
export default Todo;