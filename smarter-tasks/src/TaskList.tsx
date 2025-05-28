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
      item={task}
      removeTask={() => props.handleDeleteTask(idx)}
    />
  ));
  return <>{list}</>;
};

export default TaskList;