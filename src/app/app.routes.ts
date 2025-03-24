import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
export const routes: Routes = [
    {path : '', component: HomeComponent},
    {path : 'login', component: LoginPageComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }