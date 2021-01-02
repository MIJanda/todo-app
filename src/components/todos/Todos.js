const Todos = ({todos, deleteTodo}) => {
    const todoList = todos.length ? todos.map(todo => {
        return (
            <div key={todo.id} className="list-group-item d-grid gap-3 center" >
            
                <input className="form-check-input me-1" type="checkbox"/>
                <span className="todos orange-text fs-4 text-capitalize" onClick={() => { deleteTodo(todo.id) }}> { todo.content } </span>
                
            </div>
        )
    }) : 
    <div className="list-group-item text-capitalize red-text fs-3 center">
        {/* add sleep icon, battery shutdown icon type issh */}
        <p>Sleep time... Go build 'em dreams up!</p>
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
// call deleteTodo after checking the todo item off the list
// animate the deletion, 1s after check