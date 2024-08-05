import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Task } from './task.model';
import { NewTaskComponent } from '../new-task/new-task.component';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
    @Input() task!: Task;
    @Output() complete = new EventEmitter();
    private taskService = inject(TasksService)

    onCompleteTask(){
      // this.complete.emit(this.task.id);
    this.taskService.removeTask(this.task.id);
    }
}
