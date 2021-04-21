import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import { HttpClientModule , HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

import { GithubRoutingModule } from './github-routing.module';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ProfileService } from './services/profile.service';
import { TabComponent } from './tab/tab.component';
import { OverviewComponent } from './overview/overview.component';
import { RepositoryComponent } from './repository/repository.component';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    GithubRoutingModule,
    SharedModule
  ],
   providers: [
     ProfileService
  ],
  declarations: [GithubProfileComponent, NavbarComponent, UserProfileComponent, TabComponent, OverviewComponent, RepositoryComponent]
})
export class GithubModule { }
