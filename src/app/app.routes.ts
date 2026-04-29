import { Routes } from '@angular/router';
import { HeroEdit } from './hero-edit/hero-edit';
import { HeroList } from './hero-list/hero-list';

export const routes: Routes = [

    { path: 'list', component: HeroList },
    { path: 'edit', component: HeroEdit},
    { path: '**', redirectTo: '' } // Catch-all per rotte sconosciute
];
