import { AnimeCreateComponent } from './anime/anime-create/anime-create.component';
import { AuthorCreateComponent } from './author-create/author-create.component';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorUpdateComponent } from './author-update/author-update.component';
import { AnimeListComponent } from './anime/anime-list/anime-list.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'author-list'},
  {path:'author-list', component:AuthorListComponent},
  {path:'author-details/:id',component:AuthorDetailsComponent},
  {path:'author-update/:id',component:AuthorUpdateComponent},
  {path:'author-create', component:AuthorCreateComponent},
  {path:'anime-list', component:AnimeListComponent},
  {path:'anime-create',component:AnimeCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
