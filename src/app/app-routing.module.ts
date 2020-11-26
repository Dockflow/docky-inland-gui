import { NgModule } from '@angular/core';
import { DashboardModule } from './dashboard/dashboard.module';
import { HomeModule } from './home/home.module';
import { StatsModule } from './stats/stats.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadChildren: () => DashboardModule,
  },
  {
    path: 'home', loadChildren: () => HomeModule
  },
  {
    path: 'stats', loadChildren: () => StatsModule
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
