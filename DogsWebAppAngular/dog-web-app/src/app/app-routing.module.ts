import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogAdoptPageComponent } from './dog-adopt-page/dog-adopt-page.component';
import { DogAsideComponent } from './dog-aside/dog-aside.component';

import { DogDetailComponent } from './dog-detail/dog-detail.component';
import { DogHomeComponent } from './dog-home/dog-home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dog-home' },
  { path: 'dog-home', component: DogHomeComponent, data: { animation: 'HomePage' } },
  { path: 'dog-detail/:name', component: DogDetailComponent, data: { animation: 'DetailPage' } },
  { path: 'dog-adopt', component: DogAdoptPageComponent, data: { animation: 'AdoptPage' } },
  { path: 'dog-aside', component: DogAsideComponent, data: { animation: 'AsidePage ' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
