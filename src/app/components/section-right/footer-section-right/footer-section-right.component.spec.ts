import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSectionRightComponent } from './footer-section-right.component';

describe('FooterSectionRightComponent', () => {
  let component: FooterSectionRightComponent;
  let fixture: ComponentFixture<FooterSectionRightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterSectionRightComponent]
    });
    fixture = TestBed.createComponent(FooterSectionRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
