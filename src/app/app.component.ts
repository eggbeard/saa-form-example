import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'saa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myFormFather = new FormGroup({
    nickName: new FormControl(),
    name: new FormControl(),
    age: new FormControl(),
    minAge: new FormControl()
  });

  onSubmit() {}
}
