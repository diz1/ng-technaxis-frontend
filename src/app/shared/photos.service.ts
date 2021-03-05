import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface Photo {
  id: string;
  width: number;
  height: number;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  color: string | null;
  alt_description: string;
  description: string;
  created_at: string;
  liked_by_user: boolean;
  likes: number;
  links: {
    download: string;
    html: string;
    download_location: string;
    self: string;
  };
  user: {
    id: string
    username: string;
    name: string;
    links: {
      html: string,
    },
    location: string
    profile_image: {
      large: string
      medium: string
      small: string
    }
  };
}

export interface Topic {
  id: string;
  slug: string;
  title: string;
  description: string;
  total_photos: number;
}

@Injectable({providedIn: 'root'})

export class PhotosService {
  public photosList: Photo[] = [];
  public topicList: Topic[] = [];
  public photo: Photo;
  public introPhoto: Photo;
  public queryToSearch: string;

  constructor(private http: HttpClient) {}

  fetchPhotos(page?: number): Observable<Photo[]> {
    return this.http
      .get<Photo[]>(`https://api.unsplash.com/photos?client_id=${environment.accessApiKey}&order_by=latest&per_page=12&page=${page || 1}`)
      .pipe(tap(source => page ? this.photosList.push(...source) : this.photosList = source));
  }

  fetchTopics(): Observable<Topic[]> {
    return this.http.get<Topic[]>(`https://api.unsplash.com/topics?client_id=${environment.accessApiKey}&order_by=featured`)
      .pipe(tap(source => this.topicList = source));
  }

  fetchRandomPhoto(): Observable<Photo> {
    return this.http.get<Photo>(`https://api.unsplash.com/photos/random?client_id=${environment.accessApiKey}&orientation=landscape`)
      .pipe(tap(source => this.introPhoto = source));
  }

  fetchPhotosByQuery(query?: string, page?: number): Observable<Photo[]> {
    return this.http.get<any>(`https://api.unsplash.com/search/photos?client_id=${environment.accessApiKey}&query=${query || this.queryToSearch}&per_page=12&page=${page || 1}`)
      .pipe(tap(({ results }) => page ? this.photosList.push(...results) : this.photosList = results));
  }
}
