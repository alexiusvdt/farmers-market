import React from "react";
import PropTypes from "prop-types";

function Produce(props){
  let selected = 'hidden';
  if (props.month.toLowerCase() === props.selectedMonth.toLowerCase()) {
    selected = 'selected-month';
  }
  return (
    <div className={selected}>
      <br/>
      <h1>{props.month}</h1>
      <ul>
        {props.selection.map((produce, index) => {
          return <li key={index}>{produce}</li>
        })}
      </ul>
      <hr/>
    </div>
  )
}

Produce.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.string
};

export default Produce;