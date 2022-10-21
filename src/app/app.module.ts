import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './mobile/shared/footer/footer.component';
import { HeaderComponent } from './mobile/shared/header/header.component';
import { YourCropComponent } from './mobile/pages/your-crop/your-crop.component';
import { CommunityComponent } from './mobile/pages/community/community.component';
import { DukaanComponent } from './mobile/pages/dukaan/dukaan.component';
import { YourAccountComponent } from './mobile/pages/your-account/your-account.component';
import { LoginComponent } from './mobile/pages/login/login.component';
import { SupplierComponent } from './admin/pages/supplier/supplier.component';
import { UserManagementComponent } from './admin/pages/user-management/user-management.component';
import { PurchasesComponent } from './admin/pages/purchases/purchases.component';
import { StaffComponent } from './admin/pages/staff/staff.component';
import { NotificationsComponent } from './admin/pages/notifications/notifications.component';
import { AskComponent } from './admin/pages/ask/ask.component';
import { MenuComponent } from './admin/shared/menu/menu.component';
import { DashboardComponent } from './admin/pages/dashboard/dashboard.component';
import { TableComponent } from './admin/shared/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import {MaterialExampleModule} from '../app/material.module';
import {HttpClientModule} from '@angular/common/http';
import { AdminLoginComponent } from './admin/pages/login/login.component';
import { AdminHeaderComponent } from './admin/shared/header/header.component';
import { ProoductListComponent } from './admin/pages/product-list/product-list.component';
import { AgriMapComponent } from './admin/pages/agri-map/agri-map.component';
import { CategoriesComponent } from './admin/pages/categories/categories.component';
import { ExpensesComponent } from './admin/pages/expenses/expenses.component';
import { PurchaseReturnComponent } from './admin/pages/purchases-return/purchase-return.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    YourCropComponent,
    CommunityComponent,
    DukaanComponent,
    YourAccountComponent,
    LoginComponent,
    AdminLoginComponent,
    SupplierComponent,
    UserManagementComponent,
    PurchasesComponent,
    PurchaseReturnComponent,
    ProoductListComponent,
    StaffComponent,
    NotificationsComponent,
    AskComponent,
    MenuComponent,
    DashboardComponent,
    TableComponent,
    AdminHeaderComponent,
    AgriMapComponent,
    CategoriesComponent,
    ExpensesComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatSortModule,
  MatTableModule,
  BrowserAnimationsModule,
  BrowserModule,
  FormsModule,
  HttpClientModule,
  MatNativeDateModule,
  MaterialExampleModule,
  ReactiveFormsModule,
  MatIconModule,
  MatSelectModule
  ],
  exports:[TableComponent,AdminHeaderComponent],
  providers: [],
  bootstrap: [AppComponent, TableComponent, AdminHeaderComponent]
})
export class AppModule { }
