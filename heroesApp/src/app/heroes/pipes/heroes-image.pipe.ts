import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interface';

@Pipe({
  name: 'heroesImage',
})
export class HeroesImagePipe implements PipeTransform {

  transform(value: Heroe): string {
    if(!value.id && !value.alt_img){
      return `assets/no-image.png`;
    }else if(value.alt_img)
      return value.alt_img;
    return `assets/heroes/${value.id}.jpg`;
  }

}
