import './App.css';
import TaskList from "./TaskList";
import TaskApp from "./TaskApp";
function App() {
  return (
    <div className="App">
      <TaskApp />
      <TaskList tasks={[]}/>
    </div>
  );
}
export default App;