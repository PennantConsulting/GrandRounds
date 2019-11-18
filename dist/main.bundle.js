webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Grand Rounds On Demand</h2>\n<p>Public Health Grand Rounds is a monthly webcast created to foster discussion on major public health issues. Each session focuses on key challenges related to a specific health topic, and explores cutting-edge scientific evidence and potential impact of different interventions. The Grand Rounds sessions also highlight how CDC and its partners are already addressing these challenges and discuss the recommendations for future research and practice.</p>\n\n<div class=\"tp-sr-only\" id=\"filter-description\">\n  This filtering area contains options for sorting data dynamically for easy discovery.\n  Filtering options include dropdowns to filter by text search, category, lifespan and various sorting.\n</div>\n\n<div class=\"well\" id=\"mediaFilter\" aria-describedby=\"filter-description\">\n  <form class=\"form-inline\" name=\"filterForm\">\n    <div class=\"row\">\n      <div class=\"span7\" style=\"margin-right:15px;\">\n          <label for=\"inputSearch\">Search</label>\n          <input type=\"text\" id=\"inputSearch\" [(ngModel)]=\"searchText\" name=\"searchText\" placeholder=\"Topic, Category, etc.\" aria-controls=\"searchtext-info\" (input)=\"focusFirstItem()\" />\n      </div>\n\n      <div class=\"span4\">\n        <label for=\"searchCat\">Filter by <span class=\"tp-sr-only\">category</span></label>\n        <select [(ngModel)]=\"searchCat\" name=\"searchCat\" id=\"searchCat\" aria-controls=\"category-info\" (change)=\"focusFirstItem()\">\n          <option [selected]=\"searchCat === ''\" value=\"\" selected>Select Category</option>\n          <option *ngFor=\"let category of filterMeta?.cdc_session_browsing_categories\" [ngValue]=\"category\">{{category}}</option>\n        </select>\n      </div>\n      \n      <div class=\"span4\">\n        <label for=\"searchYear\">Filter by <span class=\"tp-sr-only\">lifespan</span></label>\n        <select [(ngModel)]=\"searchYear\" name=\"searchYear\" aria-controls=\"lifespan-info\" id=\"searchYear\" (change)=\"focusFirstItem()\">\n          <option [selected]=\"searchYear === ''\" value=\"\" selected>Select Lifespan</option>\n          <option *ngFor=\"let year of filterMeta?.cdc_session_browsing_lifespan\" [ngValue]=\"year\">{{year}}</option>\n        </select>\n      </div>\n\n      <div class=\"span4 pull-right\">\n        <label for=\"searchSort\">Sort by <span class=\"tp-sr-only\">category</span></label>\n        <select [(ngModel)]=\"searchSort\" name=\"searchSort\" id=\"searchSort\" (change)=\"focusFirstItem()\" aria-controls=\"sort-info\">\n          <option [ngValue]=\"sortItems?.cdc_short_title.asc\">{{sortItems?.cdc_short_title.asc}}</option>\n          <option [ngValue]=\"sortItems?.cdc_short_title.desc\">{{sortItems?.cdc_short_title.desc}}</option>\n          <option [ngValue]=\"sortItems?.cdc_event_start_date.asc\">{{sortItems?.cdc_event_start_date.asc}}</option>\n          <option [ngValue]=\"sortItems?.cdc_event_start_date.desc\">{{sortItems?.cdc_event_start_date.desc}}</option>\n        </select>\n      </div>\n    </div>\n  </form>\n</div>\n\n<div *ngIf=\"!(items | filter:searchText:searchYear:searchCat:searchSort)?.length\" class=\"noResults\">\n  <a href=\"#\" id=\"media_0\">No Grand Rounds sessions meet the selected criteria. Please adjust the filter options above.</a>\n</div>\n\n<div class=\"mediaResults row\">\n  <div class=\"span12 mediaModule\" aria-atomic=\"true\" \n    *ngFor=\"let item of items | filter : searchText:searchYear:searchCat:searchSort; let i = index; let odd = odd\">\n    \n    <section class=\"module-typeA\">\n      <h3><a href=\"{{item.public_url}}\" id=\"media_{{i}}\">{{item.cdc_short_title}}</a></h3>\n\n      <div class=\"mediaDate gray4-color\">\n        {{item.cdc_event_start_date | date: 'MMMM y'}}<span *ngIf=\"item.cdc_session_browsing_categories.length\">, </span>\n        <span *ngFor=\"let cats of item.cdc_session_browsing_categories | slice:0:3; let last = last\">\n          {{cats}}<span *ngIf=\"!last\">, </span>\n        </span>\n      </div>\n\n      <figure class=\"pull-left\">\n        <img class=\"stroke center mediaImg\" alt=\"{{item.cdc_short_title}}\" [src]=\"item.cdc_related_image\" style=\"display: block;\">\n      </figure>\n      \n      <div [innerHTML]=\"item.cdc_internal_description\" class=\"mediaDesc\"></div>\n\n      <!-- <div class=\"span4\">\n        <figure>\n          <img class=\"stroke center mediaImg\" alt=\"{{item.cdc_short_title}}\" [src]=\"item.cdc_related_image\" style=\"display: block;\">\n        </figure>\n      </div>\n\n      <div class=\"span7\">\n        <div [innerHTML]=\"item.cdc_internal_description\" class=\"mediaDesc\"></div>\n      </div> -->\n      \n\n      <p class=\"morelink\">\n        <a href=\"{{item.public_url}}\" class=\"tp-link-policy\">\n          Watch Now<span class=\"print-only\">({{item.public_url}})</span>\n        </a>\n        <span class=\"icon-angle-right\">\n        </span><span class=\"icon-angle-right\"></span>\n      </p>\n\n    </section>\n  </div>\n\n</div><!-- mediaResults -->\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mediadata_service__ = __webpack_require__("./src/app/mediadata.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(dataService) {
        this.dataService = dataService;
        this.searchText = '';
        this.searchYear = '';
        this.searchCat = '';
        this.searchSort = '';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.hideSpinner = false;
        this.itemResults = true;
        this.timeout = null;
        // hide spinner
        setTimeout(function () { _this.hideSpinner = true; }, 4000);
        this.dataService.getPosts().subscribe(function (items) {
            _this.items = items.items;
            _this.filterMeta = items.filters;
            _this.sortItems = items.sort;
            // default sort order
            _this.searchSort = 'Newest – Oldest';
            _this.getParameterByName = function (name, url) {
                if (!url)
                    url = window.location.href;
                name = name.replace(/[\[\]]/g, "\\$&");
                var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url);
                if (!results)
                    return null;
                if (!results[2])
                    return '';
                return decodeURIComponent(results[2].replace(/\+/g, " "));
            };
            var c = _this.getParameterByName('category');
            // if category url param is set, update model
            if (c) {
                _this.searchCat = c;
            }
            // remove spinner
            document.getElementById('mediaSpinner').remove();
        });
    };
    AppComponent.prototype.focusFirstItem = function () {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(function () {
            var firstItem = document.getElementById("media_0");
            if (firstItem !== null) {
                firstItem.focus();
            }
        }, 5000);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/styles.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__mediadata_service__["a" /* MediadataService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mediadata_service__ = __webpack_require__("./src/app/mediadata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__filter_pipe__ = __webpack_require__("./src/app/filter.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__filter_pipe__["a" /* FilterPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__mediadata_service__["a" /* MediadataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, searchText, searchYear, searchCat, searchSort) {
        // Defaults if none are filtered
        if (!items)
            return [];
        if (!searchText && !searchYear && !searchCat && !searchSort)
            return items;
        searchText = searchText.toLowerCase() || '',
            searchYear,
            searchCat,
            searchSort || '0';
        if (searchSort) {
            if (searchSort === 'A – Z') {
                // https://stackoverflow.com/questions/6712034/sort-array-by-firstname-alphabetically-in-javascript
                items.sort(function (a, b) {
                    var nameA = a.cdc_short_title.toLowerCase(), nameB = b.cdc_short_title.toLowerCase();
                    if (nameA < nameB)
                        return -1;
                    if (nameA > nameB)
                        return 1;
                    return 0;
                });
            }
            if (searchSort === 'Z – A') {
                items.sort(function (a, b) {
                    var nameA = a.cdc_short_title.toLowerCase(), nameB = b.cdc_short_title.toLowerCase();
                    if (nameA > nameB)
                        return -1;
                    if (nameA < nameB)
                        return 1;
                    return 0;
                });
            }
            if (searchSort === 'Newest – Oldest' || searchSort === '0') {
                items.sort(function (a, b) {
                    a.cdc_event_start_date = new Date(a.cdc_event_start_date).getTime();
                    b.cdc_event_start_date = new Date(b.cdc_event_start_date).getTime();
                    var nameA = a.cdc_event_start_date, nameB = b.cdc_event_start_date;
                    if (nameA > nameB)
                        return -1;
                    if (nameA < nameB)
                        return 1;
                    return 0;
                });
            }
            if (searchSort === 'Oldest – Newest') {
                items.sort(function (a, b) {
                    a.cdc_event_start_date = new Date(a.cdc_event_start_date).getTime();
                    b.cdc_event_start_date = new Date(b.cdc_event_start_date).getTime();
                    var nameA = a.cdc_event_start_date, nameB = b.cdc_event_start_date;
                    if (nameA < nameB)
                        return -1;
                    if (nameA > nameB)
                        return 1;
                    return 0;
                });
            }
        }
        return items.filter(function (item) {
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
            if (item.cdc_short_title.toLowerCase().includes(searchText.toLowerCase()) ||
                item.cdc_internal_description.toLowerCase().includes(searchText.toLowerCase())) {
                return true;
            }
            else {
                return false;
            }
        });
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Pipe */])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/mediadata.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediadataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MediadataService = (function () {
    function MediadataService(http) {
        this.http = http;
        //console.log('data service connected');
    }
    MediadataService.prototype.getPosts = function () {
        var datapath = document.getElementsByTagName("app-root")[0].getAttribute("data-datasource");
        return this.http.get(datapath)
            .map(function (res) { return res.json(); });
    };
    MediadataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], MediadataService);
    return MediadataService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/styles.css":
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\n"

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map