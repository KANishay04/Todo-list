import React, { useContext } from "react";
import { v4 as uuid } from "uuid";
import { DragDropContext } from "react-beautiful-dnd";
import List from "./TaskItem";
import { AppContext } from "./context";

const App = () => {
  const {
    inputRef,
    tasks,
    setTasks,
    name,
    setName,
    deleteAll
  } = useContext(AppContext);

  const addTask = (e) => {
    e.preventDefault();
    if (!name) {
      return;
    } else {
      const newTask = {
        id: uuid().slice(0, 8),
        name: name,
        completed: false,
        color: "#009688",
      };
      setTasks([...tasks, newTask]);
      setName("");
    }
  };

  return (
    <div className='container'>
      <form className='head' onSubmit={addTask}>
        <input
          type='text'
          ref={inputRef}
          placeholder='New Task'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type='submit'>Add</button>
      </form>
      <DragDropContext>
        {tasks.length > 0 ? (
          <List />
        ) : (
          <p className='no-tasks'>Your list is clear!</p>
        )}
      </DragDropContext>
      {tasks.length > 2 && (
        <button
          className='btn-delete-all'
          onClick={deleteAll}
          title='Delete All Tasks'
        >
          Clear All
        </button>
      )}
    </div>
  );
};

export default App;
