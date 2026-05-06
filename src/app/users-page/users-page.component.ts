import { Component, inject } from '@angular/core';
import { UserService } from '../../user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users-page',
  imports: [CommonModule],
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.scss',
})
export class UsersPageComponent {

  users: UserService = inject(UserService); 

  ngOnInit(): void {
    this.users.loadUsers().subscribe(); 
  }

}
