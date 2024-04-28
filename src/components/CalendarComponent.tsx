
import { useState } from "react";
import { Calendar } from 'primereact/calendar';


export default function CalendarComponent({ firstDateProp, secondDateProp }: { firstDateProp: Date, secondDateProp: Date }) {
    const [firstDate, setFirstDate] = useState<Date>(firstDateProp);
    const [secondDate, setSecondDate] = useState<Date>(secondDateProp);

    return (
        <div className="card flex flex-wrap gap-3 p-fluid">
            <div className="flex-auto">
                <label htmlFor="buttondisplay" className="font-bold block mb-2">
                    Arrival Date
                </label>
                <Calendar id="buttondisplay" value={firstDate} onChange={(e) => {
  if (e.target.value) {
    setFirstDate(e.target.value);
  } else {
    setFirstDate(new Date());
  }
}}  showIcon />
            </div>

            <div className="flex-auto">
                <label htmlFor="buttondisplay1" className="font-bold block mb-2">
                    Departure Date Display
                </label>
                <Calendar id="buttondisplay1" value={secondDate} onChange={(e) => {
  if (e.target.value) {
    setSecondDate(e.target.value);
  } else {
    setSecondDate(new Date());
  }
}} showIcon />
            </div>

        </div>
    )
}
        