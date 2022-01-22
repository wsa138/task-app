import React from 'react';
import Overview from '../src/components/Overview';
import uniqid from 'uniqid';
import '../src/styles/style.css';

function App() {
  const [taskArray, setTaskArray] = React.useState([]);
  const [newTask, setNewTask] = React.useState({
    text: '',
    id: '',
  });

  // Sets newTask state.
  function handleChange(event) {
    event.preventDefault();
    setNewTask((prevTask) => ({
      text: event.target.value,
      id: uniqid(),
    }));
  }

  //Adds the new task to taskArray on click of"Add Task" button.
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
      <Overview tasksArray={taskArray} />
    </div>
  );
}

export default App;
