import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { ListPersonComponent } from './list-person/list-person.component'
import { PersonDetailComponent } from './person-detail/person-detail.component'
import { NotFoundComponent } from './not-found/not-found.component'
import { LoggedInGuard } from './logged-in.guard'

const appRoutes: Routes = [
  {path: '', component: ListPersonComponent},
  {path: 'person/:id', component: PersonDetailComponent, canActivate: [LoggedInGuard]},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { 


}
