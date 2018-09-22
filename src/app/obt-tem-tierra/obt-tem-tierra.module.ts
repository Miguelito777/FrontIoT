import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ObtTemTierraPage } from './obt-tem-tierra.page';

const routes: Routes = [
  {
    path: '',
    component: ObtTemTierraPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ObtTemTierraPage]
})
export class ObtTemTierraPageModule {}
