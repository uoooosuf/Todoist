import React from "react";
    import { Checkbox } from './Checkbox';
import { AddTask } from './AddTask';


export const Tasks = () => {
    const tasks = [];

    let projectName = '';

     return (
      <div className="tasks" data-testid="tasks">
      <h2 data-testid="project-name">{projectName}</h2>

      <ul className="tasks__list">
        {tasks.map(task => (
          <li key={`${task.id}`}>
            <Checkbox id={task.id} taskDesc={task.task} />
            <span>{task.task}</span>
          </li>
        ))}
      </ul>

      <AddTask />
    </div>
    );
};
