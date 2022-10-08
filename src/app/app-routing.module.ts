import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FertilizerCalculatorComponent } from './mobile/pages/fertilizer-calculator/fertilizer-calculator.component';
import { PestsDiseasesComponent } from './mobile/pages/pests-diseases/pests-diseases.component';
import { YourCropComponent } from './mobile/pages/your-crop/your-crop.component';

const routes: Routes = [
  { path: 'fertilizer', component:FertilizerCalculatorComponent},
  { path: 'your-crop', component:YourCropComponent},
  { path: 'pests-diseases', component:PestsDiseasesComponent},
  { path: '**', component:YourCropComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
