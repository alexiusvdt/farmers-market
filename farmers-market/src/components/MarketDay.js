import React from "react";
import PropTypes from "prop-types";

function MarketDay(props){
  return(
    <React.Fragment>

    </React.Fragment>
  );
}

MarketDay.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired
}


export default MarketDay;