import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { getTasks, deleteTask, taskState } from '../fetch-requests/db-fetch';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule],
  template: `<section
    class="flex flex-col gap-y-3 p-7 bg-slate-50 m-7 shadow-sm"
  >
    <h2 class="text-xl font-bold border-b-2 border-green-500 w-fit">Tasks</h2>
    <div
      class="mt-5 border-2 border-green-500 rounded-xl p-5 flex flex-col gap-y-5"
      *ngFor="let task of tasks"
    >
      <div class="flex justify-between lg:flex-row flex-col-reverse">
        <div
          class="flex lg:flex-row flex-col lg:gap-x-5 gap-x-2 lg:items-center"
        >
          <h3
            class="font-semibold"
            [ngClass]="{
              'line-through': task.task_completed
            }"
          >
            {{ task.task_name }}
          </h3>
          <p class="hidden lg:block">|</p>
          <p
            [ngClass]="{
              'text-green-500': task.task_urgency === 'Low',
              'text-yellow-500': task.task_urgency === 'Medium',
              'text-red-500': task.task_urgency === 'High',
              'line-through': task.task_completed
            }"
            class="border-b-[1px] border-black  w-fit mt-2 lg:mt-0"
          >
            Prio: {{ task.task_urgency }}
          </p>
        </div>
        <div
          class="flex gap-x-3 items-center justify-center lg:justify-normal mb-4 lg:mb-0"
        >
          <!-- <button
            class="border-b-2 border-b-transparent hover:border-green-500 transition-all ease-out duration-100 cursor-pointer"
          >
            Edit
          </button>
          <p>|</p> -->
          <button
            class="border-b-2 border-b-transparent hover:border-red-500 transition-all ease-out duration-100 cursor-pointer"
            (click)="deleteTaskA(task.id)"
          >
            Delete
          </button>
        </div>
      </div>
      <p
        [ngClass]="{
          'line-through': task.task_completed
        }"
      >
        {{ task.task_description }}
      </p>
      <div
        class="flex justify-between mt-2 lg:flex-row flex-col items-center gap-y-5"
      >
        <div
          class="flex gap-x-2 p-2 border-[1px] border-black rounded-xl w-fit"
        >
          <p
            [ngClass]="{
              'line-through': task.task_completed
            }"
          >
            Time: {{ task.task_date }} h
          </p>
        </div>
        <div>
          <button
            class="p-2 px-3 bg-green-500 text-white rounded-xl"
            (click)="markAsCompleted(task.id)"
          >
            {{
              task.task_completed ? 'Unmark as Completed' : 'Mark as Completed'
            }}
          </button>
        </div>
      </div>
    </div>
  </section>`,
})
export class TasksComponent implements OnInit {
  tasks: any[] = [];

  // Tasks Fetch
  async ngOnInit() {
    try {
      const data = await getTasks();
      this.tasks = data;
    } catch (error) {
      console.error(error);
    }
  }

  // Delete Fetch
  async deleteTaskA(taskId: number) {
    try {
      await deleteTask(taskId);
      // UI Update
      this.tasks = this.tasks.filter((task) => task.id !== taskId);
    } catch (error) {
      console.error(error);
    }
  }

  async markAsCompleted(taskId: any) {
    try {
      await taskState(taskId);
      // Lazy task refetch after submit
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  }
}
