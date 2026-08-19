import { Injectable, computed, signal } from '@angular/core';
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
  private readonly accessToken = signal<string|null>(localStorage.getItem(ACCESS_TOKEN_KEY));
  private readonly refreshToken = signal<string|null>(localStorage.getItem(REFRESH_TOKEN_KEY));
  readonly isLoggedIn = computed(()=>this.accessToken() !== null);

  constructor(private _http:HttpClient) { }

  signin(user:string,password:string):Observable<any>{
    const parameters = {"username":user,"password":password};
    return this._http.post<any>(`${API_URL}/signin`,parameters).pipe(
      tap((res)=>this.setTokens(res.accessToken,res.refreshToken))
    );
  }

  signup(name:string,username:string,password:string):Observable<any>{
    const parameters = {"name":name,"username":username,"password":password};
    return this._http.post<any>(`${API_URL}/signup`,parameters).pipe(
      tap((res)=>this.setTokens(res.accessToken,res.refreshToken))
    );
  }

  refreshAccessToken():Observable<string>{
    const currentRefreshToken = this.refreshToken();
    return this._http.post<{accessToken:string}>(`${API_URL}/refresh-token`,{refreshToken:currentRefreshToken}).pipe(
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
    this.accessToken.set(accessToken);
    this.refreshToken.set(refreshToken);
  }
  setAccessToken(accessToken:string):void{
    localStorage.setItem(ACCESS_TOKEN_KEY,accessToken);
    this.accessToken.set(accessToken);
  }
  getAccessToken():string|null{
    return this.accessToken();
  }
  getRefreshToken():string|null{
    return this.refreshToken();
  }
  clearTokens():void{
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
    this.accessToken.set(null);
    this.refreshToken.set(null);
  }
}
