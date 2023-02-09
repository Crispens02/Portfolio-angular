import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/services/educacion.service';
import { TokenService } from 'src/app/services/token.service';
import { Educacion } from 'src/app/model/educacion';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css'],
 
})
export class HistorialComponent implements OnInit {
  educacion: Educacion[] = [];

  constructor(
    private educacionS: EducacionService,
    private tokenService: TokenService
  ) {}
  isLogged = false;

  ngOnInit(): void {
    this.cargarEducacion();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarEducacion(): void {
    this.educacionS.lista().subscribe((data) => {
      this.educacion = data;
    });
  }
  educacionAgregada(educacion1: Educacion) {
    this.educacion.push(educacion1);
  }

  delete(id?: number) {
    if (id != undefined) {
      if (confirm('¿Estás seguro de querer eliminar esta skill?')) {
        this.educacionS.delete(id).subscribe(
          (data) => {
            this.cargarEducacion();
          },
          (err) => {
            alert('No se pudo eliminar');
          }
        );
      }
    }
  }
}
