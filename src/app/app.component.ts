import { Component } from '@angular/core';
import { MediadataService } from './mediadata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../styles.css']
})
export class AppComponent {
  items:Item[];
  filterMeta;
  sortItems;
  ImgHost:string;
  searchText:string;
  searchYear:string;
  searchCat:string;
  searchSort:string;

  constructor(private dataService:MediadataService) {
    this.ImgHost='//www.cdc.gov';
    this.searchText = '';
    this.searchYear = '';
    this.searchCat = '';
    this.searchSort = '';
  }
  
  ngOnInit() {
    this.dataService.getPosts().subscribe((items) => {
      this.items = items.items;
      this.filterMeta = items.filters;
      this.sortItems = items.sort;

      // default sort order
      this.searchSort = 'Newest – Oldest';
      //this.searchYear = 'All';

      // For direct linking to a category
      var url_string = window.location.href,
          url = new URL(url_string),
          c = url.searchParams.get("category");
      // if category url param is set, update model
      if (c) {this.searchCat = c;}

    });
  }

  onProfileChange() {
    if(this.searchSort === '') {
      this.searchSort = '0';
    }
  }

}

interface Item {
  cdc_short_title:string,
  month:string,
  year:string,
  cdc_related_image:string,
  public_url:string,
  cdc_session_browsing_categories:object,
  cdc_session_browsing_lifespan:object,
  cdc_internal_description:string,
  cdc_event_start_date:string
}