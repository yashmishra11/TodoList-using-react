import './App.css';
import TodoList from './components/TodoList/TodoList';
import AddTodo from './components/AddTodo/AddTodo';
import { useReducer } from 'react';
import TodoContext from './components/context/TodoContext';
import TodoDispatchContext from './components/context/TodoDispatchContext';
import todoReducer from './reducers/todoReducer';

function App() {
  const [list, dispatch] = useReducer(todoReducer, []);  
  
  return (
    <TodoContext.Provider value={{ list }}>
      <TodoDispatchContext.Provider value={{dispatch}}>
        <div className="app-container">
          <h1 className='heading'>Todo App</h1>
          <hr />
          <AddTodo/>
          <TodoList/>
        </div>
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  )
}

export default App