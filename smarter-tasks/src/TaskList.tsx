import React from "react";
import Task from "./Task";
import type { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[];
}

class TaskList extends React.Component<Props> {
  render() {
    return (
      <>
        {this.props.tasks.map((task, idx) => (
          <Task key={idx} title={task.title} />
        ))}
      </>
    );
  }
}

export default TaskList;
