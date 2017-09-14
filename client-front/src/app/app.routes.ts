import {Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ClientsComponent} from './clients/clients.component';
import {CadastroComponent} from './clients/cadastro/cadastro.component';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent}, // componente principal
  {path: 'about', component: AboutComponent},
  {path: 'clients', component: ClientsComponent},
  {path: 'novo', component: CadastroComponent}
];
