import {Component, OnInit} from '@angular/core';
import { PhotosService } from '../shared/photos.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styles: [
  ]
})
export class ToolbarComponent implements OnInit {
  constructor(public photosService: PhotosService) { }

  ngOnInit(): void {
  }
}
