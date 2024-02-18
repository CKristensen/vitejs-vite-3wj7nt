import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [todoList, setTodoList] = useState(['laundry', 'call family']);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodoList([...todoList, newTodo]);
      setNewTodo('');
    }
  };

  return (
    <>
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </div>
      <h1>Carl's Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add new todo"
      />
      <button onClick={handleAddTodo}>Add</button>
      <div className="card">
        <p>
          {todoList.map((item, index) => (
            <>
              <p key={index}>
                {item}
                <button
                  onClick={() => setTodoList(todoList.filter((t) => t != item))}
                >
                  X
                </button>
              </p>
            </>
          ))}
        </p>
      </div>
    </>
  );
}

export default App;
