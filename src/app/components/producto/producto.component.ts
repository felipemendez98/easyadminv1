import { Component,} from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent{
  
  titulo = "Mis Productos"
  id_dash = "#dashProducto";
  id_list = "#listProducto";

};
