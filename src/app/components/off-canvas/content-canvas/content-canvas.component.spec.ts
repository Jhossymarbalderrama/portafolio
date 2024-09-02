import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCanvasComponent } from './content-canvas.component';

describe('ContentCanvasComponent', () => {
  let component: ContentCanvasComponent;
  let fixture: ComponentFixture<ContentCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentCanvasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
