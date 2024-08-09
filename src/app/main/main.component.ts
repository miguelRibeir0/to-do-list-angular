import { Component } from '@angular/core';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NewTaskComponent, TasksComponent],
  template: `<app-new-task /> <app-tasks />`,
})
export class MainComponent {}
