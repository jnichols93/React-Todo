// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import ToDo from '../TodoComponents/Todo';

function ToDoList(props) {
    return <ul>{props.todos.map(todo => 
    <ToDo 
        todo={todo} 
        key={todo.id} 
        //completed={todo.complete}
        toggleComplete={props.toggleComplete}  
        />)}</ul>;
}

export default ToDoList;
