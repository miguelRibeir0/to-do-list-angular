import { Component } from '@angular/core';
import { NewTaskComponent } from './new-task/new-task.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NewTaskComponent],
  template: `<app-new-task />`,
})
export class MainComponent {}
