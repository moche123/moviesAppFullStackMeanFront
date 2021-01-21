import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token:string = '';
  private url:string = 'http://localhost:3000/signin';
  private httpOptions = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  logged = false;
  constructor(private _http:HttpClient) { }
  signin(user:string,password:string):Observable<any>{
    let parameters:any = {"username":user,"password":password};
    return this._http.post<any>(this.url,parameters);
  }
  saveToken(token:string){
    this.token = token;
  }
  getToken(){
    return this.token
  }
}
