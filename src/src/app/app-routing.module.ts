import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgriMapComponent } from './admin/pages/agri-map/agri-map.component';

import { AskComponent } from './admin/pages/ask/ask.component';
import { CropsComponent } from './admin/pages/crops/crops.component';
import { DashboardComponent } from './admin/pages/dashboard/dashboard.component';
import { DiseasesListComponent } from './admin/pages/diseases-list/diseases-list.component';
import { AdminLoginComponent } from './admin/pages/login/login.component';
import { NotificationsComponent } from './admin/pages/notifications/notifications.component';
import { ProoductListComponent } from './admin/pages/product-list/product-list.component';
import { RemediesComponent } from './admin/pages/remedies/remedies.component';
import { UserManagerComponent } from './admin/pages/user-manager/user-manager.component';
import { YourCropComponent } from './mobile/pages/your-crop/your-crop.component';

const routes: Routes = [
  { path: 'your-crop', component: YourCropComponent },
  { path: 'user-questions', component: AskComponent },
  { path: 'crops', component: CropsComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'login', component: AdminLoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'remedies', component: RemediesComponent },
  { path: 'diseasess', component: DiseasesListComponent },
  { path: 'agri-map', component: AgriMapComponent },
  { path: 'user-management', component: UserManagerComponent },
  { path: 'diseases-list', component: DiseasesListComponent },
  { path: 'products-list', component: ProoductListComponent },
  // { path: 'leaves', loadChildren: () => import(`./leaves/leaves.module`).then(m => m.LeavesModule) },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
