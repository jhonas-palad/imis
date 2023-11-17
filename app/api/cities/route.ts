import { NextResponse } from "next/server"

const CITIES = [
  {state: 'Batangas', name: 'Agoncillo', 'id': 349}, 
  {state: 'Batangas', name: 'Alitagtag', 'id': 350}, 
  {state: 'Batangas', name: 'Balayan', 'id': 351}, 
  {state: 'Batangas', name: 'Balete', 'id': 352}, 
  {state: 'Batangas', name: 'Batangas City', 'id': 353}, 
  {state: 'Batangas', name: 'Bauan', 'id': 354}, 
  {state: 'Batangas', name: 'Calaca', 'id': 355}, 
  {state: 'Batangas', name: 'Calatagan', 'id': 356}, 
  {state: 'Batangas', name: 'Cuenca', 'id': 357}, 
  {state: 'Batangas', name: 'Ibaan', 'id': 358}, 
  {state: 'Batangas', name: 'Laurel', 'id': 359}, 
  {state: 'Batangas', name: 'Lemery', 'id': 360}, 
  {state: 'Batangas', name: 'Lian', 'id': 361}, 
  {state: 'Batangas', name: 'Lipa', 'id': 362}, 
  {state: 'Batangas', name: 'Lobo', 'id': 363}, 
  {state: 'Batangas', name: 'Mabini', 'id': 364}, 
  {state: 'Batangas', name: 'Malvar', 'id': 365}, 
  {state: 'Batangas', name: 'Mataasnakahoy', 'id': 366}, 
  {state: 'Batangas', name: 'Nasugbu', 'id': 367},
  {state: 'Batangas', name: 'Padre Garcia', 'id': 368}, 
  {state: 'Batangas', name: 'Rosario', 'id': 369}, 
  {state: 'Batangas', name: 'San Jose', 'id': 370}, 
  {state: 'Batangas', name: 'San Juan', 'id': 371}, 
  {state: 'Batangas', name: 'San Luis', 'id': 372}, 
  {state: 'Batangas', name: 'San Nicolas', 'id': 373}, 
  {state: 'Batangas', name: 'San Pascual', 'id': 374}, 
  {state: 'Batangas', name: 'Santa Teresita', 'id': 375}, 
  {state: 'Batangas', name: 'Sto. Tomas', 'id': 376}, 
  {state: 'Batangas', name: 'Taal', 'id': 377}, 
  {state: 'Batangas', name: 'Talisay', 'id': 378}, 
  {state: 'Batangas', name: 'Tanauan', 'id': 379},
  {state: 'Batangas', name: 'Taysan', 'id': 380}, 
  {state: 'Batangas', name: 'Tingloy', 'id': 381}, 
  {state: 'Batangas', name: 'Tuy', 'id': 382}]
export async function GET(){
  console.log("HELLO GET FROM CITIES")
  return NextResponse.json(CITIES)
}