import React, { useRef } from 'react';
import InputGeneric from './generics/InputGeneric';

const AddTodo = ({onClick, inputRef}) => {
  return (
    <form className='addTodo'>
      <InputGeneric inputRef={inputRef} placeholder='Nom de la tache'/>
      <button className='btn' onClick={(e) => {
        e.preventDefault();
        onClick(inputRef.current.value);
      }}>+ Ajouter</button>
    </form>
  );
};

export default AddTodo;