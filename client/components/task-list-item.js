import React, { useState } from 'react'

const TaskListItem = ({ task, switchStatus, deleteTask, saveTask }) => {
  const [editingMode, setEditingMode] = useState(false)
  const [taskName, setTaskName] = useState(task.title)
    const handleTask=()=>{
      saveTask(taskName, task.taskId)
        setEditingMode(false)
    }
  return (
    <div className="my-3 flex justify-between">
      {!editingMode ? (
        <button type="button" onClick={() => setEditingMode(true)} className="bg-blue-700 px-3">
          Edit
        </button>
      ) : (
        <button type="button" onClick={handleTask} className="bg-green-700 px-3">
          Save
        </button>
      )}
      {!editingMode ? (
        task.title
      ) : (
        <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
      )}
      {task.status === 'new' && (
        <button
          type="button"
          onClick={() => switchStatus(task.taskId, 'in progress')}
          className="bg-green-400 px-3"
        >
          in progress
        </button>
      )}
      {task.status === 'in progress' && (
        <div className="inline">
          <button
            type="button"
            onClick={() => switchStatus(task.taskId, 'blocked')}
            className="bg-red-400 px-3"
          >
            Blocked
          </button>
          <button
            type="button"
            onClick={() => switchStatus(task.taskId, 'done')}
            className="bg-green-900 px-3"
          >
            Done
          </button>
        </div>
      )}
      {task.status === 'blocked' && (
        <button
          type="button"
          onClick={() => switchStatus(task.taskId, 'in progress')}
          className="bg-red-900 text-white px-3"
        >
          Unblock
        </button>
      )}
      {task.status === 'done' && (
        <button
          type="button"
          onClick={() => deleteTask(task.taskId)}
          className="bg-red-900 text-white px-3 "
        >
          delete
        </button>
      )}
    </div>
  )
}

export default TaskListItem
