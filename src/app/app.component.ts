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
  hideSpinner;
  itemResults;
  searchText:string;
  searchYear:string;
  searchCat:string;
  searchSort:string;
  timeout;
  getParameterByName;

  constructor(private dataService:MediadataService) {
    this.searchText = '';
    this.searchYear = '';
    this.searchCat = '';
    this.searchSort = '';
  }
  
  ngOnInit() {
    this.hideSpinner = false;
    this.itemResults = true;
    this.timeout = null;

    // hide spinner
    setTimeout(() =>{ this.hideSpinner = true; }, 4000)

    this.dataService.getPosts().subscribe((items) => {
      this.items = items.items;
      this.filterMeta = items.filters;
      this.sortItems = items.sort;

      // default sort order
      this.searchSort = 'Newest – Oldest';

      this.getParameterByName = function (name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
          results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
      };

      var c = this.getParameterByName('category');
      // if category url param is set, update model
      if (c) {this.searchCat = c;}

      // remove spinner
      document.getElementById('mediaSpinner').remove();

    });
  }

  focusFirstItem() {
    clearTimeout(this.timeout);

    this.timeout = setTimeout(function(){ 
      var firstItem = document.getElementById("media_0");
      if(firstItem !== null) {
        firstItem.focus();
      }
    }, 5000);
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