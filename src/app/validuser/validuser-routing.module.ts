import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValiduserPage } from './validuser.page';

const routes: Routes = [
  {
    path: '',
    component: ValiduserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValiduserPageRoutingModule {}
