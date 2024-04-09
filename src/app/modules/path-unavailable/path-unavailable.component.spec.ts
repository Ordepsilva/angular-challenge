import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathUnavailableComponent } from './path-unavailable.component';

describe('PathUnavailableComponent', () => {
  let component: PathUnavailableComponent;
  let fixture: ComponentFixture<PathUnavailableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PathUnavailableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PathUnavailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
