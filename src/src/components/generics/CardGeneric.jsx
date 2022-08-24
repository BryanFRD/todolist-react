import React from 'react';

const CardGeneric = ({todo, onDelete, setTodoList}) => {
  const handleChange = ({target}) => {
    todo.finished = target.checked;
    setTodoList(pV => [...pV]);
  }
  
  return (
    <div className={`card ${todo.finished ? 'finished' : ''}`}>
      <div className='card-item'>
        <div>
          <input type="checkbox" checked={todo.finished} onChange={(event) => handleChange(event)} />
          <span>{todo.title}</span>
        </div>
        <button className='trash' onClick={() => onDelete(todo)}>
          <svg width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M12 12h2v12h-2zm6 0h2v12h-2z"/><path fill="currentColor" d="M4 6v2h2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h2V6zm4 22V8h16v20zm4-26h8v2h-8z"/></svg>
        </button>
      </div>
    </div>
  );
};

export default CardGeneric;