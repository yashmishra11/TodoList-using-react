import { useState } from "react";
import "./Todo.css";

function Todo({todoData, isFinished, changeFinished, onDelete, onEdit}) {
  const [ finished, setFinished ] = useState(isFinished);
  const [ isEditing, setIsEditing ] = useState(false);
  const [editedText, setEditedText ] = useState(todoData);

  return (
    <div className="todo-wrapper">
      <input type="checkbox" checked={finished} onChange={(e) => {
        setFinished(e.target.checked);
        changeFinished(e.target.checked);
      }}/>
      <h2>{(isEditing) ? <input type = "text" value={editedText} onChange={e => setEditedText(e.target.value)} />: <span>{todoData}</span>}</h2>
      <button onClick={() => {
        setIsEditing(!isEditing);
        onEdit(editedText);
      }}>{(!isEditing) ? 'Edit' : 'save' }</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  )
}

export default Todo;
