import { Component, Inject, inject } from '@angular/core';
import { CarsService } from '../cars.service';
import { Car } from '../car';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {
  listaSamochodow: Car[] = [];
  constructor(carsService: CarsService){
    this.listaSamochodow = carsService.getAllCars();
  }
}
