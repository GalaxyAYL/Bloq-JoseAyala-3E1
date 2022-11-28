import { NgModule } from '@angular/core';
import { Routes, RouterModule, OutletContext, RouterOutlet } from '@angular/router';
import { CpAmanteComponent } from 'src/app/components/pgAmante/md-amante/cp-amante/cp-amante.component';
import { CpColegiosComponent } from 'src/app/components/pgColegios/md-colegios/cp-colegios/cp-colegios.component';
import { CpDeportesComponent } from 'src/app/components/pgDeportes/md-deportes/cp-deportes/cp-deportes.component';
import { CpGustosComponent } from 'src/app/components/pgGustos/md-gustos/cp-gustos/cp-gustos.component';
import { CpPrincipalComponent } from 'src/app/components/principal/md-principal/cp-principal/cp-principal.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path: '', component:CpPrincipalComponent
  },
  {
    path: 'principal', component:CpPrincipalComponent
  },
  {
    path: 'actividades', component:CpAmanteComponent
  },
  {
    path: 'colegios', component:CpColegiosComponent
  },
  {
    path: 'deportes', component:CpDeportesComponent
  },
  {
    path: 'gustos', component:CpGustosComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

