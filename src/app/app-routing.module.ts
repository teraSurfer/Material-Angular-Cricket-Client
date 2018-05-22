import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CricketersComponent } from './cricketers/cricketers.component';
import { PlayerComponent } from './player/player.component';

const routes: Routes = [
  {path: '', component: CricketersComponent},
  {path: 'player/:id', component: PlayerComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
