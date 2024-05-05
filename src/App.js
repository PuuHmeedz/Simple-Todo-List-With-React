import './App.css';
import { useState, useRef } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef()
  const handleAddTodo = () => {
    const text = inputRef.current.value;
    const completed = {completed: false, text}
    // console.log(text);
    setTodos([...todos, completed]);
    inputRef.current.value = "";
  }

  const hundleItemDone = (index) => {
    const newTodos = [...todos]
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  }

  const hundleDeleteItem = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index,1)
    setTodos(newTodos);
  }
  // console.log(todos)
  return (
		<div className="App">
			<h2 className="title">To Do List</h2>
			<ul className="list">
				{todos.map(({ text,completed } ,index) => {
          return (
						<div className="task-container">
							<li
								className={completed ? "done" : ""}
								key={index}
								onClick={() => hundleItemDone(index)}
							>
								{text}
							</li>
							<span onClick={() => hundleDeleteItem(index)}>🗙</span>
						</div>
					);
				})}
			</ul>
			<div className="input-button">
				<input ref={inputRef} placeholder="Enter Your Task" />
				<button onClick={handleAddTodo}>Add</button>
			</div>
		</div>
	);
}

export default App;
