import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-barra-busqueda',
  templateUrl: './barra-busqueda.component.html',
  styleUrls: ['./barra-busqueda.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class BarraBusquedaComponent implements OnInit {
  //almacena valor inputBusqueda
  textBusaqueda: string;

  //crear el evento que emite
  @Output() eventoChange = new EventEmitter<string>();

  constructor() {
    this.textBusaqueda = '';
  }

  ngOnInit() {}

  //se ejecuta cada vez que se modifica el valor del input
  buscarFunction() {
    this.eventoChange.emit(this.textBusaqueda);
  }
}
