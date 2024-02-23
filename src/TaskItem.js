import React, { useContext } from "react";
import { Droppable } from "react-beautiful-dnd";
import { AppContext } from "./context"; 
import TaskList from "./TaskList";

const List = () => {
  const { tasks, filter } = useContext(AppContext); 

  let filtered = [...tasks];

  switch (filter) {
    case "all":
      filtered = [...tasks];
      break;
    case "completed":
      filtered = tasks.filter((task) => task.completed);
      break;
    case "uncompleted":
      filtered = tasks.filter((task) => !task.completed);
      break;
    default:
      filtered = [...tasks];
      break;
  }

  return (
    <Droppable droppableId='droppable-1'>
      {(provided, snapshot) => (
        <ul
          className='tasks-wrapper'
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {filtered.map((task, i) => (
            <TaskList key={task.id} {...task} index={i} />
          ))}
          {provided.placeholder}
        </ul>
      )}
    </Droppable>
  );
};

export default List;
