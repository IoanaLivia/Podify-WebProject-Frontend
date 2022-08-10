import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from 'src/app/authentification/register/register.component';
import { LoginComponent } from 'src/app/authentification/login/login.component';
import { HomeComponent } from './modules/home/home.component';
import { AuthGuard } from './auth.guard';

// const routes: Routes = [
//   { path: 'register',  component: RegisterComponent},
//   { path: 'login',  component: LoginComponent},
//   { path: 'home',  component: HomeComponent},
//   {
//     path: '',
//     children: [
//       {
//         path: 'guests',
//         canActivate: [AuthGuard],
//         loadChildren: () => import('src/app/modules/guests/guests.module').then(m => m.GuestsModule)
//       },
//       {
//         path: 'hosts',
//         canActivate: [AuthGuard],
//         loadChildren: () => import('src/app/modules/hosts/hosts.module').then(m => m.HostsModule)
//       },
//       {
//         path: 'episodes',
//         canActivate: [AuthGuard],
//         loadChildren: () => import('src/app/modules/episodes/episodes.module').then(m => m.EpisodesModule)
//       },
//     ]
//   }
// ];

const routes: Routes = [
  {path: ' ', redirectTo: 'home', pathMatch:'full'},
  {
    path: '',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        canActivate: [AuthGuard],
        loadChildren: () => import('src/app/modules/guests/guests.module').then(m => m.GuestsModule)
      },
      {
        path: '',
        canActivate: [AuthGuard],
        loadChildren: () => import('src/app/modules/hosts/hosts.module').then(m => m.HostsModule)
      },
      {
        path: '',
        canActivate: [AuthGuard],
        loadChildren: () => import('src/app/modules/episodes/episodes.module').then(m => m.EpisodesModule)
      },
    ]
  },
  { path: 'register',  component: RegisterComponent},
  { path: 'login',  component: LoginComponent},
  { path: 'home',  component: HomeComponent},
  { path: '**', redirectTo: 'home'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

