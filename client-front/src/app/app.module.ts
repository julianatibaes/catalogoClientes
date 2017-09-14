import 'rxjs/add/operator/map';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ClientComponent } from './clients/client/client.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ClientsComponent } from './clients/clients.component';
import { FootnoteComponent } from './footnote/footnote.component';
import 'hammerjs';
import { CadastroComponent } from './clients/cadastro/cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClientComponent,
    HomeComponent,
    AboutComponent,
    ClientsComponent,
    FootnoteComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
