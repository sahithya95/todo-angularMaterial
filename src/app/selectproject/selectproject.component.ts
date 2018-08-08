import { Component, OnInit } from '@angular/core';
import { StoreService } from '../shared/store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selectproject',
  templateUrl: './selectproject.component.html',
  styleUrls: ['./selectproject.component.css']
})
export class SelectprojectComponent implements OnInit {

  sprint=[];
  private tasks:any[]=[];

  constructor(private store:StoreService,private router:Router) { }
  id=this.store.sprint;
  selected :any;

  ngOnInit() {
     this.sprint=this.store.getAllsprint(this.id);

 
  }
  someMethod(value){
    this.tasks = this.store.getAllTask(this.store.data,value);
    
  }
 

}
