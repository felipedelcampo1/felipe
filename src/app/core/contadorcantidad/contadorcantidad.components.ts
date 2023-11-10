import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-contador-cantidad',
  templateUrl: './contadorcantidad.component.html',
  styleUrls: ['./contadorcantidad.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class ContadorCantidadComponent1  implements OnInit {

  ngOnInit() {
    this.cantidad = this.cantidadInicial;
  }

  @Output() cantidadCambiada = new EventEmitter<number>();
  @Input() cantidadInicial:number = 1;

  cantidad=1;

  sumar(){
    this.cantidad = this.cantidad+1;
    this.cantidadCambiada.emit(this.cantidad);
  }

  restar(){
    if(this.cantidad > 1){
      this.cantidad = this.cantidad-1;
      this.cantidadCambiada.emit(this.cantidad);
    }
  }

}

