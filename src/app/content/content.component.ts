import {Component, OnInit, ViewChild, HostListener, ElementRef} from '@angular/core';
import {Photo, PhotosService} from '../shared/photos.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styles: []
})

export class ContentComponent implements OnInit {
  @ViewChild('photoModal') photoModal: any;
  @ViewChild('container') container: ElementRef;
  contentLoading = true;
  contentUpdating = false;
  pageToLoad: number;

  @HostListener('window:scroll', ['$event'])
  track(): void {
    const scrollHeight = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );

    this.pageToLoad = (this.photoService.photosList.length / 12) + 1;
    const isTimeToLoad: boolean = scrollHeight / window.pageYOffset <= 1.8;

    if (isTimeToLoad && !this.contentUpdating) {
      this.contentUpdating = true;
      if (this.photoService.queryToSearch) {
        this.photoService.fetchPhotosByQuery(this.photoService.queryToSearch, this.pageToLoad).subscribe(() => {
          this.contentUpdating = false;
        });
      } else {
        this.photoService.fetchPhotos(this.pageToLoad).subscribe(() => {
          this.contentUpdating = false;
        });
      }
    }
  }

  constructor(public photoService: PhotosService) { }

  ngOnInit(): void {
    if (this.photoService.queryToSearch) {
      this.contentLoading = false;
      return;
    }
    this.photoService.fetchPhotos().subscribe(() => {
      this.contentLoading = false;
    });
  }

  openModal(photo: Photo): void {
    this.photoService.photo = photo;
    this.photoModal.modalService.openPhotoModal(this.photoModal.photo);
  }

}
