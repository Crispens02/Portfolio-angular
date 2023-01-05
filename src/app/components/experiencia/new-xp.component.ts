import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/services/experiencia.service';


@Component({
  selector: 'app-new-xp',
  templateUrl: './new-xp.component.html',
  styleUrls: ['./new-xp.component.css']
})
export class NewXPComponent implements OnInit {
  nombreE: string = '';
  descripcionE: string = '';
  imgE: string = '';
  constructor(private sExperiencia: SExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }
  onCreate(): void {
    const expe = new Experiencia(this.nombreE, this.descripcionE, this.imgE);
    this.sExperiencia.save(expe).subscribe(
      data => {
        alert("Experiencia añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}
