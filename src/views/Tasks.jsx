import React from 'react'
import shortid from 'shortid'

const Tasks = () => {

  const [task, setTask] = React.useState('')

  const [tasks, setTasks] = React.useState([])

  const [editMode, setEditMode] = React.useState(false)

  const [taskId, setTaskId] = React.useState('')

  const addTask = (form) => {
    form.preventDefault()

    if(!task.trim()) {
      console.log('Void item!')
      return
    }
    
    setTasks([
      ...tasks,
      {
        id: shortid.generate(),
        task: task
      }
    ])
    
    setEditMode(false)
    form.target.reset()
  }

  const removeTask = (id) => {
   setTasks(tasks.filter(item => item.id !== id))
  }

  const editTask = (item) => {
    setEditMode(true)
    setTask(item.task)
    setTaskId(item.id)
  }

  const saveTask = (form) => {
    form.preventDefault()

    const withTaskEdited = tasks.map((item) => item.id === taskId ? {taskId, task: task} : item)
    
    setTasks(withTaskEdited)

    setEditMode(false)
    form.target.reset()
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center"> Task CRUD </h1>
      <hr />
        <div className="row">
          <div className="col-8">
            <h4 className="text-center"> list</h4>
            <ul className="list-group">
              {
                tasks.length === 0 ? (
                 <li className="list-group-item">No tasks yet</li> 
                ) : (
                  tasks.map((task, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between align-items-end">
                      <span className="lead ms-2 me-auto">{task.task}</span>
                      <button className="btn btn-danger btn-sm mx-2"  onClick={ () => removeTask(task.id)}>Remove</button>
                      <button className="btn btn-warning btn-sm" onClick={ () => editTask(task)}>Edit</button>
                    </li>
                  ))
                )
              }
            </ul>
          </div>
          <div className="col-4">
          <h4 className="text-center"> { editMode ? 'Edit' : 'Add'} Task</h4>
            <form onSubmit={ editMode ? saveTask : addTask }>
              <input 
                type="text" 
                className="form-control mb-2 list-group-item"
                placeholder={ editMode ? 'Edit task' : 'Add task'}
                onChange={ (event) => setTask(event.target.value) }
                value={task}
              />
              {
                editMode ? 
                (
                  <button className="btn btn-warning" type="submit" >Edit</button>
                  
                  ) : (
                    
                  <button className="btn btn-dark" type="submit" >Add</button>
                )
              }
            </form>
          </div>
        </div>
      
    </div>
  )
}

export default Tasks
