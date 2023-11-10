import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CATEGORIAS } from 'src/app/core/interfaces/constants/categorias';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage implements OnInit {

  constructor(
    private activatedRoute : ActivatedRoute) {
      activatedRoute.params.subscribe(params=>{ 
        const categoriaEncontrada = CATEGORIAS.find(categoria => categoria.id == params ['id'])
        if(categoriaEncontrada) {this.categoriaActual = categoriaEncontrada;
        }
        console.log(params)
        if (params['id'])
        {
          this.categoriaActual = CATEGORIAS[params['id']]
        }
         }) 

      
     
    }

  ngOnInit() {  }

categoriaActual = CATEGORIAS[0];

}
