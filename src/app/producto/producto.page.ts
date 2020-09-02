import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {

  constructor(private activeRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(paramMap => {
      alert(paramMap.get("id"));
    })
  }

}

  
