import { Component, OnInit } from '@angular/core';
import { Sprint } from '../shared/interfaces.interface';
import { StoreService } from '../shared/store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sprint',
  templateUrl: './sprint.component.html',
  styleUrls: ['./sprint.component.css']
})
export class SprintComponent implements OnInit {
  // sprint=[];
  // id=this.store.sprint;
  constructor(private store:StoreService,private router:Router) { }
  
  ngOnInit() {
  //  this.sprint=this.store.getAllsprint(this.id);
 
  }
  // edit(data){
  //   console.log(data);
  //   this.store.sdata=data;
  //   console.log(this.store.sdata);
  //   this.router.navigate(['editsprint']);
  // }

}
