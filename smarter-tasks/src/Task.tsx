import React from "react";
import "./TaskCard.css";

interface TaskProp {
    title: string;
    dueDate: string;
    description: string;
  }

class Task extends React.Component<TaskProp> {
    render() {
    return (
      <div className="TaskItem shadow-md border border-stone-700 max-w-sm rounded overflow-hidden">
        <h2 className="text-base font-bold my-1 text-white">
          {this.props.title}
        </h2>
        <p className="text-sm text-white">
          Due Date: <span>{this.props.dueDate}</span>
        </p>
        <p className="text-sm text-white">
          Description: <span>{this.props.description}</span>
        </p>
      </div>
    );
  }
}
export default Task;