import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-done-container',
  templateUrl: './done-container.component.html',
  styleUrls: ['./done-container.component.css']
})
export class DoneContainerComponent implements OnInit {
  @Input() tasks: any[]=[];
  constructor() { }

  ngOnInit() {
  }

}
