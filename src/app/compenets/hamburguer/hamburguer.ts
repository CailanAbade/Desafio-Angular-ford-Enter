import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-hamburguer',
  imports: [CommonModule],
  templateUrl: './hamburguer.html',
  styleUrl: './hamburguer.css',
})
export class Hamburguer {

  elemento = false;

  mostrarElemento(){
    
    this.elemento = !this.elemento;
  }

  constructor(private auth:Auth){}

  logout():void{
    this.auth.logout();
  }

}
