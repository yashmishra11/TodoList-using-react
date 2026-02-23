import Todo from "../Todo/Todo";
import { useEffect, useState } from "react";
import { db, auth } from "../../firebase";
import { collection, query, where, onSnapshot, deleteDoc, doc, updateDoc } from "firebase/firestore";

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (!auth.currentUser) return;

    const q = query(
      collection(db, "todos"),
      where("uid", "==", auth.currentUser.uid)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setTodos(data);
    });

    return () => unsubscribe();
  }, []);

  const onDelete = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  const onFinished = async (id, isFinished) => {
    await updateDoc(doc(db, "todos", id), {
      finished: isFinished
    });
  };

  const onEdit = async (id, newText) => {
    await updateDoc(doc(db, "todos", id), {
      text: newText
    });
  };

  return (
    <div>
      {todos.length > 0 &&
        todos.map((todo) => (
          <Todo
            key={todo.id}
            todoData={todo.text}
            isFinished={todo.finished}
            changeFinished={(isFinished) => onFinished(todo.id, isFinished)}
            onDelete={() => onDelete(todo.id)}
            onEdit={(todoText) => onEdit(todo.id, todoText)}
          />
        ))}
    </div>
  );
}

export default TodoList;