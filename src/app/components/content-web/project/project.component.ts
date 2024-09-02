import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Masonry from 'masonry-layout';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent implements AfterViewInit {
  @ViewChild('projectsGrid') projectsGrid!: ElementRef;
  data: any;

  constructor(
    private auth: AuthService
  ){
    this.auth.data$.subscribe(data => {
      if (data) {
        this.data = auth.getDataProject;      
      }
    })
  }

  ngAfterViewInit() {
    if (this.projectsGrid) {
      const msnry = new Masonry(this.projectsGrid.nativeElement, {
        itemSelector: '.grid-item',
        columnWidth: '.grid-item',
        percentPosition: true
      });
    }
  }
}
