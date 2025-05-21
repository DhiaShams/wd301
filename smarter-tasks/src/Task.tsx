import "./TaskCard.css";

interface TaskProp {
  title: string;
  dueDate: string;
  description: string;
  deleteTask: () => void;
}

const Task = (props: TaskProp) => {
  return (
    <div className="TaskItem shadow-md border border-stone-700 max-w-sm rounded overflow-hidden">
      <h2 className="text-base font-bold my-1 text-gray">{props.title}</h2>
      <p className="text-sm text-gray">
        Due Date: <span>{props.dueDate}</span>
      </p>
      <p className="text-sm text-gray">
        Description: <span>{props.description}</span>
      </p>
      <button
        className="deleteTaskButton m-2 p-2 bg-sky-300 hover:bg-sky-600 rounded-lg"
        onClick={props.deleteTask}
      >
        Delete
      </button>
    </div>
  );
};

export default Task;