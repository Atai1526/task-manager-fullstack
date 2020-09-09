import React, { useState } from 'react'
// import { useHistory } from "react-router-dom";
// import { history } from '../redux'
import Timespan from './timespan'
import TaskListItem from './task-list-item'

const TasksList = ({ tasks, addTask, switchStatus, deleteTask, setTimespan, saveTask }) => {
  const [taskInput, setTaskInput] = useState('')

  // const History=useHistory()
  // const HandleKeyPress=(history)=>{
  //     if(history.key==="Enter") {
  //         History.push(`/${taskInput}`)
  //     }
  // }
  // const onKeyPress = ((el) => (el.key === "Enter" ? history.push(`/${taskInput}`) : ""))
  return (
    <div>
      <Timespan setTimespan={setTimespan} />
      <div>
        {tasks.map((task) => (
          <TaskListItem
            key={task.taskId}
            task={task}
            switchStatus={switchStatus}
            deleteTask={deleteTask}
            saveTask={saveTask}
          />
        ))}
        <input type="text" onChange={(el) => setTaskInput(el.target.value)} />
        <button type="button" onClick={() => addTask(taskInput)}>
          Add task
        </button>
      </div>
    </div>
  )
}

export default TasksList
