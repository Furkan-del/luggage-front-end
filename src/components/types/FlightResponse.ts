import LuggageDto from "./LuggageDto";
import PassengerDto from "./PassengerDto";

// bu response bize atılan istek sonrası dönecek datadır get isteklerinde bu veriler backendden frontende basılır buna göre frontendi oluşturmak gerekir
export default interface FlightResponse{
    id?:any | null,
    pnrCode:string,
    departureDate:string,
    departureLocation:string,
    arrivalLocation:string,
    returnDate:string,
    passengers:PassengerDto [] | null ,
    luggages:LuggageDto [] | null
}