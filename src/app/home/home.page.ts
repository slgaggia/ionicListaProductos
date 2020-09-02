import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public productos = [{
    "id": 1,
    "nombre": "Celular",
    "precio": 15000,
    "cantidad": 10,
    "imagen": "https://cnet3.cbsistatic.com/img/-VQytm8kHvCRwQY6kGruyYVHao4=/470x353/2019/10/21/12f91265-fea8-494f-a122-fca6ae10e8d4/pixel-4-xl.jpg"

  },
  {
    "id": 2,
    "nombre": "Ipad",
    "precio": 35000,
    "cantidad": 5,
    "imagen": "https://www.ventasrosario.com.ar/wp-content/uploads/2019/11/ipad-wifi-select-silver-201909_GEO_US_FMT_WHH.png"
    
    },
    {
      "id": 3,
      "nombre": "Televisor",
      "precio": 25000,
      "cantidad": 0,
      "imagen": "https://www.lg.com/ar/images/televisores/md05805029/gallery/49UH6100_Destop01_10082017.jpg"
      
    }
  ]

  constructor(private activeRoute:ActivatedRoute) { }
  
  ngOnInit() {
    this.activeRoute.paramMap.subscribe(paramMap => {paramMap.get("id")})
  }

}
