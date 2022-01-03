import React from 'react';
import Overview from '../src/components/Overview';

function App() {
  const [taskArray, setTaskArray] = React.useState(['Task 1', 'Task 2']);

  return <Overview tasksArray={taskArray} />;
}

export default App;
