import { Extractor } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent, },
  { path: 'business-spotlight', component: MainComponent, },
  { path: 'blog', component: MainComponent },
  { path: 'how-to-help', component: MainComponent },
  { path: 'about-us', component: MainComponent },
  { path: 'contact-us', component: MainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
