import {Injectable} from '@angular/core';
import { createApi } from 'unsplash-js';

export interface Photo {
  id: string;
  width: number;
  height: number;
  urls?: {
    large?: string;
    regular?: string;
    raw?: string;
    small?: string
  };
  color: string | null;
  user: {
    id: string
    username: string;
    name: string;
    links: {
      html: string,
    },
    location?: string
    profile_image?: {
      large?: string
      medium?: string
      small?: string
    },
    total_likes?: number
  };
}

const api = createApi({
  accessKey: 'K5qVIFjB17vFIDmA-j5NeMkEVvPNEi5Lcby_dJxJWa0'
});

@Injectable({providedIn: 'root'})

export class PhotosService {
  public photosList: Photo[] = [];

  constructor() {}

  async fetchPhotos(): Promise<void> {
    try {
      // TODO: fetch photos on init component
      this.photosList = (await api.search.getPhotos({
          query: 'cat',
          orientation: 'landscape'
        })).response.results;
    } catch (e) {
      console.log(e);
    }
  }
}
