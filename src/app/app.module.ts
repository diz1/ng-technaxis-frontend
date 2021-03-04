/** Ng imports */
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/** Other imports */
import { ModalModule } from 'ngx-bootstrap/modal';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

/** Components */
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { IntroComponent } from './intro/intro.component';
import { ModalComponent } from './modal/modal.component';
import { TopicsComponent } from './topics/topics.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TopicPageComponent } from './topic-page/topic-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { SearchComponent } from './search/search.component';

const appRoutes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 't/:topic', component: TopicPageComponent},
  {path: 'q/:query', component: SearchPageComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    ToolbarComponent,
    IntroComponent,
    ModalComponent,
    TopicsComponent,
    HomePageComponent,
    TopicPageComponent,
    SearchPageComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    ButtonsModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
