
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  urlApi = "https://randomapi.com/api/qkjuo9m1?key=V93L-ET5H-U3IL-VR4S&results=25&seed=huskiesarecute&page=1";

  constructor(private http: HttpClient) { }
  getUsers(){
    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});
    let options = { headers: headers };
    
    return this.http.get(this.urlApi,options).toPromise()
    .then((res) =>{
      
      return { success: true, response:res};
    })
    .catch( (err) =>{
      
      return { success: false, msj:'Ocurrió un error en el envío del pedido'};
    });
    // return this.http.get(this.urlApi).pipe();

  }
}
