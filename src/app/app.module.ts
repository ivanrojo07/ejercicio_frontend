import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { ApiService } from './api.service';
import { NaveComponent } from './nave/nave.component';
import { FormularioComponent } from './formulario/formulario.component';
import { DataComponent } from './data/data.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    NaveComponent,
    FormularioComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
