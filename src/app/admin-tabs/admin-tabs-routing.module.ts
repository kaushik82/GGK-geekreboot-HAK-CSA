import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminTabsPage } from './admin-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: AdminTabsPage,
    children: [
      {
           path: 'qrscanner',
           loadChildren: () => import('../qrscanner/qrscanner.module').then( m => m.QRscannerPageModule)
      },
      {
        path:'admintimelog',
        loadChildren: ()=> import('../admintimelog/admintimelog.module').then(m => m.AdmintimelogPageModule)
      },
      {
        path: 'logout',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      // {
      //   path: 'tab2',
      //   loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      // },
      // {
      //   path: 'tab3',
      //   loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      // }
      // ,
      {
        path: '',
        redirectTo: 'qrscanner',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'login',
    loadChildren: () => import('../login/login.module').then( m => m.LoginPageModule)
  }
  ,
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminTabsPageRoutingModule {}
