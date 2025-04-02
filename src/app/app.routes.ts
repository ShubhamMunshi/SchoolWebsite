import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AcademicsComponent } from './academics/academics.component';
import { CarrersComponent } from './carrers/carrers.component';
import { HomeComponent } from './home/home.component';
export const routes: Routes = [
    // {path:'admin',component:AdminComponent}
    {path:'',loadComponent:()=>import('./home/home.component').then((c)=>c.HomeComponent)},
    {path:'about',loadComponent:()=>import('./about/about.component').then((a)=>a.AboutComponent)},
    {path:'contact',loadComponent:()=>import('./contact/contact.component').then((c)=>c.ContactComponent)},
    {path:'admin',loadComponent:()=> import('./admin/admin.component').then((c)=>c.AdminComponent)},
    {path:'academics',loadComponent:()=>import('./academics/academics.component').then((c)=> c.AcademicsComponent)},
    {path:'carrers',loadComponent:()=>import('./carrers/carrers.component').then((c)=> c.CarrersComponent)}

];
