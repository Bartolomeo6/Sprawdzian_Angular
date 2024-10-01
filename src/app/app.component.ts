import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GaleriaComponent } from './galeria/galeria.component';
import { CommonModule } from '@angular/common';
import { BanerComponent } from "./baner/baner.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GaleriaComponent, CommonModule, BanerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'auta';
}
