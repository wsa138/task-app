import React from 'react';

function Overview(props) {
  return (
    <div>
      <ul>
        {props.tasksArray.map((task) => {
          return (
            <li
              key={task.id}
              onClick={() => props.handleDelete(task.id, task.num)}
            >
              {task.num}) {task.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Overview;
