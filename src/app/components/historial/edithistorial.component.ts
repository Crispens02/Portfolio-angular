import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/services/educacion.service';
import { TokenService } from 'src/app/services/token.service';
@Component({
  selector: 'app-edithistorial',
  templateUrl: './edithistorial.component.html',
  styleUrls: ['./edithistorial.component.css'],
})
export class EdithistorialComponent implements OnInit {
  educacion: Educacion = null;
  edu: Educacion[] = [];
  isLogged = false;

  constructor(
    private educacionS: EducacionService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionS.detail(id).subscribe(
      (data) => {
        this.educacion = data;
      },
      (err) => {
        alert('Error al modificar');
        this.router.navigate(['']);
      }
    );
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

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionS.update(id, this.educacion).subscribe(
      (data) => {
        this.router.navigate(['']);
      },
      (err) => {
        alert('Error al modificar la educacion');
        this.router.navigate(['']);
      }
    );
  }
}
