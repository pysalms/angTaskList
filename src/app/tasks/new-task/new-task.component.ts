import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type addTask } from '../tasks.model';
import { TasksService } from '../tasks.service';


@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required:true}) userId!:string;
@Output() closeDialog = new EventEmitter<void>();
@Output() newTask = new EventEmitter<addTask>();
summary = ''
title=''
dueDate=''
private taskService = inject(TasksService)

closeTaskDialog(){
  this.closeDialog.emit();
}
submitTask(){
  this.taskService.updateTasks({title:this.title, summary:this.summary, dueDate:this.dueDate},this.userId)
  this.closeDialog.emit();
}
}
