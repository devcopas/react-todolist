import "./styles.css";
import Paper from "./components/Paper";

export default function App() {
  return (
    <Paper>
      <section className="header">
        <button className="header-btn main-blue-color">Add</button>
        <h1 className="header-title">Todo List</h1>
        <button className="header-btn clear">Clear</button>
      </section>
      <section className="add">
        <form className="add-form">
          <input type="text" className="add-input" />
          <button className="add-btn">Add</button>
        </form>
      </section>
      <section className="todos">
        <div className="todo">
          <span className="todo-text">Learning React</span>
        </div>
        <div className="todo">
          <span className="todo-text">Learning React</span>
        </div>
        <div className="todo">
          <span className="todo-text">Learning React</span>
        </div>
        <div className="todo">
          <span className="todo-text">Learning React</span>
        </div>
        <div className="todo">
          <span className="todo-text">Learning React</span>
        </div>
        <div className="todo">
          <span className="todo-text">Learning React</span>
        </div>
        <div className="todo">
          <span className="todo-text">Learning React</span>
        </div>
        <div className="todo">
          <span className="todo-text">Learning React</span>
        </div>
        <div className="todo">
          <span className="todo-text">Learning React</span>
        </div>
        <div className="todo">
          <span className="todo-text">Learning React</span>
        </div>
      </section>
    </Paper>
  );
}
