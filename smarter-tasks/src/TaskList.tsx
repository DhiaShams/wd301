import Task from "./Task";
import type { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[];
  handleDeleteTask: (id: number) => void;
}
// interface State {}

const TaskList = (props: Props) => {
  const list = props.tasks.map((task, idx) => (
    <Task
      key={idx}
      title={task.title}
      description={task.description}
      dueDate={task.dueDate}
      deleteTask={() => props.handleDeleteTask(idx)}
    />
  ));
  return <>{list}</>;
};

export default TaskList;