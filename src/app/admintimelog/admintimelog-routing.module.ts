import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdmintimelogPage } from './admintimelog.page';

const routes: Routes = [
  {
    path: '',
    component: AdmintimelogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdmintimelogPageRoutingModule {}
