import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../shared/photos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  constructor(public photosService: PhotosService) { }

  ngOnInit(): void {
  }

  goSearchPhotos(): void {
    if (!this.photosService.queryToSearch) { return; }
    this.photosService.fetchPhotosByQuery().subscribe();
  }
}
