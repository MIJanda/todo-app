import { Component } from 'react';
class AddTodo extends Component {
    state = {
        content: ""
    }

    handleSubmit = e => {
        e.preventDefault();    
        this.props.addTodo(this.state);
        this.setState({
            content: ""
        });
    }

    handleChange = e => {
        this.setState({
            content: e.target.value
        })
    }

    render() {
        return (
            <div className="m-5">
                <form onSubmit={this.handleSubmit}>
                    <label className="fs-5 indigo-text text-capitalize">Add another task</label>
                    <input type="text" onChange={this.handleChange} value={this.state.content} className="form-control-lg"/>
                </form>
            </div>
        )
    }
}

export default AddTodo;