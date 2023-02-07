import React from "react";
import MarketSchedule from "./MarketSchedule"
import SeasonalProduce from "./SeasonalProduce"

function Body() {
  return (
    <React.Fragment>
      <div id="market-schedule">
        <MarketSchedule />
      </div>

      <div id="seasonal-produce">
        <SeasonalProduce />
      </div>
    </React.Fragment>
  );
}

export default Header;