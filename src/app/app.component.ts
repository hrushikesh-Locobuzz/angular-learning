import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';  
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, AboutComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'First-app';
}
