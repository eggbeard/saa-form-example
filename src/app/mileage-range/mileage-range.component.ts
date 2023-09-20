import { Component, Input, SkipSelf } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'saa-mileage-range',
  templateUrl: './mileage-range.component.html',
  styleUrls: ['./mileage-range.component.css'],
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: (container: ControlContainer) => container,
      deps: [[new SkipSelf(), ControlContainer]],
    },
  ],
})
export class MileageRangeComponent {
  @Input() minMilesControlName: string = 'minMiles';
  @Input() maxMilesControlName: string = 'maxMiles';
}
