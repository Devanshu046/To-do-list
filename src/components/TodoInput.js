import React, { useState } from "react";

function TodoInput(props) {
  const [inputText, setInputText] = useState("");
  const handleEnterPress=(e)=>{
    if(e.keyCode===13){
        props.addList(inputText)
        setInputText("")
    }
  }
  return (
    <div className="input-container">
      <input
        placeholder="Enter your to-do"
        className="input-box-todo"
        type="text"
        onKeyDown={handleEnterPress}
        value={inputText}
        onChange={e=>{
            setInputText(e.target.value)
        }}
      />
      <button onClick={()=>{
        props.addList(inputText)
        setInputText("")
      }} className="add-btn">+</button>
      
    </div>
  );
}

export default TodoInput;
