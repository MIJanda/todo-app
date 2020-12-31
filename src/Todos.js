const Todos = ({todos, deleteTodo}) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return ( 
                <div key={todo.id} className="collection-item" onClick={() => {deleteTodo(todo.id)}}>
                    <span> {todo.content} </span>
                </div>
            )
        })
    ) : ( 
        <p className="center">You don't have any todos left...</p>
    );


   return (
       <div className="collection todos">
           { todoList }
       </div>
   ) 
};

export default Todos;