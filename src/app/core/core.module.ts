import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';


import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

//add
import { PorductsModule } from '../porducts/porducts.module';
import { MainComponent } from './main/main/main.component';



@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    DetailsComponent,
    FooterComponent,
    MainComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    PorductsModule
  ],
  exports:[
    HomeComponent,
    NavbarComponent,
    DetailsComponent,
    FooterComponent,
    MainComponent
  ]
 
})
export class CoreModule { }
