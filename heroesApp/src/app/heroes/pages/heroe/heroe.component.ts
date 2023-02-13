import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe;

  constructor(
    private route: ActivatedRoute,
    private heroeService: HeroesService
  ){}

  ngOnInit(): void {
    this.route.params
    .pipe(
      switchMap( params =>  this.heroeService.getHeroeById(params['id']))
    )
    .subscribe( dat => {
      this.heroe = {...dat};
      console.log(this.heroe);
    });
  }
}
