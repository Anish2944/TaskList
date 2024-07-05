import { useEffect, useState } from 'react'
import { TaskProvider } from './context/context.js';
import InputField from './components/InputField.jsx'
import ListItem from './components/ListItem.jsx'

function App() {
  const [tasks,setTasks] = useState([]);

  const addTask = (task) => {
    setTasks((prev) => [...prev,{id: Date.now(), ...task}]);
  }

  const updateTask = (id, task) => {
    setTasks((prev) => prev.map((prevtask) => (prevtask.id === id ? {...prevtask, ...task}: prevtask)));
  }

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  const toggelComplete = (id) => {
    setTasks((prev) => prev.map((prevTask) => prevTask.id === id ? {...prevTask, completed: !prevTask.completed} : prevTask))
  }

  // useEffect(() => {
  //   const tasks = JSON.parse(localStorage.getItem("tasks"))

  //   if (tasks && tasks.length > 0) {
  //     setTasks(tasks)
  //   }
  // }, [])

  // useEffect(() => {
  //     localStorage.setItem("tasks",JSON.stringify(tasks))
  // }, [tasks])
  // Load tasks from localStorage on initial render
  

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    try {
      const savedTasks = localStorage.getItem('tasks');
      if (savedTasks) {
        const parsedTasks = JSON.parse(savedTasks);
        if (Array.isArray(parsedTasks)) {
          setTasks(parsedTasks);
        }
      }
    } catch (error) {
      console.error('Failed to load tasks from localStorage:', error);
      localStorage.removeItem('tasks');
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } catch (error) {
      console.error('Failed to save tasks to localStorage:', error);
    }
  }, [tasks]);
  
  

  return ( 
    <TaskProvider value={{tasks, addTask,deleteTask,updateTask,toggelComplete}}>
      <h1 className='text-center my-4'>Task List</h1>
      <div className='w-full text-xl p-8 my-7 rounded-md bg-gray-800 border-2 border-stone-950'>
        <InputField />
        {tasks.map((task) => (
          <div key={task.id}>
            <ListItem task={task}/>
          </div>
        ))}
      </div>
    </TaskProvider>
  )
}

export default App
