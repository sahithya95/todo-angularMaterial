import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../shared/store.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private store:StoreService) { }
  data:any[]=[];
  ngOnInit() {
  }

}
