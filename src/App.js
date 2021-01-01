import { Component} from 'react';
import Todos from './Todos';

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

    deleteTodo = id => {
        const todos = this.state.todos.filter(todo => todo.id !== id);
        this.setState({ todos })
    }

    render(){
        return (
            <div className="container center">
                <h1 className="blue-text">Todos</h1>
                <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} className="collection"/>
            </div>
        )
    }
}


export default App;