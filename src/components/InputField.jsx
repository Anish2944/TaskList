import React, { useState } from 'react'
import { useTask } from '../context/context'

function InputField() {
  const [task,setTask] = useState("")
  const {addTask} = useTask()

  const add = (e) => {
    e.preventDefault()
    if (!task) return
    addTask({task, completed: false})
    setTask("")
  }
  return (
    <form onSubmit={add} className='px-2 mb-2 py-2 flex flex-col sm:flex-row'>
        <input  className='p-3 w-full sm:w-auto flex-grow focus:border-2 border-slate-300 rounded-md outline-none mb-2 sm:mb-0 sm:mr-2'
                type="text" 
                placeholder='Write your task...' 
                value={task} 
                onChange={(e) => setTask(e.target.value)}/>
        <button type='submit' 
                className='add bg-zinc-900 hover:border-solid transition delay-50 hover:border-sky-900 border-2 border-transparent rounded py-3 px-5 outline-none w-full sm:w-auto'        >Add</button>
    </form>
  )
}

export default InputField
