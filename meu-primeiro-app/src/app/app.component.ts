import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListaComponent } from './components/lista/lista.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, ListaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'meu-primeiro-app';
}
