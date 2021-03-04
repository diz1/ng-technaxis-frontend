import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../shared/photos.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: []
})
export class IntroComponent implements OnInit {
  introPhotoLoading = true;

  constructor(public photosService: PhotosService) { }

  ngOnInit(): void {
    this.photosService.fetchRandomPhoto().subscribe(() => {
      this.introPhotoLoading = false;
    });
  }

}
