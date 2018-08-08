import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Task } from '../shared/interfaces.interface';

@Component({
  selector: 'app-inprogress',
  templateUrl: './inprogress.component.html',
  styleUrls: ['./inprogress.component.css']
})
export class InprogressComponent implements OnInit {
  @Input() task : Task;
  @Output() pausetask = new EventEmitter();

  @Output() donetask = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


  pause(task){
    this.pausetask.emit(task);
  }


  done(task){
    this.donetask.emit(task);
  }

}
