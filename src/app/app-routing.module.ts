import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { OrdersComponent } from './core/orders/orders.component';
import { RegisterComponent } from './core/register/register.component';
import { AuthGuardService } from './core/services/auth-guard.service';
import { ShowOrdersComponent } from './core/show-orders/show-orders.component';
import { SignInComponent } from './core/sign-in/sign-in.component';
import { WelcomePageComponent } from './core/welcome-page/welcome-page.component';

const routes: Routes = [
  { path: 'welcome-page', component: WelcomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'orders', component: OrdersComponent,  },    
  { path: 'show-orders', component: ShowOrdersComponent },
  { path: '**',redirectTo: 'welcome-page' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// canActivate: [AuthGuardService] Esta la tenia como proteccion de la ruta orders
// de momento la he sacado porque me da problemas