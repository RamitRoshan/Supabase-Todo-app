import { useState, useEffect } from 'react';
import './App.css'
import supabase from './supabase-client'
 

function App() {
  const [todoList, setTodoList] = useState([]);
  //tract whatever users are going to type
  const [newTodo, setNewTodo] = useState("");

  useEffect( () => {
    fetchTodos();
  }, []);

  //now fetch all todo(everything from this table) using *
  const fetchTodos = async () => {
    const {data, error} = await supabase.from("TodoList").select("*");

    if(error){
      console.log("Error fetching: ", error)
    } else{
      setTodoList(data);
    }
  };
  

  //it is doing nothing, but work when we click on button Add Todo Item
  const addTodo = async () => {
    const newTodoData = {
      name: newTodo,
      isCompleted: false,
    }
    const {data, error} = await supabase.from("TodoList").insert([newTodoData]).single();

    //if error is true 
    if(error){
      console.log("Error adding todo: ", error);
    }else {
      setTodoList((prev) => [...prev, data]);
      //setNewTodo from the input to be equal to an empty string,
      //so that we can reset the input.
      setNewTodo("");
    }
  };

  const completeTask = async (id, isCompleted) =>{
    const {data, error} = await supabase
    .from("TodoList")
    .update({isCompleted: !isCompleted })
    .eq("id", id);

    //if it is error
    if (error) {
      console.log("error toggling task: ", error);
    } else {  //if it is  not error
      const updatedTodoList = todoList.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !isCompleted } : todo
      );
      setTodoList(updatedTodoList);
    }

  };

  const deleteTask = async (id) => {
    const { data, error } = await supabase
      .from("TodoList")
      .delete()
      .eq("id", id);

    if (error) {
      console.log("error deleting task: ", error);
    } else {
      setTodoList((prev) => prev.filter((todo) => todo.id !== id));
    }
  };



  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input 
        type='text' 
        placeholder='New Todo...'
        value={newTodo}
        onChange={(e)=> setNewTodo(e.target.value)} //e for event
        />
        <button onClick={addTodo}> Add Todo Item</button>
      </div>
      <ul>
        {todoList.map((todo) =>(
          <li>
            <p>{todo.name}</p>
            <button onClick={() => completeTask(todo.id, todo.isCompleted)}>
              {todo.isCompleted ? "Undo" : "Complete Task"}</button>
            <button onClick={() => deleteTask(todo.id)}>Delete Task</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App
