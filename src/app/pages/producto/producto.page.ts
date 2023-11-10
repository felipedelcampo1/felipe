import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CATEGORIAS } from 'src/app/core/interfaces/constants/categorias';
import { Producto } from 'src/app/core/interfaces/productos';
import { CarritoService } from 'src/app/core/services/carrito.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {
  router: any;

  constructor(private activatedRouted:ActivatedRoute, 
              private carritoService: CarritoService) { 
    activatedRouted.params.subscribe (params => {
      console.log(params)
      CATEGORIAS.forEach(categoria =>{
        const productoEncontrado = categoria.productos.find(producto => producto.id ==params['id']);
        if(productoEncontrado)
        {this.producto = productoEncontrado}
      })
    })
  }

  ngOnInit() {
  }
producto:Producto = {
  id: 0,
  nombre: '',
  precio: 0,
  ingredientes: [],
  imagen: ''
}
cantidad=1;

onAgregarAlCarritoClicked(){
  this.carritoService.agregarProducto(this.producto,this.cantidad);
  console.log(this.carritoService.carrito);
  this.router.navigate(['tabs/tab1']);
}

}
