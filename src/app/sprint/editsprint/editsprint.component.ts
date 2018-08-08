import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../shared/store.service';

@Component({
  selector: 'app-editsprint',
  templateUrl: './editsprint.component.html',
  styleUrls: ['./editsprint.component.css']
})
export class EditsprintComponent implements OnInit {

  constructor(private store:StoreService) { }
  data=this.store.sdata;

  ngOnInit() {
    console.log(this.data,"hgkg");
  }

}
