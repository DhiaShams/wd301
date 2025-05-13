import './TaskCard.css'

const TaskCard = (props) => {
  if(props.flag === "pending"){
  return (
    <div class="TaskItem">
      <h2 className="text-xl font-bold">{props.title}</h2>
      <p>Due on: {props.duedate}</p>
      <p>Assignee: {props.assignee}</p>
    </div>  
  )
  }
  else if(props.flag === "done"){
    return (
        <div class="TaskItem">
          <h2 className="text-xl font-bold">{props.title}</h2>
          <p>Completed on: {props.completedate}</p>
          <p>Assignee: {props.assignee}</p>
        </div>
    )
  }
}

export default TaskCard;