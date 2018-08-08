import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { StoreService } from '../shared/store.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  constructor(private store:StoreService) { }
  @Input() tasks: any[]=[];

  ClickCounter:any;
  show:boolean;
  ngOnInit() {
    
  }

  remove(id) {

   const i=this.tasks.findIndex((el)=>el.Id===id.Id);
   this.tasks[i].status="inprogress";
   this.tasks[i].time=true;
   this.store.gettime(this.tasks[i].time);

  }

}
