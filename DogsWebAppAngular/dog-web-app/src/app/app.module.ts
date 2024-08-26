import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DogDetailComponent } from './dog-detail/dog-detail.component';
import { DogTopBarComponent } from './dog-top-bar/dog-top-bar.component';
import { DogAsideComponent } from './dog-aside/dog-aside.component';
import { DogHomeComponent } from './dog-home/dog-home.component';
import { DogImgComponent } from './dog-img/dog-img.component';
import { DogAdoptPageComponent } from './dog-adopt-page/dog-adopt-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DogDetailComponent,
    DogTopBarComponent,
    DogAsideComponent,
    DogHomeComponent,
    DogImgComponent,
    DogAdoptPageComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
