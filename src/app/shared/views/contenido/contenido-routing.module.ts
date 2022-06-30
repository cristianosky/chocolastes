import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenidoComponent } from './contenido.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: ContenidoComponent,
    loadChildren: () =>
      import('../../../core/inicio/inicio.module').then((m) => m.InicioModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContenidoRoutingModule {}
