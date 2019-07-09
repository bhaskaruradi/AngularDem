import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { DateComponent } from './date/date.component';
import { AddressCardComponent } from './address-card/address-card.component';
import { TestService } from './test.service';
import { SecondComponent } from './second/second.component';
import { CustomPipe } from './custom.pipe';
import { AddComponent } from './add/add.component';
import { DisplayComponent } from './display/display.component';
import { LogintempComponent } from './logintemp/logintemp.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { CrudComponent } from './crud/crud.component';
import { MobileComponent } from './mobile/mobile.component';

const routes:Routes=[
  {path:'card',component:CardComponent},
  {path:'button',component:ButtonComponent},
  {path:'address',component:AddressCardComponent},
  {path:'second/:id',component:SecondComponent},
  {path:'second',component:SecondComponent},
  {path:'add',component:AddComponent},
  {path:'display',component:DisplayComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    CardComponent,
    ButtonComponent,
    JumbotronComponent,
    DateComponent,
    AddressCardComponent,
    SecondComponent,
    CustomPipe,
    AddComponent,
    DisplayComponent,
    LogintempComponent,
    ReactiveComponent,
    CrudComponent,
    MobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
    
  ],
  providers: [
    TestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
