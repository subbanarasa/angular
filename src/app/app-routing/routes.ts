import {Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {MenuComponent} from '../menu/menu.component';
import {ContactComponent} from '../contact/contact.component';

export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'menu',     component: MenuComponent },
  { path: 'contactus',     component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
