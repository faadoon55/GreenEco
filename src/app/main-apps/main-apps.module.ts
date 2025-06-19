import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainAppsRoutingModule } from './main-apps-routing.module';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    MainLayoutComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    MainAppsRoutingModule
  ]
})
export class MainAppsModule { }
