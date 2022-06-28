import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarGitHubComponent } from './prueba-js/Buscar/buscar-git-hub/buscar-git-hub.component';

const routes: Routes = [
  {path: '', redirectTo: 'buscar', pathMatch:'full'},
  {path: 'buscar', component: BuscarGitHubComponent},
  {path: 'buscar', redirectTo: 'buscar', pathMatch:'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {   
}
