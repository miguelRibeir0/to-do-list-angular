import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  template: `
    <form class="flex flex-col gap-y-3 p-7 bg-slate-50 m-7 shadow-sm">
      <label class="mb-5 border-b-2 border-green-500 w-fit text-xl"
        >Add new Task</label
      >
      <input
        type="text"
        class="p-2"
        placeholder="Task Name"
        id="name"
        [(ngModel)]="name"
        name="name"
        required
      />
      <input
        type="text"
        class="p-2"
        placeholder="Task Description (optional)"
        id="description"
        [(ngModel)]="description"
        name="description"
      />
      <input type="date" class="p-2" id="date" [(ngModel)]="date" name="date" />

      <select
        name="urgency"
        id="urgency"
        class="p-2"
        [(ngModel)]="urgency"
        required
      >
        <option value="" disabled selected>Task Urgency</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>

      <input
        type="submit"
        value="Add Task"
        class="mt-5 p-3 bg-green-500 text-white w-fit rounded cursor-pointer"
      />
    </form>
  `,
})
export class NewTaskComponent {
  name: string = '';
  description: string = '';
  date: string = '';
  urgency: string = '';
}
