import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { Proyecto } from 'src/app/model/proyecto';
import { TokenService } from 'src/app/services/token.service';
@Component({
  selector: 'app-newproject',
  templateUrl: './newproject.component.html',
  styleUrls: ['./newproject.component.css'],
})
export class NewprojectComponent implements OnInit {
  project: Proyecto[] = [];
  nombreP: string;
  imgP: string;
  linkP: string;
  isLogged = false;
  @Output() proyectoAgregado = new EventEmitter<Proyecto>();
  constructor(
    private proyectoS: ProyectoService,

    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.CargarProject();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  CargarProject(): void {
    this.proyectoS.lista().subscribe((data) => {
      this.project = data;
    });
  }

  onCreate(): void {
    const proyecto = new Proyecto(this.nombreP, this.imgP, this.linkP);
    this.proyectoS.save(proyecto).subscribe(
      (data) => {
        alert('Proyecto añadido correctamente');
        this.proyectoAgregado.emit(proyecto);
      },
      (err) => {
        alert('Algo falló');
      }
    );
  }
}
