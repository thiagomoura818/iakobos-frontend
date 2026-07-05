import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { BookInfo } from './pages/book-info/book-info';
import { ChapterRead } from './pages/chapter-read/chapter-read';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { guestGuard } from './core/guards/guest.guard';

export const routes: Routes = [
    {
        path:'',
        component:Home,
        pathMatch:'full'
    },
    {
        path:':traducao/:sigla', component: BookInfo
    },
    {
        path:':traducao/:sigla/:capitulo', component: ChapterRead
    },
    {
        path:'login',
        component: Login,
        canActivate: [guestGuard]
    },
    {
        path:'register',
        component: Register,
        canActivate: [guestGuard]
    }
];
