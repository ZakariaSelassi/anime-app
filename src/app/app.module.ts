import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AutorItemComponent } from './author-list/autor-item/autor-item.component';
import { ButtonComponent } from './common/button/button.component';
import { InputComponent } from './common/input/input.component';
import { AuthorUpdateComponent } from './author-update/author-update.component';
import { AuthorCreateComponent } from './author-create/author-create.component';
import { AnimeListComponent } from './anime/anime-list/anime-list.component';
import { AnimeDetailsComponent } from './anime/anime-details/anime-details.component';
import { AnimeItemComponent } from './anime/anime-list/anime-item/anime-item.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { AnimeCreateComponent } from './anime/anime-create/anime-create.component';
@NgModule({
  declarations: [
    AppComponent,
    AuthorListComponent,
    AuthorDetailsComponent,
    AutorItemComponent,
    ButtonComponent,
    InputComponent,
    AuthorUpdateComponent,
    AuthorCreateComponent,
    AnimeListComponent,
    AnimeDetailsComponent,
    AnimeItemComponent,
    NavbarComponent,
    AnimeCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
