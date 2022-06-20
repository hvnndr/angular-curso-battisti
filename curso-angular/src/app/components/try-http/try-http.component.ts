import { Component, OnInit } from '@angular/core';
import {Users} from "../../Users";
import {UserServiceService} from "../../service/user-service.service";

@Component({
  selector: 'app-try-http',
  templateUrl: './try-http.component.html',
  styleUrls: ['./try-http.component.scss']
})
export class TryHttpComponent implements OnInit {
  users: Users[] = []

  constructor(private userService: UserServiceService) {
    this.getUsers()
  }

  ngOnInit(): void {
  }

  getUsers(): void {
    this.userService.getAll().subscribe((users) => (this.users = users))
  }


}
