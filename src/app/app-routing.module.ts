import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'principal', loadChildren: './principal/principal.module#PrincipalPageModule' },
  { path: 'ActivarRiego', loadChildren: './activar-riego/activar-riego.module#ActivarRiegoPageModule' },
  { path: 'obtTemTierra', loadChildren: './obt-tem-tierra/obt-tem-tierra.module#ObtTemTierraPageModule' },
  { path: 'obtTemAmbiente', loadChildren: './obt-tem-ambiente/obt-tem-ambiente.module#ObtTemAmbientePageModule' },
  { path: 'ActivarCalefaccion', loadChildren: './activar-calefaccion/activar-calefaccion.module#ActivarCalefaccionPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
