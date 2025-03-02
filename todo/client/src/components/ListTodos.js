import React from "react";
import { useEffect, useState } from "react";
import EditTodo from "./EditTodo";

const ListTodos = () => {
    const [todos, setTodos]= useState([]);

    const deleteTodo = async (id) =>{
        try {
            const response = await fetch(`http://localhost:4000/todos/${id}`,{
                method: "DELETE"
            });
            
            if (response.ok) {
                getTodos(); // Refresh the list without page reload
            } else {
                console.error("Failed to delete todo");
            }
        } catch (err) {
            console.error(err.message)        
        }
    }

    const getTodos = async () =>{
        try {
            const response = await fetch("http://localhost:4000/todos")
            const jsonData = await response.json();
            setTodos(jsonData);
        } catch (err) {
            console.error(err.message); 
        }
    }
    useEffect (()=>{
        getTodos();
    }, []);

  return (
    <>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th> 
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo =>(
            <tr key={todo.todo_id}>
                <td>{todo.description}</td>
                <td><EditTodo todo={todo}/></td>
                <td><button
                 className="btn btn-danger" 
                 onClick={() => deleteTodo(todo.todo_id)}
                 >
                    Delete
                </button></td>
            </tr>
          ))}     
        </tbody>
      </table>
    </>
  );
};

export default ListTodos;
