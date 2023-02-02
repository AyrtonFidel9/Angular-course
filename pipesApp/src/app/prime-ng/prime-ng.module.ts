import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import { CalendarModule} from 'primeng/calendar';
import {MenuModule} from 'primeng/menu';
import {MenubarModule} from 'primeng/menubar';
import {FieldsetModule} from 'primeng/fieldset';

@NgModule({
  exports: [
    ButtonModule,
    CalendarModule,
    CardModule,
    MenuModule,
    MenubarModule,
    FieldsetModule,
  
  ],

})
export class PrimeNgModule { }
