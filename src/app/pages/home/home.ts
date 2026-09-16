import { Component } from '@angular/core';
import { Hamburguer } from '../../compenets/hamburguer/hamburguer';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-home',
  imports: [Hamburguer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
