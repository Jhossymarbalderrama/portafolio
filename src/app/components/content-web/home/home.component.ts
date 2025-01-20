import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
declare var particlesJS: any;
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  logo: string = '';
  data: any;
  chartOpen: string = "</";
  chartClose: string = "";
  badges: any;

  constructor(
    private auth: AuthService
  ) {
    this.invokeParticles();

    this.auth.data$.subscribe(data => {
      if (data) {
        this.data = auth.getDataHome;
        this.logo = auth.getLogo;    
        this.badges = data.data_badges.badges;    
      }
    })
  }

  ngOnInit(): void {
  }

  private invokeParticles(): void {
    particlesJS.load('particles-home', '/assets/particles/circles.json', function () {
      // console.log('callback - particles.js config loaded');
    });
  }
}
