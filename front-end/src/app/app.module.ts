import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { DefinitionComponent } from './definition/definition.component';
import { StatusComponent } from './status/status.component';
import { ResultsComponent } from './results/results.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';
import { AccountcreationComponent } from './accountcreation/accountcreation.component';
import { SpassService } from './spass.service';
import { DataManagementComponent } from './data-management/data-management.component';
import { ToolsManagementComponent } from './tools-management/tools-management.component';
import { TasksManagementComponent } from './tasks-management/tasks-management.component';


@NgModule({
  declarations: [
    AppComponent,
    DefinitionComponent,
    StatusComponent,
    ResultsComponent,
    LoginComponent,
    AccountcreationComponent,
    DataManagementComponent,
    ToolsManagementComponent,
    TasksManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [SpassService],
  bootstrap: [AppComponent]
})
export class AppModule { }
