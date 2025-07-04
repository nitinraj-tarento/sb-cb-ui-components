import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageDialogeComponent } from './language-dialoge.component';

describe('LanguageDialogeComponent', () => {
  let component: LanguageDialogeComponent;
  let fixture: ComponentFixture<LanguageDialogeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LanguageDialogeComponent]
    });
    fixture = TestBed.createComponent(LanguageDialogeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
