import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefinitionComponent } from './definition/definition.component';
import { StatusComponent} from './status/status.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
  { path: '', redirectTo: '/definition', pathMatch: 'full' },
  { path: 'definition', component: DefinitionComponent },
  { path: 'status', component: StatusComponent },
  { path: 'results', component: ResultsComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule],
  declarations: []
})
export class AppRoutingModule { }
