import { AuthorDetailsComponent } from './author-details/author-details.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorUpdateComponent } from './author-update/author-update.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'author-list'},
  {path:'author-list', component:AuthorListComponent},
  {path:'author-details/:id',component:AuthorDetailsComponent},
  {path:'author-update/:id',component:AuthorUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
