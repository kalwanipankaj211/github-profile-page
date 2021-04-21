import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GithubProfileComponent} from './github-profile/github-profile.component';

const routes: Routes = [{
  path: 'github/profile', component: GithubProfileComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GithubRoutingModule { }
