import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-hyss',
  templateUrl: './hyss.component.html',
  styleUrls: ['./hyss.component.css'],
})
export class HyssComponent implements OnInit {
  skill: Skill[] = [];

  constructor(
    private skillS: SkillService,
    private tokenService: TokenService
  ) {}
  isLogged = false;

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
  
  skillAgregada(skill1: Skill) {
    this.skill.push(skill1);
  }

  delete(id?: number) {
    if (id != undefined) {
      if (confirm('¿Estás seguro de querer eliminar esta skill?')) {
        this.skillS.delete(id).subscribe(
          (data) => {
            this.cargarSkills();
          },
          (err) => {
            alert('No se pudo eliminar');
          }
        );
      }
    }
  }
}