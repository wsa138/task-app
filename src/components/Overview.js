import React from 'react';
import uniqid from 'uniqid';

function Overview(props) {
  return (
    <div>
      <ul>
        {props.tasksArray.map((task) => {
          return <li key={uniqid()}>{task}</li>;
        })}
      </ul>
    </div>
  );
}

export default Overview;
