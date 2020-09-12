import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../model/producto';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public productos;
  public carrito: Array<Producto>=[];
  public cantidad = 0;
  
  constructor(private prodSrv: ProductoService) {
   /*
    let prod = new Producto
    prod.id = "4";
    prod.cantidad = 3;
    prod.nombre = "Notebook";
    prod.imagen = "https://http2.mlstatic.com/D_NQ_NP_2X_891872-MLA43349260114_092020-F.webp";
    prod.precio = 80000;
    this.prodSrv.agregar(prod);
  
*/
  

    this.productos = prodSrv.obtenerTodos();
    this.carrito = prodSrv.carrito;
   }

}
