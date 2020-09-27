import React from 'react';

const CommonTodoList = ({ todos, ...otherProps }) => {
  const renderedList = todos.map((todo, index) => (
    <li key={index}>
      {todo}
    </li>
  ));

  return (
    <ul {...otherProps}>
      {renderedList}
    </ul>
  );
};

export default CommonTodoList;
