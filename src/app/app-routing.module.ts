import { Extractor } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { BusinessSpotlightComponent } from './business-spotlight/business-spotlight.component';
import { BlogComponent } from './blog/blog.component';
import { HowToHelpComponent } from './how-to-help/how-to-help.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BusinessComponent } from './business/business.component';

const routes: Routes = [
  { path: 'business-spotlight/:id', component: BusinessComponent },
  { path: 'business-spotlight', component: BusinessSpotlightComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'how-to-help', component: HowToHelpComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: '', component: HomeComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
