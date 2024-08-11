import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { newTask } from '../fetch-requests/db-fetch';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <form
      (ngSubmit)="onSubmit()"
      class="flex flex-col gap-y-3 p-7 bg-slate-50 m-7 shadow-sm"
      #taskForm="ngForm"
    >
      <label class="mb-5 border-b-2 border-green-500 w-fit text-xl font-bold">
        Add new Task
      </label>
      <input
        type="text"
        class="p-2"
        placeholder="Task Name"
        id="name"
        [(ngModel)]="name"
        name="name"
        required
        #nameCtrl="ngModel"
      />
      <div
        *ngIf="nameCtrl.invalid && nameCtrl.touched && !test"
        class="text-red-500"
      >
        <div *ngIf="nameCtrl.errors?.['required']">Name is required.</div>
      </div>
      <input
        type="text"
        class="p-2"
        placeholder="Task Description (optional)"
        id="description"
        [(ngModel)]="description"
        name="description"
      />
      <input type="time" class="p-2" id="time" [(ngModel)]="time" name="time" />
      <select
        name="urgency"
        id="urgency"
        class="p-2"
        [(ngModel)]="urgency"
        required
        #urgencyCtrl="ngModel"
      >
        <option value="" disabled selected>Task Urgency</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <div
        *ngIf="urgencyCtrl.invalid && urgencyCtrl.touched && !test"
        class="text-red-500"
      >
        <div *ngIf="urgencyCtrl.errors?.['required']">Urgency is required.</div>
      </div>
      <input
        type="submit"
        value="Add Task"
        class="mt-5 p-3 bg-green-500 text-white rounded-xl w-fit cursor-pointer"
        [disabled]="!taskForm.form.valid"
      />
    </form>
  `,
})
export class NewTaskComponent {
  name: string = '';
  description: string = '';
  time: string = '';
  urgency: string = '';
  test: boolean = false;

  async onSubmit() {
    try {
      await newTask(this.name, this.description, this.time, this.urgency);
      // Resetting form fields
      this.name = '';
      this.description = '';
      this.time = '';
      this.urgency = '';
      this.test = true;
      // Lazy task refetch after submit
      window.location.reload();
    } catch (error) {
      console.error('Error adding task:', error);
    }
  }
}
