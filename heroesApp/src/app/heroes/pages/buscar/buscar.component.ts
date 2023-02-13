import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../components/dialog/dialog.component';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent{
  termino: string = '';
  heroes: Heroe[] = [];
  option: Heroe | undefined;

  constructor(
    private heroesService: HeroesService,
    public dialog: MatDialog,
  ){}

  buscando(){
    this.heroesService.getSugerencias(this.termino.trim())
      .subscribe(heroesList => this.heroes = heroesList)        
  }

  opcionSeleccionada(event: MatAutocompleteSelectedEvent){
    if(event.option.value){
      const heroe: Heroe = event.option.value;
      this.termino = heroe.superhero;
  
      this.heroesService.getHeroeById(heroe.id!)
        .subscribe(h => this.option = heroe);
    }else{
      this.option = undefined;
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}
