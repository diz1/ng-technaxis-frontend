import {Component, OnInit} from '@angular/core';
import {PhotosService} from '../shared/photos.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  constructor(private photosService: PhotosService) { }

  ngOnInit(): void {
    this.photosService.queryToSearch = '';
  }

}
