import React, { useState } from "react";
import MarketSchedule from "./MarketSchedule";
import SeasonalProduce from "./SeasonalProduce";
import moment from "moment";

function DaySelect() {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [date, setDate] = useState('');
  let dateVsibility = "hiddenDate";
  if(date != "") {
    dateVsibility = 'showDate';
  }
  
  const handleChange = (e) => {
    const momentDate = moment(date, "YYYY-MM-DD")
    const momentDay = momentDate.format('dddd');
    const momentMonth = momentDate.format('MMMM');
    let input = e.target.value;
    setDay(momentDay);
    setMonth(momentMonth);
    setDate(input);
    console.log(`month: ${momentMonth}, day: ${momentDay}, date: ${date}`);
  };
  // handleChange();

  return (
    <React.Fragment>
      <div className="dateInput">
        {/* <form onSubmit={handleChange}> */}
          {/* <input type="date" /> */}
          {/* <p>Selected Date: {date}</p> */}
          {/* <p><button type="submit">Submit</button></p> */}
        {/* </form> */}
        <input type="date" value="2023-02-07" onChange={handleChange} />

        {/* <p className={dateVsibility}>Selected Date: {date}</p> */}

        
      </div>
      <div id="body" className="bodyHolder">
        <div ><MarketSchedule day={day}/></div>
        <div className="seasonal-produce"><SeasonalProduce month={month}/></div>
      </div>
    </React.Fragment>
    );
}

export default DaySelect;