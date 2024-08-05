import { Injectable } from '@angular/core';
import { addTask } from './tasks.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ]

  getUserTask(userId:string){
    console.log("request")
    return this.tasks.filter((task)=> task.userId === userId)
  }
  
  removeTask(id:string){
    this.tasks = this.tasks.filter((task)=>task.id!==id)
  }
 
  updateTasks(newTask:addTask, userId:string){
    this.tasks.unshift({
        id: new Date().getTime.toString(),
        userId: userId,
        title: newTask.title,
        summary:
          newTask.summary,
        dueDate: newTask.dueDate,
    })

  }
}
