import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './pages/signup/signup.component';
import { ThankYouComponent } from './pages/thankyou/thankyou.component';

const routes: Routes = [
  { path: '', component: SignUpComponent},
  { path: 'signup', redirectTo: ''},
  { path: 'thankyou', component: ThankYouComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
