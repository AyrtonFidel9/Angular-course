import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

import localeEs from '@angular/common/locales/es-EC';
import localeIt from '@angular/common/locales/it';
import { registerLocaleData } from '@angular/common'
registerLocaleData(localeEs);
registerLocaleData(localeIt);

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    SharedModule,
    VentasModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
    provide: LOCALE_ID, 
    useValue: 'es-EC'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
