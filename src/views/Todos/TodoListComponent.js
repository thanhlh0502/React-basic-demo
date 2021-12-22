import React from "react";
import AddToDoComponent from "./AddTodoComponent";

class ToDoListComponent extends React.Component{

    state = {
        listTodo: [
            {id: 'todo1', title: 'This is task 01'},
            {id: 'todo2', title: 'This is task 02'},
            {id: 'todo3', title: 'This is task 03'}
        ],
        todoEdit: {}
    }

    handleDeleteTodo = (todo) =>{
        let listTodoCopy = this.state.listTodo;
        listTodoCopy = listTodoCopy.filter(x=>x.id !== todo.id)
        this.setState({
            listTodo: listTodoCopy
        })
    }

    handleOnchangeEditTodo = (event) =>{
        let todoCopy = {...this.state.todoEdit};
        todoCopy.title = event.target.value;
        this.setState({
            todoEdit : todoCopy
        })
    }

    handleEditTodo = (todo) => {
        let {listTodo, todoEdit} = this.state;
        let isEmpty = Object.keys(todoEdit).length === 0;
        if(!isEmpty && todo.id=== todoEdit.id){
            let todoIndex =  listTodo.findIndex(x=>x.id === todo.id);
            listTodo[todoIndex].title = todoEdit.title;

            this.setState({
                todoEdit:{}
            })

            return;
        }
            
        this.setState({
            todoEdit : todo
        })
    }

    addTodo = (todo) =>{
        this.setState({
            listTodo: [...this.state.listTodo, todo]
        })
    }
    render(){
        let {listTodo, todoEdit} = this.state;
        let isEmpty = Object.keys(todoEdit).length === 0;

        return(
            <>
                <p> Demo todo-list</p>
                <AddToDoComponent 
                    addTodo = {this.addTodo}
                />
                
                <div> Here is a to-do list:</div>
                {
                    listTodo.map((item, index) => {
                        return(
                            <div className="todo-content" key={item.id}>
                                {
                                    isEmpty === false && item.id === todoEdit.id ? 
                                    <span>
                                        {index + 1} - <input value = {todoEdit.title} 
                                            onChange = {(event)=> this.handleOnchangeEditTodo(event)}
                                        />
                                    </span>
                                    : <span>
                                        {index + 1} - {item.title}
                                    </span>
                                }

                                &nbsp;
                                <button className="edit"
                                    onClick={()=>this.handleEditTodo(item)}
                                    >{isEmpty === false && item.id === todoEdit.id ? 'Save' : 'Edit'}</button>
                                
                                &nbsp;
                                <button className="delete"
                                    onClick={()=>this.handleDeleteTodo(item)}
                                >Delete</button>
                            </div>
                        )
                    })
                }
            </>
        )
    }
}

export default ToDoListComponent