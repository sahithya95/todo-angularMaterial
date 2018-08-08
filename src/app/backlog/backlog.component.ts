import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import { Task } from '../shared/interfaces.interface';

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.css']
})
export class BacklogComponent implements OnInit {
  @Input() task : Task;
  @Output() resumetask = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }
  resumetasks(data){
   
    this.resumetask.emit(data);

  }
}
