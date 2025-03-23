import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
  providers: [TaskService]
})
export class TaskFormComponent {
  newTask: any = { title: '', description: '', completed: false };

  constructor(private taskService: TaskService) {}

  addTask(taskForm: NgForm): void {
    if (taskForm.valid) {
      this.taskService.addTask(this.newTask).subscribe(() => {
        alert('Task added successfully!');
        taskForm.resetForm();
      });
    }
  }
}
