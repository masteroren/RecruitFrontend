import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LayoutComponent } from './modules/layout/layout.component';
import { LoginModule } from './modules/login/login.module';
import { HomeModule } from './modules/home/home.module';
import { TopBarComponent } from './modules/layout/top-bar/top-bar.component';
import { IsAuthenticatedGuard } from './shared/guards/is-authenticated.guard';
import { AuthService } from './shared/services/auth.service';
import { BooksService } from './shared/services/books.service';
import { WhishlistModule } from './modules/wishlist/wishlist.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    LoginModule,
    HomeModule,
    WhishlistModule
  ],
  providers: [AuthService, IsAuthenticatedGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
