import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ExperienciaSkillsComponent } from './components/experiencia-skills/experiencia-skills.component';
import { HistorialComponent } from './components/historial/historial.component';
import {HttpClientModule} from '@angular/common/http';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactoComponent,
    AboutMeComponent,
    ExperienciaSkillsComponent,
    HistorialComponent,
    ProyectosComponent,
    LoginComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
