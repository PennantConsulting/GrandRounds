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
		searchSort;

		return items.filter(function(item) {
			if (searchYear && item.cdc_session_browsing_lifespan.indexOf(searchYear) === -1) {
				return false;
			}

			if (searchCat) {
				for (var i = 0; i < item.cdc_session_browsing_categories.length; i++) { 
					if (item.cdc_session_browsing_categories[i] !== searchCat) {
						return false;
					}
				}
			}

			if (searchSort) {
				console.log(item);
			}

			return item.cdc_short_title.toLowerCase().includes(searchText.toLowerCase());
		});
   }
}