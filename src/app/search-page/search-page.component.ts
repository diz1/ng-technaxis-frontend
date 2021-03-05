import {Component} from '@angular/core';
import {PhotosService} from '../shared/photos.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent {

  constructor(public photosService: PhotosService) { }

}
