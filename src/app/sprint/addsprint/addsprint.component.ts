import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../shared/store.service';

@Component({
  selector: 'app-addsprint',
  templateUrl: './addsprint.component.html',
  styleUrls: ['./addsprint.component.css']
})
export class AddsprintComponent implements OnInit {

  constructor(private store:StoreService) { }
  data:any[]=[];
  id=this.store.sprint;

  ngOnInit() {
  }

}
