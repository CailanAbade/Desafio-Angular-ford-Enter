import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

const user_KEY = "auth-usuario"

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private apiurl = "http://localhost:3001";

  constructor(private http:HttpClient, private router:Router){}

  login(usuario: Pick<Usuario, 'nome'| 'senha'>):Observable<Usuario>{
    return this.http.post<Usuario>(`${this.apiurl}/login`, usuario).pipe(
      tap(Response =>{
        sessionStorage.setItem(user_KEY, JSON.stringify(Response))
      }
      )
    )

  }

  logout():void{
    sessionStorage.removeItem(user_KEY);
    this.router.navigate(["/login"]);
  }

  estalogado():boolean{
    const user = sessionStorage.getItem(user_KEY);
    return user ? true:false;
  }

  }

  
