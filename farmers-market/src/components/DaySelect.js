import React, { useState } from "react";
import MarketSchedule from "./MarketSchedule";
import SeasonalProduce from "./SeasonalProduce";
import moment from "moment";

function DaySelect() {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [date, setDate] = useState('');
  
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

  return (
    <React.Fragment>
      <div>
        {/* <form onSubmit={handleChange}> */}
          {/* <input type="date" /> */}
          {/* <p>Selected Date: {date}</p> */}
          {/* <p><button type="submit">Submit</button></p> */}
        {/* </form> */}
        <input type="date" value="2023-02-07" onChange={handleChange} />
        <p>selectedDate: {date}</p>
      </div>
      <div id="body">
        <MarketSchedule day={day}/>
        <SeasonalProduce month={month}/>
      </div>
    </React.Fragment>
    );
}


export default DaySelect;