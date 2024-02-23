import React, { useState, useContext, useRef, useEffect } from "react";

const getTasks = () => {
  const tasks = localStorage.getItem("tasks");
  return tasks ? JSON.parse(tasks) : [];
};

const AppContext = React.createContext(null);

const AppProvider = ({ children }) => {
  const inputRef = useRef(null);
  const [tasks, setTasks] = useState(getTasks());
  const [name, setName] = useState("");
  const [filter, setFilter] = useState("all");
  const refContainer = useRef(null);

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleDone = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  useEffect(() => {
    inputRef.current.focus();
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <AppContext.Provider
      value={{
        tasks,
        setTasks,
        removeTask,
        toggleDone,
        name,
        setName,
        filter,
        setFilter,
        inputRef
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useAppContext };
