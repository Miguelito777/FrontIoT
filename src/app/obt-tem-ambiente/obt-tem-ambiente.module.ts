import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ObtTemAmbientePage } from './obt-tem-ambiente.page';

const routes: Routes = [
  {
    path: '',
    component: ObtTemAmbientePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ObtTemAmbientePage]
})
export class ObtTemAmbientePageModule {}
