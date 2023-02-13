import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../components/dialog/dialog.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit{
  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - COMICS'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - COMICS'
    },
  ];

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img:''
  };

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
  ){}

  ngOnInit(): void {
    if(this.router.url.includes('editar')){
      this.activatedRoute.params
      .pipe(switchMap( ({id}) => this.heroesService.getHeroeById(id)))
      .subscribe(heroe => this.heroe = heroe)
    }
  }


  guardar(): void{

    if(this.heroe.id){
      this.heroesService.editarHeroe(this.heroe)
      .subscribe(() => {
        this.mostrarSnackbar('Registro Actualizado')
      });
    }else{
      this.heroesService.agregarHeroe(this.heroe)
      .subscribe(heroe => {
        this.router.navigate(['/heroes',heroe.id])
        this.mostrarSnackbar('Registro Creado')
      });
    }

  }

  borrar(): void {
    const dlgConf = this.dialog.open(DialogComponent, {
      data: {...this.heroe}
    });

    dlgConf.afterClosed().pipe(
      switchMap( (result) => {
        if(result) 
          return this.heroesService.eliminarHeroe(this.heroe.id!);
        else 
          return [];
      })
    ).subscribe(result => {
      console.log(result);
      this.router.navigate(['/heroes']);
    })

  }


  mostrarSnackbar(msg: string): void {
    this.snackBar.open(msg, 'Cerrar', {
      duration: 2500,
    })
  }
}
