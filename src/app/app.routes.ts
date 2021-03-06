import { Routes, RouterModule } from '@angular/router';
import { SummaryComponent } from './modules/account/summary/summary.component';
import { LoginComponent } from './modules/security/login/login.component';
import { CreateUserComponent } from './modules/security/create-user/create-user.component';


const ROUTES: Routes = [

    { path: 'login', component: LoginComponent },
    { path: 'registrer', component: CreateUserComponent },

    { path: 'account/summary', component: SummaryComponent },

    { path: '', pathMatch: 'full', redirectTo: 'account/summary' },
    { path: '**', pathMatch: 'full', redirectTo: 'account/summary' },
];

export const MAIN_ROUTES = RouterModule.forRoot(ROUTES, {useHash: true});


