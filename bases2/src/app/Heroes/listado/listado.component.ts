import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit{

  heroes: string[] = ['Spiderman', 'Hulk', 'Ironman', 'Thor'];
  borrado: string = '';
  

  constructor(){
    console.log("constructor");
  }

  ngOnInit(): void {
    console.log("OnInit")
  }

  borrarHeroe(): void {
    this.borrado = this.heroes.pop() || '';
  }
}
