// App.jsx

import './App.css';
import TodoList from './components/TodoList/TodoList';
import AddTodo from './components/AddTodo/AddTodo';
import TodoContext from './components/context/TodoContext';
import TodoDispatchContext from './components/context/TodoDispatchContext';
import todoReducer from './reducers/todoReducer';

import { useEffect, useReducer, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './firebase';
import Auth from './components/Auth/Auth';

function App() {
  const [list, dispatch] = useReducer(todoReducer, []);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔐 Listen to authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div className="loading-screen">Loading...</div>;
  }
  // 🔐 If not logged in → show Auth screen
  if (!user) {
    return <Auth />;
  }

  // ✅ If logged in → show Todo app
  return (
    <TodoContext.Provider value={{ list }}>
      <TodoDispatchContext.Provider value={{ dispatch }}>
        
        {/* Top bar with logout */}
        <div className="top-bar">
          <button className="logout-button" onClick={() => signOut(auth)}>
            Logout
          </button>
        </div>
        <div className="app-container">
          <h1 className="heading">Todo App</h1>
          <hr />
          <AddTodo />
          <TodoList />
        </div>

      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
}

export default App;