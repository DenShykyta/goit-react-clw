const Todo = ({ text, completed, onDelete, onToggleCompleted }) => {
  return (
    <>
      <input type="checkbox" checked={completed} onChange={onToggleCompleted} />
      <p>{text}</p>
      <button onClick={onDelete}>Del</button>
    </>
  );
};

export default Todo;
