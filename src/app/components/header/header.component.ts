import { Component, NgModule, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  miPortfolio:any
  isLogged=false;



  constructor(private datosPortfolio:PortfolioService, private tokenService: TokenService, private router: Router/* private formBuilder:FormBuilder, private tokenService:TokenService, private authService:AuthService, private router: Router */) {


   }



  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
   
      this.miPortfolio=data;
    });
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }

    


      
    }
   
    onLogOut():void{
      this.tokenService.logOut();
      window.location.reload();
    }
    login(){
      this.router.navigate(['/login']);
    }
    


  
} 



