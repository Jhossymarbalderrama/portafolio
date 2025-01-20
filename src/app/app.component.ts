import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { OffCanvasComponent } from "./components/off-canvas/off-canvas.component";
import { ContentWebComponent } from "./components/content-web/content-web.component";

import AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [OffCanvasComponent, ContentWebComponent],
  templateUrl: './app.component.html', 
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    initFlowbite();
    AOS.init();
  }

  
}
