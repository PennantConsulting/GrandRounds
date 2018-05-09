import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string, searchYear:string, searchCat:string, searchSort:string): any[] {

		// Defaults if none are filtered
		if(!items) return [];
		if(!searchText && !searchYear && !searchCat && !searchSort) return items;

		searchText = searchText.toLowerCase() || '',
		searchYear,
		searchCat,
		searchSort || '0';

		if (searchSort) {
			if (searchSort === 'A – Z') {
				// https://stackoverflow.com/questions/6712034/sort-array-by-firstname-alphabetically-in-javascript
				items.sort(function(a, b){
					var nameA=a.cdc_short_title.toLowerCase(), nameB=b.cdc_short_title.toLowerCase();
					if (nameA < nameB) return -1;
					if (nameA > nameB) return 1;
					return 0;
				});
			}
			if (searchSort === 'Z – A') {
				items.sort(function(a, b){
					var nameA=a.cdc_short_title.toLowerCase(), nameB=b.cdc_short_title.toLowerCase();
					if (nameA > nameB) return -1;
					if (nameA < nameB) return 1;
					return 0;
				});
			}
			if (searchSort === 'Newest – Oldest' || searchSort === '0') {
				items.sort(function(a, b){
					a.cdc_event_start_date = new Date(a.cdc_event_start_date).getTime();
					b.cdc_event_start_date = new Date(b.cdc_event_start_date).getTime();

					var nameA=a.cdc_event_start_date, nameB=b.cdc_event_start_date;
					if (nameA > nameB) return -1;
					if (nameA < nameB) return 1;
					return 0;
				});
			}
			if (searchSort === 'Oldest – Newest') {
				items.sort(function(a, b){
					a.cdc_event_start_date = new Date(a.cdc_event_start_date).getTime();
					b.cdc_event_start_date = new Date(b.cdc_event_start_date).getTime();

					var nameA=a.cdc_event_start_date, nameB=b.cdc_event_start_date;
					if (nameA < nameB) return -1;
					if (nameA > nameB) return 1;
					return 0;
				});
			}
		}

		return items.filter(function(item) {
			if (searchYear && item.cdc_session_browsing_lifespan.indexOf(searchYear) === -1) {
				return false;
			}

			if (searchCat) {
				var tmp = [];

				for (var i = 0; i < item.cdc_session_browsing_categories.length; i++) { 
					if (item.cdc_session_browsing_categories[i] === searchCat && (item.cdc_short_title.toLowerCase().includes(searchText.toLowerCase()) || 
					item.cdc_internal_description.toLowerCase().includes(searchText.toLowerCase()))) {
						tmp.push(item);
					}
				}


				return tmp.length;
			}

			if (
				item.cdc_short_title.toLowerCase().includes(searchText.toLowerCase()) || 
				item.cdc_internal_description.toLowerCase().includes(searchText.toLowerCase())
			) { return true }
			else {return false}

		});

   }

}