import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './pages/signup/signup.component';
import { ConfirmComponent } from './pages/confirm/confirm.component';

const routes: Routes = [
  { path: '', component: SignUpComponent},
  { path: 'signup', redirectTo: ''},
  { path: 'confirm', component: ConfirmComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
