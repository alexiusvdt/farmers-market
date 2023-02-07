import React from "react";
import PropTypes from "prop-types";

function MarketDay(props){
  let selected = 'genericDay';
  if(props.day.toLowerCase() === props.selectedDay.toLowerCase()) {
    selected = 'selectedDay';
  }
  return(
    <div className={selected}>
     <h1>{props.day}'s schedule:</h1>
      <p>We're gonna be at {props.location} between {props.hours} at booth {props.booth} </p>
    </div>
  );
}

MarketDay.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired
}


export default MarketDay;