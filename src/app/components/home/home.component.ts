import { Component, OnInit, HostListener } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  showButton = false;
 
  timeoutId: any;
 
  constructor() {}

  ngOnInit(): void {}

  @HostListener("document:scroll", [])
  onScroll() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    this.timeoutId = setTimeout(() => {
      const scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      if (scroll >= 100) {
        this.showButton = true;
      } else {
        this.showButton = false;
      }
    }, 250);
  }

 
 
}


