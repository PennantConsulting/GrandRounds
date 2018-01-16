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
  ImgHost:string;
  searchText:string;
  searchYear:string;
  searchCat:string;

  constructor(private dataService:MediadataService) {
    this.ImgHost='//www.cdc.gov';
    this.searchText = '';
    this.searchYear = '';
    this.searchCat = '';
  }
  
  ngOnInit() {
    this.dataService.getPosts().subscribe((items) => {
      this.items = items.items;
      this.filterMeta = items.filters;
    });
  }

}

interface Item {
  cdc_short_title:string,
  month:string,
  year:string,
  cdc_related_image:string,
  public_url:string,
  cdc_browsing_categories:object,
  cdc_internal_description:string,
  cdc_event_start_date:string
}