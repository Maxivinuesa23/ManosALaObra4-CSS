import { useState } from 'react'
import './Style.css';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TaskList from './components/organisms/TaskList/TaskList';
import TaskForm from './components/molecules/TaskForm/TaskForm';
import Button from './components/atoms/Button/Button';

function App() {
  const [tasks, setTasks] = useState([])

  const handleAddTask = (taskText) => {

    if(taskText.trim()){
      const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false
    }
      setTasks([...tasks, newTask])
    }
    
  }

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  }

  const handleToggleTask = (taskId) =>{
    setTasks(tasks.map(task => {
      if (task.id === taskId){
        return {...task, completed:!task.completed};
      }
      return task;
    }))
  }

  const handleReverseTasks = () => {
    setTasks([...tasks].reverse());
  }

  return (
    <>
    <h1>LISTA DE TAREAS DE MAXI</h1>
    <Button
    className = "botonInvertir" 
    onClick={handleReverseTasks}>Invertir Tareas</Button>
    <TaskForm 
        onSubmit={handleAddTask}
    >
    </TaskForm>

      {tasks.length === 0 ? (
        <p className='noTareas'>No hay tareas agregadas</p>
      ) : (
        <></>
      )}
    <TaskList
        tasks= {tasks}
        onDelete = {handleDeleteTask}
        onToggle = {handleToggleTask}
        >
      </TaskList>
    </>
  )
}

export default App
