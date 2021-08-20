import { Component} from '@angular/core';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent{
  titulo = "Mis Ventas";
  id_dash = "#dashVentas";
  id_list = "#listVentas";
}
