import { useContext, useState } from 'react';
import "./AddTodo.css";
import TodoDispatchContext from '../context/TodoDispatchContext';

import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../../firebase";

function AddTodo({ }) {
    const [ inputText, setInputText ] = useState('');
    const { dispatch } = useContext(TodoDispatchContext);

  return (
     <div className='add-wrapper'>
        <input 
        className='input' type="text" placeholder='Enter a new Todo...' value={inputText} onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={ async () => {
          if (!inputText) return;

          await addDoc(collection(db, "todos"), {
            text: inputText,
            finished: false,
            uid: auth.currentUser.uid,
            createdAt: Date.now()
          });

          setInputText('');
        }}>
        Add
        </button>
    </div>
  )
}

export default AddTodo;