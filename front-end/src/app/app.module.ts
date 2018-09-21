import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DefinitionComponent } from './definition/definition.component';
import { StatusComponent } from './status/status.component';
import { ResultsComponent } from './results/results.component';


@NgModule({
  declarations: [
    AppComponent,
    DefinitionComponent,
    StatusComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
