import React from "react";

export default function Section(props) {
  return (
  <div id={props.id} className="section py-5 bg-primary">
    {props.children}
  </div>
  );
}