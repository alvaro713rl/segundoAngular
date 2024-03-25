import { Component } from '@angular/core';

@Component({
  selector: 'app-rama2',
  standalone: true,
  imports: [],
  templateUrl: './rama2.component.html',
  styleUrl: './rama2.component.css'
})
export class Rama2Component {
  laRama2(): string{
    let variable= "para el segundo commit de la rama 2"
    return "la rama2"+variable;
    }
}
