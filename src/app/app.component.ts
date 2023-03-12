import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'random-card-api';
  users: any;
  constructor(private userService: UserService, private toastr: ToastrService){}

  ngOnInit() {
    this.handleGetUser();
  }

  handlerefresh() {
    this.handleGetUser();
  }

  handleGetUser(){
    this.userService.getUser().subscribe((user:any) => {
      const { results } = user;
      this.users = results[0];
    },(err) => {
      this.toastr.success('err', 'Toastr fun!');
    })
  }
}
