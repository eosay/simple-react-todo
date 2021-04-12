import "./Item.css";

const Item = (props) => {
  return (
    <div
      className={`itemContainer ${!props.taskInfo.enabled ? "noShadow" : ""}`}
      onClick={() => props.onClickItem(props.taskInfo.id)}
    >
      <li className={`listItem ${!props.taskInfo.enabled ? "itemDone" : ""}`}>
        {props.taskInfo.text}
      </li>
      <input
        className="radio"
        type="radio"
        checked={!props.taskInfo.enabled}
        readOnly
      ></input>
    </div>
  );
};

export default Item;
