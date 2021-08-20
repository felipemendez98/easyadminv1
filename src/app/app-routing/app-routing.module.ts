import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from '../components/clientes/clientes.component';
import { HomeComponent } from '../components/home/home.component';
import { OfertasComponent } from '../components/ofertas/ofertas.component';
import { ProductoComponent } from '../components/producto/producto.component';
import { ProveedoresComponent } from '../components/proveedores/proveedores.component';
import { VentasComponent } from '../components/ventas/ventas.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'clientes', component: ClientesComponent},
  { path: 'inventario', component: ProductoComponent},
  { path: 'proveedores', component: ProveedoresComponent},
  { path: 'ventas', component: VentasComponent },
  {path: 'ofertas', component: OfertasComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
    )
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
