

import { Calendar } from 'primereact/calendar';


export default function CalendarComponent({ date, setDate ,label}: {date:any,setDate:any,label:any }) {
    

    return (
        <div className="card flex flex-wrap gap-3 p-fluid">
           
            <div className="flex-auto">
                <label htmlFor="buttondisplay1" className="font-bold block mb-2">
                    {label}
                </label>
                <Calendar id="buttondisplay1" value={date} onChange={setDate}  dateFormat="dd/mm/yy" showIcon />
            </div>

        </div>
    )
}
        