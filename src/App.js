import css from "./App.module.scss";
import React from "react";
// import cx from "classnames";
import MyIcons from "./MyIcons/MyIcons";

function App() {
  // const [toDoList, setToDoList] = useState([]);
  return (
    <div className={css.App}>
      {/* //     <div className={css.addTask}></div>
  //     <input />
  //     <button>Add Task</button>
  //     <div className={css.list}></div> */}
      <MyIcons icon="clear-sky-night" />
    </div>
  );
}

export default App;
