import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'proyecto4';
  constructor(){
    console.log("Nuevas funciones");
    console.warn("advertencia");
    console.log("Prueba de conflictos");
  }
}



