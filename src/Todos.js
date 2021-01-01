const Todos = ({todos, deleteTodo}) => {
    const todoList = todos.length ? todos.map(todo => {
        return (
            <div key={todo.id} className="list-group-item">
                <span className="todos orange-text" onClick={() => { deleteTodo(todo.id) }}> { todo.content } </span>
            </div>
        )
    }) : 
    <div className="list-group-item red-text">
        <p>It's time to sleep... Go build 'em dreams up!</p>
    </div>

    return todoList;
};


export default Todos;

// ideas
// todo: hover to indicate green i.e task done
// capitalize todos, increase text size
// ensure tasks are done in order else disorder
// else necessary change the order of the tasks
// expand momentarily to display task being crossed off
// fade-out animation of done task
// like some ninja issh, huwaaa! (Bruce Lee impression :)