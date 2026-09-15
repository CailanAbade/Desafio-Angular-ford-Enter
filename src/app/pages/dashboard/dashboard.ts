import { Component } from '@angular/core';
import { Hamburguer } from '../../compenets/hamburguer/hamburguer';

@Component({
  selector: 'app-dashboard',
  imports: [Hamburguer],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

}
