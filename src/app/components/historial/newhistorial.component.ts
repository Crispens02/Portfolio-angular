import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/services/educacion.service';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';

@Component({
  selector: 'app-newhistorial',
  templateUrl: './newhistorial.component.html',
  styleUrls: ['./newhistorial.component.css']
})
export class NewhistorialComponent implements OnInit {
  nombreE: string;
  descripcionE: string;
  imgE : string;
  constructor(private educacionS: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const educacion = new Educacion(this.nombreE, this.descripcionE, this.imgE);
    this.educacionS.save(educacion).subscribe(
      data =>{
        alert("Educacion añadida correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("falló");
        this.router.navigate(['']);
      }
    )
  }

}
