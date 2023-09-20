import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MileageRangeComponent } from './mileage-range.component';

describe('MileageRangeComponent', () => {
  let component: MileageRangeComponent;
  let fixture: ComponentFixture<MileageRangeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MileageRangeComponent]
    });
    fixture = TestBed.createComponent(MileageRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
