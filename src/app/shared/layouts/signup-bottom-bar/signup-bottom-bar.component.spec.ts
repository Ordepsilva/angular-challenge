import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupBottomBarComponent } from './signup-bottom-bar.component';

describe('SignupBottomBarComponent', () => {
  let component: SignupBottomBarComponent;
  let fixture: ComponentFixture<SignupBottomBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupBottomBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignupBottomBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
