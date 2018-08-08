import { Injectable } from '@angular/core';
// import { Sprint, Projects, WorkHour } from './interfaces.interface';
import { todo } from './data';
import { Projects } from './interfaces.interface';


@Injectable({
    providedIn: 'root'
})
export class StoreService {
    
    todo: any[]=[];
    sp: any[] = [];
    data:any[]=[];
    sprint:any[]=[];
    task:any[]=[];
    constructor() {}

    // ////////////////////project//////////////////////////


    getAllproject() {
        this.todo=todo.project; 
        console.log(this.todo);
        return this.todo;
    }

   
    getproject(id) {
        this.todo.forEach(element => {
            if (id == element.pid) {
                console.log(element);
            }
        });
       
    }

    

    addNewProject(pro) {
        pro.Sprint = [];
        this.todo.push(pro);      
        console.log("added",pro);
        this.getAllproject();
    }


    deleteProject(id) {
 
       const i = this.todo.findIndex((element) => element.pid===id);
            this.todo.splice(i,1);
            this.getAllproject();
            
      
    }

    editProject(id, proj) {
         this.todo.forEach(element => {
            if (id == element.pid) {
                element.Pname = proj.Pname;
                element.Desc = proj.Desc;
                this.getAllproject();
            }
        });
        

    }



    // //////////////////////end of project////////////////////////////


    // ////////////////////sprint//////////////////////////

    // camelCase for naming
    currentsp: any;

    getAllsprint(pid) {
    //    console.log(this.todo)
        this.todo.forEach(element => {
            if (pid == element.pid) {
                this.currentsp=element.Sprint;
                console.log(this.currentsp, "sprint")

            }
        });
        return this.currentsp;

    }


    f: boolean = false;
    deleteSprint(pid, sid) {
        this.getAllsprint(pid);
        for(var i = 0; i < this.currentsp.length; i++) {
            if(this.currentsp[i].Id == sid) {
                this.fg=true;
                this.currentsp.splice(i,1);
            }
        }
    
        console.log(this.todo,"after deleting")

    }

sdata:any[]=[];
    editSprint(id,stid,sprint) {
        this.getAllsprint(id);
        for(var i = 0; i < this.currentsp.length; i++) {
            if(this.currentsp[i].Id == stid) {
                this.currentsp[i].Sname = sprint.Sname;
                this.currentsp[i].Desc = sprint.Desc;       
                 }
        }
        console.log(this.currentsp,"after editing")
    }
    addNewSprint(pid,sprint) {
        this.getAllsprint(pid)
        console.log(this.currentsp,"hj")
        this.currentsp.push(sprint);
        console.log(this.currentsp,"after adding");
    }
  

    getsprint(pid,sid) {
        this.getAllsprint(pid);
        this.currentsp.forEach(element => {
            if(element.Id==sid){
                console.log(element,"get specific sprint")
            }
            
        });

    }




    // //////////////////////end of sprint////////////////////////////
    currenttask:any;
    getAllTask(pid,sid) {
        this.getAllsprint(pid);
        this.currentsp.forEach(element => {
            if (sid == element.Id) {
                this.currenttask=element.Task;
                console.log(this.currenttask, "Task");
                
            }
        });
        return this.currenttask;
    }
    getSpecificTask(pid,sid,tid) {
        this.getAllTask(pid,sid);
        this.currenttask.forEach(element => {
            console.log(tid,element.Id)
            if (tid == element.Id) {
                console.log(element, "specific task")
            }
        });
    }

        fg: boolean = false;
    deleteTask(pid, sid,tid) {
        this.getAllTask(pid,sid);
        console.log(this.currenttask)
        for(var i = 0; i < this.currenttask.length; i++) {
            if(this.currenttask[i].Id == tid) {
                this.fg=true;
                this.currenttask.splice(i, 1);
            }
        }
      
        console.log(this.currenttask,"after deleting")

    }


    editTask(pid,sid,tid,task) {
        this.getAllTask(pid,sid);
        for(var i = 0; i < this.currenttask.length; i++) {
            if(this.currenttask[i].Id == tid) {
                this.currenttask[i].Name = task.Name;
                this.currenttask[i].Desc = task.Desc;       
                 }
        }
        console.log(this.currenttask,"after editing")
    }


    addNewTask(pid,sid,task) {
        this.getAllTask(pid,sid);
        this.currenttask.push(task);
        console.log(this.currenttask,"after adding");
    }
  

///////////////////////////////////////////////////
    workinghour:any[]=[];
    getWorkhour(pid,sid,tid){
        this.getSpecificTask(pid,sid,tid);
        this.currenttask.forEach(element => {
            console.log(element.Id,"ee",tid)
            if (tid == element.Id) {
                this.workinghour.push(element.Timegroup);
                console.log(this.workinghour, "timegroup")
            }
        });
    }
    ////////////////////workhour//////////////////////////
    tot:any[]=[];
    t=0;
    getTotalTime(pid, sid, tid) {
        this.getWorkhour(pid,sid,tid);
        console.log(this.workinghour)
        this.workinghour.forEach(element => {
            element.forEach(i => {
               this.t=this.t+(i.Endtime-i.Starttime);
                this.tot.push(this.t);
            });
        });
        // if(this.stflag==1)
        // {
        //     this.status="inprogress";
        // }else if(this.stflag==2){
        //     this.status="Backlog";
        // }else  if(this.stflag==3){
        //     this.status="completed";
        // }else{
        //     this.status="todo";
        // }
        console.log(this.tot)
      
    }

    //////////////////////end of workhour////////////////////////////

    currenttm="5";
    endtm="7";
    newtime:any[]=[];
    stflag:number=1;
    status:string="todo";
    onstart(pid,sid,tid) {
        this.stflag=1;
        this.getWorkhour(pid,sid,tid);
        this.newtime.push({"Starttime":this.currenttm});
        console.log(this.newtime,"new");
      
        

        //set cuurent time to start time
        //udate staus to inprogress
    }
    a:any;
    onComplete(pid,sid,tid) {
        this.stflag=3;
       
        this.getWorkhour(pid,sid,tid);

       this.a= this.newtime.map((el)=>{
            return {...el,"Endtime":"7"}});
        console.log(this.a,"new");
        for(let i=0;i<this.a.length;i++){
        this.workinghour.push(this.a[i]);
        }
        console.log(this.workinghour,"added");


    
        // console.log(this.workinghour,"gedsh");

        //set current time to end time
        //update status to complete
    }
b:any[]=[];

    onPause(pid,sid,tid) {
        this.stflag=2;
        
        
        this.getWorkhour(pid,sid,tid);

        this.b= this.newtime.map((el)=>{
             return {...el,"Endtime":"8"}});
         console.log(this.b,"new1");
         for(let i=0;i<this.b.length;i++){
         this.workinghour.push(this.b[i]);
         }
         console.log(this.workinghour,"added11");
      
        // set current time to end time
        // //update status to backlog
    }
    tasks:any;
    getTotaltask(pid){
        let count=0;
       this.tasks=this.getAllsprint(pid);
       this.tasks.forEach((ele)=>{
           count+=ele.Tasks.length;
       })
       return count;
    }

    c:number=0;
 gettime(time){
     if(time==true){
        setInterval(()=>{ this.c++ }, 1000);
     }
     return this.c;
 }

}
