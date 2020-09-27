import React, { useState } from 'react';
import CommonFormInput from './components/CommonFormInput';
import './main.css';

const App = () => {
  const [text, setText] = useState('');

  return (
    <div id="nav">
      <div className="container mg-auto">
        <h1>Todo App</h1>

        <CommonFormInput
          label="Add todo: "
          value={text}
          onChange={setText}
        />
      </div>
    </div>
  );
};

export default App;
