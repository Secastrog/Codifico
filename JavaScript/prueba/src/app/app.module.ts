import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuscarGitHubComponent } from './prueba-js/Buscar/buscar-git-hub/buscar-git-hub.component';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    BuscarGitHubComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule, 
    ProgressSpinnerModule,
    NgxSpinnerModule,
    ToastModule,
    BrowserAnimationsModule,
    
        
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
