import React from 'react';

function Overview(props) {
  return (
    <div>
      <ul>
        {props.tasksArray.map((task) => {
          return <li key={task}>{task}</li>;
        })}
      </ul>
    </div>
  );
}

export default Overview;
