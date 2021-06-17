import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ManageComponent } from './manage/manage.component';
import { PaintingsComponent } from './paintings/paintings.component';
import { PaintingsResolverService } from './services/paintings-resolver.service';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [{
  path: '', 
  component: PaintingsComponent,
  resolve: {
    paintings: PaintingsResolverService
  }
}, {
  path: 'manage', 
  component: ManageComponent
}, {
  path: 'paintings', 
  component: PaintingsComponent,
  resolve: {
    paintings: PaintingsResolverService
  }
// }, {
//   path: 'login',
//   component: LoginComponent,
//   resolve: {
//     paintings: PaintingsResolverService
//   }
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers : [PaintingsResolverService]
})
export class AppRoutingModule { }
