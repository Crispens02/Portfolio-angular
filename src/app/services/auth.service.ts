import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtDto } from '../model/jwt-dto';
import { LoginUsuario } from '../model/login-usuario';
import { NuevoUsuario } from '../model/nuevo-usuario';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authURL = 'http://localhost:8080/auth/'
   /* authURL = 'https://portfolio-web-crispens.onrender.com/auth/'; */
  constructor(private httpclient: HttpClient) {}

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.httpclient.post(this.authURL + 'nuevo', nuevoUsuario);
  }
  public login(loginUsuario: LoginUsuario): Observable<JwtDto> {
    return this.httpclient.post<JwtDto>(this.authURL + 'login', loginUsuario);
  }
}
