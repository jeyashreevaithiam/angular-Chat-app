import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  usersList;
  constructor(private us: UserService) {}

  ngOnInit(): void {
    this.us.getAllUsers().subscribe((result: any) => {
      console.log(result);
      this.usersList = result.data;
    });
  }
}
