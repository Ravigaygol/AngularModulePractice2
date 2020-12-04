import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';


const routes: Routes = [
              { path: 'footer', component: FooterComponent},
              { path: 'header', component: HeaderComponent},
  
  ];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes),
    RouterModule
  ],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
