import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTabsModule} from '@angular/material/tabs';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './admin/shared/header/header.component';
import { FooterComponent } from './admin/shared/footer/footer.component';
import { SideMenuComponent } from './admin/shared/side-menu/side-menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FertPestComponent } from './admin/pages/fert-pest/fert-pest.component';
import { MobileHeaderComponent } from './mobile/shared/mobile-header/mobile-header.component';
import { MobileFooterComponent } from './mobile/shared/mobile-footer/mobile-footer.component';
import { MobileSideNavComponent } from './mobile/shared/mobile-side-nav/mobile-side-nav.component';
import { YourCropComponent } from './mobile/pages/your-crop/your-crop.component';
import { FertilizerCalculatorComponent } from './mobile/pages/fertilizer-calculator/fertilizer-calculator.component';
import { PestsDiseasesComponent } from './mobile/pages/pests-diseases/pests-diseases.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideMenuComponent,
    FertPestComponent,
    MobileHeaderComponent,
    MobileFooterComponent,
    MobileSideNavComponent,
    YourCropComponent,
    FertilizerCalculatorComponent,
    PestsDiseasesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    NgbModule,
    MatRadioModule,
    MatSelectModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
