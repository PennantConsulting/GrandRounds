import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string, searchYear:string): any[] {
		
		if(!items) return [];
		//if(!searchText) return items;
		// THERE'S A BUG HERE ON FILTERING YEAR WITHOUT SEARCHTEXT
		if(!searchText && !searchYear) return items;

		searchText = searchText.toLowerCase() || '',
		searchYear;

		return items.filter(function(item) {
			if (searchYear && item.year.indexOf(searchYear) === -1){
					return false;
			}

			return item.title.toLowerCase().includes(searchText.toLowerCase());
		});
   }
}