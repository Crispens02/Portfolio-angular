import { Component, OnInit, EventEmitter, Output } from '@angular/core';

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
  @Output() skillAgregada = new EventEmitter<Skill>();
  constructor(
    private skillS: SkillService,

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
        this.skillAgregada.emit(skill);
      },
      (err) => {
        alert('Fallo al añadir la skill');
      }
    );
  }
}
