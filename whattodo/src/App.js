import './App.css';
import React, { useState } from 'react';

function App() {
  const [toDo, setToDo] = useState('');
  const [displayToDo, setDisplayTodo] = useState([]);

  function addToDo(e) {
    setToDo(e.target.value);
  }

  function displaying() {
    setDisplayTodo([...displayToDo, toDo]);
    setToDo('');
  }

  function del(index) {
    const updatedTodos = displayToDo.filter(function (_, i) {
      return i !== index;
    });
    setDisplayTodo(updatedTodos);
  }

  return (
    <div className="App flex justify-center items-center h-screen bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500">
      <div className="box bg-purple-700 w-96 h-72 p-6 flex flex-col shadow-lg rounded-md overflow-y-auto">
        <div className="flex items-center mb-4">
          <input
            className="border-2 border-pink-500 rounded-md py-2 px-4 w-48 focus:outline-none focus:border-pink-700 bg-purple-800 text-white"
            value={toDo}
            onChange={addToDo}
            placeholder="Add a ToDo"
          />
          <button
            onClick={displaying}
            className="ml-4 py-2 px-6 bg-pink-500 rounded-md text-white font-bold hover:bg-pink-600 focus:outline-none focus:bg-pink-600"
          >
            ADD
          </button>
        </div>
        <ul>
          {displayToDo.map((toDoItem, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-yellow-300 p-4 rounded-md mb-2 hover:shadow-md transition duration-300"
            >
              <li className="font-semibold text-yellow-800">{toDoItem}</li>
              <button
                onClick={() => del(index)}
                className="ml-2 py-1 px-4 bg-red-500 rounded-md text-white font-bold hover:bg-red-600 focus:outline-none focus:bg-red-600"
              >
                DELETE
              </button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
