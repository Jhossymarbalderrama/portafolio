import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectionLeftComponent } from './components/section-left/section-left.component';
import { SectionRightComponent } from './components/section-right/section-right.component';
import { SectionHeaderComponent } from './components/section-left/section-header/section-header.component';
import { SectionBodyComponent } from './components/section-left/section-body/section-body.component';
import { SectionFooterComponent } from './components/section-left/section-footer/section-footer.component';
import { HomeComponent } from './components/section-right/home/home.component';
import { AboutComponent } from './components/section-right/about/about.component';
import { EducationComponent } from './components/section-right/education/education.component';
import { ExperienceComponent } from './components/section-right/experience/experience.component';
import { ProjectComponent } from './components/section-right/project/project.component';
import { ContactComponent } from './components/section-right/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionLeftComponent,
    SectionRightComponent,
    SectionHeaderComponent,
    SectionBodyComponent,
    SectionFooterComponent,
    HomeComponent,
    AboutComponent,
    EducationComponent,
    ExperienceComponent,
    ProjectComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
