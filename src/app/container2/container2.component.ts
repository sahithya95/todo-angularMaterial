import { Component, OnInit,Input} from '@angular/core';
import { StoreService } from '../shared/store.service';

@Component({
  selector: 'app-container2',
  templateUrl: './container2.component.html',
  styleUrls: ['./container2.component.css']
})
export class Container2Component implements OnInit {
  @Input() tasks: any[]=[];
  constructor(private store:StoreService) { }

  ngOnInit() {
  }
  done(id) {
  
   const i=this.tasks.findIndex((el)=>el.Id===id.Id);
   this.tasks[i].status="completed";
  }

  pause(id) {
  
    const i=this.tasks.findIndex((el)=>el.Id===id.Id);
    this.tasks[i].status="backlogs";
    // this.store.gettime(false)
    // this.tasks[i].time=false;
    console.log(this.tasks[i].time,"ss")
   }
}
