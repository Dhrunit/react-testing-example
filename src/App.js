import Todo from "./components/todo";
import "./App.css";

function App() {
  const todos = [
    { id: 1, title: "Wash dishes", completed: false },
    { id: 2, title: "Make dinner", completed: true },
  ];
  return (
    <div className="App">
      {todos.map((val) => (
        <Todo key={val.id} todo={val} />
      ))}
    </div>
  );
}

export default App;
