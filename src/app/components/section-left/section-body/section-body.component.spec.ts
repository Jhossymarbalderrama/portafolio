import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBodyComponent } from './section-body.component';

describe('SectionBodyComponent', () => {
  let component: SectionBodyComponent;
  let fixture: ComponentFixture<SectionBodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionBodyComponent]
    });
    fixture = TestBed.createComponent(SectionBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
