import { Injectable } from '@angular/core';
import { Car } from './car';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  listaSamochodow: Car[] = [
    {
      id: 1,
      marka: "Fiat",
      model: "Punto",
      rocznik: 1998,
      zdjecie: "fiat.jpg",
      przebieg: 45000,
      cena: 36000,
      pierwszyWlasciciel: true,
    },
    {
      id: 2,
      marka: "Ford",
      model: "Mustang",
      rocznik: 2015,
      zdjecie: "ford.jpg",
      przebieg: 48000,
      cena: 25000,
      pierwszyWlasciciel: true,
    },
    {
      id: 3,
      marka: "Skoda",
      model: "Octavia",
      rocznik: 1998,
      zdjecie: "skoda.jpg",
      przebieg: 148000,
      cena: 125000,
      pierwszyWlasciciel: true,
    },
    {
      id: 4,
      marka: "Mercedes",
      model: "CLA AMG",
      rocznik: 2020,
      zdjecie: "mercedes.jpg",
      przebieg: 75000,
      cena: 88000,
      pierwszyWlasciciel: true,
    },
    {
      id: 5,
      marka: "Toyota",
      model: "Supra",
      rocznik: 2022,
      zdjecie: "toyota.jpg",
      przebieg: 0,
      cena: 105000,
      pierwszyWlasciciel: false,
    }
  ];

  getAllCars(): Car[]{
    return this.listaSamochodow;
  }
}
