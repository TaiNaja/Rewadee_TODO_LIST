import React, { useState } from "react";
import DatePicker from "react-datepicker";

export default function App() {
  const [date, setDate] = useState(new Date());

  const weekend = (date) => new Date() < date;

  return (
    <div>
      <DatePicker
        showTimeSelect
        filterDate={weekend}
        selected={date}
        onChange={(date) => setDate(date)}
      />
    </div>
  );
}