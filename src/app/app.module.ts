import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { StoreService } from './shared/store.service';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import { ProjectComponent } from './project/project.component';
import { MatCardModule, MatButtonModule, MatDividerModule,   MatIconModule,
  MatListModule,MatGridListModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatOptionModule,
  MatExpansionModule, } from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AddComponent } from './project/add/add.component';
import { EditComponent } from './project/edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SprintComponent } from './sprint/sprint.component';
import { EditsprintComponent } from './sprint/editsprint/editsprint.component';
import { AddsprintComponent } from './sprint/addsprint/addsprint.component';
import { SelectprojectComponent } from './selectproject/selectproject.component';
import { TodoComponent } from './todo/todo.component';
import { ContainerComponent } from './container/container.component';
import { InprogressComponent } from './inprogress/inprogress.component';
import { Container2Component } from './container2/container2.component';
import { DoneComponent } from './done/done.component';
import { DoneContainerComponent } from './done-container/done-container.component';
import { BacklogComponent } from './backlog/backlog.component';
import { BacklogContainerComponent } from './backlog-container/backlog-container.component';
const appRoutes:Routes=[
  { path:'project',component:ProjectComponent},
  { path:'add',component:AddComponent},
  { path:'edit',component:EditComponent},
  { path:'sprint',component:SprintComponent},
  { path:'addsprint',component:AddsprintComponent},
  { path:'editsprint',component:EditsprintComponent},
  { path:'selectproject',component:SelectprojectComponent},
  
  { path:'',redirectTo:'/project',pathMatch:'full'}

]

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    AddComponent,EditComponent, SprintComponent, EditsprintComponent, AddsprintComponent,SelectprojectComponent, TodoComponent, ContainerComponent, InprogressComponent, Container2Component, DoneComponent, DoneContainerComponent, BacklogComponent, BacklogContainerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CdkTableModule,CdkTreeModule,
    RouterModule.forRoot(appRoutes),
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatListModule,
    MatGridListModule,
    MatExpansionModule,
    FlexLayoutModule
    ],
  providers: [ StoreService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
