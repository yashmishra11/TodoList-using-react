import { useContext, useState } from 'react';
import "./AddTodo.css";
import TodoDispatchContext from '../context/TodoDispatchContext';

function AddTodo({ }) {
    const [ inputText, setInputText ] = useState('');
    const { dispatch } = useContext(TodoDispatchContext);

  return (
     <div className='add-wrapper'>
        <input 
        className='input' type="text" placeholder='Enter a new Todo...' value={inputText} onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={ () => {
         dispatch({ type: 'add_todo', payload: {todoData : inputText} });
          setInputText('');
        }}>Add</button>
    </div>
  )
}

export default AddTodo;