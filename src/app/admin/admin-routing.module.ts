import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { AdminComponent } from './admin/admin.component'
import { StatusComponent } from './admin/status/status.component'

const appRoutes: Routes = [
  {path: 'admin', component: AdminComponent,
  children: [ {path: 'status', component: StatusComponent} ]
},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AdminRoutingModule { 


}
