import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'activePlayer'})
export class PlayerStatus implements PipeTransform {
  transform(player) {
    return (player.active) ? 'active' : 'inactive';
  }
}
