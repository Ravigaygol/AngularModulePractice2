import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { NotFoundComponent } from './not-found.component';

const routes: Routes = [
//  { path: '**', component: NotFoundComponent },
  {path: "admin",
  loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  {path:"shared",
  loadChildren:()=>import('./shared/shared/shared.module').then(s=>s.SharedModule)}, 
];

@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
