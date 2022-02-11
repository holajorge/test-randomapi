
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  urlApi = "https://randomapi.com/api/qkjuo9m1?key=V93L-ET5H-U3IL-VR4S&results=25&seed=huskiesarecute&page=1";

  constructor(private http: HttpClient) { }
  get headers(){
    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});
    let options = { headers: headers };
    return options
  }
  getUsers(){
       
    return this.http.get(this.urlApi,this.headers).pipe(
      map( (res:any) => {
          let {results} = res;
          
          return results;
          
      }),
      catchError( error => of(false))
    )
    // return this.http.get(this.urlApi).pipe();

  }
}
