import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductdetailsComponent } from './Components/productdetails/productdetails.component';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SearchPipe } from './Pipes/search.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import {NgxPaginationModule} from 'ngx-pagination';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductdetailsComponent,
    NavbarComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    NgxPaginationModule
    
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
