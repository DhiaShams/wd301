import './TaskCard.css'

interface TaskCardProps {
  title: string;
  dueDate?: string;
  completedAtDate?: string;
  assigneeName: string;
}

const TaskCard = (props: TaskCardProps) => {
  let displayDate = ""
  if(props.dueDate){
     displayDate ="Due on: " + props.dueDate;
  }
  else {
    displayDate = "Completed on: "+ props.completedAtDate;
  }
  
  return (
    <div className="TaskItem">
      <h2 className="text-xl font-bold">{props.title}</h2>
      <p> {displayDate}</p>
      <p>Assignee: {props.assigneeName}</p>
    </div>  
  )
}

export default TaskCard;