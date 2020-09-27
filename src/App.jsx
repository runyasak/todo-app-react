import React, { useState } from 'react';
import CommonFormInput from './components/CommonFormInput';
import CommonTodoList from './components/CommonTodoList';
import './main.css';

const App = () => {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = (value) => {
    setTodos([value, ...todos]);
    setText('');
  };

  const handleEnterSubmit = (event, callback) => {
    if (event.key === 'Enter') {
      callback();
    }
  };

  return (
    <div id="nav">
      <div className="container mg-auto">
        <h1>Todo App</h1>

        <CommonFormInput
          label="Add todo: "
          value={text}
          onChange={setText}
          onKeyPress={(e) => handleEnterSubmit(e, () => addTodo(text))}
        />

        <CommonTodoList
          className="mw-768px text-align-left mg-auto mgt-24px"
          todos={todos}
        />

        <button
          onClick={() => addTodo(text)}
          className="mgt-48px">
          Add Todo
        </button>
      </div>
    </div>
  );
};

export default App;
