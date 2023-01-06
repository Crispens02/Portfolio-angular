import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { HistorialComponent } from './components/historial/historial.component';
import {HttpClientModule} from '@angular/common/http';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NewXPComponent } from './components/experiencia/new-xp.component';
import { EditXPComponent } from './components/experiencia/edit-xp.component';
import { NewhistorialComponent } from './components/historial/newhistorial.component';
import { EdithistorialComponent } from './components/historial/edithistorial.component';
import { HyssComponent } from './components/hyss/hyss.component';
import { NewprojectComponent } from './components/proyectos/newproject.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { EditHyssComponent } from './components/hyss/edit-hyss.component';
import { NewHyssComponent } from './components/hyss/new-hyss.component';
import { EditAboutMeComponent } from './components/about-me/edit-about-me.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactoComponent,
    AboutMeComponent,
    ExperienciaComponent,
    HistorialComponent,
    ProyectosComponent,
    LoginComponent,
    HomeComponent,
    NewXPComponent,
    EditXPComponent,
    NewhistorialComponent,
    EdithistorialComponent,
    HyssComponent,
    NewprojectComponent,
    EditHyssComponent,
    NewHyssComponent,
    EditAboutMeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgCircleProgressModule.forRoot({ }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
