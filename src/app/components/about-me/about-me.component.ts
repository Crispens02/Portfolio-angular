import { Component, OnInit } from '@angular/core';

import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';
import { TokenService } from 'src/app/services/token.service';
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit {
  persona: Persona = new Persona('', '', '', '');
  miPortfolio: any;
  constructor(
    public personaService: PersonaService,
    private tokenService: TokenService
  ) {}
  isLogged = false;
  ngOnInit(): void {
    this.cargarPersona();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  cargarPersona() {
    this.personaService.detail(1).subscribe((data) => {
      this.persona = data;
    });
  }
}
