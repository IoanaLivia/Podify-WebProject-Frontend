import { Component, OnInit } from '@angular/core';
import { Episode } from 'src/app/interfaces/episode';
import { EpisodesService } from 'src/app/services/episodes.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {
  episodes: Episode[] = [];
  public displayedColumns: string[] = ['id', 'title', 'description','realease day', 'released', 'podcastId'];

  constructor(
    private episodesService: EpisodesService, private router: Router, private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getEpisodes();
  }

  getEpisodes(): void {
    this.episodesService.getEpisodes()
        .subscribe(episodes => this.episodes = episodes);
  }

}
