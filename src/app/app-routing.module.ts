import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {LoginComponent } from './components/login/login.component';
import { NewXPComponent } from './components/experiencia/new-xp.component';
import { EditXPComponent } from './components/experiencia/edit-xp.component';
import { NewhistorialComponent } from './components/historial/newhistorial.component';
import { EdithistorialComponent } from './components/historial/edithistorial.component';
import { NewprojectComponent } from './components/proyectos/newproject.component';
import { NewHyssComponent } from './components/hyss/new-hyss.component';
import { EditHyssComponent } from './components/hyss/edit-hyss.component';
import { EditAboutMeComponent } from './components/about-me/edit-about-me.component';
const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'login',component:LoginComponent},
  { path: 'nuevaexp', component: NewXPComponent},
  { path: 'editexp/:id', component: EditXPComponent},
  { path: 'nuevoHis', component: NewhistorialComponent},
  { path: 'editHis/:id', component: EdithistorialComponent},
  { path: 'newproject', component: NewprojectComponent},
  { path: 'newskill', component: NewHyssComponent},
  { path: 'editskill/:id', component: EditHyssComponent},
  { path: 'editabout/:id', component: EditAboutMeComponent}
/* {path: '', redirectTo: 'login', pathMatch: 'full'} */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
