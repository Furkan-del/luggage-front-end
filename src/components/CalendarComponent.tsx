

import { Calendar } from 'primereact/calendar';


export default function CalendarComponent({ onChange,value, placeholder  }: {onChange:any,value:any, placeholder : any}) {
    

    return (
        <div className="card flex flex-wrap gap-3 p-fluid">
           
            <div className="flex-auto">
                <Calendar id="buttondisplay1" placeholder={placeholder} value={value} onChange={onChange} dateFormat="dd/mm/yy" showIcon />
            </div>

        </div>
    )
}
        