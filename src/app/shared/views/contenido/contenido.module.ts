import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContenidoRoutingModule } from './contenido-routing.module';
import { ContenidoComponent } from './contenido.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@NgModule({
  declarations: [ContenidoComponent, NavbarComponent],
  imports: [CommonModule, ContenidoRoutingModule],
})
export class ContenidoModule {}
