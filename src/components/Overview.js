import React from 'react';

function Overview(props) {
  console.log(props.tasksArray);
  return (
    <div>
      <ul>
        {props.tasksArray.map((task) => {
          return <li key={task.id}>{task.text}</li>;
        })}
      </ul>
    </div>
  );
}

export default Overview;
