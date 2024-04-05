import Datepicker from "./InputBlocks/Datepicker"
import TimeSetter from "./InputBlocks/TimeSetter"
function Appointment(){
    return <div className="flex">
        <p className="m-4">Set your appointment</p>
        <Datepicker/>
        <TimeSetter/>
    </div>
}export default Appointment;