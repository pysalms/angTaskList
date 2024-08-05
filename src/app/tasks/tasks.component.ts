import { Component, inject, input, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { addTask } from './tasks.model';
import { TasksService } from './tasks.service';
// import {dummyTasks} from '../dummy-tasks'

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
@Input({required:true}) username!:string;
@Input({required:true}) userid!:string;
createTaskFlag = false;
private taskService = inject(TasksService);

get selectedTasks(){
  return this.taskService.getUserTask(this.userid)
}

// onCompletedTask(id:string){
//  this.taskService.cancelTask(id)
// }
onCreateTask(){
this.createTaskFlag = true;
}

// updateTaskList(newTask:addTask){
//   this.taskService.updateTasks(newTask, this.userid)
//   this.createTaskFlag = false;
// }
closeDialog(){
  this.createTaskFlag = false;
}

}
