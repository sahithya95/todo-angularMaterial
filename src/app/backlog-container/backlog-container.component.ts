import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-backlog-container',
  templateUrl: './backlog-container.component.html',
  styleUrls: ['./backlog-container.component.css']
})
export class BacklogContainerComponent implements OnInit {
  @Input() tasks: any[]=[];
  constructor() { }

  ngOnInit() {
  }
  resumetask(id) {
   const i=this.tasks.findIndex((el)=>el.Id===id.Id);
   this.tasks[i].status="inprogress";
  }

}
