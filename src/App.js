//import logo from './logo.svg';
//import './App.css';
import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {

  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
      {
          id: 1,
          text: "estudiar react",
          day: "Feb 15th at 2:30pm",
          reminder: false
      },
      {
          id: 2,
          text: "cogerme a hermi",
          day: "Feb 15th at 2:30pm",
          reminder: true
      },
      {
          id: 3,
          text: "hacer compras",
          day: "Feb 15th at 2:30pm",
          reminder: true
      }
  ])

  //add task

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  //delete tasks
  const deleteTask = (id) => {
    setTasks(tasks.filter( (task) => task.id !== id ))
  }

  // toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.filter( (task) => task.id === id ? { ...tasks, reminder: !task.reminder } : task ))
  }

  return (
    <div className="container">
      <Header 
        onAdd={ () => setShowAddTask(!showAddTask)} 
        showAdd={showAddTask} 
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ?
        <Tasks 
          tasks={tasks} 
          onDelete={deleteTask} 
          onToggle={toggleReminder}
        />
        : "No tasks to show"
      }
    </div>
  );
}

export default App;
