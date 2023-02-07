import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/services/experiencia.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-new-xp',
  templateUrl: './new-xp.component.html',
  styleUrls: ['./new-xp.component.css'],
})
export class NewXPComponent implements OnInit {
  xp: Experiencia[] = [];
  nombreE: string = '';
  descripcionE: string = '';
  imgE: string = '';
  isLogged = false;
  @Output() xpAgregada = new EventEmitter<Experiencia>();
  constructor(
    private sExperiencia: SExperienciaService,
    private router: Router,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.cargarXp();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  cargarXp(): void {
    this.sExperiencia.lista().subscribe((data) => {
      this.xp = data;
    });
  }

  onCreate(): void {
    const expe = new Experiencia(this.nombreE, this.descripcionE, this.imgE);
    this.sExperiencia.save(expe).subscribe(
      (data) => {
        alert('Experiencia añadida');
        this.xpAgregada.emit(expe);
      },
      (err) => {
        alert('Falló');
      }
    );
  }
}
