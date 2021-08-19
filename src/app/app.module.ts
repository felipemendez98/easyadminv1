import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing/app-routing.module';
import {MatTabsModule} from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { OfertasComponent } from './components/ofertas/ofertas.component';
import { ListproveedorComponent } from './components/proveedores/listproveedor/listproveedor.component';
import { DashproveedorComponent } from './components/proveedores/dashproveedor/dashproveedor.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { DashventasComponent } from './components/ventas/dashventas/dashventas.component';
import { ListventasComponent } from './components/ventas/listventas/listventas.component';
import { DashproductoComponent } from './components/producto/dashproducto/dashproducto.component';
import { ListproductoComponent } from './components/producto/listproducto/listproducto.component';
import { DashclientesComponent } from './components/clientes/dashclientes/dashclientes.component';
import { ListclientesComponent } from './components/clientes/listclientes/listclientes.component';
import { DashofertaComponent } from './components/ofertas/dashoferta/dashoferta.component';
import { ListofertaComponent } from './components/ofertas/listoferta/listoferta.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';



@NgModule({
  declarations: [
    AppComponent,  HeaderComponent, SidebarComponent, HomeComponent, ProductoComponent, ClientesComponent, MenuComponent, ProveedoresComponent, VentasComponent, OfertasComponent, ListproveedorComponent, DashproveedorComponent, TabsComponent, DashventasComponent, ListventasComponent, DashproductoComponent, ListproductoComponent, DashclientesComponent, ListclientesComponent, DashofertaComponent, ListofertaComponent, EmpleadosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
