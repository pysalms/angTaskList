import { computeMsgId } from '@angular/compiler';
import { Component, computed, EventEmitter, Input ,input, Output} from '@angular/core';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
@Input({required:true}) user!: {
  id: string;
  name: string;
  avatar: string;
}
@Input({required:true}) selected!:boolean;

@Output() select = new EventEmitter();
//using signal
// avatar = input.required<string>();
// name = input.required<string>();

get imagePath(){
  return 'assets/users/'+ this.user.avatar
}

// using signal
// imagePath = computed(()=> {
//   return 'assets/users/'+ this.avatar()
// })

onSelectUser(){
  this.select.emit(this.user.id);


  
}
}
