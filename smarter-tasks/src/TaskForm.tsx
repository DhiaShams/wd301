import React from "react";
import type { TaskItem } from "./types";

interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}
interface TaskFormState {
  title: string;
  dueDate: string;
  description: string;
}

class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
    this.state = { title: "",
      dueDate: "",
      description: "",
    };
  }
 inputHandel: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value } as Pick<
      TaskFormState,
      keyof TaskFormState
    >);
  };

  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const newTask = {
      title: this.state.title,
      dueDate: this.state.dueDate,
      description: this.state.description,
    };
    this.props.addTask(newTask);
    this.setState({ title: "", dueDate: "", description: "" });
  };

  render() {
    return (
        <form
        onSubmit={this.addTask}
        className="bg-slate-400 shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <input
          type="text"
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-teal-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          name="title"
          placeholder="Enter the title.."
          id="todoTitle"
          required
          value={this.state.title}
           onChange={this.inputHandel}
        />
        <input
          type="date"
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-teal-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          name="dueDate"
          id="todoDueDate"
          required
          value={this.state.dueDate}
          onChange={this.inputHandel}
        />
        <input
          type="text"
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-teal-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          name="description"
          placeholder="Enter description..."
          id="todoDescription"
          value={this.state.description}
           onChange={this.inputHandel}
        />
        <button
          type="submit"
          id="addTaskButton"
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
        >
          Add item
        </button>
      </form>
        );
  }
}
export default TaskForm;