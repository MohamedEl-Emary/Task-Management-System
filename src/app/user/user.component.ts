import {
  Component,
  EventEmitter,
  input,
  Input,
  output,
  Output,
} from '@angular/core';
// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// }
interface User{
  id: string;
  avatar: string;
  name: string;
}
@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})


export class UserComponent {
  @Input({ required: true }) user!: User;
  @Output() select = new EventEmitter<string>();
  // select = output<string>();
  // idx= input<string>()
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
