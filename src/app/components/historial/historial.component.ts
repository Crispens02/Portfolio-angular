import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {
  miPortfolio:any;
  constructor(private datosPortfolio:PortfolioService) { }


  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
     
      this.miPortfolio=data;
    });
  }

}




