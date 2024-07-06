import { useContext, createContext } from "react";

export const taskContext = createContext({
    tasks: [],
    addTask: (task) => {},
    updateTask: (id,task) => {},
    deleteTask: (id) => {},
    toggelComplete: (id) => {}
});

export const  useTask = () => {
    return useContext(taskContext);
}

export const TaskProvider = taskContext.Provider;
