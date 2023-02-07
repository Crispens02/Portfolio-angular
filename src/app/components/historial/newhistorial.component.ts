import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { EducacionService } from 'src/app/services/educacion.service';

import { Educacion } from 'src/app/model/educacion';
import { TokenService } from 'src/app/services/token.service';
@Component({
  selector: 'app-newhistorial',
  templateUrl: './newhistorial.component.html',
  styleUrls: ['./newhistorial.component.css'],
})
export class NewhistorialComponent implements OnInit {
  edu: Educacion[] = [];
  nombreE: string;
  descripcionE: string;
  imgE: string;
  fechaInicio: Date;
  fechaFinal: Date;
  isLogged = false;
  @Output() educacionAgregada = new EventEmitter<Educacion>();
  constructor(
    private educacionS: EducacionService,
    private tokenService: TokenService
  ) {}
  ngOnInit(): void {
    this.CargarEdu();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  CargarEdu(): void {
    this.educacionS.lista().subscribe((data) => {
      this.edu = data;
    });
  }
  onCreate(): void {
    const educacion = new Educacion(
      this.nombreE,
      this.descripcionE,
      this.imgE,
      this.fechaInicio,
      this.fechaFinal
    );
    this.educacionS.save(educacion).subscribe(
      (data) => {
        alert('Educacion añadida correctamente');
        this.educacionAgregada.emit(educacion);
      },
      (err) => {
        alert('falló');
      }
    );
  }
}
