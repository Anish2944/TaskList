import { useContext, createContext } from "react";

export const taskContext = createContext({
    tasks: [
        // {
        //     id: 1,
        //     task: "msg",
        //     completed: false,
        // }
    ],
    addTask: (task) => {},
    updateTask: (id,task) => {},
    deleteTask: (id) => {},
    toggelComplete: (id) => {}
});

export const  useTask = () => {
    return useContext(taskContext);
}

export const TaskProvider = taskContext.Provider;
