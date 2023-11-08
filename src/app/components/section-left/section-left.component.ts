import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-section-left',
  templateUrl: './section-left.component.html',
  styleUrls: ['./section-left.component.css']
})
export class SectionLeftComponent {

  constructor(private elementRef: ElementRef){

  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {

  }
}
