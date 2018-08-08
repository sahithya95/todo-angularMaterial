export interface Projects {
pid:string,
Pname:string,
Desc:string,
Sprint:Sprint[]
}

export interface Sprint{
    Id:string,
    Sname:string,
    Desc:string,
    task:Task[],
    tasklength:number
}

export interface Task{
    Id:string,
    Name:string,
    Desc:string,
    Estimatedtime:Date,
    workhours:WorkHour[],
    status : "completed" | "todo" | "inprogress" | "backlogs";
    time:boolean
    
}

export interface WorkHour{
    Starttime:Date,
    Endtime:Date
}




