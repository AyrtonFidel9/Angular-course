import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {
  uppercase: string = 'fidel avalos';
  lowercase: string = 'FIDEL AVALOS';
  titlecase: string = 'FiDel aVaLos';

  fecha: Date = new Date();
}
