import { useState } from "react";
import "./Field.css";
import { ReactComponent as AddIcon } from "../../images/add_black_24dp.svg";

const Field = (props) => {
  const [text, setText] = useState("");

  const handleInput = () => {
    if (text) {
      props.onNewInput(text);
      setText("");
    }
  };

  return (
    <div className="fieldContainer">
      <form
        className="inputFieldForm"
        onSubmit={(e) => {
          e.preventDefault();
          handleInput();
        }}
      >
        <input
          className="textInput"
          autoFocus={true}
          placeholder="What's next?"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></input>
      </form>
      <button className="btnAdd" onClick={handleInput}>
        <AddIcon fill="white"></AddIcon>
      </button>
    </div>
  );
};

export default Field;
