import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunityComponent } from './mobile/pages/community/community.component';
import { CultivationTipsComponent } from './mobile/pages/cultivation-tips/cultivation-tips.component';
import { FertilizerCalculatorComponent } from './mobile/pages/fertilizer-calculator/fertilizer-calculator.component';
import { PestsDiseasesComponent } from './mobile/pages/pests-diseases/pests-diseases.component';
import { YourCropComponent } from './mobile/pages/your-crop/your-crop.component';

const routes: Routes = [
  { path: 'fertilizer', component:FertilizerCalculatorComponent},
  { path: 'your-crop', component:YourCropComponent},
  { path: 'pests-diseases', component:PestsDiseasesComponent},
  { path: 'cultivation-tips', component:CultivationTipsComponent},
  { path: 'community', component:CommunityComponent},
  { path: '**', component:YourCropComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
