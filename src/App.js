import React, { useState } from 'react';
import Overview from '../src/components/Overview';
import uniqid from 'uniqid';
import '../src/styles/style.css';

function App() {
  const initialState = localStorage.getItem('tasks')
    ? JSON.parse(localStorage.getItem('tasks'))
    : [];
  const [taskArray, setTaskArray] = useState(initialState);
  const [newTask, setNewTask] = useState({
    text: '',
    id: '',
    num: '',
  });

  //Sets localStorage.
  React.useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskArray));
  });

  // Sets newTask state.
  function handleChange(event) {
    event.preventDefault();
    setNewTask((prevTask) => ({
      text: event.target.value,
      id: uniqid(),
      num: taskArray.length + 1,
    }));
  }

  //Adds the new task to taskArray on click of "Add Task" button.
  function addTask(event) {
    event.preventDefault();
    setTaskArray((prevArray) => {
      return [...prevArray, newTask];
    });
    setNewTask((prevTask) => ({
      ...prevTask,
      text: '',
    }));
  }

  //Clears all tasks.
  function clearTasks(e) {
    e.preventDefault();
    setTaskArray([]);
  }

  //Deletes a task when that task is clicked
  const handleDelete = (id, num) => {
    const newTaskArray = taskArray
      .filter((task) => {
        return task.id !== id;
      })
      .map((task) => {
        return task.num < num ? { ...task } : { ...task, num: task.num - 1 };
      });

    setTaskArray(newTaskArray);
  };

  return (
    <div className="mainContainer">
      <form className="form">
        <h1>New Task:</h1>
        <input
          type="text"
          value={newTask.text}
          onChange={handleChange}
          name="newTask"
        />
        <button onClick={addTask}>Add Task</button>
        <button onClick={clearTasks}>Clear Tasks</button>
      </form>
      <h1>Tasks:</h1>
      <Overview tasksArray={taskArray} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
