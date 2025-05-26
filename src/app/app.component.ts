import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';  
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, HeaderComponent, AboutComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'First-app';
  showSkills = false;

  name = '';

  skills = [
    'Dot Net Framework',
    'C#',
    'Java',
    'HTML',
    'CSS',
    'SQL'
  ];

  toggleSkills() {
    this.showSkills = !this.showSkills;
  }
}
