import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RidesSummariesComponent } from './rides-summaries.component';

describe('RidesSummariesComponent', () => {
  let component: RidesSummariesComponent;
  let fixture: ComponentFixture<RidesSummariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RidesSummariesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RidesSummariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
