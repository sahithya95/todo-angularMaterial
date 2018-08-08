import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Task } from '../shared/interfaces.interface';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
show:boolean;
  @Input() task : Task
  @Output() removedtask = new EventEmitter();
  constructor() { 
  
  }

  ngOnInit() {
  }
  panelOpenState = false;


  removetask(data){
   
    this.removedtask.emit(data);

  }
}
