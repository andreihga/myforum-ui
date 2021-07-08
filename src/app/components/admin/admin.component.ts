import {Component, OnInit} from '@angular/core';
import {MyforumService} from "../../services/myforum.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public users: any;

  constructor(private userService: MyforumService) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(
      data => {
        this.users = data
      },
      error => console.log(error),
      () => console.log('users loaded')
    );
  }

}
