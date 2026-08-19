import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const ACCESS_TOKEN_KEY = 'accessToken';
const REFRESH_TOKEN_KEY = 'refreshToken';
const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _http:HttpClient) { }

  signin(user:string,password:string):Observable<any>{
    const parameters = {"username":user,"password":password};
    return this._http.post<any>(`${API_URL}/signin`,parameters).pipe(
      tap((res)=>this.setTokens(res.accessToken,res.refreshToken))
    );
  }

  refreshAccessToken():Observable<string>{
    const refreshToken = this.getRefreshToken();
    return this._http.post<{accessToken:string}>(`${API_URL}/refresh-token`,{refreshToken}).pipe(
      tap((res)=>this.setAccessToken(res.accessToken)),
      map((res)=>res.accessToken)
    );
  }

  logout():Observable<any>{
    return this._http.post(`${API_URL}/logout`,{}).pipe(
      tap(()=>this.clearTokens())
    );
  }

  setTokens(accessToken:string,refreshToken:string):void{
    localStorage.setItem(ACCESS_TOKEN_KEY,accessToken);
    localStorage.setItem(REFRESH_TOKEN_KEY,refreshToken);
  }
  setAccessToken(accessToken:string):void{
    localStorage.setItem(ACCESS_TOKEN_KEY,accessToken);
  }
  getAccessToken():string|null{
    return localStorage.getItem(ACCESS_TOKEN_KEY);
  }
  getRefreshToken():string|null{
    return localStorage.getItem(REFRESH_TOKEN_KEY);
  }
  clearTokens():void{
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
  }
  isLoggedIn():boolean{
    return !!this.getAccessToken();
  }
}
