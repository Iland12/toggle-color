import React, { useState } from "react";
import "./App.css";

function ToggleColor() {
  const [text, setText] = useState("Choose the color");
  const [color, setColor] = useState("grey");
  const [theme, setTheme] = useState("black");
  const [themeBorder, setThemeBorder] = useState("white");

  const handleTheme = () => setTheme("white");
  const handleThemed = () => setTheme("black");
  const handleBorder = () => setThemeBorder("black");
  const handleBordered = () => setThemeBorder("white");

  return (
    <div
      className="container"
      style={{ backgroundColor: theme, border: `3px solid ${themeBorder}` }}
    >
      <h2
        style={{
          color: color,
          textShadow: `1px 2px 3px ${themeBorder}`,
          WebkitTextStroke: `1px ${themeBorder}`,
        }}
      >
        TOGGLING COLOR
      </h2>
      <div
        className="main-color"
        style={{ backgroundColor: color, border: `1px solid  ${themeBorder}` }}
      >
        {text}
      </div>
      <div className="color-panel">
        <button
          id="red"
          className="btn"
          style={{
            border:
              color === "red"
                ? `3px solid ${themeBorder}`
                : `1px solid  ${themeBorder}`,
          }}
          onClick={() => {
            setColor("red");
            setText("RED");
          }}
        ></button>
        <button
          id="green"
          className="btn"
          style={{
            border:
              color === "green"
                ? `3px solid ${themeBorder}`
                : `1px solid  ${themeBorder}`,
          }}
          onClick={() => {
            setColor("green");
            setText("GREEN");
          }}
        ></button>
        <button
          id="yellow"
          className="btn"
          style={{
            border:
              color === "yellow"
                ? `3px solid ${themeBorder}`
                : `1px solid  ${themeBorder}`,
          }}
          onClick={() => {
            setColor("yellow");
            setText("YELLOW");
          }}
        ></button>
        <button
          id="pink"
          className="btn"
          style={{
            border:
              color === "pink"
                ? `3px solid ${themeBorder}`
                : `1px solid  ${themeBorder}`,
          }}
          onClick={() => {
            setColor("pink");
            setText("PINK");
          }}
        ></button>
        <button
          id="orange"
          style={{
            border:
              color === "orange"
                ? `3px solid ${themeBorder}`
                : `1px solid  ${themeBorder}`,
          }}
          className="btn"
          onClick={() => {
            setColor("orange");
            setText("ORANGE");
          }}
        ></button>
        <button
          id="cadetblue"
          className="btn"
          style={{
            border:
              color === "cadetblue"
                ? `3px solid ${themeBorder}`
                : `1px solid  ${themeBorder}`,
          }}
          onClick={() => {
            setColor("cadetblue");
            setText("CADET BLUE");
          }}
        ></button>
        <button
          id="violet"
          className="btn"
          style={{
            border:
              color === "violet"
                ? `3px solid ${themeBorder}`
                : `1px solid  ${themeBorder}`,
          }}
          onClick={() => {
            setColor("violet");
            setText("VIOLET");
          }}
        ></button>
      </div>
      <div
        className="theme"
        style={{
          border: `4px solid ${themeBorder}`,
          boxShadow: `0 0 10px ${themeBorder}`,
          // color: { themeBorder },
        }}
      >
        <span
          className="material-icons"
          style={{
            color: themeBorder,
          }}
          onClick={() => {
            if (theme === "black") {
              handleTheme();
              handleBorder();
            } else {
              handleThemed();
              handleBordered();
            }
          }}
        >
          {theme === "black" ? "light_mode" : "dark_mode"}
        </span>
      </div>
    </div>
  );
}
export default ToggleColor;
