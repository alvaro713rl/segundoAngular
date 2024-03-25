import { Component } from '@angular/core';

@Component({
  selector: 'app-rama1',
  standalone: true,
  imports: [],
  templateUrl: './rama1.component.html',
  styleUrl: './rama1.component.css'
})
export class Rama1Component {

  laRama1(): string{
  return "la rama1"
  }
}
