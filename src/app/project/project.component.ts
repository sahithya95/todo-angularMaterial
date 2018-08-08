import { Component, OnInit, Input } from '@angular/core';
import { StoreService } from '../shared/store.service';
import { Projects } from '../shared/interfaces.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
 projects: Projects[];
  constructor(private store:StoreService,private router:Router){}
  selected:any;
  ngOnInit() {
    this.projects=this.store.getAllproject();
    
    console.log(this.projects);
  }
  edit(data){
    this.store.data=data;
    this.router.navigate(['edit']);
  }
  sprint(id){
    this.store.sprint=id;
  }

}
