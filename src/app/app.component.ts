import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitleComponent } from './title/title.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TitleComponent],
  template: `
    <app-title />
    <router-outlet />
  `,
})
export class AppComponent {
  title = 'to-do-list-angular';
}
