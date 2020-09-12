import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../services/producto.service';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {
  
  public producto;
  constructor(private activateRoute: ActivatedRoute
    , private prodSrv: ProductoService) { }

  ngOnInit() {    
 
    this.activateRoute.paramMap.subscribe(
      paramMap => {
        this.producto =
          this.prodSrv.obtenerPorId(paramMap.get("id"));
      });
        
  }

  public agregarCarro(): void{
      this.prodSrv.carrito.push(this.producto);
  }

}
