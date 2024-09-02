import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentWebComponent } from './content-web.component';

describe('ContentWebComponent', () => {
  let component: ContentWebComponent;
  let fixture: ComponentFixture<ContentWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentWebComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
