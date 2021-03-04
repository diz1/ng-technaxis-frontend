import { Component, OnInit, Input } from '@angular/core';
import { PhotosService } from '../shared/photos.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styles: [
  ]
})
export class ContentComponent implements OnInit {

  @Input() title: string;

  constructor(public photoService: PhotosService) { }

  async ngOnInit(): Promise<void> {
    await this.photoService.fetchPhotos();
  }

}
