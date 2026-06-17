import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { BookInfo } from './pages/book-info/book-info';
import { ChapterRead } from './pages/chapter-read/chapter-read';

export const routes: Routes = [
    {
        path:'',
        component:Home,
        pathMatch:'full'
    },
    {
        path:'livro/:sigla', component: BookInfo
    },
    {
        path:':traducao/:sigla/:capitulo', component: ChapterRead
    }
];
