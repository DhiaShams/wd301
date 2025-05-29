import { useState } from "react";

interface Task {
  title: string;
  description: string;
  dueDate: string;
}

const TaskListPage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [error, setError] = useState("");

  const handleAddTask = () => {
    if (!title || !description || !dueDate) {
      setError("All fields are required.");
      return;
    }
    setTasks([...tasks, { title, description, dueDate }]);
    setTitle("");
    setDescription("");
    setDueDate("");
    setError("");
  };

  return (
    <div>
      <input
        id="todoTitle"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Title"
      />
      <input
        id="todoDescription"
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="Description"
      />
      <input
        id="todoDueDate"
        type="date"
        value={dueDate}
        onChange={e => setDueDate(e.target.value)}
        placeholder="Due Date"
      />
      <button id="addTaskButton" onClick={handleAddTask}>
        Add Task
      </button>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <ul>
        {tasks.map((task, idx) => (
          <li className="TaskItem" key={idx}>
            <strong>{task.title}</strong> - {task.description} (Due: {task.dueDate})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskListPage;