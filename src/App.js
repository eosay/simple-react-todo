import { useState } from "react";
import { useSpring, animated } from "react-spring";
import "./App.css";
import Field from "./components/Field/Field";
import List from "./components/List/List";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [count, setCount] = useState(0);
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1300 },
  });

  const createListItem = (text, id) => ({ text: text, id: id, enabled: true });

  const handleItemClick = (listKey) => {
    setTasks((prevTasks) => {
      const tasksCopy = [...prevTasks];
      const taskIndex = tasksCopy.findIndex(
        (element) => element.id === listKey
      );
      if (taskIndex !== -1) {
        tasksCopy[taskIndex].enabled = false;
        tasksCopy.splice(taskIndex, 1);
      }
      return tasksCopy;
    });
  };

  return (
    <animated.div style={props}>
      <div className="centerpanel">
        <h1 className="title">todo</h1>
        <Field
          onNewInput={(text) => {
            setTasks((prevTasks) => [
              ...prevTasks,
              createListItem(text, count),
            ]);
            setCount((prevCount) => prevCount + 1);
          }}
        ></Field>
        <List items={tasks} onClickItem={handleItemClick}></List>
      </div>
    </animated.div>
  );
};

export default App;
