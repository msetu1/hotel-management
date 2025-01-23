import { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // Main style file
import "react-date-range/dist/theme/default.css"; // Theme file

const TestCalendar = () => {
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleDates = (item) => {
    setDates(item.selection);
  };

  return (
    <div>
      <h1>Select Date Range</h1>
      <DateRange
        rangeColors={["#F6536D"]}
        editableDateInputs={true}
        onChange={(item) => handleDates(item)}
        moveRangeOnFirstSelection={false}
        ranges={[dates]}
        minDate={new Date()}
      />
    </div>
  );
};

export default TestCalendar;
