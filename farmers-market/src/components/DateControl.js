import React from "react";
import DaySelect from "./DaySelect"
import MarketSchedule from "./MarketSchedule";
import SeasonalProduce from "./SeasonalProduce";

class DateControl extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      // state condition here
    }
  }

  handleClick = () => {
    this.setState(prevState => ({
      //condition var: new value for var
    }));
  }

  render() {
    let condition = null;
    let //more stuff here

    if (this.state.condition){
      //do a thing
    } else {
      //do another thing
    }
    return (
      <React.Fragment>
        {condition}
        {/* button if we need it */}
      </React.Fragment>
    )
  }
}

export default DateControl;