import {Component} from '@angular/core';
import { PhotosService } from '../shared/photos.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styles: []
})
export class ToolbarComponent {
  constructor(public photosService: PhotosService) { }
}
