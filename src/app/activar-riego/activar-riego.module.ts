import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ActivarRiegoPage } from './activar-riego.page';

const routes: Routes = [
  {
    path: '',
    component: ActivarRiegoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ActivarRiegoPage]
})
export class ActivarRiegoPageModule {}
