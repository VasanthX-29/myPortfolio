import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { EducationComponent } from './components/education/education.component';
import { SigninComponent } from './components/signin/signin.component';

const routes: Routes = [

  { path: 'signup', component : SignupComponent, pathMatch: 'full'},
  { path: 'home', component : HomeComponent, pathMatch: 'full'},
  { path: 'skills', component : SkillsComponent, pathMatch: 'full'},
  { path: 'projects', component : ProjectsComponent, pathMatch: 'full'},
  { path: 'experiences', component : ExperiencesComponent, pathMatch: 'full'},
  { path: 'education', component : EducationComponent, pathMatch: 'full'},
  { path: 'signin', component : SigninComponent, pathMatch: 'full'},
  { path: '**', redirectTo:'/home', pathMatch:'full'}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
