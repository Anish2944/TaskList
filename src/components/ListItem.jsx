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
    <div className={`p-2 add mb-2 ${task.completed? "bg-slate-700" : "bg-slate-600 "} rounded-md flex justify-between`}>
        <div className='flex items-center'>
          <input checked={task.completed} 
          onChange={toggelCompleted} className='mr-2 focus:outline-none focus:shadow-none focus:ring-0 focus:ring-offset-0' 
          type="checkbox" />
          <input className={`bg-transparent focus:outline-none focus:bg-transparent focus:shadow-none outline-none p-1`} 
           onChange={(e) => setTaskmsg(e.target.value)}
           value={taskmsg} 
           readOnly={!isEditable}
           type="text" />
          </div>
          <div className='text-base mt-2 sm:mt-0 flex flex-col sm:flex-row'>              
          <button className='add bg-blue-700 px-3 py-1 rounded mb-2 sm:mb-0 sm:mr-2'
               onClick={() => {
                if(task.completed) return;
                if(isEditable){
                  edit();
                } else setIsEditable((prev) => !prev)
              }}
              disabled={task.completed}
              >{isEditable ? "save" : "edit"}</button> 
              <button onClick={() => deleteTask(task.id)} 
              className={`add bg-red-900 ${task.completed ? "inline-block" : "hidden"} px-3 py-1 rounded`}>Delete</button> 
          </div>
    </div>
  )
}

export default ListItem