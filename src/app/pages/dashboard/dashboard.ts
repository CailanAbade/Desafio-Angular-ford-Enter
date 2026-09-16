import { Component, OnInit } from '@angular/core';
import { Hamburguer } from '../../compenets/hamburguer/hamburguer';
import { Veiculo } from '../../models/veiculo.model';
import { Vehicle } from '../../services/vehicle';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  imports: [Hamburguer, CommonModule, FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {

  vehicles: Veiculo[] = [];
  Selecionado: Veiculo | null = null;
  vinDigitado: string = '';
  infoVeiculo: any = null;

  constructor(private vehicle: Vehicle) {}

  ngOnInit(): void {
    this.vehicle.getVeiculos().subscribe(
      response => {
        this.vehicles = response.vehicles;
      }
    );
  }

  veiculoSelecionado(event: Event): void {
    const idSelecionado = (event.target as HTMLSelectElement).value;

    if (idSelecionado) {
      this.Selecionado = this.vehicles.find(v => v.id == Number(idSelecionado)) || null;
    } else {
      this.Selecionado = null;
    }
  }

  buscarPorVin(): void {
    if (!this.vinDigitado) {
      return;
    }

    this.vehicle.getInfoPorVin(this.vinDigitado).subscribe({
      next: (response) => {
        this.infoVeiculo = response;
      },
      error: (err) => {
        console.error('Erro ao buscar veiculo:', err);
        this.infoVeiculo = null;
      }
    });
  }
}