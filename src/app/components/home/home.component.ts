import { Component, OnInit, HostListener } from "@angular/core";
import { debounce } from "lodash";
import { slideInAnimation } from "src/assets/Animations/slideInAnimation";


@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  animations: [ slideInAnimation ]
})
export class HomeComponent implements OnInit {
  showButton = false;
  constructor() {}

  ngOnInit(): void {
  
  }
  @HostListener("document:scroll", [])
  onScroll = debounce(() => {
    const scroll = window.pageYOffset || document.body.scrollTop || 0;
    if (scroll >= 100) {
      this.showButton = true;
    } else {
      this.showButton = false;
    }
  },80);


}
 



