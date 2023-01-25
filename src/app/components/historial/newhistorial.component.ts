import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/services/educacion.service';
import { Router } from '@angular/router';
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
  
  constructor(
    private educacionS: EducacionService,
    private router: Router,
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
    const educacion = new Educacion(this.nombreE, this.descripcionE, this.imgE, this.fechaInicio, this.fechaFinal);
    this.educacionS.save(educacion).subscribe(
      (data) => {
        alert('Educacion añadida correctamente');
        this.router.navigate(['']);
      },
      (err) => {
        alert('falló');
        this.router.navigate(['']);
      }
    );
  }
}
