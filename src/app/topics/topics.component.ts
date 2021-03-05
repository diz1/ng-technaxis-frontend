import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../shared/photos.service';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent implements OnInit {
  topicsLoading = true;

  constructor(public photosService: PhotosService) { }

  ngOnInit(): void {
    this.photosService.fetchTopics().subscribe(() => {
      this.topicsLoading = false;
    });
  }

  goSearchPhotos(query?: string): void {
    this.photosService.queryToSearch = query;
    this.photosService.fetchPhotosByQuery(query).subscribe();
  }
}
