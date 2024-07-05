import React, { useState } from 'react'
import { useTask } from '../context/context'

function ListItem({ task }) {

  const [isEditable,setIsEditable] = useState(false);
  const [taskmsg,setTaskmsg] = useState(task.task);
  const {updateTask,deleteTask,toggelComplete} = useTask();

  const edit = () => {
    updateTask(task.id, {...task, task: taskmsg})
    setIsEditable(false)
  }

  const toggelCompleted = () => {
    toggelComplete(task.id);
  }

  return (
    <div className={`p-2 mb-2 ${task.completed? "bg-slate-700" : "bg-slate-600 "} rounded-md flex justify-between`}>
        <div>
          <input checked={task.completed} 
          onChange={toggelCompleted} className='mr-2 focus:outline-none focus:shadow-none focus:ring-0 focus:ring-offset-0' 
          type="checkbox" />
          <input className={`bg-transparent focus:outline-none focus:bg-transparent focus:shadow-none outline-none p-1`} 
           onChange={(e) => setTaskmsg(e.target.value)}
           value={taskmsg} 
           readOnly={!isEditable}
           type="text" />
          </div>
          <div className='text-base'>
              <button className='bg-blue-700 px-3 py-1 rounded'
               onClick={() => {
                if(task.completed) return;
                if(isEditable){
                  edit();
                } else setIsEditable((prev) => !prev)
              }}
              disabled={task.completed}
              >{isEditable ? "save" : "edit"}</button> 
              <button onClick={() => deleteTask(task.id)} 
              className={`bg-red-900 ${task.completed ? "inline-block" : "hidden"} ml-2 px-3 py-1 rounded`}>Delete</button> 
          </div>
    </div>
  )
}

export default ListItem