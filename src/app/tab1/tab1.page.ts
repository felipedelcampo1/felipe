import { Component, OnInit } from '@angular/core';
import { Categoria } from '../core/interfaces/categorias';
import { CATEGORIAS } from '../core/interfaces/constants/categorias';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  
  categorias:Categoria[] = CATEGORIAS;
  
  
  
  
  ngOnInit(): void {
  }




}
