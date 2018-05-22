import { Component, OnInit } from '@angular/core';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CricketersService } from '../cricketers.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  private playerId: string;
  private player: any;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: CricketersService) { }

  ngOnInit() {
    this.playerId = this.route.snapshot.paramMap.get('id');
    console.log(this.playerId);
    this.service.getPlayerDetails(this.playerId).subscribe((data: any) => {
      console.log(data);
      this.player = data;
    }, (err) => {
      console.log(err);
    });
  }

}
