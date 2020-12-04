import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/* import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
 */import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SharedRoutingModule } from '../shared-routing/shared-routing.module';


@NgModule({
  declarations: [HeaderComponent,FooterComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
/*     FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule */
  ],
/*  exports: [
    CommonModule,
     FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
     HeaderComponent,FooterComponent
  ]*/
})
export class SharedModule { }
