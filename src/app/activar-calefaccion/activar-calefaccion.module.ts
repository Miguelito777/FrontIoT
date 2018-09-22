import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ActivarCalefaccionPage } from './activar-calefaccion.page';

const routes: Routes = [
  {
    path: '',
    component: ActivarCalefaccionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ActivarCalefaccionPage]
})
export class ActivarCalefaccionPageModule {}
