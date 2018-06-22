import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,  Routes} from '@angular/router'
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { CreateComponent } from './create/create.component';
import { IndexComponent } from './index/index.component';
import { EditComponent } from './edit/edit.component';
import { CoinService } from './coin.service';


const route: Routes =[
  {path:'create', component: CreateComponent},
  {path:'index', component: IndexComponent },
  {path:'edit/:id',component: EditComponent}];
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(route), HttpClientModule, ReactiveFormsModule 
  ],
  providers: [CoinService],
  bootstrap: [AppComponent]
})
export class AppModule { }
