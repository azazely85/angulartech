import { Component, OnInit } from '@angular/core';
import { JsonplaceholderService } from '../../services/jsonplaceholder.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  todoLength: number;

  constructor(
      private tasker: JsonplaceholderService
  ) { }

  ngOnInit() {
    this.tasker.taskCount.subscribe(length => this.todoLength = length);
  }

}