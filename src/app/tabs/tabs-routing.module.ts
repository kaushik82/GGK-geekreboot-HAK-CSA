import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'generate-qrcode',
        loadChildren: () => import('../generate-qrcode/generate-qrcode.module').then(m => m.GenerateQRcodePageModule)
       },
      {
        path: 'logout',
        redirectTo: 'login',
        pathMatch: 'full'
      },
       {
         path: 'timelog',
         loadChildren: () => import('../timelog/timelog.module').then(m => m.TimelogPageModule)
       },
      // {
      //   path: 'tab3',
      //   loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      // }
      // ,
      {
        path: '',
        redirectTo: 'generate-qrcode',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'login',
    loadChildren: () => import('../login/login.module').then( m => m.LoginPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
