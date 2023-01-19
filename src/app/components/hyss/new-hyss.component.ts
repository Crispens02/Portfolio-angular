import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/services/skill.service';
import { TokenService } from 'src/app/services/token.service';
@Component({
  selector: 'app-new-hyss',
  templateUrl: './new-hyss.component.html',
  styleUrls: ['./new-hyss.component.css'],
})
export class NewHyssComponent implements OnInit {
  skill: Skill[] = [];
  nombre: string;
  porcentaje: number;
  colorexterior: string;
  colorinterior: string;
  img: string;
  isLogged = false;
  constructor(
    private skillS: SkillService,
    private router: Router,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.cargarSkills();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  cargarSkills(): void {
    this.skillS.lista().subscribe((data) => {
      this.skill = data;
    });
  }

  onCreate(): void {
    const skill = new Skill(
      this.nombre,
      this.porcentaje,
      this.colorinterior,
      this.colorexterior,
      this.img
    );
    this.skillS.save(skill).subscribe(
      (data) => {
        alert('Skill creada correctamente');
        this.router.navigate(['']);
      },
      (err) => {
        alert('Fallo al añadir la skill');
        this.router.navigate(['']);
      }
    );
  }
}
