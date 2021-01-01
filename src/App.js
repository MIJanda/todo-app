import { Component} from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends Component {
    state = {
        todos: [
            {id: 1, content: "make the bed"},
            {id: 2, content: "say a prayer"},
            {id: 3, content: "exercise"},
            {id: 4, content: "code..."},
            {id: 5, content: "cook some beats"},
            {id: 6, content: "enlightenment"}
        ]
    }

    addTodo = todo => {
        todo.id = Math.random();
        let todos = [...this.state.todos, todo];
        this.setState({
            todos
        });
    }

    deleteTodo = id => {
        const todos = this.state.todos.filter(todo => todo.id !== id);
        this.setState({ todos });
    }

    render() {
        return (
            <div className="container">
                <h1 className="indigo-text m-5 center">Todos</h1>
                <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} className="list-group"/>
                <AddTodo addTodo={this.addTodo}/>
            </div>
        )
    }
}


export default App;