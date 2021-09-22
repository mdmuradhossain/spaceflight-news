import { Component, OnInit } from '@angular/core';
import { SpaceflightNewsService } from '../spaceflight-news.service';

@Component({
  selector: 'app-spaceflight-news-show',
  templateUrl: './spaceflight-news-show.component.html',
  styleUrls: ['./spaceflight-news-show.component.css'],
})
export class SpaceflightNewsShowComponent implements OnInit {
  articles: any = [];

  constructor(private newsService: SpaceflightNewsService) {}

  ngOnInit(): void {
    this.newsService.getSpaceFlightNews().subscribe((news) => {
      this.articles = news;
      console.log(news);
    });
  }
}
