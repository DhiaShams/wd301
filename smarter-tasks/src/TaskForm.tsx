import React from "react";
import type { TaskItem } from "./types";

interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}
interface TaskFormState {
  id: string;
  title: string;
  dueDate: string;
  description: string;
}

const TaskForm = (props: TaskFormProps) => {
  const [formState, setFormState] = React.useState<TaskFormState>({
    id: Number(new Date()).toString(),
    title: "",
    description: "",
    dueDate: "",
  });

  const titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    setFormState({ ...formState, title: event.target.value });
  };
  const descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    console.log(`${event.target.value}`);
    setFormState({ ...formState, description: event.target.value });
  };
  const dueDateChanged: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    console.log(`${event.target.value}`);
    setFormState({ ...formState, dueDate: event.target.value });
  };

  const addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log(`Submitted the form with`);
    if (formState.title.length === 0 || formState.dueDate.length === 0) {
      return;
    }

    props.addTask(formState);
    setFormState({id: (Number(new Date())+1).toString(), title: "", description: "", dueDate: "" });
  };

        return (
          <form
            onSubmit={addTask}
            className="bg-slate-400 shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <input
              type="text"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-teal-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              name="title"
              placeholder="Enter the title.."
              id="todoTitle"
              required
              value={formState.title}
              onChange={titleChanged}
            />
            <input
              type="date"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-teal-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              name="dueDate"
              id="todoDueDate"
              required
              value={formState.dueDate}
              onChange={dueDateChanged}
            />
            <input
              type="text"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-teal-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              name="description"
              placeholder="Enter description..."
              id="todoDescription"
              value={formState.description}
              onChange={descriptionChanged}
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

};

export default TaskForm;