import http from '../http-commons';
import FlightResponse from '../types/FlightResponse';

const getAllFlights = () => {
    return http.get<FlightResponse []>("/flights")
}





export default {getAllFlights}