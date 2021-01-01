import { Component } from 'react';
class AddTodo extends Component {
    state = {
        content: ""
    }

    handleSubmit = e => {
        e.preventDefault;
        // const id = Math.random();
        // AddTodo([{...this.state, id}]);
        console.log(this.state);
    }

    handleChange = e => {
        this.setState({
            content: e.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Go ahead and add another task</label>
                    <input type="text" onChange={this.handleChange} className="form-control-lg"/>
                </form>
            </div>
        )
    }
}

export default AddTodo;