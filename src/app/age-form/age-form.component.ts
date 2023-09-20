import { Component, Input, SkipSelf } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'saa-age-form',
  templateUrl: './age-form.component.html',
  styleUrls: ['./age-form.component.css'],
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: (container: ControlContainer) => container,
      deps: [[new SkipSelf(), ControlContainer]],
    },
  ],
})
export class AgeFormComponent {
  @Input() formControlName: string = 'age';

}
