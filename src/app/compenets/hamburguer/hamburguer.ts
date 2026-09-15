import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

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

}
