import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RideComponent } from './ride.component';

describe('RideComponent', () => {
  let component: RideComponent;
  let fixture: ComponentFixture<RideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RideComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
