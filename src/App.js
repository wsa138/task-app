import React from 'react';
import Overview from '../src/components/Overview';

function App() {
  const [taskArray, setTaskArray] = React.useState(['Task 1', 'Task 2']);
  const [newTask, setNewTask] = React.useState('');

  // This function
  function handleChange(event) {
    event.preventDefault();
    setNewTask(event.target.value);
  }

  console.log(newTask);

  //This function adds the new task to taskArray on click of"Add Task" button.
  function addTask(event) {
    event.preventDefault();
    setTaskArray((prevArray) => {
      return [...prevArray, newTask];
    });
  }

  //This function clears all tasks
  function clearTasks() {
    setTaskArray([]);
  }

  return (
    <div>
      <form>
        <h1>New Task:</h1>
        <input type="text" onChange={handleChange} name="newTask" />
        <button onClick={addTask}>Add Task</button>
        <button onClick={clearTasks}>Clear Tasks</button>
      </form>
      <h1>Tasks:</h1>
      <Overview tasksArray={taskArray} />
    </div>
  );
}

export default App;
