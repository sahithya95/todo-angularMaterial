import { Component, OnInit } from '@angular/core';
// import { Projects } from './shared/interfaces.interface';
import { StoreService } from './shared/store.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  wk={
    Endtime:5,
    Starttime:3
  }

  pro=
    {
      Pname:"p3",
      pid:3,
      Desc:"add add",
      
    };
    edit={
      Pname:"newP",
      Desc:"new description"
    }
    sedit={
      Sname:"sprint",
      Desc:"shh shhh"
    }
    sprint={
      Sname:"new sprint",
      Id:3,
      Desc:"add afffa gggah"
    }
    tedit={
      Name:"task",
      Desc:"shh task  shhh"
    }
    task={
      Name:"new task",
      Id:3,
      Desc:"add afffa gggah"
    }
  constructor(private store:StoreService){}

ngOnInit(){




    //  this.store.getAllTask(1,1);
    //  this.store.getSpecificTask(1,1,1)
    // this.store.addNewTask(1,1,this.task);
    //  this.store.editTask(1,1,1,this.tedit);
    //  this.store.deleteTask(1,1,1)


    //  this.store.getWorkhour(1,1,1);
    // this.store.getTotalTime(1,1,1)
}
}
