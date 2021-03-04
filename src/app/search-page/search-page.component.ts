import {Component, OnInit} from '@angular/core';
import {PhotosService} from '../shared/photos.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  constructor(public photosService: PhotosService) { }

  ngOnInit(): void {
    // if (this.photosService.queryToSearch) { return; }
    // // @ts-ignore
    // this.photosService.fetchPhotosByQuery(this.activeRoute.params).subscribe();
  }

}
