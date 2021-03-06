import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';
import { FenceComponent } from './fence/fence.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CreateFenceComponent } from './create-fence/create-fence.component';
import { MatSelectModule } from '@angular/material/select';
import { FenceCardComponent } from './fence-card/fence-card.component';
import { PriceComponent } from './price/price.component';
import { CalculatorComponent } from './calculator/calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    FenceComponent,
    CreateFenceComponent,
    FenceCardComponent,
    PriceComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ApiAuthorizationModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'fences/:id', component: FenceCardComponent, canActivate: [AuthorizeGuard] },
      { path: 'fences', component: FenceComponent, canActivate: [AuthorizeGuard] },
      { path: 'estimator', component: PriceComponent, canActivate: [AuthorizeGuard] },
      { path: 'createfence', component: CreateFenceComponent, canActivate: [AuthorizeGuard] }
    ]),
    BrowserAnimationsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
