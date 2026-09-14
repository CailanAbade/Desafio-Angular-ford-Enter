import { Component } from '@angular/core';
import { Hamburguer } from '../../compenets/hamburguer/hamburguer';

@Component({
  selector: 'app-home',
  imports: [Hamburguer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
