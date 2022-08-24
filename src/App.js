import { useEffect, useRef, useState } from 'react';
import './App.css';
import AddTodo from './src/components/AddTodo';
import CardGeneric from './src/components/generics/CardGeneric';
import InputGeneric from './src/components/generics/InputGeneric';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [search, setSearch] = useState('');
  const inputRef = useRef();
  
  const handleDelete = (todo) => {
    setTodoList(prevValue => {
      const index = prevValue.findIndex(t => t.title === todo.title);
      
      if(index > -1)
        prevValue.splice(index, 1);
        
      return [...prevValue];
    });
  }
  
  useEffect(() => {
    inputRef.current.value = '';
  }, [todoList]);
  
  return (
    <div className='App'>
      <div className='container'>
        <h1>TODOLIST</h1>
        <AddTodo inputRef={inputRef} onClick={(value) => {
          if(value)
            setTodoList(prevValue => [...prevValue, {title: value, finished: false}]);
        }}/>
        <hr />
        <InputGeneric onChange={({target}) => setSearch(target.value)} placeholder={'Rechercher'}/>
        <div className='todoList'>
          {todoList
          .filter(todo => todo.title.includes(search))
          ?.map((todo, index) => <CardGeneric key={`todoKey-${index}`} todo={todo} onDelete={handleDelete} setTodoList={setTodoList} />)}
        </div>
        <div className='right-align'>
          <div className='text'>Nb tache(s): <span>{todoList.length}</span></div>
          <div className='text'>Tache(s) terminée(s): <span>{todoList.filter(t => t.finished).length}</span></div>
        </div>
      </div>
    </div>
  );
}

export default App;
