import { Component, OnInit } from '@angular/core';

import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { TokenService } from 'src/app/services/token.service';
@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
})
export class ProyectosComponent implements OnInit {
  project: Proyecto[] = [];
  showText = false;
  selectedIndex: number;
  isLogged = false;
  constructor(
    private proyectoS: ProyectoService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.cargarProyecto();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  cargarProyecto(): void {
    this.proyectoS.lista().subscribe((data) => {
      this.project = data;
    });
  }

  delete(id?: number) {
    if (id != undefined) {
      this.proyectoS.delete(id).subscribe(
        (data) => {
          this.cargarProyecto();
        },
        (err) => {
          alert('No se pudo eliminar');
        }
      );
    }
  }
  darkenImage(index: number) {
    this.selectedIndex = index;
    this.showText = true;
  }

  restoreImage(index: number) {
    this.selectedIndex = null;
    this.showText = false;
  }
}
