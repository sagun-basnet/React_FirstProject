import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked " + text);
    const toUp = text.toUpperCase();
    setNewText(toUp);
    // setText(toUp);
  };
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
  //   const [text, setText] = useState("Enter text here");
  const [text, setText] = useState();
  const [newtext, setNewText] = useState();
  //   setText("Please enter text here"); //to change the state
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3 my-3">
          <textarea
            className="form-control"
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            placeholder="Enter your text"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to UPPERCASE
        </button>
        <h1>Result: </h1>
        <div className="mb-3 my-3">
          <textarea
            className="form-control"
            value={newtext}
            id="myResBox"
            rows="8"
            placeholder="Your reasult appere here.."
          ></textarea>
        </div>
      </div>
      <div className="container">
        <h1>Your text summary</h1>
        {/* <p>{text.slice(" ").length} words and {text.length} characters</p> */}
      </div>
    </>
  );
}
