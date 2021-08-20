import { Component} from '@angular/core';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent{
  titulo = "Mis Proveedores"
  id_dash  = "#dashProveedor";
  id_list  = "#listProveedor";
}
