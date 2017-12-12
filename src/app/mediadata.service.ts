import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class MediadataService {

  constructor(public http:Http) {
    //console.log('data service connected');
  }

  getPosts() {
    return this.http.get('../assets/data.json')
    .map(res => res.json());
  }

}
