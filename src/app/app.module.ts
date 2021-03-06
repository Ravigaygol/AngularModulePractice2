import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//import { AdminModule} from './admin/admin.module';
import { SharedModule } from './shared/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
//    AdminModule,
    AppRoutingModule,
//    SharedModule   //this must be called last
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
