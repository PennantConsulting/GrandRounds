import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string, searchYear:string, searchCat:string): any[] {
		
		// Defaults if none are filtered
		if(!items) return [];
		if(!searchText && !searchYear && !searchCat) return items;

		searchText = searchText.toLowerCase() || '',
		searchYear,
		searchCat;

		return items.filter(function(item) {
			if (searchYear && item.cdc_browsing_lifespan.indexOf(searchYear) === -1) {
				return false;
			}

			if (searchCat) {
				for (var i = 0; i < item.cdc_browsing_categories.length; i++) { 
					if (item.cdc_browsing_categories[i] !== searchCat) {
						return false;
					}
				}
			}

			return item.post_title.toLowerCase().includes(searchText.toLowerCase());
		});
   }
}