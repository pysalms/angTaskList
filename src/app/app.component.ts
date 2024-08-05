import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HeaderComponent } from './header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';
import { CardComponent } from './shared/card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent,TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent { 
// @Input() id!:string;
users = DUMMY_USERS;
selectedUserId?:string;

get selectedUser(){
   return this.users.find((user)=>  user.id === this.selectedUserId)!
}

onSelectedUser(id:string){
  // this.id.emit(id);
  this.selectedUserId = id;
}


}