import "./List.css";
import Item from "../Item/Item";
import { useTransition, animated } from "react-spring";

const List = (props) => {
  const transition = useTransition(props.items, {
    from: { opacity: 0, transform: "translate(-2rem,0rem)" },
    enter: { opacity: 1, transform: "translate(0rem,0rem)" },
    leave: { opacity: 0, transform: "translate(2rem,0rem)" },
    config: { duration: 350 },
    keys: props.items.map((item) => item.id),
  });

  return (
    <ul className="list">
      {transition((styles, item) => (
        <animated.div style={styles}>
          <Item onClickItem={props.onClickItem} taskInfo={item}></Item>
        </animated.div>
      ))}
    </ul>
  );
};

export default List;
