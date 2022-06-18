import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userName: string = 'hvnndr';
  userData: object = {
    age: 15,
    role: 'Admin'
  }

  title = 'curso-angular';
}
