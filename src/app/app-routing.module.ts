import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { NaveComponent } from './nave/nave.component';
import { FormularioComponent } from './formulario/formulario.component';
import { DataComponent } from './data/data.component';


const routes: Routes = [
  { path: '', component: MovieComponent},
  { path: 'movies/:id', component: NaveComponent},
  { path: 'naves/:id', component: FormularioComponent},
  { path: 'data', component:DataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
