import LuggageDto from "./LuggageDto";
import PassengerDto from "./PassengerDto";

// bu bizim request atıcağımız model front-end tasarımını buradan alacağımız verilere göre düzenlemen lazım nulları boşver düşünme
export default interface CreateFlightRequest{
    pnrCode:string,
    departureDate:string,
    departureLocation:string,
    arrivalLocation:string,
    returnDate:string,
    passengerType:string,
    passengers:PassengerDto [] | null,
    luggages:LuggageDto [] | null
 }