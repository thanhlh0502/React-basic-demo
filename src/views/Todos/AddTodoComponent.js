import React from "react";

class AddToDoComponent extends React.Component{

    state={
        todo:""
    }

    handleOnchangeTodo = (event) =>{
        this.setState({
            todo: event.target.value
        })
    }

    handleAddTodo = () =>{
        let todo = {
            id: Math.floor(Math.random() *1000),
            title: this.state.todo
        }
        this.props.addTodo(todo);

        this.setState({
            todo:""
        })
    }

    render(){
        return(
            <div>
                <input value ={this.state.todo} 
                    onChange = {(event) => this.handleOnchangeTodo(event)}
                />
                
                &nbsp;
                <button onClick = {() => this.handleAddTodo()}>Add</button>
            </div>
        )
    }
}

export default AddToDoComponent