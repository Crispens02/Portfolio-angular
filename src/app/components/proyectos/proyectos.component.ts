import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { TokenService } from 'src/app/services/token.service';
@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  project: Proyecto[] = [];
  miPortfolio:any;
 

  constructor(private datosPortfolio:PortfolioService,
    private proyectoS: ProyectoService,
    private tokenService: TokenService
    ) { }
    isLogged = false;

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
     
      this.miPortfolio=data;
    });

    this.cargarProyecto();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  cargarProyecto(): void{
    this.proyectoS.lista().subscribe(
      (data) =>{
        this.project = data;
      }
    )
  }

  delete(id?: number){
    if( id != undefined){
      this.proyectoS.delete(id).subscribe(
        data => {
          this.cargarProyecto();
        }, err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }
}

