import { Component, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {

  initForm = {
    producto: '',
    precio: 0,
    existencias: 0,
  }

  @ViewChild('miFormulario') miFormulario!: NgForm

  nombreValido(): boolean{
    return this.miFormulario?.controls['producto']?.invalid && 
      this.miFormulario?.controls['producto'].touched
  }

  precioValido(): boolean {
    console.log(this.miFormulario?.value.precio >= 0);
    return this.miFormulario?.value.precio < 0;
  }

  guardar( ): void{
    console.log(this.miFormulario);
    this.miFormulario.resetForm(this.initForm);
  }
}
