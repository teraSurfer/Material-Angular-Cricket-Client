import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatIconModule, MatMenuModule, MatGridListModule, MatCardModule,
  MatTableModule, MatSortModule, MatFormFieldModule, MatPaginatorModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CricketersComponent } from './cricketers/cricketers.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CricketersService } from './cricketers.service';
import { PlayerComponent } from './player/player.component';
import { PlayerStatus } from './player/player.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CricketersComponent,
    HeaderComponent,
    PlayerComponent,
    PlayerStatus
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    AppRoutingModule,
    MatIconModule,
    MatMenuModule,
    MatGridListModule,
    MatCardModule,
    MatTableModule,
    MatSortModule,
    HttpClientModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule
  ],
  providers: [CricketersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
