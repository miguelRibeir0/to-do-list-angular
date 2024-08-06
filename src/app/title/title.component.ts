import { Component } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  template: `
    <h1 class="p-7 bg-green-500 text-white text-3xl uppercase">To-Do List</h1>
  `,
})
export class TitleComponent {}
