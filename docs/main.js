(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n<main [@routerTransition]=\"getState(o)\">\r\n  <router-outlet #o=\"outlet\"></router-outlet>\r\n</main>\r\n\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router.animations */ "./src/app/router.animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ffbeEquipNg';
    }
    AppComponent.prototype.getState = function (outlet) {
        return outlet.activatedRouteData.order;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            animations: [_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"]],
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
/* harmony import */ var _pages_home_git_commit_git_commit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/home/git-commit/git-commit.component */ "./src/app/pages/home/git-commit/git-commit.component.ts");
/* harmony import */ var _pages_home_discord_users_discord_users_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/home/discord-users/discord-users.component */ "./src/app/pages/home/discord-users/discord-users.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _pages_encyclopedia_encyclopedia_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/encyclopedia/encyclopedia.component */ "./src/app/pages/encyclopedia/encyclopedia.component.ts");
/* harmony import */ var ng_lz_string__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-lz-string */ "./node_modules/ng-lz-string/ng-lz-string.umd.js");
/* harmony import */ var ng_lz_string__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ng_lz_string__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_item_tile_item_tile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/item-tile/item-tile.component */ "./src/app/components/item-tile/item-tile.component.ts");
/* harmony import */ var _components_name_link_name_link_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/name-link/name-link.component */ "./src/app/components/name-link/name-link.component.ts");
/* harmony import */ var _components_killer_list_killer_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/killer-list/killer-list.component */ "./src/app/components/killer-list/killer-list.component.ts");
/* harmony import */ var _components_by_value_list_by_value_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/by-value-list/by-value-list.component */ "./src/app/components/by-value-list/by-value-list.component.ts");
/* harmony import */ var _components_filter_selector_filter_selector_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/filter-selector/filter-selector.component */ "./src/app/components/filter-selector/filter-selector.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _pages_item_inventory_item_inventory_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/item-inventory/item-inventory.component */ "./src/app/pages/item-inventory/item-inventory.component.ts");
/* harmony import */ var _pages_unit_collection_unit_collection_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/unit-collection/unit-collection.component */ "./src/app/pages/unit-collection/unit-collection.component.ts");
/* harmony import */ var _pages_espers_espers_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/espers/espers.component */ "./src/app/pages/espers/espers.component.ts");
/* harmony import */ var _pages_unit_search_unit_search_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/unit-search/unit-search.component */ "./src/app/pages/unit-search/unit-search.component.ts");
/* harmony import */ var _pages_builder_builder_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/builder/builder.component */ "./src/app/pages/builder/builder.component.ts");
/* harmony import */ var _components_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/icon-button/icon-button.component */ "./src/app/components/icon-button/icon-button.component.ts");
/* harmony import */ var _directives_click_propagation_stop_directive__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./directives/click-propagation-stop.directive */ "./src/app/directives/click-propagation-stop.directive.ts");
/* harmony import */ var _components_counter_counter_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/counter/counter.component */ "./src/app/components/counter/counter.component.ts");
/* harmony import */ var _components_item_enhancement_item_enhancement_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/item-enhancement/item-enhancement.component */ "./src/app/components/item-enhancement/item-enhancement.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _pages_home_git_commit_git_commit_component__WEBPACK_IMPORTED_MODULE_8__["GitCommitComponent"],
                _pages_home_discord_users_discord_users_component__WEBPACK_IMPORTED_MODULE_9__["DiscordUsersComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                _pages_encyclopedia_encyclopedia_component__WEBPACK_IMPORTED_MODULE_11__["EncyclopediaComponent"],
                _components_item_tile_item_tile_component__WEBPACK_IMPORTED_MODULE_14__["ItemTileComponent"],
                _components_name_link_name_link_component__WEBPACK_IMPORTED_MODULE_15__["ItemLinkComponent"],
                _components_killer_list_killer_list_component__WEBPACK_IMPORTED_MODULE_16__["KillerListComponent"],
                _components_by_value_list_by_value_list_component__WEBPACK_IMPORTED_MODULE_17__["ByValueListComponent"],
                _components_filter_selector_filter_selector_component__WEBPACK_IMPORTED_MODULE_18__["FilterSelectorComponent"],
                _pages_unit_collection_unit_collection_component__WEBPACK_IMPORTED_MODULE_23__["UnitCollectionComponent"],
                _pages_espers_espers_component__WEBPACK_IMPORTED_MODULE_24__["EspersComponent"],
                _pages_unit_search_unit_search_component__WEBPACK_IMPORTED_MODULE_25__["UnitSearchComponent"],
                _pages_builder_builder_component__WEBPACK_IMPORTED_MODULE_26__["BuilderComponent"],
                _pages_item_inventory_item_inventory_component__WEBPACK_IMPORTED_MODULE_22__["ItemInventoryComponent"],
                _components_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_27__["IconButtonComponent"],
                _directives_click_propagation_stop_directive__WEBPACK_IMPORTED_MODULE_28__["ClickPropagationStopDirective"],
                _components_counter_counter_component__WEBPACK_IMPORTED_MODULE_29__["CounterComponent"],
                _components_item_enhancement_item_enhancement_component__WEBPACK_IMPORTED_MODULE_30__["ItemEnhancementComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_7__["routes"]),
                ng_lz_string__WEBPACK_IMPORTED_MODULE_12__["LZStringModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__["NgbModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"],
            ],
            providers: [
                ng_lz_string__WEBPACK_IMPORTED_MODULE_12__["LZStringService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common.ts":
/*!***************************!*\
  !*** ./src/app/common.ts ***!
  \***************************/
/*! exports provided: common */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "common", function() { return common; });
var wikiBaseUrl = "http://exvius.gamepedia.com/";
var common = {
    escapeName: function (string) {
        return String(string).replace(/[+%&': \(\)]/g, function (s) {
            return "_";
        });
    },
    toUrl: function (name, wikientry) {
        if (wikientry === void 0) { wikientry = name; }
        return "" + wikiBaseUrl + encodeURIComponent(wikientry.replace(/ /g, '_'));
    }
};


/***/ }),

/***/ "./src/app/components/by-value-list/by-value-list.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/by-value-list/by-value-list.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".value {\r\n  margin-right: 5px;\r\n  font-size: .9em;\r\n  display: inline-block;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/by-value-list/by-value-list.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/by-value-list/by-value-list.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"values.length > 0\">\r\n  <span *ngFor=\"let value of values\" class=\"value\">\r\n    <i *ngFor=\"let name of namesByValues.get(value)\" class='img img-{{type}}-{{name}} miniIcon'></i>:{{value}}%\r\n  </span>\r\n</ng-container>\r\n"

/***/ }),

/***/ "./src/app/components/by-value-list/by-value-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/by-value-list/by-value-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: ByValueListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ByValueListComponent", function() { return ByValueListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ByValueListComponent = /** @class */ (function () {
    function ByValueListComponent() {
        this.values = [];
        this.namesByValues = new Map();
    }
    ByValueListComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.list) {
            this.list.forEach(function (value, killer) {
                if (!_this.values.includes(value)) {
                    _this.values.push(value);
                    _this.namesByValues.set(value, []);
                }
                _this.namesByValues.get(value).push(killer);
            });
            this.values.sort(function (a, b) { return b - a; });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Map)
    ], ByValueListComponent.prototype, "list", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ByValueListComponent.prototype, "type", void 0);
    ByValueListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-by-value-list',
            template: __webpack_require__(/*! ./by-value-list.component.html */ "./src/app/components/by-value-list/by-value-list.component.html"),
            styles: [__webpack_require__(/*! ./by-value-list.component.css */ "./src/app/components/by-value-list/by-value-list.component.css"), __webpack_require__(/*! ../../../assets/css-img/elements.css */ "./src/assets/css-img/elements.css"), __webpack_require__(/*! ../../../assets/css-img/ailments.css */ "./src/assets/css-img/ailments.css"), __webpack_require__(/*! ../../../assets/css-img/killers.css */ "./src/assets/css-img/killers.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ByValueListComponent);
    return ByValueListComponent;
}());



/***/ }),

/***/ "./src/app/components/counter/counter.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/counter/counter.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".counter {\r\n  background-color: #616161;\r\n  color: white;\r\n  font-weight: bold;\r\n  margin: 4px;\r\n  display: inline-flex;\r\n  padding: 7px 12px;\r\n  border-radius: 16px;\r\n  align-items: center;\r\n  cursor: default;\r\n  min-height: 32px;\r\n  height: 1px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/counter/counter.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/counter/counter.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span matRipple class=\"counter\">{{value}}</span>\r\n"

/***/ }),

/***/ "./src/app/components/counter/counter.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/counter/counter.component.ts ***!
  \*********************************************************/
/*! exports provided: CounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterComponent", function() { return CounterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CounterComponent = /** @class */ (function () {
    function CounterComponent() {
    }
    CounterComponent.prototype.ngOnInit = function () {
    };
    CounterComponent.prototype.ngOnChanges = function (changes) {
        if (changes.value.currentValue != changes.value.previousValue) {
            this.ripple.launch({
                centered: true
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CounterComponent.prototype, "value", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRipple"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRipple"])
    ], CounterComponent.prototype, "ripple", void 0);
    CounterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-counter',
            template: __webpack_require__(/*! ./counter.component.html */ "./src/app/components/counter/counter.component.html"),
            styles: [__webpack_require__(/*! ./counter.component.css */ "./src/app/components/counter/counter.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CounterComponent);
    return CounterComponent;
}());



/***/ }),

/***/ "./src/app/components/filter-selector/filter-selector.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/filter-selector/filter-selector.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "i.img {\r\n  height: 38px;\r\n  width: 38px;\r\n}\r\n\r\n.group {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.btn-filter {\r\n  padding: 1px;\r\n  margin: 1px;\r\n}\r\n\r\n.btn-filter:hover {\r\n  background-color: #e2e6ea;\r\n}\r\n\r\n.btn-filter.active {\r\n  background-color: #ff6e40;\r\n}\r\n\r\n.tooltip {\r\n  width: 150px;\r\n  min-width: 150px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/filter-selector/filter-selector.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/filter-selector/filter-selector.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form *ngIf=\"!multipleChoice\" [formGroup]=\"radioGroupForm\">\r\n  <div class=\"btn-group btn-group-toggle group\" ngbRadioGroup formControlName=\"value\">\r\n    <label *ngFor=\"let iconValue of valuesWithIcons\" ngbButtonLabel class=\"btn-filter\">\r\n      <input ngbButton type=\"radio\" [value]=\"iconValue.value\" matTooltip=\"{{iconValue.tooltip}}\">\r\n      <i class=\"img img-{{cssType}}-{{iconValue.icon}}\"></i>\r\n    </label>\r\n  </div>\r\n</form>\r\n<form *ngIf=\"multipleChoice\" [formGroup]=\"checkboxGroupForm\">\r\n  <div class=\"btn-group btn-group-toggle group\" >\r\n    <label *ngFor=\"let iconValue of valuesWithIcons\" ngbButtonLabel class=\"btn-filter\" >\r\n      <input ngbButton type=\"checkbox\" formControlName=\"{{iconValue.value}}\">\r\n      <i class=\"img img-{{cssType}}-{{iconValue.icon}}\" matTooltip=\"{{iconValue.tooltip}}\" matTooltipShowDelay=\"0\" matTooltipHideDelay=\"0\"></i>\r\n    </label>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/components/filter-selector/filter-selector.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/filter-selector/filter-selector.component.ts ***!
  \*************************************************************************/
/*! exports provided: FilterSelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterSelectorComponent", function() { return FilterSelectorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pages_encyclopedia_encyclopedia_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/encyclopedia/encyclopedia-search-filter */ "./src/app/pages/encyclopedia/encyclopedia-search-filter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FilterSelectorComponent = /** @class */ (function () {
    function FilterSelectorComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.multipleChoice = true;
        this.tooltipProvider = function (value) { return ""; };
    }
    FilterSelectorComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.values) {
            this.valuesWithIcons = [];
            this.values.forEach(function (value) { return _this.valuesWithIcons.push({ icon: value, 'value': value, tooltip: _this.tooltipProvider(value) }); });
        }
        if (!this.multipleChoice) {
            this.radioGroupForm = this.formBuilder.group({
                'value': this.filterData[this.filterName]
            });
            this.radioGroupForm.valueChanges.subscribe(function () { return _this.filterData[_this.filterName] = _this.radioGroupForm.value['value']; });
        }
        else {
            var controlsConfig_1 = {};
            this.valuesWithIcons.forEach(function (iconValue) { return controlsConfig_1[iconValue.value] = _this.filterData[_this.filterName].includes(iconValue.value); });
            this.checkboxGroupForm = this.formBuilder.group(controlsConfig_1);
            this.checkboxGroupForm.valueChanges.subscribe(function (value) {
                _this.filterData[_this.filterName] = Object.keys(value).filter(function (key) { return value[key]; });
            });
        }
        this.filterData.onChange.subscribe(function () {
            if (_this.multipleChoice) {
                var newValue_1 = {};
                _this.valuesWithIcons.forEach(function (iconValue) { return newValue_1[iconValue.value] = _this.filterData[_this.filterName].includes(iconValue.value); });
                _this.checkboxGroupForm.setValue(newValue_1);
            }
            else {
                _this.radioGroupForm.setValue({ 'value': _this.filterData[_this.filterName] });
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], FilterSelectorComponent.prototype, "values", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FilterSelectorComponent.prototype, "cssType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], FilterSelectorComponent.prototype, "multipleChoice", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _pages_encyclopedia_encyclopedia_search_filter__WEBPACK_IMPORTED_MODULE_2__["EncyclopediaSearchFilter"])
    ], FilterSelectorComponent.prototype, "filterData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FilterSelectorComponent.prototype, "filterName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], FilterSelectorComponent.prototype, "valuesWithIcons", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], FilterSelectorComponent.prototype, "tooltipProvider", void 0);
    FilterSelectorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-filter-selector',
            template: __webpack_require__(/*! ./filter-selector.component.html */ "./src/app/components/filter-selector/filter-selector.component.html"),
            styles: [__webpack_require__(/*! ./filter-selector.component.css */ "./src/app/components/filter-selector/filter-selector.component.css"), __webpack_require__(/*! ../../../assets/css-img/sorts.css */ "./src/assets/css-img/sorts.css"), __webpack_require__(/*! ../../../assets/css-img/equipments.css */ "./src/assets/css-img/equipments.css"), __webpack_require__(/*! ../../../assets/css-img/elements.css */ "./src/assets/css-img/elements.css"), __webpack_require__(/*! ../../../assets/css-img/ailments.css */ "./src/assets/css-img/ailments.css"), __webpack_require__(/*! ../../../assets/css-img/killers.css */ "./src/assets/css-img/killers.css"), __webpack_require__(/*! ../../../assets/css-img/stats.css */ "./src/assets/css-img/stats.css"), __webpack_require__(/*! ../../../assets/css-img/access.css */ "./src/assets/css-img/access.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], FilterSelectorComponent);
    return FilterSelectorComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".externalLogo {\r\n  width: 20px;\r\n  margin-right: 5px;\r\n  margin-left: 20px;\r\n}\r\n\r\n.footer {\r\n  margin-bottom: 10px;\r\n  margin-top: 10px;\r\n}\r\n\r\n.footer a {\r\n  color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\r\n  <div>\r\n    <a href=\"https://www.reddit.com/message/compose/?to=lyrgard\"><img src=\"assets/img/external/reddit.svg\" class=\"externalLogo\"/>Send me a message on reddit</a>\r\n    <a href=\"https://discord.gg/rgXnjhP\"><img src=\"assets/img/external/discord.svg\" class=\"externalLogo\" />Get help on the FFBE Equip discord server</a>\r\n    <a href=\"https://github.com/lyrgard/ffbeEquip\"><img src=\"assets/img/external/github.svg\" class=\"externalLogo\"/>See code on GitHub</a>\r\n  </div>\r\n  <div><a href=\"https://ko-fi.com/Lyrgard\"><img src=\"assets/img/external/ko-fi.svg\" class=\"externalLogo koFi\"/>Buy me a coffee</a></div>\r\n  <div><a href=\"https://www.patreon.com/Lyrgard\"><img src=\"assets/img/external/patreon.svg\" class=\"externalLogo\"/>Become my patron on Patreon</a></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#header {\r\n    margin-bottom: 20px;\r\n    padding-top: 40px;\r\n    position: relative;\r\n    z-index: 99;\r\n}\r\n\r\n#header.headerSakura .bannerPicturePerson {\r\n    background-image: url('Sakura.png');\r\n}\r\n\r\n#header.headerSakura .headerContent {\r\n    padding-left: 350px;\r\n}\r\n\r\n#header.headerLasswell .bannerPicturePerson {\r\n    background-image: url('Lasswell.png');\r\n}\r\n\r\n#header.headerLasswell .headerContent {\r\n    padding-left: 300px;\r\n}\r\n\r\n#header.headerJake .bannerPicturePerson {\r\n    background-image: url('Jake.png');\r\n}\r\n\r\n#header.headerJake .headerContent {\r\n    padding-left: 360px;\r\n}\r\n\r\n#header.headerRain .bannerPicturePerson {\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n#header.headerRain .headerContent {\r\n    padding-left: 340px;\r\n}\r\n\r\n#header.headerNichol .bannerPicturePerson {\r\n    background-image: url('Nichol.png');\r\n}\r\n\r\n#header.headerNichol .headerContent {\r\n    padding-left: 330px;\r\n}\r\n\r\n#header.headerLid .bannerPicturePerson {\r\n    background-image: url('Lid.png');\r\n}\r\n\r\n#header.headerLid .headerContent {\r\n    padding-left: 325px;\r\n}\r\n\r\n#header.headerFina .bannerPicturePerson {\r\n    background-image: url('Fina.png');\r\n}\r\n\r\n#header.headerFina .headerContent {\r\n    padding-left: 330px;\r\n}\r\n\r\n#header.headerMogChocobo .bannerPicturePerson {\r\n    background-image: url('MogChocobo.png');\r\n}\r\n\r\n#header.headerMogChocobo .headerContent {\r\n    padding-left: 310px;\r\n}\r\n\r\n#header .headerContent {\r\n    align-items: center;\r\n    display: flex;\r\n    height: 82px;\r\n    justify-content: space-between;\r\n    padding-left: 150px;\r\n    padding-right: 12px;\r\n}\r\n\r\n#header .headerTitle {\r\n    color: #fff;\r\n    font-size: 2.5em;\r\n    font-weight: 300;\r\n    line-height: 1em;\r\n}\r\n\r\n.btn.btn-light {\r\n  border-color: #ccc !important;\r\n}\r\n\r\n.navigationMenu .desktop a {\r\n  text-decoration: none !important;\r\n}\r\n\r\n.navigationMenu .mobile {\r\n    display: none;\r\n}\r\n\r\n.navigationMenu .menuLogo {\r\n    cursor: pointer;\r\n    height: 94px;\r\n    left: 26px;\r\n    position: absolute;\r\n    top: 12px;\r\n    width: 94px;\r\n}\r\n\r\n.navigationMenu .desktop a.active {\r\n    border-color: #b8b8b8;\r\n    box-shadow: 0 1px 4px rgba(0,0,0,.15);\r\n    color:black;\r\n    font-weight: bold;\r\n}\r\n\r\n#header .headerTopButtons {\r\n    align-items: center;\r\n    display: flex;\r\n    flex-flow: row nowrap;\r\n    height: 40px;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n}\r\n\r\n#languages .lang.selected {\r\n    box-shadow: 0 0 5px 2px white;\r\n}\r\n\r\n#languages .lang {\r\n    margin: 0 2px;\r\n}\r\n\r\n#header .switchServer {\r\n    padding: 0 12px 0 16px;\r\n}\r\n\r\n#header .bannerBackground {\r\n    /*background-color: #f8f8f8; LIGHT*/\r\n    background-color: #424242;\r\n    border-top: 1px solid #e7e7e7;\r\n    border-bottom: 1px solid #e7e7e7;\r\n    height: 83px;\r\n    left: 0;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 40px;\r\n    z-index: -1;\r\n}\r\n\r\n#header .bannerPicture {\r\n    background-image: url(/ffbeEquipNG/assets/img/banner/banner_blank.png);\r\n}\r\n\r\n#header .bannerPicture, #header .bannerPicturePerson {\r\n    background-repeat: no-repeat;\r\n    background-size: auto 110px;\r\n    bottom: 0;\r\n    left: 0;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 12px;\r\n    z-index: -1;\r\n}\r\n\r\n#header .bannerPicturePerson {\r\n    left: 110px;\r\n}\r\n\r\n#inventoryDiv {\r\n  display: flex;\r\n  color: white;\r\n}\r\n\r\n#inventoryDiv button {\r\n  border-bottom-right-radius: 0;\r\n  border-top-right-radius: 0;\r\n  border-right: 0;\r\n}\r\n\r\n.inventoryStatus {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  height: 50px;\r\n  text-align: left !important;\r\n  border: 1px solid rgba(255, 255, 255, 0.12);\r\n  padding: 3px 12px;\r\n  line-height: 1;\r\n  color: #f8f9fa;\r\n  border-bottom-right-radius: 0.25em;\r\n  border-top-right-radius: 0.25em;\r\n}\r\n\r\n.inventoryStatus .status {\r\n  font-size: .85em;\r\n}\r\n\r\n.inventoryStatus .badge {\r\n  margin-right: 6px;\r\n}\r\n\r\n.switchServer button.btn {\r\n  margin-left: 0 !important;\r\n  padding: 2px 8px;\r\n  line-height: 1;\r\n}\r\n\r\n.mat-button-toggle-checked {\r\n  background-color: #3f51b5;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"header\" [ngClass]=\"{'headerMogChocobo': $page == Pages.HOME, 'headerSakura': $page == Pages.ENCYCLOPEDIA}\">\r\n    <div class=\"headerContent\">\r\n        <div class=\"headerTitle\">\r\n            {{$titles.get($page)}}\r\n        </div>\r\n        <div id=\"inventoryDiv\">\r\n            <button mat-stroked-button *ngIf=\"loggingState == LoggingState.LOGGED_IN\" (click)=\"logOut()\">\r\n                <span class=\"fas fa-sign-out-alt\" title=\"logout\"></span>\r\n            </button>\r\n            <button mat-stroked-button *ngIf=\"loggingState == LoggingState.LOGGED_OUT\" (click)=\"logIn()\">\r\n                Log in\r\n            </button>\r\n            <button mat-stroked-button *ngIf=\"loggingState == LoggingState.LOADING\">\r\n              <span class=\"fas fa-spinner rotating\"></span>\r\n            </button>\r\n            <div class=\"inventoryStatus\">\r\n\r\n                <span class=\"status loading\" *ngIf=\"loggingState == LoggingState.LOADING\">Loading inventory</span>\r\n                <span class=\"status loaded\" *ngIf=\"loggingState == LoggingState.LOGGED_IN\">Inventory loaded</span>\r\n                <span class=\"status notLoaded\" *ngIf=\"loggingState == LoggingState.LOGGED_OUT\">Inventory not loaded</span>\r\n                <div class=\"loader\" *ngIf=\"loggingState == LoggingState.LOADING\"></div>\r\n                <div *ngIf=\"loggingState == LoggingState.LOGGED_IN\">\r\n                  <span class=\"badge badge-secondary unitsNumber\">{{unitCount}} units</span>\r\n                  <span class=\"badge badge-secondary itemsNumber\">{{itemCount}} items</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"navigationMenu\">\r\n        <div class=\"desktop\">\r\n            <div class=\"menuLogo\" onclick=\"window.location.href='/' + (server == 'GL' ? '' : '?server=' + server)\" title=\"Return to homepage\"></div>\r\n            <nav mat-tab-nav-bar>\r\n              <a mat-tab-link [routerLink]=\"['/', $language, 'home']\" [active]=\"$page == Pages.HOME\">Home</a>\r\n              <a mat-tab-link [routerLink]=\"['/', $language, 'builder']\" [active]=\"$page == Pages.BUILDER\" [disabled]=\"true\">Builder</a>\r\n              <a mat-tab-link [routerLink]=\"['/', $language, 'encyclopedia']\" [active]=\"$page == Pages.ENCYCLOPEDIA\">Encyclopedia</a>\r\n              <a mat-tab-link [routerLink]=\"['/', $language, 'unitSearch']\" [active]=\"$page == Pages.UNIT_SEARCH\" [disabled]=\"true\">Unit search</a>\r\n              <a mat-tab-link [routerLink]=\"['/', $language, 'itemInventory']\" [active]=\"$page == Pages.ITEM_INVENTORY\">Item inventory</a>\r\n              <a mat-tab-link [routerLink]=\"['/', $language, 'unitCollection']\" [active]=\"$page == Pages.UNIT_COLLECTION\" [disabled]=\"true\">My units</a>\r\n              <a mat-tab-link [routerLink]=\"['/', $language, 'espers']\" [active]=\"$page == Pages.ESPERS\" [disabled]=\"true\">My espers</a>\r\n              <a mat-tab-link href=\"builder.html\"  [disabled]=\"true\"  >Contribute</a>\r\n            </nav>\r\n        </div>\r\n        <div class=\"mobile\">\r\n            <div class=\"menuLogo dropdown-toggle\" data-toggle=\"dropdown\">\r\n                <span class=\"glyphicon glyphicon-chevron-down\"></span>\r\n            </div>\r\n            <ul class=\"dropdown-menu\">\r\n                <li [ngClass]=\"{active:$page == Pages.HOME}\">\r\n                    <a href=\"/\" data-internal-link=\"/\">\r\n                        <span class=\"glyphicon glyphicon-chevron-right\"></span> Home\r\n                    </a>\r\n                </li>\r\n                <li [ngClass]=\"{active:$page == Pages.BUILDER}\">\r\n                    <a href=\"builder.html\" data-internal-link=\"builder.html\">\r\n                        <span class=\"glyphicon glyphicon-chevron-right\"></span> Unit builder\r\n                    </a>\r\n                </li>\r\n                <li [ngClass]=\"{active:$page == Pages.ENCYCLOPEDIA}\">\r\n                    <a href=\"encyclopedia.html\" data-internal-link=\"encyclopedia.html\">\r\n                        <span class=\"glyphicon glyphicon-chevron-right\"></span> Encyclopedia\r\n                    </a>\r\n                </li>\r\n                <li [ngClass]=\"{active:$page == Pages.UNIT_SEARCH}\">\r\n                    <a href=\"unitSearch.html\" data-internal-link=\"unitSearch.html\">\r\n                        <span class=\"glyphicon glyphicon-chevron-right\"></span> Unit Search\r\n                    </a>\r\n                </li>\r\n                <li [ngClass]=\"{active:$page == Pages.ITEM_INVENTORY}\">\r\n                    <a href=\"inventory.html\" data-internal-link=\"inventory.html\">\r\n                        <span class=\"glyphicon glyphicon-chevron-right\"></span> My inventory\r\n                    </a>\r\n                </li>\r\n                <li [ngClass]=\"{active:$page == Pages.UNIT_COLLECTION}\">\r\n                    <a href=\"units.html\" data-internal-link=\"units.html\">\r\n                        <span class=\"glyphicon glyphicon-chevron-right\"></span> My units\r\n                    </a>\r\n                </li>\r\n                <li [ngClass]=\"{active:$page == Pages.ESPERS}\">\r\n                    <a href=\"espers.html\" data-internal-link=\"espers.html\">\r\n                        <span class=\"glyphicon glyphicon-chevron-right\"></span> My Espers\r\n                    </a>\r\n                </li>\r\n                <li [ngClass]=\"{active:$page == Pages.CONTRIBUTE}\">\r\n                    <a href=\"contribute.html\" data-internal-link=\"contribute.html\">\r\n                        <span class=\"glyphicon glyphicon-chevron-right\"></span> Contribute\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <div class=\"headerTopButtons\">\r\n        <div id=\"languages\" *ngIf=\"$server == Server.GL\">\r\n            <span class=\"lang lang-sm\" [ngClass]=\"{selected:($language == Language.EN || $language == Language.DEFAULT)}\" lang=\"en\" onclick=\"switchToLanguage('en')\"></span>\r\n            <span class=\"lang lang-sm\" [ngClass]=\"{selected:$language == Language.ZH}\" lang=\"zh\" onclick=\"switchToLanguage('zh')\"></span>\r\n            <span class=\"lang lang-sm\" [ngClass]=\"{selected:$language == Language.KO}\" lang=\"ko\" onclick=\"switchToLanguage('ko')\"></span>\r\n            <span class=\"lang lang-sm\" [ngClass]=\"{selected:$language == Language.FR}\" lang=\"fr\" onclick=\"switchToLanguage('fr')\"></span>\r\n            <span class=\"lang lang-sm\" [ngClass]=\"{selected:$language == Language.DE}\" lang=\"de\" onclick=\"switchToLanguage('de')\"></span>\r\n            <span class=\"lang lang-sm\" [ngClass]=\"{selected:$language == Language.ES}\" lang=\"es\" onclick=\"switchToLanguage('es')\"></span>\r\n        </div>\r\n        <div class=\"switchServer\">\r\n          <mat-button-toggle-group appearance=\"legacy\" (change)=\"switchServer($event.value)\">\r\n            <mat-button-toggle value=\"GL\" [checked]=\"$server == Server.GL\">GL</mat-button-toggle>\r\n            <mat-button-toggle value=\"JP\" [checked]=\"$server == Server.JP\">JP</mat-button-toggle>\r\n          </mat-button-toggle-group>\r\n        </div>\r\n    </div>\r\n    <div class=\"bannerBackground\"></div>\r\n    <div class=\"bannerPicture\"></div>\r\n    <div class=\"bannerPicturePerson\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _services_user_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user-data.service */ "./src/app/services/user-data.service.ts");
/* harmony import */ var _services_context_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/context.service */ "./src/app/services/context.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(loggingService, userData, contextService) {
        this.loggingService = loggingService;
        this.userData = userData;
        this.contextService = contextService;
        this.Server = _services_context_service__WEBPACK_IMPORTED_MODULE_3__["Server"];
        this.Language = _services_context_service__WEBPACK_IMPORTED_MODULE_3__["Language"];
        this.Pages = _services_context_service__WEBPACK_IMPORTED_MODULE_3__["Pages"];
        this.LoggingState = _services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoggingState"];
        this.loggingState = _services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoggingState"].LOADING;
        this.itemCount = 0;
        this.unitCount = 0;
        this.$titles = new Map([
            [_services_context_service__WEBPACK_IMPORTED_MODULE_3__["Pages"].HOME, 'Welcome, Kupo!'],
            [_services_context_service__WEBPACK_IMPORTED_MODULE_3__["Pages"].ENCYCLOPEDIA, 'Encyclopedia'],
        ]);
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contextService.server.subscribe(function (server) { return _this.$server = server; });
        this.contextService.language.subscribe(function (language) { return _this.$language = language; });
        this.contextService.currentPage.subscribe(function (page) {
            _this.$page = page;
        });
        this.loggingService.getLoggingState().subscribe(function (state) { return _this.loggingState = state; });
        this.userData.units.subscribe(function (units) {
            _this.unitCount = Object.keys(units).length;
        });
        this.userData.itemInventory.subscribe(function (items) {
            _this.itemCount = Object.keys(items).length;
        });
    };
    HeaderComponent.prototype.logIn = function () {
        this.loggingService.login();
    };
    HeaderComponent.prototype.logOut = function () {
        this.loggingService.logout();
    };
    HeaderComponent.prototype.switchServer = function (newServer) {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css"), __webpack_require__(/*! ./languages.css */ "./src/app/components/header/languages.css")]
        }),
        __metadata("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"], _services_user_data_service__WEBPACK_IMPORTED_MODULE_2__["UserDataService"], _services_context_service__WEBPACK_IMPORTED_MODULE_3__["ContextService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/header/languages.css":
/*!*************************************************!*\
  !*** ./src/app/components/header/languages.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ========================================================================== *\r\n * Copyright 2014 USRZ.com and Pier Paolo Fumagalli                           *\r\n * -------------------------------------------------------------------------- *\r\n * Licensed under the Apache License, Version 2.0 (the \"License\");            *\r\n * you may not use this file except in compliance with the License.           *\r\n * You may obtain a copy of the License at                                    *\r\n *                                                                            *\r\n *  http://www.apache.org/licenses/LICENSE-2.0                                *\r\n *                                                                            *\r\n * Unless required by applicable law or agreed to in writing, software        *\r\n * distributed under the License is distributed on an \"AS IS\" BASIS,          *\r\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.   *\r\n * See the License for the specific language governing permissions and        *\r\n * limitations under the License.                                             *\r\n * ========================================================================== */\r\n\r\n/* Define properties for our icons (default to the unknown language flag) */\r\n\r\n.lang-xs { background-position: 0px  -473px; min-width: 14px; height: 11px; min-height: 11px; max-height: 11px; background-repeat: no-repeat; display: inline-block; background-image: url('data:image/png;base64,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'); }\r\n\r\n.lang-sm { background-position: 0px -1172px; min-width: 22px; height: 16px; min-height: 16px; max-height: 16px; background-repeat: no-repeat; display: inline-block; background-image: url('data:image/png;base64,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'); }\r\n\r\n.lang-lg { background-position: 0px -2134px; min-width: 30px; height: 22px; min-height: 22px; max-height: 22px; background-repeat: no-repeat; display: inline-block; background-image: url('data:image/png;base64,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'); }\r\n\r\n/* Positions in our sprite for xs-sized images */\r\n\r\n.lang-xs[lang=ar] { background-position: 0px     0px; }\r\n\r\n.lang-xs[lang=be] { background-position: 0px   -11px; }\r\n\r\n.lang-xs[lang=bg] { background-position: 0px   -22px; }\r\n\r\n.lang-xs[lang=cs] { background-position: 0px   -33px; }\r\n\r\n.lang-xs[lang=da] { background-position: 0px   -44px; }\r\n\r\n.lang-xs[lang=de] { background-position: 0px   -55px; }\r\n\r\n.lang-xs[lang=el] { background-position: 0px   -66px; }\r\n\r\n.lang-xs[lang=en] { background-position: 0px   -77px; }\r\n\r\n.lang-xs[lang=es] { background-position: 0px   -88px; }\r\n\r\n.lang-xs[lang=et] { background-position: 0px   -99px; }\r\n\r\n.lang-xs[lang=fi] { background-position: 0px  -110px; }\r\n\r\n.lang-xs[lang=fr] { background-position: 0px  -121px; }\r\n\r\n.lang-xs[lang=ga] { background-position: 0px  -132px; }\r\n\r\n.lang-xs[lang=hi] { background-position: 0px  -143px; }\r\n\r\n.lang-xs[lang=hr] { background-position: 0px  -154px; }\r\n\r\n.lang-xs[lang=hu] { background-position: 0px  -165px; }\r\n\r\n.lang-xs[lang=in] { background-position: 0px  -176px; }\r\n\r\n.lang-xs[lang=is] { background-position: 0px  -187px; }\r\n\r\n.lang-xs[lang=it] { background-position: 0px  -198px; }\r\n\r\n.lang-xs[lang=iw] { background-position: 0px  -209px; }\r\n\r\n.lang-xs[lang=ja] { background-position: 0px  -220px; }\r\n\r\n.lang-xs[lang=ko] { background-position: 0px  -231px; }\r\n\r\n.lang-xs[lang=lt] { background-position: 0px  -242px; }\r\n\r\n.lang-xs[lang=lv] { background-position: 0px  -253px; }\r\n\r\n.lang-xs[lang=mk] { background-position: 0px  -264px; }\r\n\r\n.lang-xs[lang=ms] { background-position: 0px  -275px; }\r\n\r\n.lang-xs[lang=mt] { background-position: 0px  -286px; }\r\n\r\n.lang-xs[lang=nl] { background-position: 0px  -297px; }\r\n\r\n.lang-xs[lang=no] { background-position: 0px  -308px; }\r\n\r\n.lang-xs[lang=pl] { background-position: 0px  -319px; }\r\n\r\n.lang-xs[lang=pt] { background-position: 0px  -330px; }\r\n\r\n.lang-xs[lang=ro] { background-position: 0px  -341px; }\r\n\r\n.lang-xs[lang=ru] { background-position: 0px  -352px; }\r\n\r\n.lang-xs[lang=sk] { background-position: 0px  -363px; }\r\n\r\n.lang-xs[lang=sl] { background-position: 0px  -374px; }\r\n\r\n.lang-xs[lang=sq] { background-position: 0px  -385px; }\r\n\r\n.lang-xs[lang=sr] { background-position: 0px  -396px; }\r\n\r\n.lang-xs[lang=sv] { background-position: 0px  -407px; }\r\n\r\n.lang-xs[lang=th] { background-position: 0px  -418px; }\r\n\r\n.lang-xs[lang=tr] { background-position: 0px  -429px; }\r\n\r\n.lang-xs[lang=uk] { background-position: 0px  -440px; }\r\n\r\n.lang-xs[lang=vi] { background-position: 0px  -451px; }\r\n\r\n.lang-xs[lang=zh] { background-position: 0px  -462px; }\r\n\r\n/* Positions in our sprite for sm-sized images */\r\n\r\n.lang-sm[lang=ar] { background-position: 0px  -484px; }\r\n\r\n.lang-sm[lang=be] { background-position: 0px  -500px; }\r\n\r\n.lang-sm[lang=bg] { background-position: 0px  -516px; }\r\n\r\n.lang-sm[lang=cs] { background-position: 0px  -532px; }\r\n\r\n.lang-sm[lang=da] { background-position: 0px  -548px; }\r\n\r\n.lang-sm[lang=de] { background-position: 0px  -564px; }\r\n\r\n.lang-sm[lang=el] { background-position: 0px  -580px; }\r\n\r\n.lang-sm[lang=en] { background-position: 0px  -596px; }\r\n\r\n.lang-sm[lang=es] { background-position: 0px  -612px; }\r\n\r\n.lang-sm[lang=et] { background-position: 0px  -628px; }\r\n\r\n.lang-sm[lang=fi] { background-position: 0px  -644px; }\r\n\r\n.lang-sm[lang=fr] { background-position: 0px  -660px; }\r\n\r\n.lang-sm[lang=ga] { background-position: 0px  -676px; }\r\n\r\n.lang-sm[lang=hi] { background-position: 0px  -692px; }\r\n\r\n.lang-sm[lang=hr] { background-position: 0px  -708px; }\r\n\r\n.lang-sm[lang=hu] { background-position: 0px  -724px; }\r\n\r\n.lang-sm[lang=in] { background-position: 0px  -740px; }\r\n\r\n.lang-sm[lang=is] { background-position: 0px  -756px; }\r\n\r\n.lang-sm[lang=it] { background-position: 0px  -772px; }\r\n\r\n.lang-sm[lang=iw] { background-position: 0px  -788px; }\r\n\r\n.lang-sm[lang=ja] { background-position: 0px  -804px; }\r\n\r\n.lang-sm[lang=ko] { background-position: 0px  -820px; }\r\n\r\n.lang-sm[lang=lt] { background-position: 0px  -836px; }\r\n\r\n.lang-sm[lang=lv] { background-position: 0px  -852px; }\r\n\r\n.lang-sm[lang=mk] { background-position: 0px  -868px; }\r\n\r\n.lang-sm[lang=ms] { background-position: 0px  -884px; }\r\n\r\n.lang-sm[lang=mt] { background-position: 0px  -900px; }\r\n\r\n.lang-sm[lang=nl] { background-position: 0px  -916px; }\r\n\r\n.lang-sm[lang=no] { background-position: 0px  -932px; }\r\n\r\n.lang-sm[lang=pl] { background-position: 0px  -948px; }\r\n\r\n.lang-sm[lang=pt] { background-position: 0px  -964px; }\r\n\r\n.lang-sm[lang=ro] { background-position: 0px  -980px; }\r\n\r\n.lang-sm[lang=ru] { background-position: 0px  -996px; }\r\n\r\n.lang-sm[lang=sk] { background-position: 0px -1012px; }\r\n\r\n.lang-sm[lang=sl] { background-position: 0px -1028px; }\r\n\r\n.lang-sm[lang=sq] { background-position: 0px -1044px; }\r\n\r\n.lang-sm[lang=sr] { background-position: 0px -1060px; }\r\n\r\n.lang-sm[lang=sv] { background-position: 0px -1076px; }\r\n\r\n.lang-sm[lang=th] { background-position: 0px -1092px; }\r\n\r\n.lang-sm[lang=tr] { background-position: 0px -1108px; }\r\n\r\n.lang-sm[lang=uk] { background-position: 0px -1124px; }\r\n\r\n.lang-sm[lang=vi] { background-position: 0px -1140px; }\r\n\r\n.lang-sm[lang=zh] { background-position: 0px -1156px; }\r\n\r\n/* Positions in our sprite for lg-sized images */\r\n\r\n.lang-lg[lang=ar] { background-position: 0px -1188px; }\r\n\r\n.lang-lg[lang=be] { background-position: 0px -1210px; }\r\n\r\n.lang-lg[lang=bg] { background-position: 0px -1232px; }\r\n\r\n.lang-lg[lang=cs] { background-position: 0px -1254px; }\r\n\r\n.lang-lg[lang=da] { background-position: 0px -1276px; }\r\n\r\n.lang-lg[lang=de] { background-position: 0px -1298px; }\r\n\r\n.lang-lg[lang=el] { background-position: 0px -1320px; }\r\n\r\n.lang-lg[lang=en] { background-position: 0px -1342px; }\r\n\r\n.lang-lg[lang=es] { background-position: 0px -1364px; }\r\n\r\n.lang-lg[lang=et] { background-position: 0px -1386px; }\r\n\r\n.lang-lg[lang=fi] { background-position: 0px -1408px; }\r\n\r\n.lang-lg[lang=fr] { background-position: 0px -1430px; }\r\n\r\n.lang-lg[lang=ga] { background-position: 0px -1452px; }\r\n\r\n.lang-lg[lang=hi] { background-position: 0px -1474px; }\r\n\r\n.lang-lg[lang=hr] { background-position: 0px -1496px; }\r\n\r\n.lang-lg[lang=hu] { background-position: 0px -1518px; }\r\n\r\n.lang-lg[lang=in] { background-position: 0px -1540px; }\r\n\r\n.lang-lg[lang=is] { background-position: 0px -1562px; }\r\n\r\n.lang-lg[lang=it] { background-position: 0px -1584px; }\r\n\r\n.lang-lg[lang=iw] { background-position: 0px -1606px; }\r\n\r\n.lang-lg[lang=ja] { background-position: 0px -1628px; }\r\n\r\n.lang-lg[lang=ko] { background-position: 0px -1650px; }\r\n\r\n.lang-lg[lang=lt] { background-position: 0px -1672px; }\r\n\r\n.lang-lg[lang=lv] { background-position: 0px -1694px; }\r\n\r\n.lang-lg[lang=mk] { background-position: 0px -1716px; }\r\n\r\n.lang-lg[lang=ms] { background-position: 0px -1738px; }\r\n\r\n.lang-lg[lang=mt] { background-position: 0px -1760px; }\r\n\r\n.lang-lg[lang=nl] { background-position: 0px -1782px; }\r\n\r\n.lang-lg[lang=no] { background-position: 0px -1804px; }\r\n\r\n.lang-lg[lang=pl] { background-position: 0px -1826px; }\r\n\r\n.lang-lg[lang=pt] { background-position: 0px -1848px; }\r\n\r\n.lang-lg[lang=ro] { background-position: 0px -1870px; }\r\n\r\n.lang-lg[lang=ru] { background-position: 0px -1892px; }\r\n\r\n.lang-lg[lang=sk] { background-position: 0px -1914px; }\r\n\r\n.lang-lg[lang=sl] { background-position: 0px -1936px; }\r\n\r\n.lang-lg[lang=sq] { background-position: 0px -1958px; }\r\n\r\n.lang-lg[lang=sr] { background-position: 0px -1980px; }\r\n\r\n.lang-lg[lang=sv] { background-position: 0px -2002px; }\r\n\r\n.lang-lg[lang=th] { background-position: 0px -2024px; }\r\n\r\n.lang-lg[lang=tr] { background-position: 0px -2046px; }\r\n\r\n.lang-lg[lang=uk] { background-position: 0px -2068px; }\r\n\r\n.lang-lg[lang=vi] { background-position: 0px -2090px; }\r\n\r\n.lang-lg[lang=zh] { background-position: 0px -2112px; }\r\n\r\n/* Labels for the unknown language */\r\n\r\n.lang-lbl:after      { content: \"Unknown language\"; }\r\n\r\n.lang-lbl-en:after   { content: \"Unknown language\"; }\r\n\r\n.lang-lbl-full:after { content: \"Unknown language\"; }\r\n\r\n/* Labels in native (default) language */\r\n\r\n.lang-lbl[lang=ar]:after { content: \"\\000627\\000644\\000639\\000631\\000628\\00064A\\000629\"; }\r\n\r\n.lang-lbl[lang=be]:after { content: \"\\000411\\000435\\00043B\\000430\\000440\\000443\\000441\\00043A\\000456\"; }\r\n\r\n.lang-lbl[lang=bg]:after { content: \"\\000411\\00044A\\00043B\\000433\\000430\\000440\\000441\\00043A\\000438\"; }\r\n\r\n.lang-lbl[lang=cs]:after { content: \"\\00010Ce\\000161tina\"; }\r\n\r\n.lang-lbl[lang=da]:after { content: \"Dansk\"; }\r\n\r\n.lang-lbl[lang=de]:after { content: \"Deutsch\"; }\r\n\r\n.lang-lbl[lang=el]:after { content: \"\\000395\\0003BB\\0003BB\\0003B7\\0003BD\\0003B9\\0003BA\\0003AC\"; }\r\n\r\n.lang-lbl[lang=en]:after { content: \"English\"; }\r\n\r\n.lang-lbl[lang=es]:after { content: \"Espa\\0000F1ol\"; }\r\n\r\n.lang-lbl[lang=et]:after { content: \"Eesti\"; }\r\n\r\n.lang-lbl[lang=fi]:after { content: \"Suomi\"; }\r\n\r\n.lang-lbl[lang=fr]:after { content: \"Fran\\0000E7ais\"; }\r\n\r\n.lang-lbl[lang=ga]:after { content: \"Gaeilge\"; }\r\n\r\n.lang-lbl[lang=hi]:after { content: \"\\000939\\00093F\\000902\\000926\\000940\"; }\r\n\r\n.lang-lbl[lang=hr]:after { content: \"Hrvatski\"; }\r\n\r\n.lang-lbl[lang=hu]:after { content: \"Magyar\"; }\r\n\r\n.lang-lbl[lang=in]:after { content: \"Bahasa\\000020indonesia\"; }\r\n\r\n.lang-lbl[lang=is]:after { content: \"\\0000CDslenska\"; }\r\n\r\n.lang-lbl[lang=it]:after { content: \"Italiano\"; }\r\n\r\n.lang-lbl[lang=iw]:after { content: \"\\0005E2\\0005D1\\0005E8\\0005D9\\0005EA\"; }\r\n\r\n.lang-lbl[lang=ja]:after { content: \"\\0065E5\\00672C\\008A9E\"; }\r\n\r\n.lang-lbl[lang=ko]:after { content: \"\\00D55C\\00AD6D\\00C5B4\"; }\r\n\r\n.lang-lbl[lang=lt]:after { content: \"Lietuvi\\000173\"; }\r\n\r\n.lang-lbl[lang=lv]:after { content: \"Latvie\\000161u\"; }\r\n\r\n.lang-lbl[lang=mk]:after { content: \"\\00041C\\000430\\00043A\\000435\\000434\\00043E\\00043D\\000441\\00043A\\000438\"; }\r\n\r\n.lang-lbl[lang=ms]:after { content: \"Bahasa\\000020melayu\"; }\r\n\r\n.lang-lbl[lang=mt]:after { content: \"Malti\"; }\r\n\r\n.lang-lbl[lang=nl]:after { content: \"Nederlands\"; }\r\n\r\n.lang-lbl[lang=no]:after { content: \"Norsk\"; }\r\n\r\n.lang-lbl[lang=pl]:after { content: \"Polski\"; }\r\n\r\n.lang-lbl[lang=pt]:after { content: \"Portugu\\0000EAs\"; }\r\n\r\n.lang-lbl[lang=ro]:after { content: \"Rom\\0000E2n\\000103\"; }\r\n\r\n.lang-lbl[lang=ru]:after { content: \"\\000420\\000443\\000441\\000441\\00043A\\000438\\000439\"; }\r\n\r\n.lang-lbl[lang=sk]:after { content: \"Sloven\\00010Dina\"; }\r\n\r\n.lang-lbl[lang=sl]:after { content: \"Sloven\\000161\\00010Dina\"; }\r\n\r\n.lang-lbl[lang=sq]:after { content: \"Shqipe\"; }\r\n\r\n.lang-lbl[lang=sr]:after { content: \"\\000421\\000440\\00043F\\000441\\00043A\\000438\"; }\r\n\r\n.lang-lbl[lang=sv]:after { content: \"Svenska\"; }\r\n\r\n.lang-lbl[lang=th]:after { content: \"\\000E44\\000E17\\000E22\"; }\r\n\r\n.lang-lbl[lang=tr]:after { content: \"T\\0000FCrk\\0000E7e\"; }\r\n\r\n.lang-lbl[lang=uk]:after { content: \"\\000423\\00043A\\000440\\000430\\000457\\00043D\\000441\\00044C\\00043A\\000430\"; }\r\n\r\n.lang-lbl[lang=vi]:after { content: \"Ti\\001EBFng\\000020vi\\001EC7t\"; }\r\n\r\n.lang-lbl[lang=zh]:after { content: \"\\004E2D\\006587\"; }\r\n\r\n/* Labels in english language */\r\n\r\n.lang-lbl-en[lang=ar]:after { content: \"Arabic\"; }\r\n\r\n.lang-lbl-en[lang=be]:after { content: \"Belarusian\"; }\r\n\r\n.lang-lbl-en[lang=bg]:after { content: \"Bulgarian\"; }\r\n\r\n.lang-lbl-en[lang=cs]:after { content: \"Czech\"; }\r\n\r\n.lang-lbl-en[lang=da]:after { content: \"Danish\"; }\r\n\r\n.lang-lbl-en[lang=de]:after { content: \"German\"; }\r\n\r\n.lang-lbl-en[lang=el]:after { content: \"Greek\"; }\r\n\r\n.lang-lbl-en[lang=en]:after { content: \"English\"; }\r\n\r\n.lang-lbl-en[lang=es]:after { content: \"Spanish\"; }\r\n\r\n.lang-lbl-en[lang=et]:after { content: \"Estonian\"; }\r\n\r\n.lang-lbl-en[lang=fi]:after { content: \"Finnish\"; }\r\n\r\n.lang-lbl-en[lang=fr]:after { content: \"French\"; }\r\n\r\n.lang-lbl-en[lang=ga]:after { content: \"Irish\"; }\r\n\r\n.lang-lbl-en[lang=hi]:after { content: \"Hindi\"; }\r\n\r\n.lang-lbl-en[lang=hr]:after { content: \"Croatian\"; }\r\n\r\n.lang-lbl-en[lang=hu]:after { content: \"Hungarian\"; }\r\n\r\n.lang-lbl-en[lang=in]:after { content: \"Indonesian\"; }\r\n\r\n.lang-lbl-en[lang=is]:after { content: \"Icelandic\"; }\r\n\r\n.lang-lbl-en[lang=it]:after { content: \"Italian\"; }\r\n\r\n.lang-lbl-en[lang=iw]:after { content: \"Hebrew\"; }\r\n\r\n.lang-lbl-en[lang=ja]:after { content: \"Japanese\"; }\r\n\r\n.lang-lbl-en[lang=ko]:after { content: \"Korean\"; }\r\n\r\n.lang-lbl-en[lang=lt]:after { content: \"Lithuanian\"; }\r\n\r\n.lang-lbl-en[lang=lv]:after { content: \"Latvian\"; }\r\n\r\n.lang-lbl-en[lang=mk]:after { content: \"Macedonian\"; }\r\n\r\n.lang-lbl-en[lang=ms]:after { content: \"Malay\"; }\r\n\r\n.lang-lbl-en[lang=mt]:after { content: \"Maltese\"; }\r\n\r\n.lang-lbl-en[lang=nl]:after { content: \"Dutch\"; }\r\n\r\n.lang-lbl-en[lang=no]:after { content: \"Norwegian\"; }\r\n\r\n.lang-lbl-en[lang=pl]:after { content: \"Polish\"; }\r\n\r\n.lang-lbl-en[lang=pt]:after { content: \"Portuguese\"; }\r\n\r\n.lang-lbl-en[lang=ro]:after { content: \"Romanian\"; }\r\n\r\n.lang-lbl-en[lang=ru]:after { content: \"Russian\"; }\r\n\r\n.lang-lbl-en[lang=sk]:after { content: \"Slovak\"; }\r\n\r\n.lang-lbl-en[lang=sl]:after { content: \"Slovenian\"; }\r\n\r\n.lang-lbl-en[lang=sq]:after { content: \"Albanian\"; }\r\n\r\n.lang-lbl-en[lang=sr]:after { content: \"Serbian\"; }\r\n\r\n.lang-lbl-en[lang=sv]:after { content: \"Swedish\"; }\r\n\r\n.lang-lbl-en[lang=th]:after { content: \"Thai\"; }\r\n\r\n.lang-lbl-en[lang=tr]:after { content: \"Turkish\"; }\r\n\r\n.lang-lbl-en[lang=uk]:after { content: \"Ukrainian\"; }\r\n\r\n.lang-lbl-en[lang=vi]:after { content: \"Vietnamese\"; }\r\n\r\n.lang-lbl-en[lang=zh]:after { content: \"Chinese\"; }\r\n\r\n/* Combined native/english labels */\r\n\r\n.lang-lbl-full[lang=ar]:after { content: \"\\000627\\000644\\000639\\000631\\000628\\00064A\\000629\\0000A0/\\0000A0Arabic\"; }\r\n\r\n.lang-lbl-full[lang=be]:after { content: \"\\000411\\000435\\00043B\\000430\\000440\\000443\\000441\\00043A\\000456\\0000A0/\\0000A0Belarusian\"; }\r\n\r\n.lang-lbl-full[lang=bg]:after { content: \"\\000411\\00044A\\00043B\\000433\\000430\\000440\\000441\\00043A\\000438\\0000A0/\\0000A0Bulgarian\"; }\r\n\r\n.lang-lbl-full[lang=cs]:after { content: \"\\00010Ce\\000161tina\\0000A0/\\0000A0Czech\"; }\r\n\r\n.lang-lbl-full[lang=da]:after { content: \"Dansk\\0000A0/\\0000A0Danish\"; }\r\n\r\n.lang-lbl-full[lang=de]:after { content: \"Deutsch\\0000A0/\\0000A0German\"; }\r\n\r\n.lang-lbl-full[lang=el]:after { content: \"\\000395\\0003BB\\0003BB\\0003B7\\0003BD\\0003B9\\0003BA\\0003AC\\0000A0/\\0000A0Greek\"; }\r\n\r\n.lang-lbl-full[lang=en]:after { content: \"English\\0000A0/\\0000A0English\"; }\r\n\r\n.lang-lbl-full[lang=es]:after { content: \"Espa\\0000F1ol\\0000A0/\\0000A0Spanish\"; }\r\n\r\n.lang-lbl-full[lang=et]:after { content: \"Eesti\\0000A0/\\0000A0Estonian\"; }\r\n\r\n.lang-lbl-full[lang=fi]:after { content: \"Suomi\\0000A0/\\0000A0Finnish\"; }\r\n\r\n.lang-lbl-full[lang=fr]:after { content: \"Fran\\0000E7ais\\0000A0/\\0000A0French\"; }\r\n\r\n.lang-lbl-full[lang=ga]:after { content: \"Gaeilge\\0000A0/\\0000A0Irish\"; }\r\n\r\n.lang-lbl-full[lang=hi]:after { content: \"\\000939\\00093F\\000902\\000926\\000940\\0000A0/\\0000A0Hindi\"; }\r\n\r\n.lang-lbl-full[lang=hr]:after { content: \"Hrvatski\\0000A0/\\0000A0Croatian\"; }\r\n\r\n.lang-lbl-full[lang=hu]:after { content: \"Magyar\\0000A0/\\0000A0Hungarian\"; }\r\n\r\n.lang-lbl-full[lang=in]:after { content: \"Bahasa\\000020indonesia\\0000A0/\\0000A0Indonesian\"; }\r\n\r\n.lang-lbl-full[lang=is]:after { content: \"\\0000CDslenska\\0000A0/\\0000A0Icelandic\"; }\r\n\r\n.lang-lbl-full[lang=it]:after { content: \"Italiano\\0000A0/\\0000A0Italian\"; }\r\n\r\n.lang-lbl-full[lang=iw]:after { content: \"\\0005E2\\0005D1\\0005E8\\0005D9\\0005EA\\0000A0/\\0000A0Hebrew\"; }\r\n\r\n.lang-lbl-full[lang=ja]:after { content: \"\\0065E5\\00672C\\008A9E\\0000A0/\\0000A0Japanese\"; }\r\n\r\n.lang-lbl-full[lang=ko]:after { content: \"\\00D55C\\00AD6D\\00C5B4\\0000A0/\\0000A0Korean\"; }\r\n\r\n.lang-lbl-full[lang=lt]:after { content: \"Lietuvi\\000173\\0000A0/\\0000A0Lithuanian\"; }\r\n\r\n.lang-lbl-full[lang=lv]:after { content: \"Latvie\\000161u\\0000A0/\\0000A0Latvian\"; }\r\n\r\n.lang-lbl-full[lang=mk]:after { content: \"\\00041C\\000430\\00043A\\000435\\000434\\00043E\\00043D\\000441\\00043A\\000438\\0000A0/\\0000A0Macedonian\"; }\r\n\r\n.lang-lbl-full[lang=ms]:after { content: \"Bahasa\\000020melayu\\0000A0/\\0000A0Malay\"; }\r\n\r\n.lang-lbl-full[lang=mt]:after { content: \"Malti\\0000A0/\\0000A0Maltese\"; }\r\n\r\n.lang-lbl-full[lang=nl]:after { content: \"Nederlands\\0000A0/\\0000A0Dutch\"; }\r\n\r\n.lang-lbl-full[lang=no]:after { content: \"Norsk\\0000A0/\\0000A0Norwegian\"; }\r\n\r\n.lang-lbl-full[lang=pl]:after { content: \"Polski\\0000A0/\\0000A0Polish\"; }\r\n\r\n.lang-lbl-full[lang=pt]:after { content: \"Portugu\\0000EAs\\0000A0/\\0000A0Portuguese\"; }\r\n\r\n.lang-lbl-full[lang=ro]:after { content: \"Rom\\0000E2n\\000103\\0000A0/\\0000A0Romanian\"; }\r\n\r\n.lang-lbl-full[lang=ru]:after { content: \"\\000420\\000443\\000441\\000441\\00043A\\000438\\000439\\0000A0/\\0000A0Russian\"; }\r\n\r\n.lang-lbl-full[lang=sk]:after { content: \"Sloven\\00010Dina\\0000A0/\\0000A0Slovak\"; }\r\n\r\n.lang-lbl-full[lang=sl]:after { content: \"Sloven\\000161\\00010Dina\\0000A0/\\0000A0Slovenian\"; }\r\n\r\n.lang-lbl-full[lang=sq]:after { content: \"Shqipe\\0000A0/\\0000A0Albanian\"; }\r\n\r\n.lang-lbl-full[lang=sr]:after { content: \"\\000421\\000440\\00043F\\000441\\00043A\\000438\\0000A0/\\0000A0Serbian\"; }\r\n\r\n.lang-lbl-full[lang=sv]:after { content: \"Svenska\\0000A0/\\0000A0Swedish\"; }\r\n\r\n.lang-lbl-full[lang=th]:after { content: \"\\000E44\\000E17\\000E22\\0000A0/\\0000A0Thai\"; }\r\n\r\n.lang-lbl-full[lang=tr]:after { content: \"T\\0000FCrk\\0000E7e\\0000A0/\\0000A0Turkish\"; }\r\n\r\n.lang-lbl-full[lang=uk]:after { content: \"\\000423\\00043A\\000440\\000430\\000457\\00043D\\000441\\00044C\\00043A\\000430\\0000A0/\\0000A0Ukrainian\"; }\r\n\r\n.lang-lbl-full[lang=vi]:after { content: \"Ti\\001EBFng\\000020vi\\001EC7t\\0000A0/\\0000A0Vietnamese\"; }\r\n\r\n.lang-lbl-full[lang=zh]:after { content: \"\\004E2D\\006587\\0000A0/\\0000A0Chinese\"; }\r\n\r\n/* One breaking space if we have an image */\r\n\r\n.lang-xs:before,\r\n.lang-sm:before,\r\n.lang-lg:before  { content: '\\0000A0'; }\r\n\r\n/* Pad the image and remove the non-breaking space when we have both an icon and a label */\r\n\r\n.lang-xs.lang-lbl,\r\n.lang-xs.lang-lbl-en,\r\n.lang-xs.lang-lbl-full  { padding-left: 16px; }\r\n\r\n.lang-sm.lang-lbl,\r\n.lang-sm.lang-lbl-en,\r\n.lang-sm.lang-lbl-full  { padding-left: 24px; }\r\n\r\n.lang-lg.lang-lbl,\r\n.lang-lg.lang-lbl-en,\r\n.lang-lg.lang-lbl-full  { padding-left: 32px; }\r\n\r\n.lang-xs.lang-lbl:before,\r\n.lang-sm.lang-lbl:before,\r\n.lang-lg.lang-lbl:before,\r\n.lang-xs.lang-lbl-en:before,\r\n.lang-sm.lang-lbl-en:before,\r\n.lang-lg.lang-lbl-en:before,\r\n.lang-xs.lang-lbl-full:before,\r\n.lang-sm.lang-lbl-full:before,\r\n.lang-lg.lang-lbl-full:before  { content: ''; }\r\n\r\n/* Adjustments for paragraphs */\r\n\r\n.lang-lg,\r\n.lang-lg:after       { top:   0px; position: relative; }\r\n\r\n.lang-sm             { top:   1px; position: relative; }\r\n\r\n.lang-sm:after       { top:  -1px; position: relative; }\r\n\r\n.lang-xs             { top:   4px; position: relative; }\r\n\r\n.lang-xs:after       { top:  -4px; position: relative; }\r\n\r\n.lead>.lang-lg       { top:   2px; }\r\n\r\n.lead>.lang-lg:after { top:  -2px; }\r\n\r\n.lead>.lang-sm       { top:   6px; }\r\n\r\n.lead>.lang-sm:after { top:  -6px; }\r\n\r\n.lead>.lang-xs       { top:   8px; }\r\n\r\n.lead>.lang-xs:after { top:  -8px; }\r\n\r\nsmall>.lang-sm       { top:  -1px; }\r\n\r\nsmall>.lang-sm:after { top:   1px; }\r\n\r\nsmall>.lang-xs       { top:   2px; }\r\n\r\nsmall>.lang-xs:after { top:  -2px; }\r\n\r\n/* Adjustments for headings */\r\n\r\nh1>.lang-lg       { top:   9px; }\r\n\r\nh1>.lang-lg:after { top:  -9px; }\r\n\r\nh1>.lang-sm       { top:  12px; }\r\n\r\nh1>.lang-sm:after { top: -12px; }\r\n\r\nh1>.lang-xs       { top:  14px; }\r\n\r\nh1>.lang-xs:after { top: -14px; }\r\n\r\nh2>.lang-lg       { top:   5px; }\r\n\r\nh2>.lang-lg:after { top:  -5px; }\r\n\r\nh2>.lang-sm       { top:   8px; }\r\n\r\nh2>.lang-sm:after { top:  -8px; }\r\n\r\nh2>.lang-xs       { top:  10px; }\r\n\r\nh2>.lang-xs:after { top: -10px; }\r\n\r\nh3>.lang-lg       { top:   1px; }\r\n\r\nh3>.lang-lg:after { top:  -1px; }\r\n\r\nh3>.lang-sm       { top:   5px; }\r\n\r\nh3>.lang-sm:after { top:  -5px; }\r\n\r\nh3>.lang-xs       { top:   8px; }\r\n\r\nh3>.lang-xs:after { top:  -8px; }\r\n\r\nh4>.lang-lg       { top:  -1px; }\r\n\r\nh4>.lang-lg:after { top:   1px; }\r\n\r\nh4>.lang-sm       { top:   1px; }\r\n\r\nh4>.lang-sm:after { top:  -1px; }\r\n\r\nh4>.lang-xs       { top:   4px; }\r\n\r\nh4>.lang-xs:after { top:  -4px; }\r\n\r\nh5>.lang-sm,\r\nh5>.lang-sm:after { top:   0px; }\r\n\r\nh5>.lang-xs       { top:   2px; }\r\n\r\nh5>.lang-xs:after { top:  -2px; }\r\n\r\nh6>.lang-sm,\r\nh6>.lang-sm:after { top:   0px; }\r\n\r\nh6>.lang-xs       { top:   1px; }\r\n\r\nh6>.lang-xs:after { top:  -1px; }\r\n\r\n/* Adjustments for buttons */\r\n\r\n.btn>.lang-sm              { top:   2px; }\r\n\r\n.btn>.lang-sm:after        { top:  -2px; }\r\n\r\n.btn>.lang-xs              { top:   4px; }\r\n\r\n.btn>.lang-xs:after        { top:  -4px; }\r\n\r\n.btn.btn-xs>.lang-sm,\r\n.btn.btn-xs>.lang-sm:after { top:   0px; }\r\n\r\n.btn.btn-xs>.lang-xs       { top:   3px; }\r\n\r\n.btn.btn-xs>.lang-xs:after { top:  -3px; }\r\n\r\n.btn.btn-sm>.lang-sm,\r\n.btn.btn-sm>.lang-sm:after { top:   0px; }\r\n\r\n.btn.btn-sm>.lang-xs       { top:   3px; }\r\n\r\n.btn.btn-sm>.lang-xs:after { top:  -3px; }\r\n\r\n.btn.btn-lg>.lang-lg       { top:   1px; }\r\n\r\n.btn.btn-lg>.lang-lg:after { top:  -1px; }\r\n\r\n.btn.btn-lg>.lang-sm       { top:   3px; }\r\n\r\n.btn.btn-lg>.lang-sm:after { top:  -3px; }\r\n\r\n.btn.btn-lg>.lang-xs       { top:   6px; }\r\n\r\n.btn.btn-lg>.lang-xs:after { top:  -6px; }\r\n"

/***/ }),

/***/ "./src/app/components/icon-button/icon-button.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/icon-button/icon-button.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/icon-button/icon-button.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/icon-button/icon-button.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button ></button>\r\n"

/***/ }),

/***/ "./src/app/components/icon-button/icon-button.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/icon-button/icon-button.component.ts ***!
  \*****************************************************************/
/*! exports provided: IconButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconButtonComponent", function() { return IconButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IconButtonComponent = /** @class */ (function () {
    function IconButtonComponent() {
    }
    IconButtonComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], IconButtonComponent.prototype, "iconClass", void 0);
    IconButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-icon-button',
            template: __webpack_require__(/*! ./icon-button.component.html */ "./src/app/components/icon-button/icon-button.component.html"),
            styles: [__webpack_require__(/*! ./icon-button.component.css */ "./src/app/components/icon-button/icon-button.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IconButtonComponent);
    return IconButtonComponent;
}());



/***/ }),

/***/ "./src/app/components/item-enhancement/item-enhancement.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/item-enhancement/item-enhancement.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".choices {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-left: -64px;\r\n}\r\n\r\n.valueType {\r\n  display: flex;\r\n  padding-top: 3px;\r\n  padding-bottom: 3px;\r\n}\r\n\r\n.title {\r\n  width: 100px;\r\n  flex-shrink: 0;\r\n  text-align: end;\r\n  padding-right: 15px;\r\n  padding-top: 2px;\r\n  padding-bottom: 2px;\r\n}\r\n\r\n.value {\r\n  padding-left: 5px;\r\n  padding-right: 5px;\r\n  padding-top: 2px;\r\n  padding-bottom: 2px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.value:hover {\r\n  color: #cccccc;\r\n}\r\n\r\n.value.selected {\r\n  background-color: #ff6e40;\r\n}\r\n\r\n.action {\r\n  cursor: pointer;\r\n}\r\n\r\n.actionIcon {\r\n  margin-right: 5px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/item-enhancement/item-enhancement.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/item-enhancement/item-enhancement.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"item\">\r\n  <span class=\"action\" (click)=\"enhancementOpened = !enhancementOpened\">\r\n    <img class=\"actionIcon actionImg\" src=\"{{environment.baseUrl}}img/icons/dwarf.png\">\r\n    <span><span *ngFor=\"let enhancement of item.enhancements\" class=\"textListItem enhancement\">{{enhancement.startsWith('rare') ? ITEM_ENHANCEMENT_LABELS[enhancement][item.type] : ITEM_ENHANCEMENT_LABELS[enhancement]}}</span></span>\r\n  </span>\r\n  <div class=\"choices\" *ngIf=\"enhancementOpened\">\r\n    <div class=\"valueType\"><span class=\"title\">Rare</span><span *ngFor=\"let value of ITEM_ENHANCEMENT_TYPES.rare\" class=\"value\" (click)=\"toggle(value)\" [ngClass]=\"{selected:item.enhancements.includes(value)}\">{{ITEM_ENHANCEMENT_LABELS[value][item.type]}}</span></div>\r\n    <div class=\"valueType\"><span class=\"title\">HP</span><span *ngFor=\"let value of ITEM_ENHANCEMENT_TYPES.hp; index as i\" class=\"value\" (click)=\"toggle(value)\" [ngClass]=\"{selected:item.enhancements.includes(value)}\">{{valueByIndex[i]}}%</span></div>\r\n    <div class=\"valueType\"><span class=\"title\">MP</span><span *ngFor=\"let value of ITEM_ENHANCEMENT_TYPES.mp; index as i\" class=\"value\" (click)=\"toggle(value)\" [ngClass]=\"{selected:item.enhancements.includes(value)}\">{{valueByIndex[i]}}%</span></div>\r\n    <div class=\"valueType\"><span class=\"title\">ATK</span><span *ngFor=\"let value of ITEM_ENHANCEMENT_TYPES.atk; index as i\" class=\"value\" (click)=\"toggle(value)\" [ngClass]=\"{selected:item.enhancements.includes(value)}\">{{valueByIndex[i]}}%</span></div>\r\n    <div class=\"valueType\"><span class=\"title\">DEF</span><span *ngFor=\"let value of ITEM_ENHANCEMENT_TYPES.def; index as i\" class=\"value\" (click)=\"toggle(value)\" [ngClass]=\"{selected:item.enhancements.includes(value)}\">{{valueByIndex[i]}}%</span></div>\r\n    <div class=\"valueType\"><span class=\"title\">MAG</span><span *ngFor=\"let value of ITEM_ENHANCEMENT_TYPES.mag; index as i\" class=\"value\" (click)=\"toggle(value)\" [ngClass]=\"{selected:item.enhancements.includes(value)}\">{{valueByIndex[i]}}%</span></div>\r\n    <div class=\"valueType\"><span class=\"title\">SPR</span><span *ngFor=\"let value of ITEM_ENHANCEMENT_TYPES.spr; index as i\" class=\"value\" (click)=\"toggle(value)\" [ngClass]=\"{selected:item.enhancements.includes(value)}\">{{valueByIndex[i]}}%</span></div>\r\n    <div class=\"valueType\"><span class=\"title\">Auto-Regen</span><span *ngFor=\"let value of ITEM_ENHANCEMENT_TYPES.autoRegen; index as i\" class=\"value\" (click)=\"toggle(value)\" [ngClass]=\"{selected:item.enhancements.includes(value)}\">lvl{{4 - i}}</span></div>\r\n    <div class=\"valueType\"><span class=\"title\">Auto-Refresh</span><span *ngFor=\"let value of ITEM_ENHANCEMENT_TYPES.autoRefresh; index as i\" class=\"value\" (click)=\"toggle(value)\" [ngClass]=\"{selected:item.enhancements.includes(value)}\">lvl{{2 - i}}</span></div>\r\n    <div class=\"valueType\"><span class=\"title\">Auto-Protect</span><span *ngFor=\"let value of ITEM_ENHANCEMENT_TYPES.autoProtect; index as i\" class=\"value\" (click)=\"toggle(value)\" [ngClass]=\"{selected:item.enhancements.includes(value)}\">lvl{{5 - i}}</span></div>\r\n    <div class=\"valueType\"><span class=\"title\">Auto-Shell</span><span *ngFor=\"let value of ITEM_ENHANCEMENT_TYPES.autoShell; index as i\" class=\"value\" (click)=\"toggle(value)\" [ngClass]=\"{selected:item.enhancements.includes(value)}\">lvl{{5 - i}}</span></div>\r\n  </div>\r\n</ng-container>\r\n"

/***/ }),

/***/ "./src/app/components/item-enhancement/item-enhancement.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/item-enhancement/item-enhancement.component.ts ***!
  \***************************************************************************/
/*! exports provided: ItemEnhancementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemEnhancementComponent", function() { return ItemEnhancementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _model_item_world_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/item-world-constants */ "./src/app/model/item-world-constants.ts");
/* harmony import */ var _model_enhanced_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/enhanced-item */ "./src/app/model/enhanced-item.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ItemEnhancementComponent = /** @class */ (function () {
    function ItemEnhancementComponent() {
        this.enhancementChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"];
        this.enhancementOpened = false;
        this.ITEM_ENHANCEMENT_TYPES = _model_item_world_constants__WEBPACK_IMPORTED_MODULE_2__["itemWorldConstants"].ITEM_ENHANCEMENT_TYPES;
        this.ITEM_ENHANCEMENT_LABELS = _model_item_world_constants__WEBPACK_IMPORTED_MODULE_2__["itemWorldConstants"].ITEM_ENHANCEMENT_LABELS;
        this.valueByIndex = ['15', '12', '10', '7', '5', '3', '1'];
    }
    ItemEnhancementComponent.prototype.ngOnInit = function () {
    };
    ItemEnhancementComponent.prototype.toggle = function (value) {
        if (this.item.toggleEnhancement(value)) {
            this.enhancementChanged.emit();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _model_enhanced_item__WEBPACK_IMPORTED_MODULE_3__["EnhancedItem"])
    ], ItemEnhancementComponent.prototype, "item", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ItemEnhancementComponent.prototype, "enhancementChanged", void 0);
    ItemEnhancementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-item-enhancement',
            template: __webpack_require__(/*! ./item-enhancement.component.html */ "./src/app/components/item-enhancement/item-enhancement.component.html"),
            styles: [__webpack_require__(/*! ./item-enhancement.component.css */ "./src/app/components/item-enhancement/item-enhancement.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ItemEnhancementComponent);
    return ItemEnhancementComponent;
}());



/***/ }),

/***/ "./src/app/components/item-tile/item-tile.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/item-tile/item-tile.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item {\r\n  padding-top: 8px;\r\n  padding-bottom: 8px;\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.icon {\r\n  height: 64px;\r\n  width: 64px;\r\n  background: url(\"data:image/png;base64,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\");\r\n}\r\n\r\n.iconModifier {\r\n  position: absolute;\r\n  height: 24px;\r\n  left: 3px;\r\n  top: 43px;\r\n}\r\n\r\n.column {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding-left: 5px;\r\n  flex: 1;\r\n}\r\n\r\n.rarity {\r\n  color: #e0e0e0;\r\n  font-size: .9em;\r\n}\r\n\r\n.name {\r\n  font-weight: 600;\r\n}\r\n\r\n.statsContainer {\r\n  margin-top: 2px;\r\n}\r\n\r\ni.miniIcon.itemType {\r\n  margin-right: 5px;\r\n}\r\n\r\n.stats {\r\n  font-size: .9em;\r\n}\r\n\r\n.list:last-child .separator {\r\n  display: none;\r\n}\r\n\r\n.statTypeCategory {\r\n  display: flex;\r\n}\r\n\r\n.statTypeCategoryIcon {\r\n  border-right: 1px solid #ddd;\r\n  padding-right: 2px;\r\n  margin-right: 3px;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.statType {\r\n  margin-right: 5px;\r\n}\r\n\r\n.skillIcon {\r\n  border-radius: 5px;\r\n  width: 38px;\r\n  margin-top: -5px;\r\n  margin-bottom: -5px;\r\n  margin-left: -5px;\r\n}\r\n\r\n.accesses > div {\r\n  margin-top: 5px;\r\n}\r\n\r\n.exclusive {\r\n  font-weight: 600;\r\n}\r\n\r\n.actions {\r\n  margin-top: 5px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/item-tile/item-tile.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/item-tile/item-tile.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"item\" *ngIf=\"item\">\r\n  <div class=\"itemIcon\">\r\n    <img *ngIf=\"itemIcon\" src=\"{{itemIcon}}\" class=\"icon\"/>\r\n    <i *ngIf=\"itemIconClass\" class=\"img {{itemIconClass}} icon\"></i>\r\n    <img *ngIf=\"item.twoHanded\" class=\"iconModifier\" src=\"{{environment.baseUrl}}img/icons/twoHanded.png\" title=\"Two-handed\">\r\n    <img *ngIf=\"item.notStackable\" class=\"iconModifier\" src=\"{{environment.baseUrl}}img/icons/notStackable.png\" title=\"Two-handed\">\r\n  </div>\r\n  <div class=\"column\">\r\n    <div class=\"nameAndStats\">\r\n      <span class=\"rarity\" *ngIf=\"item.rarity\">{{item.rarity}}★</span>\r\n      <span class=\"name\"><app-item-link [name]=\"item.name\" [wikiEntry]=\"item.wikiEntry\"></app-item-link></span>\r\n      <span class=\"jpname\" *ngIf=\"item.jpname\">{{item.jpname}}</span>\r\n      <div class=\"statsContainer\">\r\n        <i *ngIf=\"itemTypeIconClass\" class='itemType img {{itemTypeIconClass}} miniIcon'></i>\r\n        <span class=\"stats\">\r\n          <ng-container *ngFor=\"let stat of baseStats\">\r\n            <span *ngIf=\"item[stat].flat\" class=\"stat list {{stat}}\">{{stat | uppercase}}+{{item[stat].flat}}<span class=\"separator\">, </span></span>\r\n            <span *ngIf=\"item[stat].percent\" class=\"stat {{stat}}\">{{stat | uppercase}}+{{item[stat].percent}}%<span class=\"separator\">, </span></span>\r\n          </ng-container>\r\n        </span>\r\n      </div>\r\n      <div class=\"statTypeCategory\" *ngIf=\"mode == Mode.DETAILED && (item.elements.length > 0 || item.physicalKillers.size > 0 || item.magicalKillers.size > 0 || item.ailments.size > 0)\">\r\n        <div class=\"statTypeCategoryIcon\"><span class=\"fas fa-arrow-alt-circle-right\"></span></div>\r\n        <div>\r\n          <span *ngIf=\"item.elements.length > 0\" class=\"statType\">\r\n            <i *ngFor=\"let element of item.elements\" class='img img-element-{{element}} miniIcon'></i>\r\n          </span>\r\n          <app-by-value-list [list]=\"item.physicalKillers\" [type]=\"'killer-physical'\"></app-by-value-list>\r\n          <app-by-value-list [list]=\"item.magicalKillers\" [type]=\"'magical'\"></app-by-value-list>\r\n          <app-by-value-list [list]=\"item.ailments\" [type]=\"'ailment'\"></app-by-value-list>\r\n        </div>\r\n      </div>\r\n      <div class=\"statTypeCategory\" *ngIf=\"mode == Mode.DETAILED && (item.elementalResists.size > 0 || item.ailmentResists.size > 0)\">\r\n        <div class=\"statTypeCategoryIcon\"><span class=\"fas fa-arrow-alt-circle-left\"></span></div>\r\n        <div>\r\n          <app-by-value-list [list]=\"item.ailmentResists\" [type]=\"'ailment'\"></app-by-value-list>\r\n          <app-by-value-list [list]=\"item.elementalResists\" [type]=\"'element'\"></app-by-value-list>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"accesses\" *ngIf=\"mode == Mode.DETAILED\">\r\n      <div *ngIf=\"item.equipedConditions.length > 0\" class=\"exclusive\">if <span *ngFor=\"let condition of item.equipedConditions\" class=\"list\"><i class=\"img img-equipment-{{condition}} miniIcon\"></i><span class=\"separator\">, </span></span> equiped</div>\r\n      <div *ngIf=\"item.exclusiveSex\" class=\"exclusive\">Only {{item.exclusiveSex}}</div>\r\n      <div *ngIf=\"item.exclusiveUnits.length > 0\" class=\"exclusive\">Only <span *ngFor=\"let unit of exclusiveUnits\" class=\"list\"><app-item-link *ngIf=\"unit\" [name]=\"unit.name\" [wikiEntry]=\"unit.wikiEntry\"></app-item-link><span *ngIf=\"!unit\">unknown unit</span><span class=\"separator\">, </span></span></div>\r\n      <div *ngIf=\"item.access\">Access :\r\n        <span *ngFor=\"let access of item.access\" class=\"list\">\r\n          {{access}}\r\n          <span *ngIf=\"access.indexOf('TMR') >= 0 && tmrUnit\"> of <app-item-link [name]=\"tmrUnit.name\" [wikiEntry]=\"tmrUnit.wikiEntry\"></app-item-link></span>\r\n          <span *ngIf=\"access.indexOf('STMR') >= 0 && stmrUnit\"> of <app-item-link [name]=\"stmrUnit.name\" [wikiEntry]=\"stmrUnit.wikiEntry\"></app-item-link></span>\r\n          <span class=\"separator\">, </span>\r\n        </span>\r\n      </div>\r\n    </div>\r\n    <div class=\"actions\">\r\n      <ng-content></ng-content>\r\n    </div>\r\n  </div>\r\n  <div class=\"column\" *ngIf=\"mode == Mode.DETAILED\">\r\n    <div class=\"special\">\r\n      <div *ngIf=\"item.damageVariance\"><img src=\"{{environment.baseUrl}}img/items/ability_54.png\" class=\"img skillIcon\"/>x{{(item.damageVariance.min + item.damageVariance.max)/2}} damage variance (x{{item.damageVariance.min}} to x{{item.damageVariance.max}})</div>\r\n      <app-item-link *ngIf=\"item.dualWield\" [name]=\"'Dual Wield'\" [icon]=\"'ability_72.png'\"></app-item-link>\r\n      <div *ngIf=\"item.partialDualWield.length > 0\"><img src=\"{{environment.baseUrl}}img/items/ability_72.png\" class=\"img skillIcon\"/>Dual Wield of <i *ngFor=\"let weaponType of item.partialDualWield\" class='img img-equipment-{{weaponType}} miniIcon'></i></div>\r\n      <div *ngIf=\"item.allowUseOf\">Allow use of <i class='img img-equipment-{{item.allowUseOf}} miniIcon'></i></div>\r\n      <div *ngIf=\"item.physicalEvade\"><img src=\"{{environment.baseUrl}}img/items/ability_75.png\" class=\"img skillIcon\"/>+{{item.physicalEvade}}% physical evasion</div>\r\n      <div *ngIf=\"item.magicalEvade\"><img src=\"{{environment.baseUrl}}img/items/ability_75.png\" class=\"img skillIcon\"/>+{{item.magicalEvade}}% magical evasion</div>\r\n      <ng-container *ngIf=\"item.singleWielding\">\r\n        <ng-container *ngFor=\"let stat of item.singleWielding | keyvalue\">\r\n          <div *ngIf=\"stat.key === 'accuracy'\"><img src=\"{{environment.baseUrl}}img/items/ability_40.png\" class=\"img skillIcon\"/>+{{stat.value}}% accuracy when single wielding</div>\r\n          <div *ngIf=\"stat.key != 'accuracy' && stat.value > 0\"><img src=\"{{environment.baseUrl}}img/items/ability_76.png\" class=\"img skillIcon\"/>+{{stat.value}}% equipment {{stat.key | uppercase}} when single wielding</div>\r\n        </ng-container>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"item.singleWieldingOneHanded\">\r\n        <ng-container *ngFor=\"let stat of item.singleWieldingOneHanded | keyvalue\">\r\n          <div *ngIf=\"stat.key === 'accuracy'\"><img src=\"{{environment.baseUrl}}img/items/ability_40.png\" class=\"img skillIcon\"/>+{{stat.value}}% accuracy when single wielding a one-handed weapon</div>\r\n          <div *ngIf=\"stat.key != 'accuracy' && stat.value > 0\"><img src=\"{{environment.baseUrl}}img/items/ability_76.png\" class=\"img skillIcon\"/>+{{stat.value}}% equipment {{stat.key | uppercase}} when single wielding a one-handed weapon</div>\r\n        </ng-container>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"item.dualWielding\">\r\n        <ng-container *ngFor=\"let stat of item.dualWielding | keyvalue\">\r\n        <div *ngIf=\"stat.value\"><img src=\"{{environment.baseUrl}}img/items/ability_72.png\" class=\"img skillIcon\"/>+{{stat.value}}% equipment {{stat.key | uppercase}} when dual wielding</div>\r\n        </ng-container>\r\n      </ng-container>\r\n      <div *ngIf=\"item.accuracy\"><img src=\"{{environment.baseUrl}}img/items/ability_40.png\" class=\"img skillIcon\"/>+{{item.accuracy}}% accuracy</div>\r\n      <div *ngIf=\"item.mpRefresh\"><img src=\"{{environment.baseUrl}}img/items/ability_91.png\" class=\"img skillIcon\"/>Recover {{item.mpRefresh}}% MP per turn</div>\r\n      <div *ngIf=\"item.jumpDamage\"><img src=\"{{environment.baseUrl}}img/items/ability_80.png\" class=\"img skillIcon\"/>+{{item.jumpDamage}}% jump damage</div>\r\n      <div *ngIf=\"item.lbFillRate\"><img src=\"{{environment.baseUrl}}img/items/ability_78.png\" class=\"img skillIcon\"/>+{{item.lbFillRate}}% LB gauge fill rate</div>\r\n      <div *ngIf=\"item.lbDamage\"><img src=\"{{environment.baseUrl}}img/items/ability_78.png\" class=\"img skillIcon\"/>+{{item.lbDamage}}% LB damage</div>\r\n      <div *ngIf=\"item.lbPerTurn\"><img src=\"{{environment.baseUrl}}img/items/ability_91.png\" class=\"img skillIcon\"/>+{{item.lbPerTurn.min}}-{{item.lbPerTurn.max}} LB gauge per turn</div>\r\n      <div *ngIf=\"item.evoMag\"><img src=\"{{environment.baseUrl}}img/items/ability_77.png\" class=\"img skillIcon\"/>+{{item.evoMag}}% Esper summon damage</div>\r\n      <div *ngIf=\"item.esperStatsBonus\"><img src=\"{{environment.baseUrl}}img/items/ability_77.png\" class=\"img skillIcon\"/>+{{item.esperStatsBonus.hp}}% stats from espers</div>\r\n      <div *ngFor=\"let special of specials\">{{special.before}}<app-item-link [name]=\"special.skillName\" [icon]=\"special.icon\" [wikiEntry]=\"special.wikiEntry\"></app-item-link>{{special.text}}</div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/item-tile/item-tile.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/item-tile/item-tile.component.ts ***!
  \*************************************************************/
/*! exports provided: Mode, ItemTileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mode", function() { return Mode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemTileComponent", function() { return ItemTileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common */ "./src/app/common.ts");
/* harmony import */ var _services_context_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/context.service */ "./src/app/services/context.service.ts");
/* harmony import */ var _model_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/constants */ "./src/app/model/constants.ts");
/* harmony import */ var _services_static_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/static-data.service */ "./src/app/services/static-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Mode;
(function (Mode) {
    Mode[Mode["CONCISE"] = 0] = "CONCISE";
    Mode[Mode["DETAILED"] = 1] = "DETAILED";
})(Mode || (Mode = {}));
var ItemTileComponent = /** @class */ (function () {
    function ItemTileComponent(contextService, statDataService) {
        this.contextService = contextService;
        this.statDataService = statDataService;
        this.mode = Mode.DETAILED;
        this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"];
        this.Mode = Mode;
        this.baseStats = _model_constants__WEBPACK_IMPORTED_MODULE_4__["constants"].BASE_STATS;
        this.specials = [];
    }
    ItemTileComponent.prototype.ngOnInit = function () {
        if (this.item) {
            this.onItemchange();
        }
    };
    ItemTileComponent.prototype.ngOnChanges = function (changes) {
        this.onItemchange();
    };
    ItemTileComponent.prototype.onItemchange = function () {
        var _this = this;
        if (this.item) {
            if (this.item.icon) {
                this.itemIcon = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + "/img/items/" + this.item.icon;
            }
            else if (this.item.type == "esper") {
                // no lazyload for espers (uses CSS background)
                this.itemIconClass = "img-esper-" + _common__WEBPACK_IMPORTED_MODULE_2__["common"].escapeName(this.item.name);
            }
            else if (this.item.type == "unavailable") {
                // no image
            }
            else {
                this.itemIconClass = "img-equipment-" + this.item.type;
            }
            if (this.item.type != "esper" && this.item.type != "monster" && this.item.type != "fake") {
                this.itemTypeIconClass = "img-equipment-" + this.item.type;
            }
            if (this.item.special) {
                this.item.special.forEach(function (special) {
                    var specialData = {};
                    var skillsFound = special.match(/(\[[^\]]*\])/g);
                    if (skillsFound.length == 0) {
                        specialData.text = special;
                    }
                    else {
                        var skillFound = skillsFound[0];
                        var index = special.indexOf(skillFound);
                        if (index > 0) {
                            specialData.before = special.substr(0, index);
                        }
                        specialData.text = special.substr(index + skillFound.length);
                        var tokens = skillFound.substring(1, skillFound.length - 1).split("|");
                        if (tokens.length == 1) {
                            specialData.skillName = tokens[0];
                        }
                        else if (tokens.length == 2) {
                            specialData.skillName = tokens[0];
                            specialData.icon = tokens[1];
                        }
                        else if (tokens.length == 3) {
                            specialData.wikiEntry = tokens[0];
                            specialData.skillName = tokens[1];
                            specialData.icon = tokens[2];
                        }
                    }
                    _this.specials.push(specialData);
                });
            }
            if (this.item.tmrUnit) {
                this.statDataService.getUnits().subscribe(function (units) {
                    if (_this.item.tmrUnit) {
                        _this.tmrUnit = units[_this.item.tmrUnit];
                    }
                });
            }
            if (this.item.stmrUnit) {
                this.statDataService.getUnits().subscribe(function (units) {
                    if (_this.item.stmrUnit) {
                        _this.stmrUnit = units[_this.item.stmrUnit];
                    }
                });
            }
            if (this.item.exclusiveUnits) {
                this.statDataService.getUnits().subscribe(function (units) {
                    _this.exclusiveUnits = _this.item.exclusiveUnits.map(function (id) {
                        if (units[id]) {
                            return units[id];
                        }
                        else {
                            return null;
                        }
                    });
                });
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemTileComponent.prototype, "item", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ItemTileComponent.prototype, "mode", void 0);
    ItemTileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-item-tile',
            template: __webpack_require__(/*! ./item-tile.component.html */ "./src/app/components/item-tile/item-tile.component.html"),
            styles: [__webpack_require__(/*! ./item-tile.component.css */ "./src/app/components/item-tile/item-tile.component.css"), __webpack_require__(/*! ../../../assets/css-img/equipments.css */ "./src/assets/css-img/equipments.css"), __webpack_require__(/*! ../../../assets/css-img/elements.css */ "./src/assets/css-img/elements.css")]
        }),
        __metadata("design:paramtypes", [_services_context_service__WEBPACK_IMPORTED_MODULE_3__["ContextService"], _services_static_data_service__WEBPACK_IMPORTED_MODULE_5__["StaticDataService"]])
    ], ItemTileComponent);
    return ItemTileComponent;
}());



/***/ }),

/***/ "./src/app/components/killer-list/killer-list.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/killer-list/killer-list.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".killerValue {\r\n  margin-right: 5px;\r\n  font-size: .9em;\r\n  display: inline-block;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/killer-list/killer-list.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/killer-list/killer-list.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container ngIf=\"killers.size > 0\">\r\n  <span *ngFor=\"let value of values\" class=\"killerValue\">\r\n    <i *ngFor=\"let killer of killersByValue.get(value)\" class='img img-killer-{{killerType}}-{{killer}} miniIcon'></i>:{{value}}%\r\n  </span>\r\n</ng-container>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/killer-list/killer-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/killer-list/killer-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: KillerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KillerListComponent", function() { return KillerListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var KillerListComponent = /** @class */ (function () {
    function KillerListComponent() {
        this.values = [];
        this.killersByValue = new Map();
    }
    KillerListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.killers.forEach(function (value, killer) {
            if (!_this.values.includes(value)) {
                _this.values.push(value);
                _this.killersByValue.set(value, []);
            }
            _this.killersByValue.get(value).push(killer);
        });
        this.values.sort(function (a, b) { return b - a; });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Map)
    ], KillerListComponent.prototype, "killers", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], KillerListComponent.prototype, "killerType", void 0);
    KillerListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-killer-list',
            template: __webpack_require__(/*! ./killer-list.component.html */ "./src/app/components/killer-list/killer-list.component.html"),
            styles: [__webpack_require__(/*! ./killer-list.component.css */ "./src/app/components/killer-list/killer-list.component.css"), __webpack_require__(/*! ../../../assets/css-img/killers.css */ "./src/assets/css-img/killers.css")]
        }),
        __metadata("design:paramtypes", [])
    ], KillerListComponent);
    return KillerListComponent;
}());



/***/ }),

/***/ "./src/app/components/name-link/name-link.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/name-link/name-link.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wikiLink {\r\n  color: #3498db;;\r\n  font-size: 11px;\r\n  margin-left: 2px;\r\n  margin-right: 2px;\r\n}\r\n\r\n.icon {\r\n  border-radius: 5px;\r\n  width: 38px;\r\n  margin-top: -5px;\r\n  margin-bottom: -5px;\r\n  margin-left: -5px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/name-link/name-link.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/name-link/name-link.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img *ngIf=\"iconUrl\" src=\"{{iconUrl}}\" class=\"icon\"/>\r\n<span>{{name}}</span>\r\n<a *ngIf=\"itemLink\" href=\"{{itemLink}}\" target=\"_blank\" rel=\"noreferrer\" onclick=\"event.stopPropagation();\">\r\n  <span class=\"fas fa-external-link-alt wikiLink\"></span>\r\n</a>\r\n"

/***/ }),

/***/ "./src/app/components/name-link/name-link.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/name-link/name-link.component.ts ***!
  \*************************************************************/
/*! exports provided: ItemLinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemLinkComponent", function() { return ItemLinkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_context_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/context.service */ "./src/app/services/context.service.ts");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common */ "./src/app/common.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ItemLinkComponent = /** @class */ (function () {
    function ItemLinkComponent(contextService) {
        this.contextService = contextService;
    }
    ItemLinkComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contextService.server.subscribe(function (server) {
            if (server == _services_context_service__WEBPACK_IMPORTED_MODULE_1__["Server"].GL) {
                _this.itemLink = _common__WEBPACK_IMPORTED_MODULE_2__["common"].toUrl(_this.name, _this.wikiEntry);
            }
        });
        if (this.icon) {
            this.iconUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "img/items/" + this.icon;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ItemLinkComponent.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ItemLinkComponent.prototype, "wikiEntry", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ItemLinkComponent.prototype, "icon", void 0);
    ItemLinkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-item-link',
            template: __webpack_require__(/*! ./name-link.component.html */ "./src/app/components/name-link/name-link.component.html"),
            styles: [__webpack_require__(/*! ./name-link.component.css */ "./src/app/components/name-link/name-link.component.css")]
        }),
        __metadata("design:paramtypes", [_services_context_service__WEBPACK_IMPORTED_MODULE_1__["ContextService"]])
    ], ItemLinkComponent);
    return ItemLinkComponent;
}());



/***/ }),

/***/ "./src/app/directives/click-propagation-stop.directive.ts":
/*!****************************************************************!*\
  !*** ./src/app/directives/click-propagation-stop.directive.ts ***!
  \****************************************************************/
/*! exports provided: ClickPropagationStopDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickPropagationStopDirective", function() { return ClickPropagationStopDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClickPropagationStopDirective = /** @class */ (function () {
    function ClickPropagationStopDirective() {
    }
    ClickPropagationStopDirective.prototype.onClick = function (event) {
        event.stopPropagation();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ClickPropagationStopDirective.prototype, "onClick", null);
    ClickPropagationStopDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[clickPropagationStop]'
        })
    ], ClickPropagationStopDirective);
    return ClickPropagationStopDirective;
}());



/***/ }),

/***/ "./src/app/model/base-item.ts":
/*!************************************!*\
  !*** ./src/app/model/base-item.ts ***!
  \************************************/
/*! exports provided: ValuesByStat, SingleWielding, MinMax, BaseValue, BaseItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValuesByStat", function() { return ValuesByStat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleWielding", function() { return SingleWielding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinMax", function() { return MinMax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseValue", function() { return BaseValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseItem", function() { return BaseItem; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/app/model/constants.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ValuesByStat = /** @class */ (function () {
    function ValuesByStat() {
        this.hp = 0;
        this.mp = 0;
        this.atk = 0;
        this.def = 0;
        this.mag = 0;
        this.spr = 0;
    }
    ValuesByStat.fromJson = function (valueByStat) {
        var result;
        if (valueByStat) {
            result = new ValuesByStat();
            result.hp = valueByStat.hp || 0;
            result.mp = valueByStat.mp || 0;
            result.atk = valueByStat.atk || 0;
            result.def = valueByStat.def || 0;
            result.mag = valueByStat.mag || 0;
            result.spr = valueByStat.spr || 0;
        }
        return result;
    };
    return ValuesByStat;
}());

var SingleWielding = /** @class */ (function (_super) {
    __extends(SingleWielding, _super);
    function SingleWielding() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.accuracy = 0;
        return _this;
    }
    SingleWielding.fromJson = function (valueByStat) {
        var result;
        if (valueByStat) {
            result = new SingleWielding();
            result.hp = valueByStat.hp || 0;
            result.mp = valueByStat.mp || 0;
            result.atk = valueByStat.atk || 0;
            result.def = valueByStat.def || 0;
            result.mag = valueByStat.mag || 0;
            result.spr = valueByStat.spr || 0;
            result.accuracy = valueByStat.accuracy || 0;
        }
        return result;
    };
    SingleWielding.STATS = _constants__WEBPACK_IMPORTED_MODULE_0__["constants"].BASE_STATS.concat(["accuracy"]);
    return SingleWielding;
}(ValuesByStat));

var MinMax = /** @class */ (function () {
    function MinMax() {
    }
    MinMax.fromJson = function (minMax) {
        var result;
        if (minMax) {
            result = new MinMax();
            result.min = minMax.min || 0;
            result.max = minMax.max || 0;
        }
        return result;
    };
    return MinMax;
}());

var BaseValue = /** @class */ (function () {
    function BaseValue(flat, percent) {
        if (flat === void 0) { flat = 0; }
        if (percent === void 0) { percent = 0; }
        this.flat = flat;
        this._percent = percent;
    }
    Object.defineProperty(BaseValue.prototype, "percent", {
        get: function () {
            return this._percent;
        },
        set: function (value) {
            this._percent = value;
        },
        enumerable: true,
        configurable: true
    });
    return BaseValue;
}());

var BaseItem = /** @class */ (function () {
    function BaseItem(json, units) {
        var _this = this;
        this.elementalResists = new Map();
        this.ailmentResists = new Map();
        this.ailments = new Map();
        this.physicalKillers = new Map();
        this.magicalKillers = new Map();
        this.skillEnhancement = new Map();
        this.notStackableSkills = new Map();
        this.dualWield = false;
        this.notStackable = false;
        this.twoHanded = false;
        this.fullSearchText = "";
        this.nameAndTmrunitSearchText = "";
        if (json) {
            this.id = json.id;
            this.name = json.name;
            this.jpname = json.jpname;
            this.wikientry = json.wikientry;
            this.type = json.type;
            this.hp = new BaseValue(json.hp, json['hp%']);
            this.mp = new BaseValue(json.mp, json['mp%']);
            this.atk = new BaseValue(json.atk, json['atk%']);
            this.def = new BaseValue(json.def, json['def%']);
            this.mag = new BaseValue(json.mag, json['mag%']);
            this.spr = new BaseValue(json.spr, json['spr%']);
            this.evoMag = json.evoMag;
            if (json.evade) {
                this.physicalEvade = json.evade.physical || 0;
                this.magicalEvade = json.evade.magical || 0;
            }
            this.singleWieldingOneHanded = SingleWielding.fromJson(json.singleWieldingOneHanded);
            this.singleWielding = SingleWielding.fromJson(json.singleWielding);
            this.dualWielding = ValuesByStat.fromJson(json.dualWielding);
            this.accuracy = json.accuracy || 0;
            this.damageVariance = MinMax.fromJson(json.damageVariance);
            this.jumpDamage = json.jumpDamage || 0;
            this.lbFillRate = json.lbFillRate || 0;
            this.lbPerTurn = MinMax.fromJson(json.lbPerTurn);
            this.elements = json.element || [];
            this.partialDualWield = json.partialDualWield || [];
            if (json.resist) {
                json.resist.forEach(function (r) {
                    if (_constants__WEBPACK_IMPORTED_MODULE_0__["constants"].ELEMENT_LIST.includes(r.name)) {
                        _this.elementalResists.set(r.name, r.percent);
                    }
                    else {
                        _this.ailmentResists.set(r.name, r.percent);
                    }
                });
            }
            if (json.ailments) {
                json.ailments.forEach(function (a) { return _this.ailments.set(a.name, a.percent); });
            }
            if (json.killers) {
                json.killers.forEach(function (k) {
                    if (k.physical) {
                        _this.physicalKillers.set(k.name, k.physical);
                    }
                    if (k.magical) {
                        _this.physicalKillers.set(k.name, k.magical);
                    }
                });
            }
            this.mpRefresh = json.mpRefresh || 0;
            this.esperStatsBonus = ValuesByStat.fromJson(json.esperStatsBonus);
            this.lbDamage = json.lbDamage;
            if (json.skillEnhancement) {
                Object.keys(json.skillEnhancement).forEach(function (skillId) { return _this.skillEnhancement.set(skillId, json.skillEnhancement[skillId]); });
            }
            this.special = [];
            if (json.special) {
                json.special.forEach(function (s) {
                    if (s === "dualWield") {
                        _this.dualWield = true;
                    }
                    else if (s === "twoHanded") {
                        _this.twoHanded = true;
                    }
                    else if (s === "notStackable") {
                        _this.notStackable = true;
                    }
                    else {
                        _this.special.push(s);
                    }
                });
            }
            this.allowUseOf = json.allowUseOf;
            this.exclusiveSex = json.exclusiveSex;
            this.exclusiveUnits = json.exclusiveUnits || [];
            this.equipedConditions = json.equipedConditions || [];
            this.tmrUnit = json.tmrUnit;
            this.stmrUnit = json.stmrUnit;
            this.maxNumber = json.maxNumber || 9999;
            this.eventName = json.eventName;
            if (json.notStackableSkills) {
                Object.keys(json.notStackableSkills).forEach(function (skillId) { return _this.notStackableSkills.set(skillId, json.notStackableSkills[skillId]); });
            }
            this.access = json.access;
            this.icon = json.icon;
            this.sortId = json.sortId;
            this.rarity = json.rarity;
            this.prepareSearch(units);
        }
    }
    BaseItem.prototype.isWeapon = function () {
        return _constants__WEBPACK_IMPORTED_MODULE_0__["constants"].WEAPON_TYPES.includes(this.type);
    };
    BaseItem.prototype.calculateSortValue = function (baseStat, stat, ailments, elements, killers) {
        var calculatedValue = 0;
        if (_constants__WEBPACK_IMPORTED_MODULE_0__["constants"].BASE_STATS.includes(stat)) {
            calculatedValue = this[stat].flat + this[stat].percent * baseStat / 100;
        }
        else if (stat == "evade") {
            calculatedValue = this.physicalEvade;
            if (this.magicalEvade > this.physicalEvade) {
                calculatedValue = this.magicalEvade;
            }
        }
        else if (stat == 'inflict') {
            var maxValue = 0;
            this.ailments.forEach(function (value, ailment) {
                if ((ailments.length == 0 || ailments.includes(ailment)) && value > maxValue) {
                    maxValue = value;
                }
            });
            this.physicalKillers.forEach(function (value, killer) {
                if ((killers.length == 0 || killers.includes(killer) && value > maxValue)) {
                    maxValue = value;
                }
            });
            this.magicalKillers.forEach(function (value, killer) {
                if ((killers.length == 0 || killers.includes(killer) && value > maxValue)) {
                    maxValue = value;
                }
            });
            calculatedValue = maxValue;
        }
        else if (stat == 'resist') {
            var maxValue = -999;
            var ignoreAilments = elements.length > 0 && ailments.length == 0;
            var ignoreElements = ailments.length > 0 && elements.length == 0;
            if (!ignoreAilments) {
                this.ailmentResists.forEach(function (value, ailment) {
                    if (ailments.length == 0 || ailments.includes(ailment) && value > maxValue) {
                        maxValue = value;
                    }
                });
            }
            if (!ignoreElements) {
                this.elementalResists.forEach(function (value, element) {
                    if (elements.length == 0 || elements.includes(element) && value > maxValue) {
                        maxValue = value;
                    }
                });
            }
            calculatedValue = maxValue;
            if (calculatedValue == -999) {
                calculatedValue = 0;
            }
        }
        this.calculatedValue = calculatedValue;
        return calculatedValue;
    };
    ;
    BaseItem.prototype.prepareSearch = function (units) {
        var _this = this;
        var fullSearchText = this.name;
        var nameAndTmrunitSearchText = this.name;
        if (this.jpname) {
            fullSearchText += "|" + this.jpname;
            nameAndTmrunitSearchText += "|" + this.jpname;
        }
        if (this.physicalEvade) {
            fullSearchText += "|+" + this.physicalEvade + "% physical evasion";
        }
        if (this.magicalEvade) {
            fullSearchText += "|+" + this.magicalEvade + "% magical evasion";
        }
        this.ailmentResists.forEach(function (value, ailment) { return fullSearchText += "|" + ailment; });
        this.elementalResists.forEach(function (value, element) { return fullSearchText += "|" + element; });
        this.elements.forEach(function (element) { return fullSearchText += "|" + element; });
        this.ailments.forEach(function (value, ailment) { return fullSearchText += "|" + ailment; });
        if (this.exclusiveUnits.length > 0) {
            fullSearchText += "|Only ";
            this.exclusiveUnits.forEach(function (unitId) {
                if (units[unitId]) {
                    fullSearchText += units[unitId].name + ", ";
                }
            });
        }
        if (this.exclusiveSex) {
            fullSearchText += "|Only " + this.exclusiveSex;
        }
        if (this.mpRefresh) {
            fullSearchText += "|Recover MP (\" " + this.mpRefresh + "%) per turn";
        }
        if (this.special.length > 0) {
            for (var i = 0, len = this.special.length; i < len; i++) {
                fullSearchText += "|" + this.special[i];
            }
        }
        if (this.singleWielding) {
            SingleWielding.STATS.forEach(function (stat) {
                if (_this.singleWielding[stat]) {
                    if (stat == "accuracy") {
                        fullSearchText += "|+" + _this.singleWielding.accuracy + "% accuracy when single wielding";
                    }
                    else {
                        fullSearchText += "|+" + _this.singleWielding[stat] + "% equipment " + stat.toUpperCase() + " when single wielding";
                    }
                }
            });
        }
        if (this.singleWieldingOneHanded) {
            SingleWielding.STATS.forEach(function (stat) {
                if (_this.singleWieldingOneHanded[stat]) {
                    if (stat == "accuracy") {
                        fullSearchText += "|+" + _this.singleWieldingOneHanded.accuracy + "% accuracy when single wielding a one-handed weapon";
                    }
                    else {
                        fullSearchText += "|+" + _this.singleWieldingOneHanded[stat] + "% equipment " + stat.toUpperCase() + " when single wielding a one-handed weapon";
                    }
                }
            });
        }
        if (this.dualWielding) {
            _constants__WEBPACK_IMPORTED_MODULE_0__["constants"].BASE_STATS.forEach(function (stat) {
                if (_this.dualWielding[stat]) {
                    fullSearchText += "|+" + _this.dualWielding[stat] + "% equipment " + stat.toUpperCase() + " when dual wielding";
                }
            });
        }
        this.physicalKillers.forEach(function (value, killer) {
            fullSearchText += "|physical killer " + killer;
        });
        this.magicalKillers.forEach(function (value, killer) {
            fullSearchText += "|physical killer " + killer;
        });
        if (this.accuracy) {
            fullSearchText += "|+" + this.accuracy + "% accuracy";
        }
        if (this.jumpDamage) {
            fullSearchText += "|+" + this.jumpDamage + "% jump damage";
        }
        if (this.lbDamage) {
            fullSearchText += "|+" + this.lbDamage + "% LB damage";
        }
        if (this.lbFillRate) {
            fullSearchText += "|+" + this.lbFillRate + "% LB fill rate";
        }
        if (this.lbPerTurn) {
            fullSearchText += "+" + this.lbPerTurn.min + "-" + this.lbPerTurn.max + " LB gauge per turn";
        }
        if (this.evoMag) {
            fullSearchText += "|+" + this.evoMag + "% Esper summon damage";
        }
        if (this.esperStatsBonus) {
            fullSearchText += "|+" + this.esperStatsBonus.hp + "% stats from espers";
        }
        if (this.tmrUnit && units[this.tmrUnit]) {
            fullSearchText += "|" + units[this.tmrUnit].name;
            nameAndTmrunitSearchText += "|" + units[this.tmrUnit].name;
        }
        if (this.stmrUnit && units[this.stmrUnit]) {
            fullSearchText += "|" + units[this.stmrUnit].name;
            nameAndTmrunitSearchText += "|" + units[this.stmrUnit].name;
        }
        for (var index in this.access) {
            fullSearchText += "|" + this.access[index];
        }
        if (this.partialDualWield) {
            fullSearchText += "|partial dual wield";
            for (var i = 0, len = this.partialDualWield.length; i < len; i++) {
                fullSearchText += " " + this.partialDualWield[i];
            }
        }
        this.fullSearchText = fullSearchText;
        this.nameAndTmrunitSearchText = nameAndTmrunitSearchText;
    };
    BaseItem.prototype.isNotReleasedYet = function () {
        return this.access.includes("not released yet");
    };
    return BaseItem;
}());



/***/ }),

/***/ "./src/app/model/constants.ts":
/*!************************************!*\
  !*** ./src/app/model/constants.ts ***!
  \************************************/
/*! exports provided: constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constants", function() { return constants; });
var constants = {
    BASE_STATS: ["hp", "mp", "atk", "def", "mag", "spr"],
    EQUIPMENT_TYPE_LIST: ["dagger", "sword", "greatSword", "katana", "staff", "rod", "bow", "axe", "hammer", "spear", "harp", "whip", "throwing", "gun", "mace", "fist", "lightShield", "heavyShield", "hat", "helm", "clothes", "lightArmor", "heavyArmor", "robe", "accessory", "materia"],
    WEAPON_TYPES: ["dagger", "sword", "greatSword", "katana", "staff", "rod", "bow", "axe", "hammer", "spear", "harp", "whip", "throwing", "gun", "mace", "fist"],
    ELEMENT_LIST: ['fire', 'ice', 'lightning', 'water', 'earth', 'wind', 'light', 'dark'],
    AILMENT_LIST: ['poison', 'blind', 'sleep', 'silence', 'paralysis', 'confuse', 'disease', 'petrification', 'death'],
    RACE_LIST: ['aquatic', 'beast', 'bird', 'bug', 'demon', 'dragon', 'human', 'machine', 'plant', 'undead', 'stone', 'spirit'],
};


/***/ }),

/***/ "./src/app/model/enhanced-item.ts":
/*!****************************************!*\
  !*** ./src/app/model/enhanced-item.ts ***!
  \****************************************/
/*! exports provided: EnhancedBaseValue, EnhancedItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnhancedBaseValue", function() { return EnhancedBaseValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnhancedItem", function() { return EnhancedItem; });
/* harmony import */ var _base_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-item */ "./src/app/model/base-item.ts");
/* harmony import */ var _item_world_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item-world-constants */ "./src/app/model/item-world-constants.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/app/model/constants.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var EnhancedBaseValue = /** @class */ (function (_super) {
    __extends(EnhancedBaseValue, _super);
    function EnhancedBaseValue(flat, percent) {
        var _this = _super.call(this, flat, percent) || this;
        _this.enhancement = 0;
        return _this;
    }
    Object.defineProperty(EnhancedBaseValue.prototype, "percent", {
        get: function () {
            return this._percent + this.enhancement;
        },
        enumerable: true,
        configurable: true
    });
    return EnhancedBaseValue;
}(_base_item__WEBPACK_IMPORTED_MODULE_0__["BaseValue"]));

var EnhancedItem = /** @class */ (function () {
    function EnhancedItem(item, enhancements) {
        var _this = this;
        this.enhancements = [];
        this.enhancedFillRate = 0;
        this.baseItem = item;
        this.enhanced_hp = new EnhancedBaseValue(item.hp.flat, item.hp.percent);
        this.enhanced_mp = new EnhancedBaseValue(item.mp.flat, item.mp.percent);
        this.enhanced_atk = new EnhancedBaseValue(item.atk.flat, item.atk.percent);
        this.enhanced_def = new EnhancedBaseValue(item.def.flat, item.def.percent);
        this.enhanced_mag = new EnhancedBaseValue(item.mag.flat, item.mag.percent);
        this.enhanced_spr = new EnhancedBaseValue(item.spr.flat, item.spr.percent);
        enhancements.forEach(function (e) { return _this.toggleEnhancement(e); });
    }
    EnhancedItem.prototype.toggleEnhancement = function (enhancement) {
        var _this = this;
        if (this.enhancements.includes(enhancement)) {
            this.enhancements.splice(this.enhancements.indexOf(enhancement), 1);
            var ability_1;
            if (enhancement.startsWith("rare")) {
                ability_1 = _item_world_constants__WEBPACK_IMPORTED_MODULE_1__["itemWorldConstants"].ITEM_ENHANCEMENT_ABILITIES[enhancement][this.baseItem.type];
            }
            else {
                ability_1 = _item_world_constants__WEBPACK_IMPORTED_MODULE_1__["itemWorldConstants"].ITEM_ENHANCEMENT_ABILITIES[enhancement];
            }
            if (ability_1.lbFillRate) {
                this.enhancedFillRate -= ability_1.lbFillRate;
            }
            _constants__WEBPACK_IMPORTED_MODULE_2__["constants"].BASE_STATS.forEach(function (stat) {
                if (ability_1[stat + '%']) {
                    _this['enhanced_' + stat].enhancement -= ability_1[stat + '%'];
                }
            });
            return true;
        }
        else if (this.enhancements.length < 3) {
            if (!enhancement.startsWith("rare") || !this.enhancements.some(function (e) { return e.startsWith("rare"); })) {
                this.enhancements.push(enhancement);
                var ability_2;
                if (enhancement.startsWith("rare")) {
                    ability_2 = _item_world_constants__WEBPACK_IMPORTED_MODULE_1__["itemWorldConstants"].ITEM_ENHANCEMENT_ABILITIES[enhancement][this.baseItem.type];
                }
                else {
                    ability_2 = _item_world_constants__WEBPACK_IMPORTED_MODULE_1__["itemWorldConstants"].ITEM_ENHANCEMENT_ABILITIES[enhancement];
                }
                if (ability_2.lbFillRate) {
                    this.enhancedFillRate += ability_2.lbFillRate;
                }
                _constants__WEBPACK_IMPORTED_MODULE_2__["constants"].BASE_STATS.forEach(function (stat) {
                    if (ability_2[stat + '%']) {
                        _this['enhanced_' + stat].enhancement += ability_2[stat + '%'];
                    }
                });
                return true;
            }
        }
        return false;
    };
    Object.defineProperty(EnhancedItem.prototype, "id", {
        get: function () { return this.baseItem.id; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnhancedItem.prototype, "name", {
        get: function () { return this.baseItem.name; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnhancedItem.prototype, "jpname", {
        get: function () { return this.baseItem.jpname; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnhancedItem.prototype, "wikientry", {
        get: function () { return this.baseItem.wikientry; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnhancedItem.prototype, "type", {
        get: function () { return this.baseItem.type; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnhancedItem.prototype, "hp", {
        get: function () { return this.enhanced_hp; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnhancedItem.prototype, "mp", {
        get: function () { return this.enhanced_mp; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnhancedItem.prototype, "atk", {
        get: function () { return this.enhanced_atk; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnhancedItem.prototype, "def", {
        get: function () { return this.enhanced_def; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnhancedItem.prototype, "mag", {
        get: function () { return this.enhanced_mag; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnhancedItem.prototype, "spr", {
        get: function () { return this.enhanced_spr; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnhancedItem.prototype, "evoMag", {
        get: function () { return this.baseItem.evoMag; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnhancedItem.prototype, "physicalEvade", {
        get: function () { return this.baseItem.physicalEvade; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnhancedItem.prototype, "magicalEvade", {
        get: function () { return this.baseItem.magicalEvade; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnhancedItem.prototype, "singleWieldingOneHanded", {
        get: function () { return this.baseItem.singleWieldingOneHanded; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnhancedItem.prototype, "singleWielding", {
        get: function () { return this.baseItem.singleWielding; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnhancedItem.prototype, "dualWielding", {
        get: function () { return this.baseItem.dualWielding; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnhancedItem.prototype, "accuracy", {
        get: function () { return this.baseItem.accuracy; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnhancedItem.prototype, "damageVariance", {
        get: function () { return this.baseItem.damageVariance; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnhancedItem.prototype, "jumpDamage", {
        get: function () { return this.baseItem.jumpDamage; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnhancedItem.prototype, "lbFillRate", {
        get: function () { return this.baseItem.lbFillRate + this.enhancedFillRate; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnhancedItem.prototype, "lbPerTurn", {
        get: function () { return this.baseItem.lbPerTurn; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnhancedItem.prototype, "elements", {
        get: function () { return this.baseItem.elements; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnhancedItem.prototype, "partialDualWield", {
        get: function () { return this.baseItem.partialDualWield; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnhancedItem.prototype, "elementalResists", {
        get: function () { return this.baseItem.elementalResists; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnhancedItem.prototype, "ailmentResists", {
        get: function () { return this.baseItem.ailmentResists; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnhancedItem.prototype, "ailments", {
        get: function () { return this.baseItem.ailments; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnhancedItem.prototype, "physicalKillers", {
        get: function () { return this.baseItem.physicalKillers; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnhancedItem.prototype, "magicalKillers", {
        get: function () { return this.baseItem.magicalKillers; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnhancedItem.prototype, "mpRefresh", {
        get: function () { return this.baseItem.mpRefresh; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnhancedItem.prototype, "esperStatsBonus", {
        get: function () { return this.baseItem.esperStatsBonus; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnhancedItem.prototype, "lbDamage", {
        get: function () { return this.baseItem.lbDamage; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnhancedItem.prototype, "skillEnhancement", {
        get: function () { return this.baseItem.skillEnhancement; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnhancedItem.prototype, "special", {
        get: function () { return this.baseItem.special; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnhancedItem.prototype, "allowUseOf", {
        get: function () { return this.baseItem.allowUseOf; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnhancedItem.prototype, "exclusiveSex", {
        get: function () { return this.baseItem.exclusiveSex; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnhancedItem.prototype, "exclusiveUnits", {
        get: function () { return this.baseItem.exclusiveUnits; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnhancedItem.prototype, "equipedConditions", {
        get: function () { return this.baseItem.equipedConditions; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnhancedItem.prototype, "tmrUnit", {
        get: function () { return this.baseItem.tmrUnit; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnhancedItem.prototype, "stmrUnit", {
        get: function () { return this.baseItem.stmrUnit; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnhancedItem.prototype, "maxNumber", {
        get: function () { return this.baseItem.maxNumber; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnhancedItem.prototype, "eventName", {
        get: function () { return this.baseItem.eventName; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnhancedItem.prototype, "notStackableSkills", {
        get: function () { return this.baseItem.notStackableSkills; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnhancedItem.prototype, "access", {
        get: function () { return this.baseItem.access; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnhancedItem.prototype, "icon", {
        get: function () { return this.baseItem.icon; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnhancedItem.prototype, "sortId", {
        get: function () { return this.baseItem.sortId; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnhancedItem.prototype, "rarity", {
        get: function () { return this.baseItem.rarity; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnhancedItem.prototype, "dualWield", {
        get: function () { return this.baseItem.dualWield; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnhancedItem.prototype, "notStackable", {
        get: function () { return this.baseItem.notStackable; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnhancedItem.prototype, "twoHanded", {
        get: function () { return this.baseItem.twoHanded; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnhancedItem.prototype, "fullSearchText", {
        get: function () { return this.baseItem.fullSearchText; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnhancedItem.prototype, "nameAndTmrunitSearchText", {
        get: function () { return this.baseItem.nameAndTmrunitSearchText; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnhancedItem.prototype, "calculatedValue", {
        get: function () { return this.baseItem.calculatedValue; },
        enumerable: true,
        configurable: true
    });
    EnhancedItem.prototype.calculateSortValue = function () { return this.baseItem.calculatedValue; };
    EnhancedItem.prototype.isWeapon = function () { return this.baseItem.isWeapon(); };
    EnhancedItem.prototype.isNotReleasedYet = function () { return this.baseItem.isNotReleasedYet(); };
    return EnhancedItem;
}());



/***/ }),

/***/ "./src/app/model/item-release-day.ts":
/*!*******************************************!*\
  !*** ./src/app/model/item-release-day.ts ***!
  \*******************************************/
/*! exports provided: ItemReleaseDay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemReleaseDay", function() { return ItemReleaseDay; });
var ItemReleaseDay = /** @class */ (function () {
    function ItemReleaseDay(name, events) {
        this.name = name;
        this.events = events;
    }
    return ItemReleaseDay;
}());



/***/ }),

/***/ "./src/app/model/item-release-event.ts":
/*!*********************************************!*\
  !*** ./src/app/model/item-release-event.ts ***!
  \*********************************************/
/*! exports provided: ItemReleaseEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemReleaseEvent", function() { return ItemReleaseEvent; });
var ItemReleaseEvent = /** @class */ (function () {
    function ItemReleaseEvent(name, items) {
        this.name = name;
        this.items = items;
    }
    return ItemReleaseEvent;
}());



/***/ }),

/***/ "./src/app/model/item-world-constants.ts":
/*!***********************************************!*\
  !*** ./src/app/model/item-world-constants.ts ***!
  \***********************************************/
/*! exports provided: itemWorldConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemWorldConstants", function() { return itemWorldConstants; });
var itemWorldConstants = {
    ITEM_ENHANCEMENT_TYPES: {
        rare: ['rare_3', 'rare_4'],
        hp: ['hp_15', 'hp_12', 'hp_10', 'hp_7', 'hp_5', 'hp_3', 'hp_1'],
        mp: ['mp_15', 'mp_12', 'mp_10', 'mp_7', 'mp_5', 'mp_3', 'mp_1'],
        atk: ['atk_15', 'atk_12', 'atk_10', 'atk_7', 'atk_5', 'atk_3', 'atk_1'],
        def: ['def_15', 'def_12', 'def_10', 'def_7', 'def_5', 'def_3', 'def_1'],
        mag: ['mag_15', 'mag_12', 'mag_10', 'mag_7', 'mag_5', 'mag_3', 'mag_1'],
        spr: ['spr_15', 'spr_12', 'spr_10', 'spr_7', 'spr_5', 'spr_3', 'spr_1'],
        autoRegen: ["autoRegen_4", "autoRegen_3", "autoRegen_2", "autoRegen_1"],
        autoRefresh: ["autoRefresh_2", "autoRefresh_1"],
        autoProtect: ["autoProtect_5", "autoProtect_4", "autoProtect_3", "autoProtect_2", "autoProtect_1"],
        autoShell: ["autoShell_5", "autoShell_4", "autoShell_3", "autoShell_2", "autoShell_1"],
    },
    ITEM_ENHANCEMENT_LABELS: {
        "rare_3": {
            "dagger": "+100% LB fill rate",
            "sword": "HP/ATK + 15%",
            "greatSword": "HP/ATK + 15%",
            "katana": "HP/ATK + 15%",
            "staff": "SPR/MP + 15%",
            "rod": "MAG/MP +15%",
            "bow": "ATK/MAG +30%",
            "axe": "ATK +30%",
            "hammer": "HP/DEF +15%",
            "spear": "HP/ATK +15%",
            "harp": "HP/SPR +15%",
            "whip": "MP +30%",
            "throwing": "HP/MP +15%",
            "gun": "ATK +30%",
            "mace": "HP +30%",
            "fist": "HP/ATK +15%"
        },
        "rare_4": {
            "dagger": "+150% LB fill rate",
            "sword": "HP/ATK + 20%",
            "greatSword": "HP/ATK + 20%",
            "katana": "HP/ATK + 20%",
            "staff": "SPR/MP + 20%",
            "rod": "MAG/MP +20%",
            "bow": "ATK/MAG +35%",
            "axe": "ATK +40%",
            "hammer": "HP/DEF +20%",
            "spear": "HP/ATK +20%",
            "harp": "HP/SPR +20%",
            "whip": "MP +40%",
            "throwing": "HP/MP +20%",
            "gun": "ATK +40%",
            "mace": "HP +40%",
            "fist": "HP/ATK +20%",
        },
        "hp_15": "HP +15%", "hp_12": "HP +12%", "hp_10": "HP +10%", "hp_7": "HP +7%", "hp_5": "HP +5%", "hp_3": "HP +3%", "hp_1": "HP +1%",
        "mp_15": "MP +15%", "mp_12": "MP +12%", "mp_10": "MP +10%", "mp_7": "MP +7%", "mp_5": "MP +5%", "mp_3": "MP +3%", "mp_1": "MP +1%",
        "atk_15": "ATK +15%", "atk_12": "ATK +12%", "atk_10": "ATK +10%", "atk_7": "ATK +7%", "atk_5": "ATK +5%", "atk_3": "ATK +3%", "atk_1": "ATK +1%",
        "def_15": "DEF +15%", "def_12": "DEF +12%", "def_10": "DEF +10%", "def_7": "DEF +7%", "def_5": "DEF +5%", "def_3": "DEF +3%", "def_1": "DEF +1%",
        "mag_15": "MAG +15%", "mag_12": "MAG +12%", "mag_10": "MAG +10%", "mag_7": "MAG +7%", "mag_5": "MAG +5%", "mag_3": "MAG +3%", "mag_1": "MAG +1%",
        "spr_15": "SPR +15%", "spr_12": "SPR +12%", "spr_10": "SPR +10%", "spr_7": "SPR +7%", "spr_5": "SPR +5%", "spr_3": "SPR +3%", "spr_1": "SPR +1%",
        "autoRegen_4": "Auto-Regen 4", "autoRegen_3": "Auto-Regen 3", "autoRegen_2": "Auto-Regen 2", "autoRegen_1": "Auto-Regen 1",
        "autoRefresh_2": "Auto-Refresh 2", "autoRefresh_1": "Auto-Refresh 1",
        "autoProtect_5": "Auto-Protect 5", "autoProtect_4": "Auto-Protect 4", "autoProtect_3": "Auto-Protect 3", "autoProtect_2": "Auto-Protect 2", "autoProtect_1": "Auto-Protect 1",
        "autoShell_5": "Auto-Shell 5", "autoShell_4": "Auto-Shell 4", "autoShell_3": "Auto-Shell 3", "autoShell_2": "Auto-Shell 2", "autoShell_1": "Auto-Shell 1",
    },
    ITEM_ENHANCEMENT_ABILITIES: {
        "rare_3": {
            "dagger": { "lbFillRate": 100 },
            "sword": { "hp%": 15, "atk%": 15 },
            "greatSword": { "hp%": 15, "atk%": 15 },
            "katana": { "hp%": 15, "atk%": 15 },
            "staff": { "mp%": 15, "spr%": 15 },
            "rod": { "mp%": 15, "mag%": 15 },
            "bow": { "atk%": 30, "mag%": 30 },
            "axe": { "atk%": 30 },
            "hammer": { "hp%": 15, "def%": 15 },
            "spear": { "hp%": 15, "atk%": 15 },
            "harp": { "hp%": 15, "spr%": 15 },
            "whip": { "mp%": 30 },
            "throwing": { "hp%": 15, "mp%": 15 },
            "gun": { "atk%": 30 },
            "mace": { "hp%": 30 },
            "fist": { "hp%": 15, "atk%": 15 },
        },
        "rare_4": {
            "dagger": { "lbFillRate": 150 },
            "sword": { "hp%": 20, "atk%": 20 },
            "greatSword": { "hp%": 20, "atk%": 20 },
            "katana": { "hp%": 20, "atk%": 20 },
            "staff": { "mp%": 20, "spr%": 20 },
            "rod": { "mp%": 20, "mag%": 20 },
            "bow": { "atk%": 35, "mag%": 35 },
            "axe": { "atk%": 40 },
            "hammer": { "hp%": 20, "def%": 20 },
            "spear": { "hp%": 20, "atk%": 20 },
            "harp": { "hp%": 20, "spr%": 20 },
            "whip": { "mp%": 40 },
            "throwing": { "hp%": 20, "mp%": 20 },
            "gun": { "atk%": 40 },
            "mace": { "hp%": 40 },
            "fist": { "hp%": 20, "atk%": 20 },
        },
        "hp_15": { "hp%": 15 }, "hp_12": { "hp%": 12 }, "hp_10": { "hp%": 10 }, "hp_7": { "hp%": 7 }, "hp_5": { "hp%": 5 }, "hp_3": { "hp%": 3 }, "hp_1": { "hp%": 1 },
        "mp_15": { "mp%": 15 }, "mp_12": { "mp%": 12 }, "mp_10": { "mp%": 10 }, "mp_7": { "mp%": 7 }, "mp_5": { "mp%": 5 }, "mp_3": { "mp%": 3 }, "mp_1": { "mp%": 1 },
        "atk_15": { "atk%": 15 }, "atk_12": { "atk%": 12 }, "atk_10": { "atk%": 10 }, "atk_7": { "atk%": 7 }, "atk_5": { "atk%": 5 }, "atk_3": { "atk%": 3 }, "atk_1": { "atk%": 1 },
        "def_15": { "def%": 15 }, "def_12": { "def%": 12 }, "def_10": { "def%": 10 }, "def_7": { "def%": 7 }, "def_5": { "def%": 5 }, "def_3": { "def%": 3 }, "def_1": { "def%": 1 },
        "mag_15": { "mag%": 15 }, "mag_12": { "mag%": 12 }, "mag_10": { "mag%": 10 }, "mag_7": { "mag%": 7 }, "mag_5": { "mag%": 5 }, "mag_3": { "mag%": 3 }, "mag_1": { "mag%": 1 },
        "spr_15": { "spr%": 15 }, "spr_12": { "spr%": 12 }, "spr_10": { "spr%": 10 }, "spr_7": { "spr%": 7 }, "spr_5": { "spr%": 5 }, "spr_3": { "spr%": 3 }, "spr_1": { "spr%": 1 },
        "autoRefresh_2": { "mpRefresh": 5 }, "autoRefresh_1": { "mpRefresh": 3 }
    }
};


/***/ }),

/***/ "./src/app/pages/builder/builder.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/builder/builder.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/builder/builder.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/builder/builder.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  builder works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/pages/builder/builder.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/builder/builder.component.ts ***!
  \****************************************************/
/*! exports provided: BuilderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuilderComponent", function() { return BuilderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_context_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/context.service */ "./src/app/services/context.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BuilderComponent = /** @class */ (function () {
    function BuilderComponent(contextService) {
        this.contextService = contextService;
    }
    BuilderComponent.prototype.ngOnInit = function () {
        this.contextService.setCurrentPage(_services_context_service__WEBPACK_IMPORTED_MODULE_1__["Pages"].BUILDER);
    };
    BuilderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-builder',
            template: __webpack_require__(/*! ./builder.component.html */ "./src/app/pages/builder/builder.component.html"),
            styles: [__webpack_require__(/*! ./builder.component.css */ "./src/app/pages/builder/builder.component.css")]
        }),
        __metadata("design:paramtypes", [_services_context_service__WEBPACK_IMPORTED_MODULE_1__["ContextService"]])
    ], BuilderComponent);
    return BuilderComponent;
}());



/***/ }),

/***/ "./src/app/pages/encyclopedia/encyclopedia-search-filter.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/encyclopedia/encyclopedia-search-filter.ts ***!
  \******************************************************************/
/*! exports provided: EncyclopediaSearchFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncyclopediaSearchFilter", function() { return EncyclopediaSearchFilter; });
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _model_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/constants */ "./src/app/model/constants.ts");



var EncyclopediaSearchFilter = /** @class */ (function () {
    function EncyclopediaSearchFilter() {
        this.allChanges = new rxjs_index__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this._searchText = "";
        this._sort = "";
        this._equipmentTypes = [];
        this._elements = [];
        this._ailments = [];
        this._physicalKillers = [];
        this._magicalKillers = [];
        this._accessToRemove = [];
        this._additionalStats = [];
        this._excludeNotReleasedYet = true;
        this._onlyShowOwnedItems = false;
        this.onChange = this.allChanges.pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(300));
    }
    Object.defineProperty(EncyclopediaSearchFilter.prototype, "searchText", {
        get: function () {
            return this._searchText;
        },
        set: function (text) {
            this._searchText = text;
            this.allChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EncyclopediaSearchFilter.prototype, "equipmentTypes", {
        get: function () {
            return this._equipmentTypes;
        },
        set: function (value) {
            this._equipmentTypes = value;
            this.allChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EncyclopediaSearchFilter.prototype, "sort", {
        get: function () {
            return this._sort;
        },
        set: function (value) {
            this._sort = value;
            this.allChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EncyclopediaSearchFilter.prototype, "elements", {
        get: function () {
            return this._elements;
        },
        set: function (value) {
            this._elements = value;
            this.allChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EncyclopediaSearchFilter.prototype, "ailments", {
        get: function () {
            return this._ailments;
        },
        set: function (value) {
            this._ailments = value;
            this.allChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EncyclopediaSearchFilter.prototype, "physicalKillers", {
        get: function () {
            return this._physicalKillers;
        },
        set: function (value) {
            this._physicalKillers = value;
            this.allChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EncyclopediaSearchFilter.prototype, "magicalKillers", {
        get: function () {
            return this._magicalKillers;
        },
        set: function (value) {
            this._magicalKillers = value;
            this.allChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EncyclopediaSearchFilter.prototype, "accessToRemove", {
        get: function () {
            return this._accessToRemove;
        },
        set: function (value) {
            this._accessToRemove = value;
            this.allChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EncyclopediaSearchFilter.prototype, "additionalStats", {
        get: function () {
            return this._additionalStats;
        },
        set: function (value) {
            this._additionalStats = value;
            this.allChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EncyclopediaSearchFilter.prototype, "excludeNotReleasedYet", {
        get: function () {
            return this._excludeNotReleasedYet;
        },
        set: function (value) {
            this._excludeNotReleasedYet = value;
            this.allChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EncyclopediaSearchFilter.prototype, "onlyShowOwnedItems", {
        get: function () {
            return this._onlyShowOwnedItems;
        },
        set: function (value) {
            this._onlyShowOwnedItems = value;
            this.allChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    EncyclopediaSearchFilter.prototype.isEmpty = function () {
        return this._searchText == ""
            && this._sort == ""
            && this._equipmentTypes.length == 0
            && this._elements.length == 0
            && this._ailments.length == 0
            && this._physicalKillers.length == 0
            && this._magicalKillers.length == 0
            && this._accessToRemove.length == 0;
    };
    EncyclopediaSearchFilter.prototype.isSelected = function (item, ownedItems) {
        if (!this._onlyShowOwnedItems || ownedItems && ownedItems[item.id]) {
            if (!this._excludeNotReleasedYet || !item.isNotReleasedYet()) {
                if (this._elements.length == 0 || (this._elements.some(function (e) { return item.elements.includes(e); })) || (this._elements.includes("noElement") && item.elements.length == 0) || (this.matches(item.elementalResists, this._elements))) {
                    if (this._ailments.length == 0 || this.matches(item.ailments, this._ailments) || this.matches(item.ailmentResists, this._ailments)) {
                        if (this._equipmentTypes.length == 0 || this._equipmentTypes.includes(item.type)) {
                            if (this._physicalKillers.length == 0 || this._physicalKillers.some(function (killer) { return item.physicalKillers.get(killer) > 0; })) {
                                if (this._magicalKillers.length == 0 || this._magicalKillers.some(function (killer) { return item.magicalKillers.get(killer) > 0; })) {
                                    if (this._accessToRemove.length == 0 || this.haveAuthorizedAccess(this._accessToRemove, item)) {
                                        if (this._additionalStats.length == 0 || this._additionalStats.some(function (stat) { return item[stat].flat + item[stat].percent > 0; })) {
                                            if (this._sort == "" || this.hasSortedStat(item)) {
                                                if (this._searchText == "" || this.containsText(this._searchText, item)) {
                                                    return true;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return false;
    };
    EncyclopediaSearchFilter.prototype.matches = function (map, values) {
        var it = map.keys();
        var v = it.next();
        while (!v.done) {
            if (values.includes(v.value)) {
                return true;
            }
            v = it.next();
        }
        return false;
    };
    EncyclopediaSearchFilter.prototype.hasSortedStat = function (item) {
        if (_model_constants__WEBPACK_IMPORTED_MODULE_2__["constants"].BASE_STATS.includes(this._sort)) {
            return item[this._sort].flat + item[this._sort].percent > 0;
        }
        else if (this._sort == "inflict") {
            return item.elements.length > 0 || item.ailments.size > 0 || item.physicalKillers.size > 0 || item.magicalKillers.size > 0;
        }
        else if (this._sort == "evade") {
            return item.physicalEvade + item.magicalEvade > 0;
        }
        else if (this._sort == "resist") {
            return item.elementalResists.size > 0 || item.ailmentResists.size > 0;
        }
        return false;
    };
    ;
    EncyclopediaSearchFilter.prototype.containsText = function (text, item) {
        var result = true;
        var self = this;
        text.split(" ").forEach(function (token) {
            result = result && item.fullSearchText.match(new RegExp(self.escapeRegExp(token), 'i'));
        });
        return result;
    };
    EncyclopediaSearchFilter.prototype.escapeRegExp = function (str) {
        return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    };
    EncyclopediaSearchFilter.prototype.haveAuthorizedAccess = function (forbiddenAccessList, item) {
        var _this = this;
        var hasAccess = false;
        if (forbiddenAccessList.includes("unitExclusive") && item.exclusiveUnits) {
            return false;
        }
        item.access.forEach(function (access) {
            hasAccess = hasAccess || _this.isAccessAllowed(forbiddenAccessList, access);
        });
        return hasAccess;
    };
    ;
    // Return true if one access is not forbidden by filters
    EncyclopediaSearchFilter.prototype.isAccessAllowed = function (forbiddenAccessList, access) {
        var accessAllowed = true;
        forbiddenAccessList.forEach(function (accessToSplit) {
            accessToSplit.split('/').forEach(function (forbiddenAccess) {
                if (access.startsWith(forbiddenAccess) || access.endsWith(forbiddenAccess)) {
                    accessAllowed = false;
                }
            });
        });
        return accessAllowed;
    };
    EncyclopediaSearchFilter.prototype.toHashString = function () {
        var _this = this;
        var state = {};
        ['searchText', 'sort'].forEach(function (stat) {
            if (_this[stat] != "") {
                state[stat] = _this[stat];
            }
        });
        ['equipmentTypes', 'elements', 'ailments', 'physicalKillers', 'magicalKillers', 'accessToRemove', 'additionalStats'].forEach(function (stat) {
            if (_this[stat].length > 0) {
                state[stat] = _this[stat];
            }
        });
        return window.btoa(encodeURIComponent(JSON.stringify(state)));
    };
    EncyclopediaSearchFilter.prototype.fromHashString = function (hash) {
        var _this = this;
        try {
            var state_1 = JSON.parse(decodeURIComponent(window.atob(hash)));
            ['searchText', 'sort', 'equipmentTypes', 'elements', 'ailments', 'physicalKillers', 'magicalKillers', 'accessToRemove', 'additionalStats'].forEach(function (stat) {
                if (state_1[stat]) {
                    _this['_' + stat] = state_1[stat];
                }
            });
            this.allChanges.next();
        }
        catch (e) {
        }
    };
    return EncyclopediaSearchFilter;
}());



/***/ }),

/***/ "./src/app/pages/encyclopedia/encyclopedia.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/encyclopedia/encyclopedia.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section span {\r\n  margin-top: 10px;\r\n  border: 1px solid #ced4da;\r\n  border-bottom-color: rgb(206, 212, 218);\r\n  border-bottom-style: solid;\r\n  border-bottom-width: 1px;\r\n  display: inline-block;\r\n  clear: both;\r\n  border-bottom: none;\r\n  padding: 3px 5px;\r\n  margin-left: 5px;\r\n  border-top-left-radius: 5px;\r\n  border-top-right-radius: 5px;\r\n  background-color: #e9ecef;\r\n}\r\n\r\n.line {\r\n  display: flex;\r\n  width: 100%;\r\n  border-top: 1px solid #ddd;\r\n}\r\n\r\n.line .calculatedValue {\r\n  font-weight: bold;\r\n  padding-top: 10px;\r\n  padding-right: 5px;\r\n  text-align: right;\r\n  flex-shrink: 0;\r\n}\r\n\r\n.line .ownedNumber {\r\n  width: 40px;\r\n  flex-shrink: 0;\r\n  text-align: center;\r\n  align-items: center;\r\n  padding-top: 10px;\r\n  font-weight: bold;\r\n}\r\n\r\n.line .item {\r\n  flex: 1;\r\n}\r\n\r\nmat-card, .searchText {\r\n  margin-bottom: 10px;\r\n}\r\n\r\nmat-card-title a {\r\n  cursor: pointer;\r\n  font-size: 0.8em;\r\n  margin-left: 10px;\r\n}\r\n\r\n.searchText {\r\n  box-shadow: 0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);\r\n}\r\n\r\n.others mat-checkbox {\r\n  display: block;\r\n}\r\n\r\n.resultTitle {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.baseStatMessage {\r\n  font-size: 0.8em;\r\n}\r\n\r\n.searchField {\r\n  width: 100%;\r\n  margin-bottom: -10px !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pages/encyclopedia/encyclopedia.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/encyclopedia/encyclopedia.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div id=\"filtersContainer\" class=\"col-xs-12 col-md-6\">\r\n      <form #filterForm=\"ngForm\">\r\n        <mat-card>\r\n          <mat-card-content>\r\n            <mat-form-field class=\"searchField\">\r\n              <input type=\"text\" matInput [(ngModel)]=\"searchFilter.searchText\" name=\"searchText\" id=\"searchText\" placeholder=\"Enter search text. Will search in item name, stats, abilities, TMR's unit, ...\">\r\n            </mat-form-field>\r\n          </mat-card-content>\r\n        </mat-card>\r\n        <mat-card>\r\n          <mat-card-title>Desired stat (filter and sort) <a (click)=\"searchFilter.sort = ''\">unselect</a></mat-card-title>\r\n          <mat-card-content><app-filter-selector [values]=\"sortStats\" [cssType]=\"'sort'\" [multipleChoice]=\"false\" [filterData]=\"searchFilter\" [filterName]=\"'sort'\"></app-filter-selector></mat-card-content>\r\n        </mat-card>\r\n        <mat-card>\r\n          <mat-card-title>Equipment type</mat-card-title>\r\n          <mat-card-content><app-filter-selector [values]=\"equipmentTypeList\" [cssType]=\"'equipment'\" [filterData]=\"searchFilter\" [filterName]=\"'equipmentTypes'\"></app-filter-selector></mat-card-content>\r\n        </mat-card>\r\n        <mat-card>\r\n          <mat-card-title>Elements</mat-card-title>\r\n          <mat-card-content><app-filter-selector [values]=\"elementList\" [cssType]=\"'element'\" [filterData]=\"searchFilter\" [filterName]=\"'elements'\"></app-filter-selector></mat-card-content>\r\n        </mat-card>\r\n        <mat-card>\r\n          <mat-card-title>Ailments</mat-card-title>\r\n          <mat-card-content><app-filter-selector [values]=\"ailmentList\" [cssType]=\"'ailment'\" [filterData]=\"searchFilter\" [filterName]=\"'ailments'\"></app-filter-selector></mat-card-content>\r\n        </mat-card>\r\n        <mat-card>\r\n          <mat-card-title>Killers</mat-card-title>\r\n          <mat-card-content>\r\n            <app-filter-selector [values]=\"killerList\" [cssType]=\"'killer-physical'\" [filterData]=\"searchFilter\" [filterName]=\"'physicalKillers'\" [tooltipProvider]=\"physicalKillerTooltipProvider\"></app-filter-selector>\r\n            <app-filter-selector [values]=\"killerList\" [cssType]=\"'killer-magical'\" [filterData]=\"searchFilter\" [filterName]=\"'magicalKillers'\" [tooltipProvider]=\"magicalKillerTooltipProvider\"></app-filter-selector>\r\n          </mat-card-content>\r\n        </mat-card>\r\n        <mat-card>\r\n          <mat-card-title>Access to remove</mat-card-title>\r\n          <mat-card-content><app-filter-selector [valuesWithIcons]=\"accessList\" [cssType]=\"'access'\" [filterData]=\"searchFilter\" [filterName]=\"'accessToRemove'\"></app-filter-selector></mat-card-content>\r\n        </mat-card>\r\n        <mat-card>\r\n          <mat-card-title>Additional stats</mat-card-title>\r\n          <mat-card-content><app-filter-selector [values]=\"stats\" [cssType]=\"'stat'\" [filterData]=\"searchFilter\" [filterName]=\"'additionalStats'\"></app-filter-selector></mat-card-content>\r\n        </mat-card>\r\n        <mat-card class=\"others\">\r\n          <mat-card-title>Other</mat-card-title>\r\n          <mat-card-content>\r\n            <mat-checkbox [(ngModel)]=\"searchFilter.excludeNotReleasedYet\" [ngModelOptions]=\"{standalone: true}\">Exclude not released yet items</mat-checkbox>\r\n            <mat-checkbox *ngIf=\"loggingState == LoggingState.LOGGED_IN\" [(ngModel)]=\"searchFilter.onlyShowOwnedItems\" [ngModelOptions]=\"{standalone: true}\">Only show owned items</mat-checkbox>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </form>\r\n    </div>\r\n    <div id=\"resultsContainer\" class=\"col-xs-12 col-md-6\">\r\n      <mat-card>\r\n        <mat-card-title >\r\n          <div class=\"resultTitle\">\r\n            <span *ngIf=\"!$filteredItems || $filteredItems.length == 0\">Add filter to display results</span>\r\n            <span *ngIf=\"$filteredItems && $filteredItems.length > 0\">Results ({{$searchResult.length}}):</span>\r\n            <span *ngIf=\"stats.includes(searchFilter.sort)\" class=\"baseStatMessage\">(based on a base {{searchFilter.sort | uppercase}} of {{baseStatValue}})</span>\r\n            <mat-paginator *ngIf=\"$searchResult && $searchResult.length > 50\" [length]=\"$searchResult.length\" [pageSize]=\"50\" [pageIndex]=\"currentPage\" (page)=\"changePage($event.pageIndex)\"></mat-paginator>\r\n          </div>\r\n        </mat-card-title>\r\n        <mat-card-content>\r\n          <ng-container *ngFor=\"let item of $filteredItems\">\r\n            <div class=\"line\">\r\n              <div *ngIf=\"searchFilter.sort != ''\" class=\"calculatedValue\">{{item.calculatedValue}}</div>\r\n              <app-item-tile [item]=\"item\" class=\"item\"></app-item-tile>\r\n\r\n              <div *ngIf=\"ownedItems\" class=\"ownedNumber\">\r\n                <app-counter *ngIf=\"ownedItems[item.id]\" [value]=\"ownedItems[item.id]\"></app-counter>\r\n              </div>\r\n            </div>\r\n          </ng-container>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/encyclopedia/encyclopedia.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/encyclopedia/encyclopedia.component.ts ***!
  \**************************************************************/
/*! exports provided: EncyclopediaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncyclopediaComponent", function() { return EncyclopediaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_context_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/context.service */ "./src/app/services/context.service.ts");
/* harmony import */ var _services_static_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/static-data.service */ "./src/app/services/static-data.service.ts");
/* harmony import */ var _services_site_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/site-state.service */ "./src/app/services/site-state.service.ts");
/* harmony import */ var _model_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/constants */ "./src/app/model/constants.ts");
/* harmony import */ var _services_sort_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/sort.service */ "./src/app/services/sort.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _services_user_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/user-data.service */ "./src/app/services/user-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var EncyclopediaComponent = /** @class */ (function () {
    function EncyclopediaComponent(contextService, staticDataService, siteState, sortService, route, loginService, userDateService) {
        var _this = this;
        this.contextService = contextService;
        this.staticDataService = staticDataService;
        this.siteState = siteState;
        this.sortService = sortService;
        this.route = route;
        this.loginService = loginService;
        this.userDateService = userDateService;
        this.LoggingState = _services_login_service__WEBPACK_IMPORTED_MODULE_7__["LoggingState"];
        this.loggingState = _services_login_service__WEBPACK_IMPORTED_MODULE_7__["LoggingState"].LOADING;
        this.$searchResult = [];
        this.currentPage = 0;
        this.sortStats = _model_constants__WEBPACK_IMPORTED_MODULE_4__["constants"].BASE_STATS.concat(["evade", "inflict", "resist"]);
        this.equipmentTypeList = _model_constants__WEBPACK_IMPORTED_MODULE_4__["constants"].EQUIPMENT_TYPE_LIST;
        this.elementList = _model_constants__WEBPACK_IMPORTED_MODULE_4__["constants"].ELEMENT_LIST.concat(["noElement"]);
        this.ailmentList = _model_constants__WEBPACK_IMPORTED_MODULE_4__["constants"].AILMENT_LIST;
        this.killerList = _model_constants__WEBPACK_IMPORTED_MODULE_4__["constants"].RACE_LIST;
        this.stats = _model_constants__WEBPACK_IMPORTED_MODULE_4__["constants"].BASE_STATS;
        this.physicalKillerTooltipProvider = function (killer) {
            return killer.charAt(0).toUpperCase() + killer.slice(1) + " physical killer";
        };
        this.magicalKillerTooltipProvider = function (killer) {
            return killer.charAt(0).toUpperCase() + killer.slice(1) + " magical killer";
        };
        this.accessList = [
            { icon: 'shop', value: 'shop', tooltip: 'items from town shops' },
            { icon: 'story', value: 'chest/quest', tooltip: 'items from story chests and quests' },
            { icon: 'key', value: 'key', tooltip: 'items obtained with vault keys' },
            { icon: 'colosseum', value: 'colosseum', tooltip: 'items obtained in the Colosseum' },
            { icon: 'tmr_1-2stars', value: 'TMR-1*/TMR-2*', tooltip: 'TMR of 1★ or 2★ base units' },
            { icon: 'tmr_3-4stars', value: 'TMR-3*/TMR-4*', tooltip: 'TMR of 3★ or 4★ base units' },
            { icon: 'tmr_5stars', value: 'TMR-5*', tooltip: 'TMR of 5★ base units' },
            { icon: 'stmr', value: 'STMR', tooltip: 'Super TMR of 7★ units' },
            { icon: 'event', value: 'event', tooltip: 'items from event rewards' },
            { icon: 'recipe', value: 'recipe', tooltip: 'items crafted from recipes' },
            { icon: 'trophy', value: 'trophy', tooltip: 'items earned from trophy achievements' },
            { icon: 'chocobo', value: 'chocobo', tooltip: 'items exchanged with fat chocobo or mother chocobo' },
            { icon: 'trial', value: 'trial', tooltip: 'items from trial rewards' },
            { icon: 'unitExclusive', value: 'unitExclusive', tooltip: 'items having an ability exclusive to a specific unit' },
            { icon: 'premium', value: 'premium', tooltip: 'items from premium (paid) bundles' }
        ];
        this.searchFilter = siteState.encyclopediaSearchFilter;
        loginService.getLoggingState().subscribe(function (state) { return _this.loggingState = state; });
        this.userDateService.itemInventory.subscribe(function (ownedItems) {
            if (ownedItems && Object.keys(ownedItems).length > 0) {
                _this.ownedItems = ownedItems;
            }
            else {
                _this.ownedItems = null;
            }
        });
    }
    EncyclopediaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contextService.setCurrentPage(_services_context_service__WEBPACK_IMPORTED_MODULE_1__["Pages"].ENCYCLOPEDIA);
        this.staticDataService.getItems().subscribe(function (items) {
            _this.$items = items;
            _this.searchFilter.onChange.subscribe(function () { return _this.applyFilter(); });
            if (_this.route.snapshot.fragment != "") {
                _this.searchFilter.fromHashString(_this.route.snapshot.fragment);
            }
            _this.applyFilter();
        });
    };
    EncyclopediaComponent.prototype.applyFilter = function () {
        var _this = this;
        if (this.searchFilter.isEmpty()) {
            window.location.hash = "";
            this.$filteredItems = [];
        }
        else {
            window.location.hash = this.searchFilter.toHashString();
            this.baseStatValue = 180;
            if (this.searchFilter.sort == "hp") {
                this.baseStatValue = 4000;
            }
            else if (this.searchFilter.sort == "mp") {
                this.baseStatValue = 300;
            }
            this.currentPage = 0;
            this.$searchResult = this.sortService.sort(this.$items.filter(function (item) { return _this.searchFilter.isSelected(item, _this.ownedItems); }), this.baseStatValue, this.searchFilter.sort, this.searchFilter.ailments, this.searchFilter.elements, []);
            if (this.$searchResult.length > 50) {
                this.$filteredItems = this.$searchResult.slice(this.currentPage * 50, this.currentPage * 50 + 50);
            }
            else {
                this.$filteredItems = this.$searchResult;
            }
        }
    };
    EncyclopediaComponent.prototype.changePage = function (page) {
        this.currentPage = page;
        this.$filteredItems = this.$searchResult.slice(this.currentPage * 50, this.currentPage * 50 + 50);
    };
    EncyclopediaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-encyclopedia',
            template: __webpack_require__(/*! ./encyclopedia.component.html */ "./src/app/pages/encyclopedia/encyclopedia.component.html"),
            styles: [__webpack_require__(/*! ./encyclopedia.component.css */ "./src/app/pages/encyclopedia/encyclopedia.component.css")]
        }),
        __metadata("design:paramtypes", [_services_context_service__WEBPACK_IMPORTED_MODULE_1__["ContextService"], _services_static_data_service__WEBPACK_IMPORTED_MODULE_2__["StaticDataService"], _services_site_state_service__WEBPACK_IMPORTED_MODULE_3__["SiteStateService"], _services_sort_service__WEBPACK_IMPORTED_MODULE_5__["SortService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _services_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"], _services_user_data_service__WEBPACK_IMPORTED_MODULE_8__["UserDataService"]])
    ], EncyclopediaComponent);
    return EncyclopediaComponent;
}());



/***/ }),

/***/ "./src/app/pages/espers/espers.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/espers/espers.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/espers/espers.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/espers/espers.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  espers works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/pages/espers/espers.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/espers/espers.component.ts ***!
  \**************************************************/
/*! exports provided: EspersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EspersComponent", function() { return EspersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_context_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/context.service */ "./src/app/services/context.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EspersComponent = /** @class */ (function () {
    function EspersComponent(contextService) {
        this.contextService = contextService;
    }
    EspersComponent.prototype.ngOnInit = function () {
        this.contextService.setCurrentPage(_services_context_service__WEBPACK_IMPORTED_MODULE_1__["Pages"].ESPERS);
    };
    EspersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-espers',
            template: __webpack_require__(/*! ./espers.component.html */ "./src/app/pages/espers/espers.component.html"),
            styles: [__webpack_require__(/*! ./espers.component.css */ "./src/app/pages/espers/espers.component.css")]
        }),
        __metadata("design:paramtypes", [_services_context_service__WEBPACK_IMPORTED_MODULE_1__["ContextService"]])
    ], EspersComponent);
    return EspersComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/discord-users/discord-users.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/pages/home/discord-users/discord-users.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".category {\r\n  padding-right: 8px;\r\n}\r\n\r\n.fas {\r\n  padding-right: 4px;\r\n}\r\n\r\n.discord-admin {\r\n  color: #ff0000;\r\n}\r\n\r\n.discord-knowledgeable {\r\n  color: #3498db;\r\n}\r\n\r\n.discord-developer {\r\n  color: #2ecc71;\r\n}\r\n\r\n.discord-connected {\r\n  color: #d1d1d1;\r\n}\r\n\r\n.discord-idle {\r\n  color: #6b6b6b;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pages/home/discord-users/discord-users.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/pages/home/discord-users/discord-users.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class='category discord-admin' *ngIf=\"adminNumber\"><span class='fas fa-chess-king '></span>{{adminNumber |i18nPlural: itemPluralMapping['admin']}}</span>\r\n<span class='category discord-knowledgeable' *ngIf=\"knowledgableUsersNumber\"><span class='fas fa-graduation-cap'></span>{{knowledgableUsersNumber |i18nPlural: itemPluralMapping['knowledgable user']}}</span>\r\n<span class='category discord-developer' *ngIf=\"developersNumber\"><span class='fas fa-cogs'></span>{{developersNumber |i18nPlural: itemPluralMapping['developer']}}</span>\r\n<span class='category discord-connected' *ngIf=\"otherMemberNumber\"><span class='fas fa-user'></span>{{otherMemberNumber |i18nPlural: itemPluralMapping['user']}}</span>\r\n<span class='category discord-idle' *ngIf=\"idleNumber\">(and {{idleNumber |i18nPlural: itemPluralMapping['idle']}})</span>\r\n"

/***/ }),

/***/ "./src/app/pages/home/discord-users/discord-users.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/home/discord-users/discord-users.component.ts ***!
  \*********************************************************************/
/*! exports provided: DiscordUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscordUsersComponent", function() { return DiscordUsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Discord widget JSON doesn't give the user's role
// Hence the need to trace it manually...
var DISCORD_USER_ADMIN = ['Lyrgard#1585'];
var DISCORD_USER_KNOWLEDGEABLE = ['Darwe#7148', 'Spuuky#1546', 'tmtl#5880', 'Kujo#6865', 'sic#9510'];
var DISCORD_USER_DEVS = ['Indigo#1164', 'biovenger#4295', 'Xist#5200'];
var DiscordUsersComponent = /** @class */ (function () {
    function DiscordUsersComponent(http) {
        this.http = http;
        this.itemPluralMapping = {
            'admin': {
                '=1': '1 admin',
                'other': '# admins'
            },
            'knowledgable user': {
                '=1': '1 knowledgable user',
                'other': '# knowledgable users'
            },
            'developer': {
                '=1': '1 developer',
                'other': '# developers'
            },
            'user': {
                '=1': '1 user',
                'other': '# users'
            },
            'idle': {
                '=1': '1 idle',
                'other': '# idles'
            },
        };
    }
    DiscordUsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get("https://discordapp.com/api/guilds/389844892853075969/widget.json").subscribe(function (data) {
            var adminsNb = 0, userNb = 0, knowledgeableNb = 0, devNb = 0, idleNb = 0;
            for (var id = 0; id < data.members.length; id++) {
                var member = data.members[id];
                if (member.status === 'online') {
                    var memberName = member.username + '#' + member.discriminator;
                    if (DISCORD_USER_ADMIN.includes(memberName)) {
                        adminsNb++;
                    }
                    else if (DISCORD_USER_KNOWLEDGEABLE.includes(memberName)) {
                        knowledgeableNb++;
                    }
                    else if (DISCORD_USER_DEVS.includes(memberName)) {
                        devNb++;
                    }
                    else {
                        userNb++;
                    }
                }
                else {
                    idleNb++;
                }
            }
            _this.adminNumber = adminsNb;
            _this.knowledgableUsersNumber = knowledgeableNb;
            _this.developersNumber = devNb;
            _this.otherMemberNumber = userNb;
            _this.idleNumber = idleNb;
        });
    };
    DiscordUsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-discord-users',
            template: __webpack_require__(/*! ./discord-users.component.html */ "./src/app/pages/home/discord-users/discord-users.component.html"),
            styles: [__webpack_require__(/*! ./discord-users.component.css */ "./src/app/pages/home/discord-users/discord-users.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DiscordUsersComponent);
    return DiscordUsersComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/git-commit/git-commit.component.css":
/*!****************************************************************!*\
  !*** ./src/app/pages/home/git-commit/git-commit.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tagtype {\r\n  display: inline-block;\r\n  background-color: #424242;\r\n  color: #ffffff;\r\n  border-radius: 3px;\r\n  font-size: 0.8em;\r\n  font-weight: bold;\r\n  padding: 2px 6px;\r\n  margin-right: 6px;\r\n}\r\n\r\n.tagtype .fas,\r\n.tagauthor {\r\n  margin-right: 6px;\r\n}\r\n\r\n.tagline.improvement .tagtype {\r\n  background-color: #e08c15;\r\n}\r\n\r\n.tagline.feature .tagtype {\r\n  background-color: #468544;\r\n}\r\n\r\n.tagline.dataUpdate .tagtype {\r\n  background-color: cornflowerblue;\r\n}\r\n\r\n.tagdate,\r\n.tagauthor {\r\n  color: #c2c2c2;\r\n  font-size: 0.9em;\r\n}\r\n\r\n.tagdesc {\r\n  color: #6b6b6b;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pages/home/git-commit/git-commit.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/home/git-commit/git-commit.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hidden tagline\" [ngClass]=\"{'improvement':commitType == CommitType.IMPROVEMENT, 'feature':commitType == CommitType.NEW_FEATURE, 'dataUpdate':commitType == CommitType.DATA_UPDATE}\">\r\n  <div>\r\n    <span class='tagtype'><span class='fas' [ngClass]=\"{'fa-caret-square-up':commitType == CommitType.IMPROVEMENT, 'fa-plus-square':commitType == CommitType.NEW_FEATURE, 'fa-database':commitType == CommitType.DATA_UPDATE}\"></span>{{commitType}}</span>\r\n    <span class='tagauthor'>{{commitData.commit.author.name}}</span>\r\n    <span class='tagdate'>{{$commitDate}}</span>\r\n  </div>\r\n  <div class='tagdesc'>{{$commitDesc}}</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/home/git-commit/git-commit.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/home/git-commit/git-commit.component.ts ***!
  \***************************************************************/
/*! exports provided: CommitType, GitCommitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommitType", function() { return CommitType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitCommitComponent", function() { return GitCommitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CommitType;
(function (CommitType) {
    CommitType["IMPROVEMENT"] = "Improvement";
    CommitType["NEW_FEATURE"] = "New feature";
    CommitType["DATA_UPDATE"] = "Data update";
    CommitType["OTHER"] = "";
})(CommitType || (CommitType = {}));
var GitCommitComponent = /** @class */ (function () {
    function GitCommitComponent() {
        this.CommitType = CommitType;
    }
    GitCommitComponent.prototype.ngOnInit = function () {
        this.commitType = CommitType.OTHER;
        if (this.commitData.commit.message) {
            if (this.commitData.commit.message.startsWith("IMPROVEMENT")) {
                this.commitType = CommitType.IMPROVEMENT;
            }
            else if (this.commitData.commit.message.startsWith("FEATURE")) {
                this.commitType = CommitType.NEW_FEATURE;
            }
            else if (this.commitData.commit.message.startsWith("UPDATE_DATA")) {
                this.commitType = CommitType.DATA_UPDATE;
            }
        }
        this.$commitDate = new Date(this.commitData.commit.author.date).toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        this.$commitDesc = this.commitData.commit.message.substr(this.commitType.length);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GitCommitComponent.prototype, "commitData", void 0);
    GitCommitComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-git-commit',
            template: __webpack_require__(/*! ./git-commit.component.html */ "./src/app/pages/home/git-commit/git-commit.component.html"),
            styles: [__webpack_require__(/*! ./git-commit.component.css */ "./src/app/pages/home/git-commit/git-commit.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GitCommitComponent);
    return GitCommitComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.mainmenu {\r\n  width: 100%;\r\n  height: 35vw;\r\n  overflow: hidden;\r\n  position: relative;\r\n  margin-top: -20px;\r\n  margin-bottom: 10px;\r\n  z-index: 0;\r\n}\r\n\r\n.mainmenu:before {\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 15px;\r\n  background: linear-gradient(to bottom, rgba(0,0,0,1) 0%,rgba(0,0,0,0) 100%);\r\n}\r\n\r\n.mainmenu .layer-1,\r\n.mainmenu .layer-2,\r\n.mainmenu .layer-3,\r\n.mainmenu .layer-4 {\r\n  background-size: 100% 100%;\r\n  position: absolute;\r\n  z-index: -1;\r\n}\r\n\r\n.mainmenu .layer-border {\r\n  height: 30px;\r\n  width: 100%;\r\n  overflow: hidden;\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  display: flex;\r\n}\r\n\r\n.mainmenu .layer-border .layer-side-left,\r\n.mainmenu .layer-border .layer-side-right {\r\n  flex-shrink: 0;\r\n}\r\n\r\n.mainmenu .layer-border .layer-side-fill {\r\n  flex-grow: 1;\r\n}\r\n\r\n.mainmenu-content {\r\n  padding: 50px 5px 10px 5px;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n}\r\n\r\n.mainmenu-content .mainmenu-content-line {\r\n  position: relative;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n/* justify-content: space-between + two \"fake\" elements to simulate a space-evenly value\r\n * because Edge/Safari doesn't understand space-evenly\r\n * https://stackoverflow.com/a/47535338/8861729\r\n */\r\n\r\n.mainmenu-content .mainmenu-content-line:before,\r\n.mainmenu-content .mainmenu-content-line:after {\r\n  content: '';\r\n  display: block;\r\n}\r\n\r\n/* Push closer the buttons in the middle row */\r\n\r\n.mainmenu-content .mainmenu-content-line:nth-child(2):before,\r\n.mainmenu-content .mainmenu-content-line:nth-child(2):after {\r\n  width: 200px;\r\n}\r\n\r\n.mainmenu-button {\r\n  position: relative;\r\n  cursor: pointer;\r\n  transition: -webkit-transform 0.15s;\r\n  transition: transform 0.15s;\r\n  transition: transform 0.15s, -webkit-transform 0.15s;\r\n}\r\n\r\n.mainmenu-button:hover {\r\n  -webkit-transform: scale(1.1);\r\n          transform: scale(1.1);\r\n  z-index: 99;\r\n}\r\n\r\n.mainmenu-button .mainmenu-title {\r\n  color: white;\r\n  font-weight: 300;\r\n  position: absolute;\r\n  top: 9px;\r\n  right: 35px;\r\n  bottom: 23px;\r\n  left: 155px;\r\n  font-size: 25px;\r\n  line-height: 50px;\r\n  text-align: center;\r\n}\r\n\r\n.mainmenu-button .mainmenu-illustration {\r\n  position: absolute;\r\n  bottom: 24px;\r\n  left: 0;\r\n  width: 160px;\r\n  height: 77px;\r\n}\r\n\r\n.mainmenu-button .mainmenu-illustration.img-banner-Sakura {\r\n  left: -20px;\r\n}\r\n\r\n.mainmenu-button .mainmenu-illustration.img-banner-Lasswell {\r\n  left: 0;\r\n}\r\n\r\n.mainmenu-button .mainmenu-illustration.img-banner-Jake {\r\n  left: 10px;\r\n}\r\n\r\n.mainmenu-message-kuppo {\r\n  position: absolute;\r\n  left: 62%;\r\n  top: -62px;\r\n  padding: 14px 16px 35px 108px;\r\n  font-size: 1.25em;\r\n  color: #535038;\r\n}\r\n\r\n.mainmenu-message-kuppo:hover {\r\n  -webkit-animation: bounce 0.4s ease;\r\n          animation: bounce 0.4s ease;\r\n}\r\n\r\n.more_information {\r\n  display: flex;\r\n}\r\n\r\n#panel-github .panel-heading img.logo {\r\n  height: 18px;\r\n  width: auto;\r\n  margin-right: 6px;\r\n}\r\n\r\n#panel-github app-git-commit:not(:last-child) {\r\n  margin-bottom: 10px;\r\n  display: block;\r\n}\r\n\r\n@-webkit-keyframes bounce {\r\n  0% {\r\n    -webkit-transform: scale(1.0);\r\n            transform: scale(1.0);\r\n  }\r\n  33% {\r\n    -webkit-transform: scale(1.02);\r\n            transform: scale(1.02);\r\n  }\r\n  66% {\r\n    -webkit-transform: scale(0.98);\r\n            transform: scale(0.98);\r\n  }\r\n  100% {\r\n    -webkit-transform: scale(1.0);\r\n            transform: scale(1.0);\r\n  }\r\n}\r\n\r\n@keyframes bounce {\r\n  0% {\r\n    -webkit-transform: scale(1.0);\r\n            transform: scale(1.0);\r\n  }\r\n  33% {\r\n    -webkit-transform: scale(1.02);\r\n            transform: scale(1.02);\r\n  }\r\n  66% {\r\n    -webkit-transform: scale(0.98);\r\n            transform: scale(0.98);\r\n  }\r\n  100% {\r\n    -webkit-transform: scale(1.0);\r\n            transform: scale(1.0);\r\n  }\r\n}\r\n\r\nimg.externalLogo {\r\n  height: 18px;\r\n  margin-right: 6px;\r\n  width: auto;\r\n}\r\n\r\n.footer {\r\n  margin-top: 8px;\r\n}\r\n\r\n.content {\r\n  padding-left: 20px;\r\n  padding-top: 5px;\r\n  padding-bottom: 5px;\r\n}\r\n\r\n@media (max-width: 1200px) {\r\n\r\n  .mainmenu-message-kuppo {\r\n    left: 65%;\r\n  }\r\n\r\n}\r\n\r\n/* Above 1100px, use relative size */\r\n\r\n@media (min-width: 1101px) {\r\n  .mainmenu .layer-1 {\r\n    width: 100vw;\r\n    height: 22vw;\r\n    top: 0;\r\n    left: 0;\r\n  }\r\n\r\n  .mainmenu .layer-2 {\r\n    width: 102.5vw;\r\n    height: 6.5vw;\r\n    top: 19.5vw;\r\n    left: -1.25vw;\r\n  }\r\n\r\n  .mainmenu .layer-3 {\r\n    width: 105vw;\r\n    height: 16vw;\r\n    top: 13.6vw;\r\n    left: -2.5vw;\r\n  }\r\n\r\n  .mainmenu .layer-4 {\r\n    width: 110vw;\r\n    height: 13.8vw;\r\n    top: 26.5vw;\r\n    left: -5vw;\r\n  }\r\n}\r\n\r\n/* Below 1100px, use fixed size */\r\n\r\n@media (max-width: 1100px) {\r\n  .mainmenu {\r\n    height: 400px;\r\n  }\r\n\r\n  .mainmenu .layer-1 {\r\n    top: 0;\r\n    left: 0;\r\n  }\r\n\r\n  .mainmenu .layer-2 {\r\n    top: 220px;\r\n    left: -50px;\r\n  }\r\n\r\n  .mainmenu .layer-3 {\r\n    top: 150px;\r\n    left: -50px;\r\n  }\r\n\r\n  .mainmenu .layer-4 {\r\n    top: 300px;\r\n    left: -50px;\r\n  }\r\n\r\n  .mainmenu-message-kuppo {\r\n    display: none;\r\n  }\r\n\r\n  .mainmenu-content .mainmenu-content-line {\r\n    justify-content: space-around;\r\n    flex-wrap: wrap;\r\n  }\r\n\r\n  .mainmenu-content .mainmenu-content-line:before,\r\n  .mainmenu-content .mainmenu-content-line:after {\r\n    display: none;\r\n  }\r\n}\r\n\r\n/* For small screens, use a fixed size background */\r\n\r\n@media (max-width: 770px) {\r\n  .mainmenu {\r\n    height: 550px;\r\n    margin-top: -22px;\r\n    background-image: url('background-fixed.jpg');\r\n    background-size: cover;\r\n    background-position: center;\r\n  }\r\n\r\n  .mainmenu .layer-1,\r\n  .mainmenu .layer-2,\r\n  .mainmenu .layer-3,\r\n  .mainmenu .layer-4 {\r\n    display: none;\r\n  }\r\n}\r\n\r\n/* Handle border below 220px * 2 (left and right) */\r\n\r\n@media (max-width: 440px) {\r\n\r\n  .mainmenu .layer-border .layer-side-fill {\r\n    display: none;\r\n  }\r\n\r\n  .mainmenu .layer-border .layer-side-left,\r\n  .mainmenu .layer-border .layer-side-right {\r\n    width: 50vw;\r\n    background-position: bottom left;\r\n    background-repeat: no-repeat;\r\n    background-size: contain;\r\n  }\r\n}\r\n\r\n/* Handle buttons below 380px */\r\n\r\n@media (max-width: 380px) {\r\n\r\n  .mainmenu-button {\r\n    -webkit-transform: scale(0.8);\r\n            transform: scale(0.8);\r\n    min-width: 350px;\r\n  }\r\n\r\n  .mainmenu-button:hover {\r\n    -webkit-transform: scale(0.9);\r\n            transform: scale(0.9);\r\n  }\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #homePage class=\"mainmenu\">\r\n  <div class=\"mainmenu-content\">\r\n    <div class=\"mainmenu-content-line\">\r\n      <div class=\"mainmenu-button img-homepage-button\" data-internal-link=\"builder.html\">\r\n        <div class=\"mainmenu-title\">Unit builder</div>\r\n        <i class=\"mainmenu-illustration img img-banner-Lid\"></i>\r\n      </div>\r\n      <div class=\"mainmenu-message-kuppo img-homepage-kuppo_message\">\r\n        Find the best equipments for your units, kupo!\r\n      </div>\r\n    </div>\r\n    <div class=\"mainmenu-content-line\">\r\n      <div class=\"mainmenu-button img-homepage-button\" data-internal-link=\"encyclopedia.html\">\r\n        <div class=\"mainmenu-title\">Encyclopedia</div>\r\n        <i class=\"mainmenu-illustration img img-banner-Sakura\"></i>\r\n      </div>\r\n      <div class=\"mainmenu-button img-homepage-button\" data-internal-link=\"unitSearch.html\">\r\n        <div class=\"mainmenu-title\">Unit search</div>\r\n        <i class=\"mainmenu-illustration img img-banner-Lasswell\"></i>\r\n      </div>\r\n    </div>\r\n    <div class=\"mainmenu-content-line\">\r\n      <div class=\"mainmenu-button img-homepage-button\" data-internal-link=\"inventory.html\">\r\n        <div class=\"mainmenu-title\">My inventory</div>\r\n        <i class=\"mainmenu-illustration img img-banner-Jake\"></i>\r\n      </div>\r\n      <div class=\"mainmenu-button img-homepage-button\" data-internal-link=\"units.html\">\r\n        <div class=\"mainmenu-title\">My units</div>\r\n        <i class=\"mainmenu-illustration img img-banner-Rain\"></i>\r\n      </div>\r\n      <div class=\"mainmenu-button img-homepage-button\" data-internal-link=\"espers.html\">\r\n        <div class=\"mainmenu-title\">My Espers</div>\r\n        <i class=\"mainmenu-illustration img img-banner-Nichol\"></i>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"layer-1 img-homepage-background-1\"></div>\r\n  <div #layer2 class=\"layer-2 img-homepage-background-2\"></div>\r\n  <div #layer3 class=\"layer-3 img-homepage-background-3\"></div>\r\n  <div #layer4 class=\"layer-4 img-homepage-background-4\"></div>\r\n  <div #layerBorder class=\"layer-border\">\r\n    <div class=\"layer-side-left img-homepage-border-left\"></div>\r\n    <div class=\"layer-side-fill img-homepage-border-fill\"></div>\r\n    <div class=\"layer-side-right img-homepage-border-right\"></div>\r\n  </div>\r\n</div>\r\n<div #moreInformation  class=\"more_information\">\r\n  <div class=\"col-sm-6\">\r\n    <mat-card>\r\n      <mat-card-title id=\"panel-github\"><img src='assets/img/external/github.svg' class='externalLogo' alt='' />Latest changes</mat-card-title>\r\n      <mat-card-content>\r\n        <div class=\"content\"><app-git-commit *ngFor=\"let commitData of $gitCommits\" [commitData]=\"commitData\"></app-git-commit></div>\r\n        <div class=\"footer\">Want to contribute? <a href=\"https://github.com/lyrgard/ffbeEquip\" target=\"_blank\" rel=\"noreferrer\">Fork the repo and submit a PR!</a></div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n  <div class=\"col-sm-6\">\r\n    <mat-card>\r\n      <mat-card-title><img src='assets/img/external/discord.svg' class='externalLogo' alt='' />From our Discord server</mat-card-title>\r\n      <mat-card-content>\r\n        <div class=\"content\"><app-discord-users></app-discord-users></div>\r\n        <div class=\"footer\">Want to join the fun? <a href=\"https://discord.gg/rgXnjhP\" target=\"_blank\" rel=\"noreferrer\">Come to our server!</a></div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_context_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/context.service */ "./src/app/services/context.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = /** @class */ (function () {
    function HomeComponent(http, contextService) {
        this.http = http;
        this.contextService = contextService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contextService.setCurrentPage(_services_context_service__WEBPACK_IMPORTED_MODULE_4__["Pages"].HOME);
        this.handleBackgroundAnimation();
        this.http.get("https://api.github.com/repos/lyrgard/ffbeEquip/commits").subscribe(function (commits) {
            _this.$gitCommits = commits
                .filter(function (commit) { return commit.commit.message && (commit.commit.message.startsWith('IMPROVEMENT') || commit.commit.message.startsWith('NEW_FEATURE') || commit.commit.message.startsWith('DATA_UPDATE')); })
                .slice(0, 5);
        });
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        if (this.mouseMoveSubscription) {
            this.mouseMoveSubscription.unsubscribe();
        }
        if (this.documentScrollSubscription) {
            this.documentScrollSubscription.unsubscribe();
        }
    };
    HomeComponent.prototype.handleBackgroundAnimation = function () {
        var maxDeltaPx = 50;
        var scrollTop = 0;
        var pageX = 0;
        var pageY = 0;
        var layers = [
            /* .layer-1 do not move, so is not present */
            // Layer 2, moves not much
            {
                $element: this.layer2.nativeElement,
                scrollSpeedFactor: 0.15,
                mouseSpeedFactor: 0.02,
                translate: { x: 0, y: 0 },
                initialOffset: { top: null, left: null },
                size: { height: null, width: null }
            },
            // Layer 3, moves a little
            {
                $element: this.layer3.nativeElement,
                scrollSpeedFactor: 0.25,
                mouseSpeedFactor: 0.10,
                translate: { x: 0, y: 0 },
                initialOffset: { top: null, left: null },
                size: { height: null, width: null }
            },
            // Layer 4, moves the most
            {
                $element: this.layer4.nativeElement,
                scrollSpeedFactor: 0.35,
                mouseSpeedFactor: 0.30,
                translate: { x: 0, y: 0 },
                initialOffset: { top: null, left: null },
                size: { height: null, width: null }
            },
        ];
        var maxLayers = layers.length;
        var maxScrollPosition = layers[maxLayers - 1].$element.offsetTop;
        /* Init style for layers element */
        for (var layerId = 0; layerId < maxLayers; layerId++) {
            layers[layerId].$element.setAttribute('style', 'transform: translate3d(0px, 0px, 0px)');
            layers[layerId].initialOffset.top = layers[layerId].$element.offsetTop;
            layers[layerId].initialOffset.left = layers[layerId].$element.offsetLeft;
            layers[layerId].size.height = layers[layerId].$element.outerHeight;
            layers[layerId].size.width = layers[layerId].$element.outerWidth;
        }
        var backgroundWidth = this.homePage.nativeElement.clientWidth;
        var backgroundHeight = this.homePage.nativeElement.clientHeight;
        var lastLayerVisibleYLimit = this.moreInformation.nativeElement.offsetTop - (this.layerBorder.nativeElement.outerHeight / 2);
        // Bail! Background will be fixed
        if (this.homePage.nativeElement.outerWidth < 770)
            return;
        /* Function to animate position */
        var animatePos = function () {
            var newTransform;
            for (var layerId = 0; layerId < maxLayers; layerId++) {
                newTransform = 'translate3d(' + layers[layerId].translate.x + 'px, ' + layers[layerId].translate.y + 'px, 0px)';
                if (newTransform !== layers[layerId].$element.style.transform) {
                    layers[layerId].$element.style.transform = newTransform;
                }
            }
        };
        /* Function to calculate position */
        var calculatePos = function () {
            var xPos, yPos, xPosStr, yPosStr, hasChanged = false;
            for (var layerId = 0; layerId < maxLayers; layerId++) {
                // Handle mouse position
                xPos = maxDeltaPx * (pageX - (backgroundWidth / 2)) / backgroundWidth * layers[layerId].mouseSpeedFactor;
                yPos = maxDeltaPx * (pageY - (backgroundHeight / 2)) / backgroundHeight * layers[layerId].mouseSpeedFactor;
                // Handle scroll position, only in Y
                yPos -= (scrollTop * layers[layerId].scrollSpeedFactor);
                // Update x/y pos if changed
                xPosStr = xPos.toFixed(2);
                yPosStr = yPos.toFixed(2);
                if (layers[layerId].translate.x !== xPosStr || layers[layerId].translate.y !== yPosStr) {
                    layers[layerId].translate.x = xPosStr;
                    layers[layerId].translate.y = yPosStr;
                    hasChanged = true;
                }
                // Check for visible limit
                if (layerId === maxLayers - 1) {
                    var bottomPos = layers[layerId].initialOffset.top + yPos + layers[layerId].size.height;
                    if (bottomPos < lastLayerVisibleYLimit) {
                        hasChanged = false;
                    }
                }
            }
            if (hasChanged) {
                window.requestAnimationFrame(animatePos);
            }
        };
        this.mouseMoveSubscription = Object(rxjs_index__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.homePage.nativeElement, 'mousemove').pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["throttleTime"])(25), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])()).subscribe(function (mouseEvent) {
            pageX = mouseEvent.pageX;
            pageY = mouseEvent.pageY;
            if (scrollTop < maxScrollPosition) {
                window.requestAnimationFrame(calculatePos);
            }
        });
        this.documentScrollSubscription = Object(rxjs_index__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(document, 'scroll').pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["throttleTime"])(25), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])()).subscribe(function (mouseEvent) {
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop < maxScrollPosition) {
                window.requestAnimationFrame(calculatePos);
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('layer2'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "layer2", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('layer3'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "layer3", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('layer4'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "layer4", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('homePage'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "homePage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('layerBorder'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "layerBorder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('moreInformation'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "moreInformation", void 0);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css"), __webpack_require__(/*! ../../../assets/css-img/homepage-backgrounds.css */ "./src/assets/css-img/homepage-backgrounds.css"), __webpack_require__(/*! ../../../assets/css-img/homepage.css */ "./src/assets/css-img/homepage.css"), __webpack_require__(/*! ../../../assets/css-img/banner.css */ "./src/assets/css-img/banner.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _services_context_service__WEBPACK_IMPORTED_MODULE_4__["ContextService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/item-inventory/item-inventory-search-filter.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/item-inventory/item-inventory-search-filter.ts ***!
  \**********************************************************************/
/*! exports provided: ItemInventorySearchFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemInventorySearchFilter", function() { return ItemInventorySearchFilter; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");


var ItemInventorySearchFilter = /** @class */ (function () {
    function ItemInventorySearchFilter() {
        this.allChanges = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this._searchText = "";
        this._equipmentType = "dagger";
        this.onChange = this.allChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(300));
    }
    Object.defineProperty(ItemInventorySearchFilter.prototype, "searchText", {
        get: function () {
            return this._searchText;
        },
        set: function (text) {
            this._searchText = text;
            this.allChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemInventorySearchFilter.prototype, "equipmentType", {
        get: function () {
            return this._equipmentType;
        },
        set: function (value) {
            this._equipmentType = value;
            this.allChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    ItemInventorySearchFilter.prototype.isEmpty = function () {
        return this._searchText == ""
            && this._equipmentType == "";
    };
    ItemInventorySearchFilter.prototype.isSelected = function (item) {
        if (this._equipmentType == "" || this._equipmentType == item.type) {
            if (this._searchText == "" || this.containsText(this._searchText, item)) {
                return true;
            }
        }
        return false;
    };
    ItemInventorySearchFilter.prototype.containsText = function (text, item) {
        var result = true;
        var self = this;
        text.split(" ").forEach(function (token) {
            result = result && item.nameAndTmrunitSearchText.match(new RegExp(self.escapeRegExp(token), 'i'));
        });
        return result;
    };
    ItemInventorySearchFilter.prototype.escapeRegExp = function (str) {
        return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    };
    return ItemInventorySearchFilter;
}());



/***/ }),

/***/ "./src/app/pages/item-inventory/item-inventory.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/pages/item-inventory/item-inventory.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".items {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n}\r\n\r\n.itemCard {\r\n  width: 350px;\r\n  margin: 2px;\r\n}\r\n\r\n.item {\r\n  display: flex;\r\n  align-items: flex-start;\r\n  justify-content: space-between;\r\n}\r\n\r\n.actions {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.itemCard .actions .action {\r\n  visibility: hidden;\r\n}\r\n\r\n.itemCard:hover .actions .action {\r\n  visibility: visible;\r\n}\r\n\r\n.actionIcon {\r\n  margin-right: 4px;\r\n  margin-left: 4px;\r\n  color: #616161;\r\n  font-size: 2em;\r\n  cursor: pointer;\r\n}\r\n\r\n.actionImg {\r\n  height: 28px;\r\n  width: 28px;\r\n  -webkit-filter: grayscale(100%);\r\n          filter: grayscale(100%);\r\n}\r\n\r\n.actionImg:hover {\r\n  -webkit-filter: grayscale(50%);\r\n          filter: grayscale(50%);\r\n}\r\n\r\n.ownedNumber {\r\n  font-weight: bold;\r\n}\r\n\r\n.filter {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  color:white;\r\n  margin-top: 10px;\r\n}\r\n\r\n.searchField {\r\n  width: 100%;\r\n}\r\n\r\n.enhancementDrawer {\r\n  width: 372px;\r\n  padding: 10px;\r\n}\r\n\r\n.content {\r\n  min-height: 600px;\r\n}\r\n\r\n.itemCard .actions .action.selected {\r\n  visibility: visible;\r\n  -webkit-filter: none;\r\n          filter: none;\r\n  background-color: #ff6e40;\r\n  border-radius: 5px;\r\n}\r\n\r\n.img-tab-equipments {\r\n  width: 50px;\r\n  height: 50px;\r\n  background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-tab-history {\r\n  width: 50px;\r\n  height: 50px;\r\n  background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.dayBlock {\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.day {\r\n  color: #3f51b5;\r\n  text-align: center;\r\n  font-size: 1.5em;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.event {\r\n  font-weight: bold;\r\n  margin: 30px 0 10px 10px;\r\n}\r\n\r\n.itemHistory .items {\r\n  justify-content: flex-start;\r\n  margin-left: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pages/item-inventory/item-inventory.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/item-inventory/item-inventory.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template let-item=\"item\" #itemCard>\r\n  <mat-card class=\"itemCard\">\r\n    <mat-card-content class=\"item\">\r\n      <app-item-tile [item]=\"item\" [mode]=\"ItemMode.CONCISE\">\r\n        <div *ngIf=\"$ownedItems\" class=\"actions\">\r\n          <button mat-button class=\"iconButton\" clickPropagationStop (click)=\"addItem(item.id)\" matTooltip=\"'Add an instance of this item to your inventory'\">\r\n            <i class=\"fas fa-plus-square actionIcon action\"></i>\r\n          </button>\r\n          <button mat-button class=\"iconButton\" clickPropagationStop (click)=\"removeItem(item.id)\" matTooltip=\"'Remove an instance of this item from your inventory'\">\r\n            <i class=\"fas fa-minus-square actionIcon action\"></i>\r\n          </button>\r\n          <img *ngIf=\"$ownedItems[item.id]\" class=\"action actionIcon actionImg\" [ngClass]=\"{'selected':$ownedItems.enchantments && $ownedItems.enchantments[item.id]}\" src=\"{{environment.baseUrl}}img/icons/dwarf.png\" (click)=\"openItemEnhancement(item)\"  matTooltip=\"Show the item enhancement menu\">\r\n          <img *ngIf=\"$ownedItems[item.id]\" class=\"action actionIcon actionImg\" [ngClass]=\"{'selected':$ownedItems.excludeFromExpeditions && $ownedItems.excludeFromExpeditions.includes(item.id)}\" src=\"{{environment.baseUrl}}img/icons/excludeExpedition.png\" (click)=\"toggleExcludeFromExpeditions(item)\" matTooltip=\"Exclude this item when building for expeditions\">\r\n        </div>\r\n      </app-item-tile>\r\n      <app-counter *ngIf=\"$ownedItems && $ownedItems[item.id]\" [value]=\"$ownedItems[item.id]\"></app-counter>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</ng-template>\r\n\r\n<div class=\"container-fluid\">\r\n  <mat-sidenav-container>\r\n    <mat-sidenav-content class=\"content\">\r\n      <mat-tab-group>\r\n        <mat-tab>\r\n          <ng-template mat-tab-label>\r\n            <i class=\"img img-tab-history\"></i>\r\n          </ng-template>\r\n          <ng-template matTabContent>\r\n            <div class=\"itemHistory\">\r\n              <mat-paginator *ngIf=\"$itemHistory\" [length]=\"$itemHistory.length\" [pageSize]=\"5\" [pageIndex]=\"currentPageHistory\" (page)=\"changePageHistory($event.pageIndex)\"></mat-paginator>\r\n              <div *ngFor=\"let day of $filteredHistory\" class=\"dayBlock\">\r\n                <div class=\"day\">{{day.name}}</div>\r\n                <div *ngFor=\"let event of day.events\">\r\n                  <div class=\"event\">{{event.name}}</div>\r\n                  <div class=\"items\">\r\n                    <ng-container *ngFor=\"let item of event.items\">\r\n                      <ng-container *ngTemplateOutlet=\"itemCard; context: {item:item}\"></ng-container>\r\n                    </ng-container>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </ng-template>\r\n        </mat-tab>\r\n        <mat-tab>\r\n          <ng-template mat-tab-label>\r\n            <i class=\"img img-tab-equipments\"></i>\r\n          </ng-template>\r\n          <ng-template matTabContent>\r\n            <form class=\"filter\">\r\n              <div>\r\n                <app-filter-selector [values]=\"itemTypes\" [cssType]=\"'equipment'\" [multipleChoice]=\"false\" [filterData]=\"searchFilter\" [filterName]=\"'equipmentType'\"></app-filter-selector>\r\n                <mat-form-field class=\"searchField\">\r\n                  <input type=\"text\" matInput [(ngModel)]=\"searchFilter.searchText\" name=\"searchText\" id=\"searchText\" placeholder=\"Enter search text. Will search in item name and TMR's unit name\">\r\n                </mat-form-field>\r\n              </div>\r\n            </form>\r\n            <div>\r\n              <mat-paginator *ngIf=\"$searchResult && ($searchResult.length > 50)\" [length]=\"$searchResult.length\" [pageSize]=\"50\" [pageIndex]=\"currentPageItems\" (page)=\"changePageItems($event.pageIndex)\"></mat-paginator>\r\n              <div class=\"items\">\r\n                <ng-container *ngFor=\"let item of $filteredItems\">\r\n                  <ng-container *ngTemplateOutlet=\"itemCard; context: {item:item}\"></ng-container>\r\n                </ng-container>\r\n              </div>\r\n            </div>\r\n          </ng-template>\r\n        </mat-tab>\r\n      </mat-tab-group>\r\n    </mat-sidenav-content>\r\n    <mat-sidenav #sideDrawer position=\"end\" class=\"enhancementDrawer\">\r\n      <h4>Item enhancements</h4>\r\n      <mat-card class=\"itemCard\" *ngFor=\"let enhancedItem of $enhancedItems\">\r\n        <mat-card-content class=\"item\">\r\n          <app-item-tile [item]=\"enhancedItem\" [mode]=\"ItemMode.CONCISE\">\r\n            <app-item-enhancement [item]=\"enhancedItem\" (enhancementChanged)=\"enhancementsChanged()\"></app-item-enhancement>\r\n          </app-item-tile>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </mat-sidenav>\r\n  </mat-sidenav-container>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/item-inventory/item-inventory.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/item-inventory/item-inventory.component.ts ***!
  \******************************************************************/
/*! exports provided: ItemInventoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemInventoryComponent", function() { return ItemInventoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_static_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/static-data.service */ "./src/app/services/static-data.service.ts");
/* harmony import */ var _services_context_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/context.service */ "./src/app/services/context.service.ts");
/* harmony import */ var _components_item_tile_item_tile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/item-tile/item-tile.component */ "./src/app/components/item-tile/item-tile.component.ts");
/* harmony import */ var _services_user_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user-data.service */ "./src/app/services/user-data.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _model_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../model/constants */ "./src/app/model/constants.ts");
/* harmony import */ var _services_site_state_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/site-state.service */ "./src/app/services/site-state.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ItemInventoryComponent = /** @class */ (function () {
    function ItemInventoryComponent(contextService, staticDataService, userDataService, siteState) {
        this.contextService = contextService;
        this.staticDataService = staticDataService;
        this.userDataService = userDataService;
        this.siteState = siteState;
        this.ItemMode = _components_item_tile_item_tile_component__WEBPACK_IMPORTED_MODULE_3__["Mode"];
        this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"];
        this.itemTypes = _model_constants__WEBPACK_IMPORTED_MODULE_6__["constants"].EQUIPMENT_TYPE_LIST;
        this.currentPageItems = 0;
        this.currentPageHistory = 0;
        this.searchFilter = this.siteState.itemInventorySearchFilter;
    }
    ItemInventoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contextService.setCurrentPage(_services_context_service__WEBPACK_IMPORTED_MODULE_2__["Pages"].ITEM_INVENTORY);
        this.staticDataService.getItemHistory().subscribe(function (itemHistory) {
            _this.$itemHistory = itemHistory;
            _this.changePageHistory(0);
        });
        this.staticDataService.getItemsWithoutDuplicates().subscribe(function (items) {
            _this.$items = items;
            _this.searchFilter.onChange.subscribe(function () {
                _this.$searchResult = _this.$items.filter(function (item) { return _this.searchFilter.isSelected(item); }).sort(_this.getSort(_this.searchFilter.equipmentType));
                _this.changePageItems(0);
            });
            _this.$searchResult = _this.$items.filter(function (item) { return _this.searchFilter.isSelected(item); }).sort(_this.getSort(_this.searchFilter.equipmentType));
            _this.changePageItems(0);
        });
        this.userDataService.itemInventory.subscribe(function (ownedItems) {
            if (ownedItems && Object.keys(ownedItems).length > 0) {
                _this.$ownedItems = ownedItems;
            }
            else {
                _this.$ownedItems = null;
            }
        });
    };
    ItemInventoryComponent.prototype.addItem = function (itemId) {
        this.userDataService.addItem(itemId);
    };
    ItemInventoryComponent.prototype.removeItem = function (itemId) {
        this.userDataService.removeItem(itemId);
    };
    ItemInventoryComponent.prototype.changePageItems = function (page) {
        this.currentPageItems = page;
        this.$filteredItems = this.$searchResult.slice(this.currentPageItems * 50, this.currentPageItems * 50 + 50);
    };
    ItemInventoryComponent.prototype.changePageHistory = function (page) {
        this.currentPageHistory = page;
        this.$filteredHistory = this.$itemHistory.slice(this.currentPageHistory * 5, this.currentPageHistory * 5 + 5);
    };
    ItemInventoryComponent.prototype.getSort = function (type) {
        if (_model_constants__WEBPACK_IMPORTED_MODULE_6__["constants"].WEAPON_TYPES.includes(type)) {
            return this.getSortByStats(["atk", "mag", "def", "spr"]);
        }
        else if (type == "materia") {
            return this.compareName;
        }
        else {
            return this.getSortByStats(["def", "spr", "atk", "mag", "hp", "mp"]);
        }
    };
    ItemInventoryComponent.prototype.getSortByStats = function (sortOrder) {
        var _this = this;
        return function (item1, item2) {
            for (var index in sortOrder) {
                var stat = sortOrder[index];
                var stat1_1 = item1[stat].flat;
                var stat2_1 = item2[stat].flat;
                if (stat1_1 == stat2_1) {
                    continue;
                }
                return stat2_1 - stat1_1;
            }
            var stat1 = item1.sortId;
            var stat2 = item2.sortId;
            if (stat1 != stat2) {
                return stat2 - stat1;
            }
            return _this.compareName(item1, item2);
        };
    };
    ItemInventoryComponent.prototype.compareName = function (item1, item2) {
        var name1 = item1.jpname || item1.name;
        var name2 = item2.jpname || item2.name;
        var minLength = Math.min(name1.length, name2.length);
        for (var i = 0; i < minLength; i++) {
            var letter1 = name1.substr(i, 1);
            var letter2 = name2.substr(i, 1);
            if (letter1 == letter1.toUpperCase()) {
                if (letter2 == letter2.toUpperCase()) {
                    var result = letter1.localeCompare(letter2);
                    if (result != 0) {
                        return result;
                    }
                }
                else {
                    return -1;
                }
            }
            else {
                if (letter2 == letter2.toUpperCase()) {
                    return 1;
                }
                else {
                    var result = letter1.localeCompare(letter2);
                    if (result != 0) {
                        return result;
                    }
                }
            }
        }
        if (name1.length == name2.length) {
            return 0;
        }
        else if (name1.length == minLength) {
            return -1;
        }
        else {
            return 1;
        }
    };
    ItemInventoryComponent.prototype.openItemEnhancement = function (item) {
        var _this = this;
        this.userDataService.getEnhancedVersions(item).subscribe(function (items) { return _this.$enhancedItems = items; });
        this.sideDrawer.open();
    };
    ItemInventoryComponent.prototype.toggleExcludeFromExpeditions = function (item) {
        this.userDataService.toggleExcludeFromExpedition(item.id);
    };
    ItemInventoryComponent.prototype.enhancementsChanged = function () {
        if (this.$enhancedItems) {
            this.userDataService.saveEnhancements(this.$enhancedItems);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sideDrawer'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenav"])
    ], ItemInventoryComponent.prototype, "sideDrawer", void 0);
    ItemInventoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-item-inventory',
            template: __webpack_require__(/*! ./item-inventory.component.html */ "./src/app/pages/item-inventory/item-inventory.component.html"),
            styles: [__webpack_require__(/*! ./item-inventory.component.css */ "./src/app/pages/item-inventory/item-inventory.component.css")]
        }),
        __metadata("design:paramtypes", [_services_context_service__WEBPACK_IMPORTED_MODULE_2__["ContextService"],
            _services_static_data_service__WEBPACK_IMPORTED_MODULE_1__["StaticDataService"],
            _services_user_data_service__WEBPACK_IMPORTED_MODULE_4__["UserDataService"],
            _services_site_state_service__WEBPACK_IMPORTED_MODULE_7__["SiteStateService"]])
    ], ItemInventoryComponent);
    return ItemInventoryComponent;
}());



/***/ }),

/***/ "./src/app/pages/unit-collection/unit-collection.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pages/unit-collection/unit-collection.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/unit-collection/unit-collection.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/unit-collection/unit-collection.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  unit-collection works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/pages/unit-collection/unit-collection.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/unit-collection/unit-collection.component.ts ***!
  \********************************************************************/
/*! exports provided: UnitCollectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitCollectionComponent", function() { return UnitCollectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_context_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/context.service */ "./src/app/services/context.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UnitCollectionComponent = /** @class */ (function () {
    function UnitCollectionComponent(contextService) {
        this.contextService = contextService;
    }
    UnitCollectionComponent.prototype.ngOnInit = function () {
        this.contextService.setCurrentPage(_services_context_service__WEBPACK_IMPORTED_MODULE_1__["Pages"].UNIT_COLLECTION);
    };
    UnitCollectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-unit-collection',
            template: __webpack_require__(/*! ./unit-collection.component.html */ "./src/app/pages/unit-collection/unit-collection.component.html"),
            styles: [__webpack_require__(/*! ./unit-collection.component.css */ "./src/app/pages/unit-collection/unit-collection.component.css")]
        }),
        __metadata("design:paramtypes", [_services_context_service__WEBPACK_IMPORTED_MODULE_1__["ContextService"]])
    ], UnitCollectionComponent);
    return UnitCollectionComponent;
}());



/***/ }),

/***/ "./src/app/pages/unit-search/unit-search.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pages/unit-search/unit-search.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/unit-search/unit-search.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/unit-search/unit-search.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  unit-search works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/pages/unit-search/unit-search.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/unit-search/unit-search.component.ts ***!
  \************************************************************/
/*! exports provided: UnitSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitSearchComponent", function() { return UnitSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_context_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/context.service */ "./src/app/services/context.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UnitSearchComponent = /** @class */ (function () {
    function UnitSearchComponent(contextService) {
        this.contextService = contextService;
    }
    UnitSearchComponent.prototype.ngOnInit = function () {
        this.contextService.setCurrentPage(_services_context_service__WEBPACK_IMPORTED_MODULE_1__["Pages"].UNIT_SEARCH);
    };
    UnitSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-unit-search',
            template: __webpack_require__(/*! ./unit-search.component.html */ "./src/app/pages/unit-search/unit-search.component.html"),
            styles: [__webpack_require__(/*! ./unit-search.component.css */ "./src/app/pages/unit-search/unit-search.component.css")]
        }),
        __metadata("design:paramtypes", [_services_context_service__WEBPACK_IMPORTED_MODULE_1__["ContextService"]])
    ], UnitSearchComponent);
    return UnitSearchComponent;
}());



/***/ }),

/***/ "./src/app/router.animations.ts":
/*!**************************************!*\
  !*** ./src/app/router.animations.ts ***!
  \**************************************/
/*! exports provided: leftToRightTransition, rightToLeftTransition, routerTransition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leftToRightTransition", function() { return leftToRightTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rightToLeftTransition", function() { return rightToLeftTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerTransition", function() { return routerTransition; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

function leftToRightTransition(fromState, toState) {
    return fromState < toState;
}
function rightToLeftTransition(fromState, toState) {
    return fromState > toState;
}
var routerTransition = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(leftToRightTransition, [
        /* order */
        /* 1 */ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        /* 2 */ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(rightToLeftTransition, [
        /* order */
        /* 1 */ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        /* 2 */ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }))
            ], { optional: true }),
        ])
    ])
]);


/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_encyclopedia_encyclopedia_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/encyclopedia/encyclopedia.component */ "./src/app/pages/encyclopedia/encyclopedia.component.ts");
/* harmony import */ var _pages_item_inventory_item_inventory_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/item-inventory/item-inventory.component */ "./src/app/pages/item-inventory/item-inventory.component.ts");
/* harmony import */ var _pages_unit_collection_unit_collection_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/unit-collection/unit-collection.component */ "./src/app/pages/unit-collection/unit-collection.component.ts");
/* harmony import */ var _pages_espers_espers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/espers/espers.component */ "./src/app/pages/espers/espers.component.ts");
/* harmony import */ var _pages_unit_search_unit_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/unit-search/unit-search.component */ "./src/app/pages/unit-search/unit-search.component.ts");
/* harmony import */ var _pages_builder_builder_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/builder/builder.component */ "./src/app/pages/builder/builder.component.ts");







var routes = [
    { path: ':language/home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"], data: { order: 0 } },
    { path: ':language/builder', component: _pages_builder_builder_component__WEBPACK_IMPORTED_MODULE_6__["BuilderComponent"], data: { order: 1 } },
    { path: ':language/encyclopedia', component: _pages_encyclopedia_encyclopedia_component__WEBPACK_IMPORTED_MODULE_1__["EncyclopediaComponent"], data: { order: 2 } },
    { path: ':language/unitSearch', component: _pages_unit_search_unit_search_component__WEBPACK_IMPORTED_MODULE_5__["UnitSearchComponent"], data: { order: 3 } },
    { path: ':language/itemInventory', component: _pages_item_inventory_item_inventory_component__WEBPACK_IMPORTED_MODULE_2__["ItemInventoryComponent"], data: { order: 4 } },
    { path: ':language/unitCollection', component: _pages_unit_collection_unit_collection_component__WEBPACK_IMPORTED_MODULE_3__["UnitCollectionComponent"], data: { order: 5 } },
    { path: ':language/espers', component: _pages_espers_espers_component__WEBPACK_IMPORTED_MODULE_4__["EspersComponent"], data: { order: 6 } },
    { path: '**', redirectTo: '/en/home' },
];


/***/ }),

/***/ "./src/app/services/context.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/context.service.ts ***!
  \*********************************************/
/*! exports provided: Server, Language, Pages, ContextService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Server", function() { return Server; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Language", function() { return Language; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pages", function() { return Pages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextService", function() { return ContextService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Server;
(function (Server) {
    Server["GL"] = "GL";
    Server["JP"] = "JP";
})(Server || (Server = {}));
var Language;
(function (Language) {
    Language["EN"] = "en";
    Language["ZH"] = "zh";
    Language["KO"] = "ko";
    Language["FR"] = "fr";
    Language["DE"] = "de";
    Language["ES"] = "es";
    Language["JP"] = "jp";
})(Language || (Language = {}));
var Pages;
(function (Pages) {
    Pages[Pages["HOME"] = 0] = "HOME";
    Pages[Pages["BUILDER"] = 1] = "BUILDER";
    Pages[Pages["ENCYCLOPEDIA"] = 2] = "ENCYCLOPEDIA";
    Pages[Pages["UNIT_SEARCH"] = 3] = "UNIT_SEARCH";
    Pages[Pages["ITEM_INVENTORY"] = 4] = "ITEM_INVENTORY";
    Pages[Pages["UNIT_COLLECTION"] = 5] = "UNIT_COLLECTION";
    Pages[Pages["ESPERS"] = 6] = "ESPERS";
    Pages[Pages["CONTRIBUTE"] = 7] = "CONTRIBUTE";
})(Pages || (Pages = {}));
var ContextService = /** @class */ (function () {
    function ContextService(router) {
        var _this = this;
        this.router = router;
        this.$server = new rxjs_index__WEBPACK_IMPORTED_MODULE_2__["AsyncSubject"]();
        this.$language = new rxjs_index__WEBPACK_IMPORTED_MODULE_2__["AsyncSubject"]();
        this.$page = new rxjs_index__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](Pages.HOME);
        this.router.events.pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (e) { return e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; })).subscribe(function (e) {
            var language = _this.router.parseUrl(_this.router.url).root.children.primary.segments[0].path;
            if (Object.values(Language).includes(language)) {
                _this.$language.next(Language[language.toUpperCase()]);
                if (language == "jp") {
                    _this.$server.next(Server.JP);
                }
                else {
                    _this.$server.next(Server.GL);
                }
                _this.$server.complete();
                _this.$language.complete();
            }
        });
    }
    Object.defineProperty(ContextService.prototype, "server", {
        get: function () {
            return this.$server;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContextService.prototype, "language", {
        get: function () {
            return this.$language;
        },
        enumerable: true,
        configurable: true
    });
    ContextService.prototype.setCurrentPage = function (page) {
        this.$page.next(page);
    };
    Object.defineProperty(ContextService.prototype, "currentPage", {
        get: function () {
            return this.$page;
        },
        enumerable: true,
        configurable: true
    });
    ContextService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ContextService);
    return ContextService;
}());



/***/ }),

/***/ "./src/app/services/local-storage.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/local-storage.service.ts ***!
  \***************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _context_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context.service */ "./src/app/services/context.service.ts");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ng_lz_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-lz-string */ "./node_modules/ng-lz-string/ng-lz-string.umd.js");
/* harmony import */ var ng_lz_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng_lz_string__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LocalStorageService = /** @class */ (function () {
    function LocalStorageService(context, http, lz) {
        var _this = this;
        this.context = context;
        this.http = http;
        this.lz = lz;
        this.localStorageReady = new rxjs_index__WEBPACK_IMPORTED_MODULE_2__["AsyncSubject"]();
        this.localStorageAvailable = false;
        if (window.localStorage) {
            var test = "test";
            try {
                localStorage.setItem(test, test);
                this.localStorageAvailable = test === localStorage.getItem(test);
                localStorage.removeItem(test);
            }
            catch (e) {
                this.localStorageAvailable = false;
            }
        }
        if (this.localStorageAvailable) {
            Object(rxjs_index__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(context.server, context.language).subscribe(function (_a) {
                var server = _a[0], language = _a[1];
                _this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + "/" + server + "/dataVersion").subscribe(function (_a) {
                    var dataVersion = _a.dataVersion;
                    _this.version = dataVersion;
                    _this.language = language;
                    _this.server = server;
                    try {
                        var cachedVersion = JSON.parse(localStorage.getItem("dataVersion"));
                        if (cachedVersion.server != server || cachedVersion.language != language || cachedVersion.version != dataVersion) {
                            _this.reInitLocalStorage();
                        }
                    }
                    catch (e) {
                        // No able to read data version, reinit
                        _this.reInitLocalStorage();
                    }
                    _this.localStorageReady.next(true);
                    _this.localStorageReady.complete();
                });
            });
        }
    }
    LocalStorageService.prototype.getFile = function (filename) {
        if (this.localStorageAvailable) {
            try {
                var dataString = localStorage.getItem(filename);
                if (dataString) {
                    // Decompress string and parse
                    return JSON.parse(this.lz.decompress(dataString));
                }
            }
            catch (error) {
                window.console && window.console.warn("An error occured while trying to retrieve the file " + filename + " from your local storage", error);
                // Failsafe: remove item in case of error (to free space if needed)
                try {
                    localStorage.removeItem(filename);
                }
                catch (e) { }
            }
        }
        return null;
    };
    LocalStorageService.prototype.setFile = function (filename, data) {
        if (this.localStorageAvailable) {
            if (typeof data === 'object') {
                data = this.lz.compress(JSON.stringify(data));
            }
            localStorage.setItem(filename, data);
        }
    };
    LocalStorageService.prototype.clear = function () {
        var _this = this;
        this.localStorageReady.subscribe(function () { return _this.reInitLocalStorage(); });
    };
    LocalStorageService.prototype.reInitLocalStorage = function () {
        this.clear();
        localStorage.setItem("dataVersion", JSON.stringify({ "version": this.version, "server": this.server, "language": this.language }));
    };
    LocalStorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_context_service__WEBPACK_IMPORTED_MODULE_1__["ContextService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], ng_lz_string__WEBPACK_IMPORTED_MODULE_5__["LZStringService"]])
    ], LocalStorageService);
    return LocalStorageService;
}());



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoggingState, LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggingState", function() { return LoggingState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var _user_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-data.service */ "./src/app/services/user-data.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var isLoggedResponse = /** @class */ (function () {
    function isLoggedResponse() {
    }
    return isLoggedResponse;
}());
var GoogleOAuthUrlResponse = /** @class */ (function () {
    function GoogleOAuthUrlResponse() {
    }
    return GoogleOAuthUrlResponse;
}());
var LoggingState;
(function (LoggingState) {
    LoggingState[LoggingState["LOADING"] = 0] = "LOADING";
    LoggingState[LoggingState["LOGGED_IN"] = 1] = "LOGGED_IN";
    LoggingState[LoggingState["LOGGED_OUT"] = 2] = "LOGGED_OUT";
})(LoggingState || (LoggingState = {}));
var LoginService = /** @class */ (function () {
    function LoginService(localStorage, userDataService, http, document) {
        this.localStorage = localStorage;
        this.userDataService = userDataService;
        this.http = http;
        this.document = document;
    }
    LoginService.prototype.getLoggingState = function () {
        var _this = this;
        if (!this.logged) {
            this.logged = new rxjs_index__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](LoggingState.LOADING);
            this.userDataService.getUserData().subscribe(function (logged) {
                if (logged) {
                    _this.logged.next(LoggingState.LOGGED_IN);
                }
                else {
                    _this.logged.next(LoggingState.LOGGED_OUT);
                }
            });
        }
        return this.logged;
    };
    LoginService.prototype.logout = function () {
        document.cookie = 'OAuthSession=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        this.localStorage.clear();
        this.logged.next(LoggingState.LOGGED_OUT);
    };
    LoginService.prototype.login = function () {
        var _this = this;
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl + "/googleOAuthUrl").subscribe(function (_a) {
            var url = _a.url;
            _this.document.location.href = url + "&state=" + encodeURIComponent(document.location.href.replace(".lyrgard.fr", ".com"));
        });
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    LoginService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error); // log to console instead
            // Let the app keep running by returning an empty result.
            return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"])),
        __metadata("design:paramtypes", [_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"], _user_data_service__WEBPACK_IMPORTED_MODULE_3__["UserDataService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], Document])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/services/site-state.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/site-state.service.ts ***!
  \************************************************/
/*! exports provided: SiteStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteStateService", function() { return SiteStateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pages_encyclopedia_encyclopedia_search_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/encyclopedia/encyclopedia-search-filter */ "./src/app/pages/encyclopedia/encyclopedia-search-filter.ts");
/* harmony import */ var _pages_item_inventory_item_inventory_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/item-inventory/item-inventory-search-filter */ "./src/app/pages/item-inventory/item-inventory-search-filter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SiteStateService = /** @class */ (function () {
    function SiteStateService() {
        this.encyclopediaSearchFilter = new _pages_encyclopedia_encyclopedia_search_filter__WEBPACK_IMPORTED_MODULE_1__["EncyclopediaSearchFilter"]();
        this.itemInventorySearchFilter = new _pages_item_inventory_item_inventory_search_filter__WEBPACK_IMPORTED_MODULE_2__["ItemInventorySearchFilter"]();
    }
    SiteStateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SiteStateService);
    return SiteStateService;
}());



/***/ }),

/***/ "./src/app/services/sort.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/sort.service.ts ***!
  \******************************************/
/*! exports provided: SortService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortService", function() { return SortService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/constants */ "./src/app/model/constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SortService = /** @class */ (function () {
    function SortService() {
        this.typeListWithEsper = _model_constants__WEBPACK_IMPORTED_MODULE_1__["constants"].EQUIPMENT_TYPE_LIST.concat(["esper"]);
    }
    SortService.prototype.sort = function (items, baseStat, stat, ailments, elements, killers) {
        var _this = this;
        return items.sort(function (item1, item2) {
            var value1 = item1.calculateSortValue(baseStat, stat, ailments, elements, killers);
            var value2 = item2.calculateSortValue(baseStat, stat, ailments, elements, killers);
            if (value2 == value1) {
                var typeIndex1 = _this.typeListWithEsper.indexOf(item1.type);
                var typeIndex2 = _this.typeListWithEsper.indexOf(item2.type);
                if (typeIndex1 == typeIndex2) {
                    return item1.name.localeCompare(item2.name);
                }
                else {
                    return typeIndex1 - typeIndex2;
                }
            }
            else {
                return value2 - value1;
            }
        });
    };
    SortService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SortService);
    return SortService;
}());



/***/ }),

/***/ "./src/app/services/static-data.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/static-data.service.ts ***!
  \*************************************************/
/*! exports provided: StaticDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticDataService", function() { return StaticDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context.service */ "./src/app/services/context.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _model_base_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/base-item */ "./src/app/model/base-item.ts");
/* harmony import */ var _model_item_release_day__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/item-release-day */ "./src/app/model/item-release-day.ts");
/* harmony import */ var _model_item_release_event__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../model/item-release-event */ "./src/app/model/item-release-event.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var StaticDataService = /** @class */ (function () {
    function StaticDataService(localStorage, http, context) {
        this.localStorage = localStorage;
        this.http = http;
        this.context = context;
    }
    StaticDataService.prototype.getItems = function () {
        var _this = this;
        if (!this.$items) {
            this.$items = new rxjs_index__WEBPACK_IMPORTED_MODULE_3__["AsyncSubject"]();
            this.getUnits().subscribe(function (units) {
                _this.getFilename("data", true).subscribe(function (filename) {
                    var storedData = _this.localStorage.getFile(filename);
                    if (storedData) {
                        _this.$items.next(storedData.map(function (i) { return new _model_base_item__WEBPACK_IMPORTED_MODULE_6__["BaseItem"](i, units); }));
                        _this.$items.complete();
                    }
                    else {
                        _this.context.server.subscribe(function (server) {
                            _this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl + "/" + server + "/" + filename).subscribe(function (items) {
                                _this.localStorage.setFile(filename, items);
                                _this.$items.next(items.map(function (i) { return new _model_base_item__WEBPACK_IMPORTED_MODULE_6__["BaseItem"](i, units); }));
                                _this.$items.complete();
                            });
                        });
                    }
                });
            });
        }
        return this.$items;
    };
    StaticDataService.prototype.getItemsWithoutDuplicates = function () {
        var _this = this;
        if (!this.$itemsWithoutDuplicates) {
            this.$itemsWithoutDuplicates = new rxjs_index__WEBPACK_IMPORTED_MODULE_3__["AsyncSubject"]();
            this.getItems().subscribe(function (items) {
                var idsAlreadyAdded = new Map();
                items.forEach(function (item) {
                    if (idsAlreadyAdded.get(item.id)) {
                        var previousItem = idsAlreadyAdded.get(item.id);
                        var conditionNumber1 = previousItem.equipedConditions.length;
                        var conditionNumber2 = item.equipedConditions.length;
                        if (conditionNumber2 > conditionNumber1) {
                            idsAlreadyAdded.set(item.id, item);
                        }
                    }
                    else {
                        idsAlreadyAdded.set(item.id, item);
                    }
                });
                _this.$itemsWithoutDuplicates.next(Array.from(idsAlreadyAdded.values()));
                _this.$itemsWithoutDuplicates.complete();
            });
        }
        return this.$itemsWithoutDuplicates;
    };
    StaticDataService.prototype.getItemHistory = function () {
        var _this = this;
        if (!this.$itemHistory) {
            this.$itemHistory = new rxjs_index__WEBPACK_IMPORTED_MODULE_3__["AsyncSubject"]();
            this.getFilename("lastItemReleases", false).subscribe(function (filename) {
                var storedData = _this.localStorage.getFile(filename);
                if (storedData) {
                    _this.populateItemHistory(storedData);
                }
                else {
                    _this.context.server.subscribe(function (server) {
                        _this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl + "/" + server + "/" + filename).subscribe(function (latestReleasedItems) {
                            _this.localStorage.setFile(filename, latestReleasedItems);
                            _this.populateItemHistory(latestReleasedItems);
                        });
                    });
                }
            });
        }
        return this.$itemHistory;
    };
    StaticDataService.prototype.populateItemHistory = function (latestReleasedItems) {
        var _this = this;
        this.getItems().subscribe(function (items) {
            _this.getUnits().subscribe(function (units) {
                var tmrByUnitId = new Map();
                var stmrByUnitId = new Map();
                var itemIdsByEvent = new Map();
                var itemById = new Map();
                var itemHistory = [];
                items.forEach(function (item) {
                    if (item.tmrUnit) {
                        tmrByUnitId.set(item.tmrUnit, item.id);
                    }
                    if (item.stmrUnit) {
                        tmrByUnitId.set(item.stmrUnit, item.id);
                    }
                    if (item.eventName) {
                        if (!itemIdsByEvent.has(item.eventName)) {
                            itemIdsByEvent.set(item.eventName, []);
                        }
                        var ids = itemIdsByEvent.get(item.eventName);
                        if (!ids.includes(item.id)) {
                            ids.push(item.id);
                        }
                    }
                    if (itemById.get(item.id)) {
                        var previousItem = itemById.get(item.id);
                        var conditionNumber1 = previousItem.equipedConditions.length;
                        var conditionNumber2 = item.equipedConditions.length;
                        if (conditionNumber2 > conditionNumber1) {
                            itemById.set(item.id, item);
                        }
                    }
                    else {
                        itemById.set(item.id, item);
                    }
                });
                latestReleasedItems.forEach(function (day) {
                    var itemReleaseEvents = [];
                    day.sources.forEach(function (source) {
                        if (source.type == "banner") {
                            var name_1 = source.units.map(function (unitId) { return units[unitId].name; }).join(', ');
                            var items_1 = source.units.filter(function (unitId) { return tmrByUnitId.get(unitId); }).map(function (unitId) { return itemById.get(tmrByUnitId.get(unitId)); });
                            items_1 = items_1.concat(source.units.filter(function (unitId) { return stmrByUnitId.get(unitId); }).map(function (unitId) { return itemById.get(stmrByUnitId.get(unitId)); }));
                            itemReleaseEvents.push(new _model_item_release_event__WEBPACK_IMPORTED_MODULE_8__["ItemReleaseEvent"](name_1, items_1));
                        }
                        else if (source.type == "event") {
                            var items_2 = (itemIdsByEvent.get(source.name) || []).map(function (itemId) { return itemById.get(itemId); });
                            itemReleaseEvents.push(new _model_item_release_event__WEBPACK_IMPORTED_MODULE_8__["ItemReleaseEvent"](source.name, items_2));
                        }
                        else if (source.type == "storyPart") {
                            var items_3 = source.ids.map(function (itemId) { return itemById.get(itemId); });
                            itemReleaseEvents.push(new _model_item_release_event__WEBPACK_IMPORTED_MODULE_8__["ItemReleaseEvent"](source.name, items_3));
                        }
                    });
                    itemHistory.push(new _model_item_release_day__WEBPACK_IMPORTED_MODULE_7__["ItemReleaseDay"](day.date, itemReleaseEvents));
                });
                _this.$itemHistory.next(itemHistory);
                _this.$itemHistory.complete();
            });
        });
    };
    StaticDataService.prototype.getUnits = function () {
        var _this = this;
        if (!this.$units) {
            this.$units = new rxjs_index__WEBPACK_IMPORTED_MODULE_3__["AsyncSubject"]();
            this.getFilename("units", true).subscribe(function (filename) {
                var storedData = _this.localStorage.getFile(filename);
                if (storedData) {
                    _this.$units.next(storedData);
                    _this.$units.complete();
                }
                else {
                    _this.context.server.subscribe(function (server) {
                        _this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl + "/" + server + "/" + filename).subscribe(function (units) {
                            _this.localStorage.setFile(filename, units);
                            _this.$units.next(units);
                            _this.$units.complete();
                        });
                    });
                }
            });
        }
        return this.$units;
    };
    StaticDataService.prototype.getFilename = function (base, localized) {
        var _this = this;
        if (localized === void 0) { localized = false; }
        var result = new rxjs_index__WEBPACK_IMPORTED_MODULE_3__["AsyncSubject"]();
        if (localized) {
            this.context.language.subscribe(function (language) {
                if (language != _context_service__WEBPACK_IMPORTED_MODULE_4__["Language"].JP && language != _context_service__WEBPACK_IMPORTED_MODULE_4__["Language"].EN) {
                    base = base + "_" + language.toString().toLowerCase();
                }
                _this.getFilename(base).subscribe(function (filename) {
                    result.next(filename);
                    result.complete();
                });
            });
        }
        else {
            result.next(base + ".json");
            result.complete();
        }
        return result;
    };
    StaticDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_local_storage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _context_service__WEBPACK_IMPORTED_MODULE_4__["ContextService"]])
    ], StaticDataService);
    return StaticDataService;
}());



/***/ }),

/***/ "./src/app/services/user-data.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/user-data.service.ts ***!
  \***********************************************/
/*! exports provided: UserDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDataService", function() { return UserDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _context_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context.service */ "./src/app/services/context.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _model_enhanced_item__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/enhanced-item */ "./src/app/model/enhanced-item.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UserDataService = /** @class */ (function () {
    function UserDataService(http, context, snackBar) {
        this.http = http;
        this.context = context;
        this.snackBar = snackBar;
        this.units = new rxjs_index__WEBPACK_IMPORTED_MODULE_1__["AsyncSubject"]();
        this.itemInventory = new rxjs_index__WEBPACK_IMPORTED_MODULE_1__["AsyncSubject"]();
        this.espers = new rxjs_index__WEBPACK_IMPORTED_MODULE_1__["AsyncSubject"]();
        this.settings = new rxjs_index__WEBPACK_IMPORTED_MODULE_1__["AsyncSubject"]();
        this.itemInventoryChange = new rxjs_index__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    UserDataService.prototype.getUserData = function () {
        var _this = this;
        var result = new rxjs_index__WEBPACK_IMPORTED_MODULE_1__["AsyncSubject"]();
        this.context.server.subscribe(function (server) {
            _this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "/" + server + "/userData").subscribe(function (data) {
                _this.units.next(data["units"]);
                _this.units.complete();
                _this.itemInventory.next(data["itemInventory"]);
                _this.itemInventory.complete();
                _this.espers.next(data["espers"]);
                _this.espers.complete();
                _this.settings.next(data["settings"]);
                _this.settings.complete();
                result.next(true);
                result.complete();
            }, function () {
                result.next(false);
                result.complete();
            });
            _this.itemInventoryChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(3000)).subscribe(function () {
                _this.itemInventory.subscribe(function (itemInventory) {
                    _this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "/" + server + "/itemInventory", itemInventory).subscribe(function () { _this.snackBar.open("Item inventory saved", "OK", { duration: 2000 }); }, function () { _this.snackBar.open("Error : Item inventory not saved", "KO", { duration: 3000 }); });
                });
            });
        });
        return result;
    };
    UserDataService.prototype.addItem = function (itemId) {
        var _this = this;
        this.itemInventory.subscribe(function (itemInventory) {
            if (itemInventory) {
                if (itemInventory[itemId]) {
                    itemInventory[itemId]++;
                }
                else {
                    itemInventory[itemId] = 1;
                }
                _this.itemInventoryChange.next();
            }
        });
    };
    UserDataService.prototype.removeItem = function (itemId) {
        var _this = this;
        this.itemInventory.subscribe(function (itemInventory) {
            if (itemInventory) {
                if (itemInventory[itemId]) {
                    itemInventory[itemId]--;
                    if (itemInventory[itemId] == 0) {
                        delete itemInventory[itemId];
                    }
                    _this.itemInventoryChange.next();
                }
            }
        });
    };
    UserDataService.prototype.getEnhancedVersions = function (item) {
        return this.itemInventory.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (itemInventory) {
            if (itemInventory[item.id]) {
                var result_1 = [];
                var number_1 = itemInventory[item.id];
                if (itemInventory.enchantments && itemInventory.enchantments[item.id]) {
                    itemInventory.enchantments[item.id].forEach(function (enhancements) {
                        result_1.push(new _model_enhanced_item__WEBPACK_IMPORTED_MODULE_7__["EnhancedItem"](item, enhancements));
                        number_1--;
                    });
                }
                for (; number_1 > 0; number_1--) {
                    result_1.push(new _model_enhanced_item__WEBPACK_IMPORTED_MODULE_7__["EnhancedItem"](item, []));
                }
                return result_1;
            }
            else {
                return [];
            }
        }));
    };
    UserDataService.prototype.saveEnhancements = function (enhancedItems) {
        var _this = this;
        if (enhancedItems && enhancedItems.length > 0) {
            var itemId_1 = enhancedItems[0].id;
            this.itemInventory.subscribe(function (itemInventory) {
                if (!itemInventory.enchantments) {
                    itemInventory.enchantments = {};
                }
                if (enhancedItems.some(function (e) { return e.enhancements.length > 0; })) {
                    itemInventory.enchantments[itemId_1] = enhancedItems.filter(function (e) { return e.enhancements.length > 0; }).map(function (e) { return e.enhancements; });
                }
                else {
                    delete itemInventory.enchantments[itemId_1];
                }
                _this.itemInventoryChange.next();
            });
        }
    };
    UserDataService.prototype.toggleExcludeFromExpedition = function (id) {
        var _this = this;
        this.itemInventory.subscribe(function (itemInventory) {
            if (itemInventory.excludeFromExpeditions && itemInventory.excludeFromExpeditions.includes(id)) {
                itemInventory.excludeFromExpeditions.splice(itemInventory.excludeFromExpeditions.indexOf(id), 1);
                _this.itemInventoryChange.next();
            }
            else {
                if (!itemInventory.excludeFromExpeditions) {
                    itemInventory.excludeFromExpeditions = [];
                }
                itemInventory.excludeFromExpeditions.push(id);
                _this.itemInventoryChange.next();
            }
        });
    };
    UserDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _context_service__WEBPACK_IMPORTED_MODULE_4__["ContextService"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])
    ], UserDataService);
    return UserDataService;
}());



/***/ }),

/***/ "./src/assets/css-img/access.css":
/*!***************************************!*\
  !*** ./src/assets/css-img/access.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n/* \r\n * Generated on Mon Sep 03 2018 14:37:25 GMT+0200 (Paris, Madrid (heure d’été))\r\n */\r\n\r\n.img-access-chocobo {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAC/VBMVEUAAAAvVIguU4gtVIgxVIkxU4gxU4gtU4cuU4gtUYUvU4gtVYkvVIktVIkuVIgtU4gtUIUwU4g0WIItU4gyU4guVIguU4gxU4g7XJX///8AFz04Vo8BI1wAARo4XpkAAQEBHEoBGUEsVYsBFTcACjYCFC8CHT8BECkBKW0BJWEEHkEcGxgBIFUBHEcBG0UBHVECLHMCJ2n+/fQ5WZIBLXsAARMbFgxPdbQBMoIpTYABJGcAIlkJGzwAEDcBBRYACikrJxA4YJ43WpUyXI4AFkY9Oh4AAArSyp5AYp0AG0/b17c6YqM8X5kBG2qQhEBaRTxhVir//OXj3cJEbrLHvYvWxYQAK4G7sX61q3ipnWUCJmQAGlyFe0J+dT5uZzlkXTRLOjFWTywAByMCDR8tKhrt58tOeLs/aakzWpItT4YjSnsAI3YAI25wcWgAF1OYjlB4cDoADTDq5tTKxJvNwo8AJo0CNYsrToKtpHCUj2QOM2S8q2Khl2EfNlifk1eEfVZsWE0AE0BFQz8GGjp3bStORR83MBr4+O260Nfo4sLUzauOdGiLhGYAEWZ/clttYFZATE+Qhk2hk0hdWztRQTuDdjNOSSZFQCUlHwkQEAfz8OTz7tfl4Mvb2MPt5K+9uZQrWJLBuYgAIIGpnoAAGneuplypnVswQ1kSKVdjalMwOkZdS0VKTjs/OC4/Lit1YSAoIB9dTxaaZwdyPALT493++NTGvaWGnaGPmpCcnYGLjHxLZ3hHYm1ZZmVJXVQAFU55bkgjJT9tYzJSQg67hQn//u389eC2wcO+tLSusZ/f150BMpvzmn3EuHUyVnR1e3IXPW0kQWciO2TLtWN/T0YYLUQzNS8YIStvHiFnWxqBcRcOERY/NAVcDAJhLgDExrqUrbBlg5uurIxce4Lo04HSbH9PW1rnxVmzTlbEjErYSkK3mTXJmS6YWCORSB6VIw6HOw3g2qj/+6Glf30qPG/wtGv+22g2Sl40Tl3btUq1jTG2WC2rJSrjtxX/vQClfxv9AAAAGHRSTlMAH36bcwkLkHprJ5ubm7uYiV7+oQ2joA2p45TaAAAHSUlEQVRIx32WBVTbQByHGYy5KymFNAtZW1K3AR1tYZSWAi3uLmMMt+Euw13n7u7u7u7u7m5vV9igg21f89Lkmu/9f3evdxetdnT7dPsPfXS1utJ9wNCBOjr9+vbT+U2//jp9+4HbvjoDRwzQ7mr0Dufqcbl6epZcLle/HfUNF7Tp6YdrdzFM5WGGhoaWlnaGlnqGbdgB1PeWloaWtnJT7U7GxDFhGDkfI2Nj89H80W0YGxvno2NBIzmfjNqOSdb+03B2JsPWfL5IZKCG33rigwbwLRKJ+NZwsPMYUEezxvhgmIwSEIROIjEBtFaio72j6SQGAyGgZFgUBhxNA4MxxJhOYgqJ6o8Xm82msCsq0rJ3e1NpNBIdQVCYD5xemgZKYpBoRCrADMBmm0Wyt89/9VWZZk/1ItKYdDoBFjmPSVY7PbqHy51RmExnkIRE8DiFQmGxwClSdczx8RPOsccsMzaVSmTSGSgcHCYPH6yl1WeAfthoOMgKGF5eFDNqBKsV3omXTz48f3T/2/tH9iy2F1HIZJAwmGyr31NXq89wPQsyTAAG1Yttv+nImQieGrfFLy5933fp+vPPL3fzWBQ2VUgyJohEo+S9emh1G6hvMRYm0EE/2BGnHKHF83g8ExOTpMx9a26sXXvjyprrK0zcWBQzIY2OGmDj9LpraXXTAYo1whRS2ax5JyFO6jwTNUfn3ViZOje1YO/1V2eS3Nx4FKqQiQTlW2ooNGKFPW/eHU6Ji5ub2pizI2E/BEGTp3teWbbtxMSFmWwijRFEmNCu8HNp1LtbKypmznBZf2LOpEmT5mxfP3UKpIajyNq7ssAhLZJKBMqsX4rhWAMGMTqRs2lJwfHp6zcDJenjvYf3HrpCN8vvOE1JXH1xEQ8kI9qIfyn99e3USsWyIxzH8oLpoa6nkiaZeK559ubHmpsHyzc7xacrTyWBAfAiksTGbcH6ci2MgWJfne4EhfrMnObqO+nojqdrz71Yu+9pazL3BoclPLViY9SuGLYqmbWuJe4x7u6Ks3Vuy1auOXb/0tp9C0plG2TpdZksoLCJTKPR4373ZbQBiUiJvLA6Zra/v0dKxsqWwGzp6i/PPBRO02UZoO/LTNzUio2GYgwUs4jT/uXTXAozYpvnbpieuCdbAbWhWH0xjTcngmLWUaV/m2L/4Gx6YKBrtqRwriPESQmFoPgSaGopGGnXuqSkbSeBAqpM0KwSudBh764Yh5bCUAgY8dBkaHZGgstkyMnJ6WzdovRd7L8Fs8/0dRC0yECW0pnQfkeZZ8qV2RzZNGi2S/rlXWmnz3RR2JERpx0kcCBIBXkkTJXVKOOhqZ6Xs6elJDgpG/Iitld6dwrm7T1xIh4oFfisB5FmFjRc2wsCQvMv+zQUOLnH7lkeGeWZtvPP7pvaL1p3W3hwdoPHFA7ESahZVuMITZ2flaAoUSpdswulXls8Fu78I5jV1uJ3meuG3F4XoyyFOBxIdutwukuDMlQhS3FIzfDzDUnb7Fm908hYM5jV3eIl27dUb3RP9OAcCA2N2VG8uLkpxfV4TVZG4y6fRjxzS9bijmBcoNC9d5fllKnKlpZzFrgUz6ytXbw1avW6TdccPI4s8M3YI8EvpJY/iO40YovOBSwNKBNshqYtiCo+7L6hSrWheGNqoY+fvx/IdTUwq2oJDSga84Vqb3yuKqdeUApBjqnbbkUdyllxaEv14Rl+EqlUGiLAK7Orz4MqEzoUBPwtdy/NWSVxnzJ58v6TF1RVOaqouQFRjq7HfQslcMvyyrw8GkmsMSv5dCGVRQ+ox6W1iYp46IAqoH5pJZ6j2jQjsWRBTKykZXlewEVvesdEtgAKU0ipLsJxiU9igiL+gKx+1fL65WUBc18r3LM8Y6UCPARnEnOBorko0YgLA1bgeKOnzKXUY35JnkAQsFRa6+JRG1MTWyTAW/KiduQaoOq+/Fr6UBKN6r1CFdJc5JflOd/n2ox4AY5bB8YofX19fPZIBAJVZdWS3CBsnB1Q+gzVMyRbmzOY0QvLVgiamwtjfWP9pTUz6upXrfLzc/CP9fOXNgtC8s6TcgnBweHyXrqtyzgGi62QRQejRLnkYLyoqakopFFZ+VZVFBhY5+/fKJXgCE29N5HBMs4Fy/hI7XC5rQiOs/q01dwKwTCxwVUcv4pLqg7lSJqaGpuKJIJgGwoVbDAobG0RljxY/YqgnTzGmQ9jdCMbJgHDyABxXJD1xo2rQkJwPFgsjrNi0pgMRhxsbTs+eVDbK0MvU7WDkhC6DQlsiwQURc3RbefFWJw5SiAgDJINYzSoAduONx3UKrQ7mDmCMJBcsMeCA4kzQghWAARgBar/YQC0gSOCRWSQwsjcyNwcAyfUHGAEiBOLgwzUqUx7tgttji2ZT8YwlNAFFMXIomDLTgZwkuUWo/5NuIU8GRidnCFcuZ3eP7CTc8OB0ZnBPbV7af8d8EPP3lp/occwXV3dHr8P9XUPcPHrcljHcz8BGGSwqo8FdUwAAAAASUVORK5CYII=);\r\n}\r\n\r\n.img-access-colosseum {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-access-event {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAC/VBMVEUyUog0T3QuVIgvVIcsUIMwU4gyWo8+aJo4W4xshJsuUYYwUoctUIAuUYYwV5ApQWIuVIgAAAD///87XZU3WZEAAxMGGzlAZJw1Vo4pTX8FG0IAAhsUAgE4X5oDHFQEFDEDCh5OdLT+/+I2W5YDEikhBwEvAwL+9d9AYIo8Zqc5W4gsPlUxIQJ1UQktT4ZJQWEbMkQVGzAAAAyEAQP//+rnq6NLbZdEZJAACyx0BgoJAQA1VYZMTmkQN2gLI0r4DENjBxE7AAJcXHFyQVlRKj4jIhSvtdiLxtcHGWejamYLKWF+T0whIzfFjDGdAh0XFQdPPANGKQHL8//+6dr43tPvxbjqtbStnLQyV5R7ZGdbal8tMktiTkj/4TkZLjUrNDMPFyXpABPs/v8ZwuMZbc1TY4MXRHmOW2kcPVETJD/HAC7IlAxCDAILDQFh8v55/PyU+PwNtPn///Rc1vFZjt1tob5BcLLKtKWqfnixRXc4YXbDeHGyl2ZYUGN7ZlGUbDiwixiANwqu/f7Q2/qB3viXxe+Qq8rw2MGAhbUcYav2kaJMcqHGlpCLbHw3bmpIPEQJL0FAUEAvPz0ADjqmgjN7ay95BSlMKSasECFmTh84KxnMABRRAwZiOQQ3tP/w5v4KO/hA1PVct/LUwde2zdINkr4HOJ52e5rUnpWydZOUm4eafYVviIJUSn6JkXsrSmmHcGeMHWGai1QuJ0prS0Z1GzhoOy66ZyT/ACCGAxseBQ6gcwgWj/sRcvY86vDh8OqNp+e33+Mal947nrvXvLhAirRafrFIVaqXiKfMQaZsc6H5a5hOhI7PfY322IxwbIN8UHFFTlRYYEHdiTJJGDJNRCs7HSCPch6bVx60AA0A2fyz5/T19e+K09yd+dNc0cyDpKqmiZojm5nVypIKXILWuGqYQmUNTmTDTVFygkmkCDqZoDXKvS0pSytCMfXP0eElT946pN1ms85Ld7wJRrlXk7dRaayKzKPugZ5gqZ04VVWJbvn2QqvwyGvSUli3jTzRAAAAEXRSTlMBD5sfgXijJ4EQjnKjZiopvL0VGd4AAAgfSURBVEjHfZYFVBsxAEBhY653NVbf6tRbSo3Slra463B3H2PogLnhrnN3d3d3d3d3f0sLG+/N/mtySe7+izaJWRe9uv+HXuZmf9JvcP9u/2awxV8MHhKBRCAQSPCw/AXIgALwwpL3hzNgCIZFIFAoSKNEoQy3VCoth1Mo4GMCBUkhUFiYIRa/G0NZJCqaSiWh0eCHjgh/oAqPAAljngpekFhDO50uYxQZEuFQZDKOjMOhRIaWzwKDQYTDGbNkUACRR3U6XQY1jYpGYwG1tdU11TJhc7NQdrqmurYWFBGxaCqEMjldxhtSpGqFHTYJi5bJHpU01pc0PKlvKKlvLHlEqsXaEYlYLBpCgbb16BwrYMgMBfP3xWGTZKTwJ+4Nms1h7hc17mGbNQ3uT9B2ACLRDgvq6XDM+/Ewo0iQ/YL5uzOWylZMXhymfax2v3Cx9Cn3grv6cWrY0ncFRBNYiMzC8AaYmQ0cbMlCQ+wFgXtipo8s2LXT/gI9WR2m8ThzpqEtTJ1M27I8draUaGfnZHRkBGRfc7Ne/REUKsr25uuMrJnbHHe+DebSPdTu8mS1Olnurvagtz+KzcpUYl2cVCoimczD9DA3694NScCiVjjsTt86c+v4kVMqvNq1HqW0JnWyB720KbXdOzQnJv1KvFPOiwNEGckS0c/MqGASw+Pn7pyVPnPrDsd9EZDXFu0YrlaTquWO0XK9IPzN7duzR070+XLARYZFGpVePZGsxPC7EydMT8+adX3PKdclzlyvM2EcCOKEnfHyXrmkMeJGzLbx454/n+ZCJHYqUpYdShWbOWtb1qzso64BMMzx3lD3NCXlad0Gbw4M+68PjrmcMWHmSFa8C3E4oodRsbGpSlTNHzf28nTHxesljLzCMfQxGzZcv7ahFCQK86wDUp/dzoRnZ+e857MJFFMtiGmfH0yZlz02Y4e7N92XIRaLi4ouyj8c1VxcXbRJLPZlcLzHNGeP3+U4me9CoJhqIbAS2XtiLmeOcPf2pPn7Nj0s850TeOf48TuBc3zLHjb5TmrhcNsTx46fu9/JjkAwKRhm0ql5u69E36N7cvBLJkn8/fytYRPWICkJyDvn6emlqcicOEUlsOroC3PIioJ5jvAkMJ4KxfmE3FzJJGvrYQBr60mS3FzXRk8Iz+F679m9r0DFtDIq/ZXMqgc5u8bW4c/qEvSKzefzfBnDOmH45Z3HK/QJOn1J+92sefFsKRLM/qD+VnHhhqU3rl/An120NwEF6SWMEfCIYaAi40Oih1BBe+/riryXO2LYAiaiQ5GGtxSvrvficHQnQ+vaK/1dQ4OuwoCrQaHFAZXc0lCdbu9qTv3q4ogkkzKwpxVTiDrXAtGBs3lZCrf46vKVa4PgwmNw8NqVy/2KuSnL1hSv9sZDLefI6M7uI5iRKAM+8VMzzTC6rpQbMAKGR7gWTv1eGGQcuABuaZ29QaGIC6bhZEIloWNemFV3C2rGZxTTyJO/bWkOYAxjWEvEkkJ5gDVIBjRvuTc5kgaN9amOj6/qVCgEVXxsduauEhokmJCX6urHYDD8nOViZ79hDIava2rojMmeHEXF2Gs58S4IRI8+oC/DWSqXUePTl6amKdYt8zkepHf294XhRWUwzJjkrA86Pm5iBMTBCzIc3zuBBfNTcZryaXaMAX//0KqCaHjxksBbp4vu5N6rPxd4azEMT+SvoqWJXs1+Od/JZThQjP8Xgsrp7ZR96UsfHzqUT7tfFg1HO1RuSeGmVJ7YAfscc1126Gs+vmL6y5EHnIhAMQ4ykmfnwho5e9br/LOrNB5RYp3z1OhxRWEpRTNguHxdlFizSr9q843pM4GCBYpxKi15aPb+2K1ZMachqGGj2kOr1TjDDileO+GFOpqHOurhMwiCXqVvi51GxCqRJkXJFCZNic3avn053nPvVLGW3iaOmjGX2+gwo1XcphVPhXNpEJSdERM7H4u2+rnGhOhpEwKDP6yE8EGwK54ub1WPu8kpc3ixsVVOb5nLcMXjFcHBBycgatEda6yblElyuzVn0boSPD4NCl1L03g0bXQ4ut7v8Nz8KA/6+cbQNAWNBmmPzVniRlJKwVQCxYoUcXDOIl0oygBaQJfLk1vzZyxbaK3LGbcxOZVOx3umeRqgs4scFrjJlBjTPsaUkiJPHDy5rnpeBR6iaTZturTximO537CFttHHopraaFo6VHXbk37y4AkhlWlUBvZHSCNFa/j6tRW34/h4+aZNyVEfJ+rK/CWS8sOZ+VGX5G00xYp3zxR6/hoc2QrTw7SNTxNCbqNP1dSUO+jb5OKo1qnXyhc6r1+fsPDkZJ+p+ZdaL8nXBdqjImzdoEiMcRs3t+BhCChFRLjAbcGOlYUJH48kHHVbG2TP5492lpQHOk6QHDlyJCHwsKD6VJoIYzwsABbgaAVnIYnMP+wQHe2TwwYzJ2LHxdlW5jmvWbPAx8fRxyEuhBqZBmGGDulrZqLHkKFDyRCVVGlra38CVI9afBpysweMBvD5toCQSCoEEUzGT2f/UBFETQphs4VCIaomNxhF4tvzQwQhtnx2iNAtJEQIDEqX0dk2FCQSoQA4XEiwEJzcJBxI4kCEEoEAiX4aXc5+ApkcTqUK2InoKjaISbIkNltAQguSBAIqmRyJ6DS6MI4bk8mT2thMk1phbGxsrKxsOmKp1IaptMJgfjeAo0RghiMw4MpjvPtYIjGWPJ4luO4gjSUYDJIHjN8Z0NfCondvCwCIO0PvX8++YD7+xNzcvA8IIDaFPn26YkDXdz8A+C/GiGI8EFgAAAAASUVORK5CYII=);\r\n}\r\n\r\n.img-access-key {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-access-premium {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-access-recipe {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-access-shop {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-access-stmr {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-access-story {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-access-tmr_1-2stars {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-access-tmr_3-4stars {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-access-tmr_5stars {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-access-trial {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-access-trophy {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-access-unitExclusive {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}"

/***/ }),

/***/ "./src/assets/css-img/ailments.css":
/*!*****************************************!*\
  !*** ./src/assets/css-img/ailments.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n/* \r\n * Generated on Mon Sep 03 2018 14:37:25 GMT+0200 (Paris, Madrid (heure d’été))\r\n */\r\n\r\n.img-ailment-berserk {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-ailment-blind {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-ailment-break_atk {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-ailment-break_def {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-ailment-break_mag {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-ailment-break_spr {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-ailment-charm {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-ailment-confuse {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-ailment-death {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-ailment-disease {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-ailment-paralysis {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-ailment-petrification {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-ailment-poison {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-ailment-silence {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-ailment-sleep {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-ailment-stop {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}"

/***/ }),

/***/ "./src/assets/css-img/banner.css":
/*!***************************************!*\
  !*** ./src/assets/css-img/banner.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n/* \r\n * Generated on Fri Aug 31 2018 22:30:10 GMT+0200 (Romance Daylight Time)\r\n */\r\n\r\n.img-banner-banner_blank {\r\n    width: 1200px; height: 110px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-banner-Fina {\r\n    width: 309px; height: 160px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-banner-Jake {\r\n    width: 349px; height: 160px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-banner-Lasswell {\r\n    width: 255px; height: 160px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-banner-Lid {\r\n    width: 306px; height: 160px;\r\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATIAAACgCAMAAAC4wRALAAACWFBMVEUAAAACAQHM//8GBQQFBAQBAQEEAwIEAwMEBAQDAgIDAgLA9fsCAgIBAAACAQGfk4i6/v/M//+39f+BeG6xpp/J//+C5f+e9v/N///M//+19//N//924P9Nxv9KPjhlVUpMxv++pKRxXlfav7wEAgK1JCT/8ui/JiYXExUcGy7KJyZUBAT70Zs7N2stKz3814RfVpfsr6H82ZOkHx5jBQUpHRPWKCfZcUbcjCcwLFaNeLf+sLCNSxLruFT+7Mbyu6dHQXc5KBhKxP/vwVB7CAgpBgU5BwbSydn2sJTGydb56t/5pqZvBwfiKiZGBQW8iS1ROyv+/v5BMyL+23J+FhZ0JQvznJzUXlybWhrYbGiSMhJoUIRqVjKVkJtUTIilk6XeioGMdEyUHBzxynrzyo7slo/YrGp5Yj3v49vn29FcSi6NVyBIQD4/NDLeeXjVpU2ODg7huHh+TRzphoZnSkLjcWpRSUqZdD3azcT318hpPxj94pvowYWIgYKoZiPBvcpaGRBQLxT0yrzOv7P85bL1yWOeg1b+hlHMPDv74tbaoZbJlIe7m2JpHxHHo2q3h1CyeS3eoSpKFA0yOnimcmt7VlKBLA++tazGl0JgWVj+cET/lVnQZT1CM1PjCgmRYVrhsVG9e3aulGG8Y1vru2zMT09tZWDMfybNkiWpV0/KlVm/QUFn1f/m1a/ZjmobVH1hR2oUOVR5PzbEVzJp2dSupLN1cHO8FhbCbRu8q8dfw8GMXz/JroP+q2eTTEXd//9PpKioPx13ZZ0+gorxTDAzZWTUru+kicR3sp9aAAAAJHRSTlMA2f4gwU4+XjCtfBWdjm39/uYx/f3L/v2ohUlm2njiy7ZvisyvGMjHAAAwjUlEQVR42uyav2vbQBTHZeQfdXD8V1hIyFM4dbqpUGd5wZRi7tBWDBorCtcunTKKhi7FnUsGDUVb/4D+bX3v7qSzIidea9lf2afzJW3hw/f73lMa76L/Uv54Mr8eDoazq8lo/Mr3vYtexDWZDRZPNJgROu+irvzRtcPV0XRysVtb46sG12q91Fqv17TeriLrtquxd1HNaz5teN0Sp7bWqNWCNLtAI72azyyuyOC622xZo+0msdxuI53PCzSsXy6Pd5pV8ESMbQw1A2048s5Y/qjuj9Fy24bVpeagDc63E4ymFtiPLXsWVrPZJjqfBtrVWUIbTa3B7pmjw9xLL218bwma7QTnB21c1/wNC47JwcN8Omjzs4LWAPvOHJPj4Cy0pG6f1+cCza+BRQisA+U4OmRGnWBxNtD8sRkrog2rHfYcN3YYI0vsoHYmNa0G9vdIBNmRkDJqoRaa12f5k+GC9DULalWOz9FkhvpyYtu1Hjl6/ETgXxmLPUAZGOXqWCVztA6xYxvttFlf02nL/jvBLahSCNnJ3PO0wvZHC+37iozWz6eosQnlT+BgLQaQB8cUmsW+HbbmLNj+iKh3ev2TIRbtOOc6lhXg7ulUxjq83O6gy0KdTjLa1OubLLEHzk0sU07sXoxkaF90ua07d+/tPRU0r1+yxL5xbmKZcZQ6Xu73b2H3qr/O7ns3bbyaNsS41KEkHa1j+6TCjsn2W2dFzPrUA/xrk0prLcm1mtpftftmA8rGcZ8ZqjlosJF+07TRnwGN5jEiZq2V45qVzmRl1nVWm50lVlNrK4jpu8QuwlmjN/93N9HEHjkpDYQOp0STlSAQoBAHZwrCU7vK3Dpi5iZpiW9+EbOezLTjoSMGVMaIEfAqR3QVQF6VQQrVoSGsy4u2zRe29iiXBO7bu6gvo4Y/c8R4amtYybMMdyVAlaky56njZBbHxtzczonVyLIiLCrx+L4vI62OpSVmQokSuAUo0XBSBTlIZy7DreyULfvJ0XPIQpHFGZewe43/0sQ7eWmT7TCSuUmmGf1xpzLFdeGXGZ65EkZ32eZkb857Rp+IWSwxlKBK/AtvftKj0+m3ADLZTypiGS5cVAFJkdnqWTYjVK1Ypgf8xdxBGxkUaDNIFbr24SMiG3qnLjTZR6CKDyhDDPe8DHKeH2iUdOWtKt9RjO+Clrd39FFliIzzFJDZLhqc/nQ2oqGfAlg6YogMN7I6DCxM47CrwAGrrRXeJbQvAGJOwQfObz73oGsOqfQrnUVHTB54Am/Ge1k6TA7VJwcMVXL6piQJ6CjjCij1gF57eIPMTns4mywWn0GZHtkQq9q0nMGIQJHHquhEMnjrgOGac4lnyVKfFnVvAfQZPQTMvROWP8BYmiIvLLHuz8bCBhgKeQnYT2asX4y1cilA4dlyvdZngquQA9e6+YPPAN4Ja75Y/DLESkgdJ3cPncuMrVSagYzVF5M/WccyaUGMAbDm0+8b6D9U4AcppBQc9bA66QbgLxavPxg2CoIX1OQwzUSWlWiiGMFI8cUSo0Ifo6zLChAqDpNbSiYRFPQu6BzT+eekf9o4wyG27pHqIKr6siqESEUuFCghY7xrQMEywUIflwWeGX0B3AbJ6n6ZhMRWpXGcpbgt0GaPp9wA/lFzfj9tlWEclwyGEIGLeW9iXta3pxmo5z2NOMSd5LQXelab2lCIjSmttA4GlF+iOIk4bNAwYAvGmWgQxjbA4AUXMrOFi11s/5bf531Pzw82yx3gl66ccbqFfPg+3+d5354DBoxkFU6mxhtvXthPYiQFDrhsMDM5OSiJ6QLIIrrWPwmEpMXB3t6PFjVd8FhCpOVXwDIzSkf9WJR99z+uTGT/Tq1rxnzb0UoZFGRv731tMqMNDmYyiyHIBq94wg5p04OZ3kHpscsYJ7SQJXg4LnAiIJTmfq3R7FxDY2PDmV1TNSP7fYiCFgsswpWQ6gglJ7DuL6pOKUDsFoukNbQE6qX9vYMYVwiZiPBkLGJbQWSLqjJf+S/RBQ51Tc1n80JIZH/4z9pvhnsx5pTlYnBhpEuL8SQnZL1Ukv1UtZfhM4oyfsgTSDlAlg/1NHn5pzjCrMYmAZjV1b3Wegat1oTsD7B6cbrwZn41kk57vIhCHhZLxNh+hpCR9OnFRW0RFQtkumDmPf4ym719B9NsjdnagdZ05qC9Stnv6XiTac4Iq6kHhZWIYMg6zGR4wkHmYhnUrAibzzAesWGzILOPak2z5xmrXOAK2lm7YwUmy9cM/sBWNZ7/vHzf7zGZYgwNpL8/w+IKWRVOBuslEWfJfs7jQpS1oCbXaowZ+EkOLOy1OdDO1L0X+NZS+nEm87ssfX9Sq3qMDKUsZoAYkMUUsmp37L28qAvO9vt3GCrzaNNc3IjVmMzqmbGw0HOjoqDVn6ErbluUyfSXX2EXHGDpQPfgERsQo2vH5u/150aBjAeRIcrKcOAOnYlYdrsWFCE7X6OP733Ts9C5Ncvg4bq6M3PtKNplLMAp7+Hyg3NlKVoOsbIilgQxILvHGJARSE0Js4gtkfUbLCJsWZlR9aCnHSBrrJH/TxZ6ejo7C3NkNOPM3OOD9Xg6gEp5Legx39uUtmcxRQyDAlrlaA7Ipl1k5WpaaTohvTc6fUgNwCZUPulxtMxa+d9DyDp/mJs1wMw4I7f4YPDX/cTSL2uXnvSyxOURg0/4YQbABj/wkGmWk/44wiv4aI5OxQmZghZVLmvHlNFcYz8q1bMAZGDWN5FijPMzwQw/yu+kt4RTlr4i9SzmhZnwe8xyiPWD2E8/fu9DZjsmw5FA2VLRJhkT9oHmUzQaqoUMewV8r6fnHWL2R/cwJdqZYOaEf952UNk+YAGPqc92XvKqErPi1CqJ2NsfXvxaIsvLU3bVZQeEbD03KG2WkGEWlRYjaVpNZA0IM0JG+rh7VSZa0+n3AKcu0xGFzNKPliSevSDThc9jdpAYIdthTJcZBWRKZRrZNnIfDE4rm/0GUuDlYKuNDJ3pek/PNxJZobt7e5Ua56lfm3YOdQlKGK1UWQrfHBt6IcjaRVodOB67A2LJww1F7OKPHjLLncBklOVyX38wuoNRP2KDk2czhaxmCdzElOHYrG97gt78PO22eV72yzxtNENAcnR+9fbIIBB1PZYW1ncgdvhzcmr9JxADspyLzLZ1GfNulF1r4/uHBuP2QdS1GQ41/BetNafsB1VkPwx3P9zOnoFrOZpllEUEkFXLUw/OZCGfhK2AQbqwidi9XG5t6vqDtq++uHjxw9z0oUJ2YMvQkkeoy7WNKXZ9vb8fNhNlAqZsptdGRqqnBtDp2Ww7BZud8hq9nqIsDZMJdZ9WcJVkSWKuz/RIHsSqq6Rbkhh0s+3Lji8fvH7tCxdZ2bYtNU6UqS5TjF+4+ZP0YMTSXJsRslu1kaEBtElk76BpIs0QZ6f+Th6GJR2kFDKgCxBTyDwh8FyPiTSyWBL7/otrv3w7Eu74sm2jH8hoTSQSCC0pmAwy2q5d/D43neEsjjCrSsdhbWQ0mhl73xAwWgN0P9revn7ab7Eg/W+BlEIGdGk/sJCuB67naU8IpyzbFbG1XG5j7cEI57zjwt8j4XBqf18iO4jwuFBzl1wbTG1cQ9JNjk4nGRcq/0kHKNI04v+Ytcm31crcpsp8ctpXvyBf0yDlItMDtzYIb75QdZlWxEIgFkNE5dY5cxX+sgPsKBrxQhYTMrFsIra+sfbtt6//sjE6vY7K1F2XaVY0midktW3G96TJnMq8YZzyNaPUMNMKmd5uK2Re+gt/t9RCOK2QqfHi5w0DPIDJMAyJjo+Y+ByL560Il8i0fEx6zGAQJd8GcqDsALsajdZE5q3N26o9sw89c/zBKV+XRsjicYUMJgu6zLaDF1vEEyg6N/qTG+ADXmZqKDswUEoqfoQsbSewbY3s1+P0hXU6waTWDRazQAsfJEsjZC1HfAX5/2qy8MI71Z45tz32+infNYCOhNJJ+JG50HShB5Dl45GQF2QGiHFuZivLSzMrS0vLy0uVlLpHuD0kYD2JLJFgzMRrS8vF5c0sk71T5f9Veljlo8jON7S2NDW1tDY2uAPrmxhnHZvdRpjd/uWUrxhtZaS4RJb3uwwSkeCVdrfiaqRXa/E1k3Eju7k6NzdAFjIHVlZW5FFaOxD4lAhFo06/HFouFLaKu7sDYEZhpoCRy6xoOYCstQ67r1Ad1OJs95/jGGcdZAizsZunPMy+5kNmETKvLPNCeLg06pfxtGOy7xBkP8MylZW51RmjWnfJpeUZfLqDhSi+EMdsr9t0IlsEsEqpVNnNMihSViYjl1kHlj/LGo/8NjQF7Q3GbyhkY3DZjT3O6mXxnpLqGSkWgXQRdJmIWO2BuuSJvFpawjqpNUIEiz0GlHBXV1hBWx4CvrwV5ymJzEo4xHaJq/F4hhMyC7CqLivb/jKT19A7YiS5D3ues83OQqEwvlyZmJl7crPOZVrf1NLS3Nx4/iT5oYUzPLhEFglkGU0cwbrkCV1lP8dEZrDU0m7f8CyOuy6RJDWDiu+OYMY+i+nRA5gML+vc2uXSh3wmieeY5XOZJfzImhjb3NsrPhy7ffv29oypuDCoNFAqlbLJlIleM8WO6GR/T845Wn5Q8PiRqcW4IGT+uozwSLvc8YF11n9m5mZxeGIeJICrCg0+Iz9xZu4wXo6WKclK451FE1y7OoAvS+CEBlzUNF9A1oyztHP9w6NHt6G7bW8oR3EzlcwOSJVSnAXlGvJkRo+GOtb8ar1Clo/QEwEjAaAI1KUeiwkgQ/kCzBTjpfHViVkOSVxvPf1MMZuZYXKbljMrasFcZqlQWGH80pXPrnBqmFBEBzApqxxEhpGHV+Rm//tzElphDzyoLW8uF8dRmzeeXOjg4ethzj1iqaEUNzg7qd3H5jp8vy1O/itkpJBcbtrVhqmpKItbOJJluY4SXBrvmzBBrIuAvQc9vXKpizNjjtObJ39xJqhxhs2BreIU67qCF1wh/8kwuwpmeBCyCJAFTM8lMhht7iFV5/WRbGl5vLNQKQ1kUZfEhochN+3IgrOz8zhxMrfGNtNGSiPlv6O0BAaBYDnkV5rdwYxRprKcArJksTg8a3DWAWJP31P67FKY8T4g3Zn+i7Z5cJQ0K1sP4UR5nikl7KvEzEXWEOhGvE1tw37ybt/c9vB86cESgC0POYBAKuzKbRPGxNzc8Dw/kd+P8GoDlUMdVaaS7UwYOpDlA6M/LoMSoXaYTKaHMVBcpSRDWcJAVV3pYmwCefV4DQ01EadXppa2Vhn/VJ7mTCpmRxUyDVmWCCBrdG0GZo+6Z+eHskuFwqahaIVfJgmNl5bHPu6bP7HqPNekkNEf4bjMplYAUG766wkuRMgik3E5TuwOTyCJu0DM01Mgm12RXnBMATfenWFhdfp39bWYOFA2OwAycD0fbEesuqe4NTGfSm4WlkyP139C40PLnxfGhsH2ZJZTzYTMkV4Nf69hak76R4RrMlYqzk3MdpDJ3vPrEmfzVJmG8oWR4kPFh0O8Q53tqLqsfFUy04HsyAUG1CF/RWWSNpOmWVlKMUqvY0TMngDyjMlP5g68BgozH7KQi8xTHuYQMsm4iX5ZoQmDkuyzo8hm8aNOzqxsZnkyWxrg2bFVk3fh1D/PnlcLU1hRiawMZDy4L9Hq2axQMsySAnasuFyW4d+snAizYGXqajf2RWQsJmwhpIOmmEFDmYm6RPT7hUFiYjjFsltbWyspc6VY4dm7fQaQgdizfxhELo17yGx1x3SwMkfkKnwpZWa5W5LHM+PEjMr4RG72b8WY4bVMSPiQafKRZnF1FZmJSDfMJRQmkPnr8vlzhBljK30peLBY3J3J7hZneGnMRfZU8sJHzNJdlyGvX1z0XsBmT3HISAYtdjyzIphVeN1J3LRCW58OMuFGWXCSTXMgI5MNGdxAH8SIMUJjrEfs2bPn733K+N0J01zZJeH5Mc9KZE9xHg1TdTfORVkig8nUPnbQZtCNzvGSkToCrONYZgPjnZ3jQ0b9SQxoLZ7NdA+Zf7n0b3Fn4lVVFYXxmIrCQgWn5uFE5xZeg7opLeHxMMjeKnlQFhJQxJOZCBY+BgEZlGISJREoC0LDahlmlqVkWmZ/V98+59zpvYdYin0MK4Yof357n332PufSg+PBoiZrQTnJvWNApnHuWC8vErIvmHeqw5gYa10sKSmp9RcarHaWkGWL5K8ZXhmauxCZEpmayYVms98qyt3EsPHXM3QO3WAJYN4Rshn+zZW+gaF2KjYylP6huQz9VSDLo9qUrGIg/fdyhUzp74sv/8lZ65SXBzEFYEq86Ugv13j2nyCm+YEMwtm8XySyV6LCDYHEyusHvF4XseznsbfIEOXEktw4bWgR0SU89k5ModQ+E3pFpTIgUxazagyYTIm3VnaHIoN+YPy7ZpsWp7/6kVPNGhfS/NT3EO25Vz4SyF4fjzSVXAWO8CdjFoyy50llZWXYxsrghiL5zDiMdQNbhZW2mbvOwNgEcWkjI2oKGZK/4UXSx3hksfJIB9exYjqJwWS1U71ycHJhsq3G55vkrKSiGyH8xRe6VtjcgcCmeEOZIZA9xyI9liVGtSdsjz3vUHY2BWhEapyhsSZWTWHeFVaMvWlSyHZZK6bTZSf37Pnq2LEWreW7ymbDIJv9aRPTyWSwx+QkjhsItTUwfmq2qMPQdMPbvB1f61/4kXxGe6ZfXs9lUKTEypzEuP58iMokN1IIsvIKYlbCVtJmj9tZV9nsIxcyALOQ5TL+Dg5GDfUla9oYRabGNHvNfFdDhYHExTTwUvIlMdbbeBrMQIz2gNO+y1vJh7tQZnyEBTiSG1T1ZpPY7KRlY0OQklyR6W/aAh0xolby3vpa22ZmmfGBiUzhEukfV904ju/veb8d5qln5d+NoTATPdkycljpPEeGQ7QabDrFVr+GdayoqKiuua4OCV2vad+5bx98xhGZ2F+GV51qa+4kpmUrSuFe093QOOOVYqzea6zkUzhyHnkwIYE2mladIR9vnbfrA/v04rMoMvKeo7j80AMQ1V2acbiyqFl0qbi++QuRlP1j3c30iUkHMl8ymPEOAOugWGvz7Nz58b53GGOvv/ESmSyCF6LcYYm4BLKIQhfFDY0zdpgC85s6YwUPVW3akJMTHb3mwbviRWTmMlxCekUgQ0dRIZOlbC6WN8TloDBPPSs5PFbXjIDTOBMyWo9Qz5Gxel+Ki1kDM1UPYtDnCwZjmPqKgd094fUO5DQZ4jKCUHQIyTXUhCbzf+bRfL92i1uARx5H+EXUQ9Grc3JWR0dHb6Ksi2f0k9deF8hy0TtTy6XYlvM8QrZXgKhORAV2uLuONppC/iqKvl6yR02KS76aRE1S6KrZKbW3Fsh++SU3QncrBmYnaTdCVqZw2dCYgsbYAI07jzZ2kc1uKcfnbNgU8QsJa6Kjc3I2RENr40GLkDFUE3jNQ6vfTmbqrMCe9z0SRE0Stiff1YFZR6/X6+2oM4nxtpQw4SzV9HRimy9VIVvAOkrjOCgmAjDuNllGKK2MjM1nz36KqDS1Wda4Alntli07jh7dMqnd2pqZsDrnzIZ1kU0GZNJmG0U5y9VUE8i4mf+f/oi8Jp4JO/Nhu8LQFkQrdKSoTgrEZFTyyZRI8lVXI1xNZEMYDItOGXsg/JmGjPvdJst2mytD18+dJZ3DFxyrp0DGWWEFTHb04Pf+W+s1JkSfgZUixeZGQgatXx29hrJILmfETCLLU8heQIRiSN6TS4d4Bk0IbdTZL6/r/u4IAZPzOab1p9xI7Z6dnr5B3zBmnR+9SGVs2I3VwtYjR1zLJZOlf5mdurSzZ69du0bMNlsVB0ByicyoOHT0aGbW9+Uc+f9WXEbIEiJ8ZV00cpnQmTVidyeXqzxChmNNCtmLGC0hMpHLJj60c3sSE5uB3uZmBKdAzS9Up9yMMBjI/SjkGZZxDPLWfXP0myLmQrbZnbt0fvbs1atXr1/Xzp7LUKUGOOq0AeVUZTSRybIOjvBby//rz6zPiRiYGxUxEF2ndipqFwhkKv/TpRsg+4Bjxfz9fYnMNzg4WB1kLvGkmpSb0mADw2DYVWA8EEv86775tahouzck+du8xDBUO3v1EnRNO3dOMz+PPVWZqHQ4Y5Vksqz0ysJby/8PAtkjEb9gEYt+SFWRQCaY7UJ8SmSv4HAUzqzzHs5+lwumZycpDcumKS1p8iaB+VJ2imaGMz0TMF6VX4TR5akmd1zyDEUru0xEID939ir00yVdO6dlmM7TYbXsL2AzxvKPHqWBe0XzLe6ZEh58BHEZQRsUstVrEsxpRVSUyGc4Vafyv5g2SWQzAlnfTqW0/uTErsTkZNpT3rQGhwmQ67HPDGptPwh/oH9txaUINE1D0NmJPoOfvXb1UvYlIOPnuC7TG8fGXVhQ44TsIF1Iqahbqfo/4WEYkJA9aNWRsXFm72aXTGZ4/sCu13Egb5Szb99OgdIAi14ArT3S4lhd09bW39/fVoNlEvLhvUOeFnWMIsY1VxrIknciqsy45CCicTQWAW2zggYoZ69eu3T1p58uaUCGzmMGlWU6Fbb4Hjr3caRC3Ec8tH3lxnNrN60DsgftQxpxFJ9cZDRUZgIZG6f+xltwWZodlxCgDYYAS9Y5pJhrej0p6NpC7aTETJkspHcx0p61Pz2907CRbQahDEKmAY6AVqYhlV2/dAnIuECmZyAssQkVdivLrmdsKkuwP1q0opOmtTk5dtjGOI7G7RLHpcQuCvTeYgrZoOkyqM+NrJ+zCKpPsdU3DGL3uqMmXhAeaMelODuVcWR3kNoMiwEbR74il527du06iP10VRQVGfAZil1r96TTRE/crSvqWNmnoz3iQGYFKMerhWwXHgw1ihtvCEQ7mUEenxsZqrUP1C8y/OCDt0axM+j5kbPEFCXC7UcWux/Ywk8GErPDViqjISnl/LLNui52RRqCkJ+7ev3aT9CnnJjpgMYzymAyKQ0n3oXJMtFvWtl55tpIj0JB9HwgTvvncuqW0VPn+83o6vN4+trbBwEsRJz14Jkipog4Z/POTEYmi7tHOsBtM7p7kzVgx6WV9QFN08EG0Lh2Tb8KYpcQlUBGn9ay7S06F8iQEX/FZuSOPyMfRqD7wIRsV+5beWAGZG0py+kC9u779n1tUQOxRGf9v5PTXvweFZfuSpb+vFXhyAiaAMZJGfo1IkYf0PcgNFF6uJDBZKeKMGa980/HxBaZbIaGY2HeW6P4nZh5N4OsjTH/PugdZTODJzsLjDQuDjTFR90fsedT2OSPhAzMzM41Q9q/lnFOHZVC/ieTOZAZ7WSy09jzejmC/w4LzOja+UcvRkWN94znIj4RmMvJV49+xz6SMNoLmpOYD8RkSMZEnD7IldrK/moPaYUnKJltHriMcbfJIB3bcmmyou3dBrvzyJCU6UbSR2+huOXYpedSjC2rLmyr9gmB2Cco9h3y8Bv9crl71MFYq8Zw9fzLymS7Xx7LU0GqMpmd/VnJQTIZIeP8Tt+pUEl5nJDdG8s4lIu2/rKaZIzvQWDioVLP7gmpQJY7MhfnQpbhdJndsiBaYn6u0wrqNFk2pxYjmWz79u4izv+PX15B/Zi3PhqNuu8eMAM+ZviWRVbDGPt2375vOX9myP2VZGaPLZcymo2McTm/fBcvTmUTNZ14QRp3mKwsg3bltFxux/0wQvY/hGYMbQHeeg7ZJ46CJhf5f1lmPg3IThoI6T43yicZFBu/rK/tHbme/S70PL26kxq2SYIZag7bZNlii4mhXCNMVrStjmsrf6Qx8ikqjmbjqrg4MpxoIk76li8z/AxVr+uT1U/cu+zZ/Ji4ex2DEnnYm6BJbk5kmwkXYpNGnNlWY0jnyP6BLRW/bt++fdu2OuPcnbcZ/Z7y2Fjq1Cpx8arN99+QWg19/0S7y3lPySnIqhsQi4tlUtxKZvoXX/zwbigztHkIWTYx45pd+KOVJmdyp0Hs122nmzUgu7PZLAYLWIi4+U6/YX2WyHR37+ypJ5e8NBNjH6RU4igVFDWu6WBmy5rFISifBzLn7rIMfSHkv05cDaaw3Ha6Vj/Lr4cOShMe2oiNzspIJi+elBi0PKZpBrPUgKc8LOm1apfp+h+TKGLvcV5TxcXLVeI3e8fYRRnjJYwhFL+wxrmGrv8gBDK2sOeEy+QoxQzL56nWZeVbTnUD2elt244Uamf5JQbFuEaQZ9DmWhHFryJGydX0R+7ifGYYtObKq+bmarntuYaZYRp+pCyt6rYkjUlF3W9GSPz9LvvG29vy2krOONnpB50LGRonp0k55paIS+FF3TIZJTgdJkMiI2JAhjaR9hN3d0zWbcgJH4LcxoutF1R0tSXND6d9y1h5eecc7l0NjMyVey1sxG1oqK/aF0YOT4KYsPjGroqzfrerS1EP2PcwW0+NMYZQJAXVERWD29Dksvh8ma6XUXsWQnhKldGSQAeztolEBrVig3D9p+vuZLbuDE3T/q3NEM0bN256cO3SqClKXAPJak9a2h7OWgbmmCn/AIZeepBb5FqGhzztg5DPN9je19afWG/b0XowrCs78npdwLwvLj6GkapOnTKATCpI0GTrzGT2g5nNNBo6IdFxvSzbCktx56xSEaNUhux/9aerbmQPEbLVa//tSFNpzaaloMVHsZBjAoTMj+m4Yd8bUWW6yDjqU0bLzMzMREuL3+AmSBGQcTH2lhWii29zlU01KTVV3PQgg7RTh04xIDM1MQFoKjgBLQhiEGDpGqwGk1Emc4UlK99WJIkhLr2axi9duh4yM4lev371un9JbE30lYIrCtpDSxNrcGXwNCBDZNYyNh88IHWxC8l2aVmtbCCLcXTEuH+uKZBOzyM4WJDSltjVNa1xJpVUearRRtag6y01E/Wa4MUh/QfFLJuGJDCZY7kEOlo/vYe7ZR6DWkH6+rXrPHTFXBe98V+msk3RQFYQvVpC2xgpKmOp8ewi5iNkJxnTGeOvvWrpwM8XyGDh4pr781gpE57g4m5WYP/+/QAmtP9gVkFBQUr1a9OKb8kivIYToroXL3idaZ9oaRC85DtZcGRwUfZzR01WhrBUP6P5126Clt9LQc0i1GUA9u/DsqAAEX1GUHso8rYy6B6xtaelvb1nj6jISoHModek4y5e/Ll0vkFb0naxTyRzxucChOvy5x9LfQ5JdFnVB7rMtMilxQAM+tY3MdEC/syEpr/7bhncRZZyFv5U1DIlnuvt6D5tnnG+9S7jQ8RpQ4GY94rYDF8rw4n5kMr2AhnpwGuvESm84DVEBw6AXGkXgi2cHsdqtj8duP76TOCiu4MObUkHNouav4HCsoGYpcxMTDRoPyqjMf7Fu9noo6kC43nFSwHjRu94rjyt3XubiClk63MKCuCyK1cIWahN40KjEupDXL4vkPFpCkWt6wC56+J7ln6+eOAACDpj9r1S0LsQBDwTROfHf30J/QVgly1iLm7f9yfPa+bl59aq2sUW/WRBGoy2KDwmgxPrpAhL1SeD30QAehd/7K07X3x8dw+3lyjq/94GZHDYlYL16wsKrmwgZOGpXwMxd1hCH+75imCWvlc6zaDpUvwTCbwc5MDNJdju55/fw7/Dg61vfEl6A8Q+g2A2kLsM29GHKkwRqBSjippRWHWkdWyhIGVmpsUvohOSI00gU32yDImHHz9/4kRdx/nzxcW7d+8eZYaZRG9dGxGWCMkC6ErOmejodeE35nhNODFaMGfEs6PmL1zQHNtNrgUvdAGci9urobpYb7zwpa03iNdnbsnkdvnQm2+mZ6W8alHz4xEvNSntE3tbdE3ZTI1N9DIymS6J9Zw/v3Xr1hOLiydOFB8Hs+JRAL5N5wvWUVzmEDGYLRwZVU79EYgNH2uxilY9WFovE4Ydc/VdsJKLG0LVRvaeNv6LogU2JCeyy67gPJiSIlbRUp0pbLWTOJb21URQQGMSGpOZTNY5eX9sBTHo/WFw+wPIjhf3GGLIcHuQISahaNo44IBsaCILbe4PAtjQsXpOXKYn+xMpPoIHShv8wfpCgz5gFkutflr8sfTprlJIoaM0d0FbJFzwkanLpENCktSWdJQcKSlgNVk6rY4oKBnlNQULnrGJlnoJTS2eCEpBjO8GL6mFnQt4T8zgNYNy/+1BViAlT3uuDa3IghGITVDR39VWjV1jf1v/tMYa2nD5vbGxqlaFaHhxxqFgV9d8l6A3rY0h838mWIFNOmTl/y2gBWfBWMnJpRcawn9SSXl/u6epaayhfvoHlGyaOn2NUz6aiMk/Tmw1hRMPFJ/HyWbFo7epvbiJkF05c6agYAOZLDohJCx5TQRiHCRr1BmVxMk2JBpe3piZmdlawhwe0xo08SyzQiMcn/bb58j+f31+eb+UQEbOEsZ6dfK9rqR5mxbnvLAkaQ7P94Iqq6s9TZ6mhQax78Q76TFNdq2R9rfa2rtT2KxYINvNbw+ytcC0mgwGZlT9h4ZlfwRiFK0+q+HKLwwhr9XOAtmYn7GTJ08ea/FyBlU1KlWV8OB00Fma1Xfuv/wXmO2UwOxex2ul9a4SrnBxrLHxd77Y2HSqSehUal/fmMfTWtWAuCRlZEho0mPHYTGHcEbEjMzi41Si3XVblkxog6gxqMQIaV/Mh2f+ejoy7JrrtsB2RibUWMvxTPq9HpHuvOjdZEpNjdQ2IIYTu5LqmdJ0+v4tH/8FZIHfRuYGBujRPSWFyNBhqppFetvRzBYXFhbGWqtaFhb2VtWeXFgYWCwfmJHIJDTRVB8lYm6b7d269bxAVjx+m5BhWwqJjAZiIUcwuLMi8wliLXQlxNkEmwZCfKdAVsLZVx+mETKPJ22CcViPNIt2Whsw+3w1GlNKTM3af/nzzzvLveGJD4/UWrVq1f2yM1TY2rjj0KFZxikSGxrq/WP6+y21VX58qIiRdOGx0d1/gFOYzU7QmnnbkIEZ0hmEdoZ7R3+POyx9Ps/Q0FDaEE2U3DuBBgYZoHOqs8RgJ/eC1ocfejztwxwjRKHAAGdD8qdMMtKj1BHvby/I2rlQyyypxlCMeSYDxEiGv3UWRvPKLK8DVauk5WImVsu80d3nw3xm5f+em0W2duO6jWuXgbZuzZo1+KbQsr/LwoWDm8NofLV0Tep83rUioEYjm5XMZlYEOluArK9vMCXtw7c9PrCcAK9UvFTa9JNFL+Gpedq5/pZV4JvzMggzvrvjAStk0qC6cUYJGW3KsMZNOsB5dVsaN7+553jxH6Dm1vl/h0x6aF3CMlZLSAjvX2g+deWobTIpWI+Y4DypbVpL9oVsN71A1jpbkZra2aIZ4kz7IGyGEp1pAWmzTkd5F2RQzBOJXJ7aRkkX3pBRDou9N1bjJFzdzJ/dsaMRLrbEpRyfyBsf58YowQG0CMjGb27FfBAL4gYsh0hTNy8VliJlIWujD6FxiJbJmqDWH7KEUtLiTYFUgcx/THx574dpdP+Bd6rIdNR31YyEftm0s/cYFe+uB8U5cLkSKjLekvzG2dnZxlZ/2CoBpkZhT89o8Xl0OIzeUeBxU/vDRBZ7M6XqldViC4myfnm5wzKRDDaJYpIze1BJyNoRelarETrG2G+pAbx0TnONi6GKh5Al03BfylngJYtIhLOfBBkp1zP74++V9bDXYBpSlTkolw3v1pGpqikS+hp+UqHXQO1XUmuA2NatJzsMqPc4QXOUtOcFsrybeopBAq2EG9BCXL3m355W4T7cZ5uXWcLOX9VJwWFQ6hvECKQPUamQjZDJAoRMoyTV76Erh234vELGnWf37JF1DO6QcIUszj3x9dbi0KE4kA4ZeJFeM7x4KywpqWptFc97I1615Yc7B4y80fNI9gsdfhQrhr+52AnthEDGzfMYa9chcy9dqa6+Irbc62VkPn7TTy9gkzWTSQIYn+531Bptw0NpIZrAFD81sEW6TNcl5JbJmjZxUEnU9SXM6Hef92F2GMbH3Xfv/fH21TiooWqk8lfOZL8Q8uJFUKObb16uZHj9tVUjTZ34+2ry8x647P20sQ5vRwdYFi7+QeHpQHbcHJQkoBOBee/SyHKuUF9ng3RZwuMJN3m8px7AREBi2uvQoCctVMc4AjDVdJkO2acPypXLRpgx3G5lMy5sFTmDQlGP1lV2Bma7mQZkuqYkoUGZYyW1QiVVA5Wd4EUKlPM81LFgttBh9NYVlXiN2kVk/eITFrJRM/uvFT1oeGip/RC2j1TZb5J1K+y2aVlqlGO6xNhxOuQolApFi5vacVYFKJWl/lYPZA5m6okL0GHGhz2D9hENUlykuQz06FzTFH7Y6Q4mTvNIGcRMmH7szUOkiu8DFfTDiVc63n4rJJtBe0/8aBjNR7opPo3c8VFAE7UsxeV9jmta0WuXHLkh9WMSAqbiIzhy/cM3sVpyCSwlrOdvsxoe/urYTJATmAAEaOgE6Q5pJrKKisOMDXs8PvvAGSn8IC50b2JnoAmm7TxtUFxqDomV0jDbaPKyDnhJaIEqPq62SyfqDN5x5LSAxrm3Fw3a3aM9VJXFqyriDHVtlnLOg0CGno5Eumn1arqetBwyJjVPwCIH5Vdo/1gyxuS+qCLQxbnulER2aMeOHVNYCTwej+u8J7rKYaVrbKIHABoDeMtnfPOnLmQCtGyn7cftB0qSYAV7p1Nwjni52fc58buX93ZvO93dWitbjsd3i7HJKmuqBiQbb1D8r0ElK034MHjBZmuXPX6hHLaUxzjjpgyjtTFTaTZJxSWKAiFCBmAS2RiQ9VmhqTEo3lXUQEkABk3hDb+SRPvUjYxBI+b8SawqAGa6LLXby/N2m8y6e7m3COPLEbXpyjVEAW3vqzHlvpGosreRrd60rMl4pJOJPuQxlcjoNu+Fri4atxnYep8yGxZBzhUsC1nmDqFWQuZkNulidr9MYkOpQgEg68xvZhmfforLu3iR4sxeTg4eJGBEiwy2hZy5vcNANgOzE+f/+KN49zjPrTu97Tfm0H3/rTm2AWG5vMnQQFya2BDqsAMHML88gP4qFjDLZK0GdwvtH0ksswqNNI+TWXUXI8XYFtN+S1WqnKK4RInx6aea5iJWZY7VYbJ0gSzddBnOXvTy0WLScRqQjI5z3tE9R38vlCT/c0cWW/ScR5bPZPO+pYhBwzMcpwpIGOtOG1UWMrR+lkI2WwtkCy5mbUHFTKX9+c5UU1ONeDvCOEymiOmS2IAElo6Lb0KKVwDvv8MBnw5uSFyQhOZ9VPwnYu6LjVrBY8X3q4t/kTM/Wod+nfGfBTIyGWu0kI15WRiyfIXMjxXzx72CWbsZmlyeJmNCcwGLWCC/E291hAyoRGQqYpITUn/WfgXMEkxGNjPGe0ZRg0mvjeJja8cfT4ZeEVEV27YkMQAzuDxVIOLyAmOzdlxyG5mmZj+NKjALUdCzb993MvMlMkscQWmpMp/eONMpLnU7KktoqELEIMtkKjYrt5Oa6ZlzeURtdLRnPC+P80iDuBUwGQ9LZO2K2LCoLRxxiZ6/Iy6ZDQwS3Qdkf6FaSlZsweWzGi2cGGkqX8QlkyWGLl6olglITlkOZJa6t0t1eOUjRM1tvNxmrKyovAhNY+12+WowUlDFJVL41CGLWTnTbGCQxpHKlBoZFMv3uJiZg4DaQKpT+VMiLplKZeQzcYLDQeygmctUbAa228IJPEuHI5TMK4FscqnEj5aFlJnKdIZUZokzJzAIQF3IoJM77TVgcIgJNU85gQFXZWpTPvyh4pI8BjXZiUylMlWUkTodxIq22fLcIZfVuIDZJf9QISM5UhlmGZkOk4nWvFKDQDZrIptlSgsekxluCc8wqAjZHnKksgBiE/yBDNKlxw6nK5OpuHRHZlMkYlAnuwO5zJ3KEJQet8UgK5Uh+c9lZu5QyBizBhj0CmFSZyKrYEp8SDHDUKWFPj6Sj9QVmsrykco0pDIZlZBJ7KA0mTssqcSwtM2ppjtxAYcGcZGADXuZpaAdl00Ea4cymQlMibOSHabk/zuDjDSPFA1EmRfEGlNDU1lnfjdD7Z9hEZsDoLBMBrmzP+m0C9lRWpWjVvgCThSQhQHzDPuZQ+8pZMBbYWb/RtiCeDmocVRlSocquFWD1SpiQSKWDwXCUlljfgelMiuPDUg+ymTuOpYUCE/9St/zlc//qxQy9KmtHGY9CFD2mLlKZVgv/WjsCJfNGo64VO9Q5prE8EQVQib3kkMuj4XGZSVSW34+pz05gClikU2WGoase1uIsspX/jphHF2wbO+zc77DYA/EMFK9MNnF0mn1mNtDcFqVMpkFDGIK2SGayrUQMtm8fMwkZghijWGpLIBURhtMZ1Sm2pks1GNAFp76lVK/X/kyIwZIHF3Eec4sxeGLpFKV/bk9QBqB9/RQcdZExESTsckQyCSzpLQ03SIWsl7CYSgxmhGXtF0SZW66JZn7w5F1Rg5LaDarhK34r08Wo45h0jE/Z06Zj2G4KJC9h7g0gIPUySWxDMtnDRkC2SGymIXsXvP5R8OWx6BAWPafQirTgIyIeQNmFKqa7KD5UWo4sm3hyoLNVvrx2LEsgqKoh6qmGdoBmf3nGeuUjYX0w06P2YHJiagD2X3SxghNkxjeplLDsj8+X54NZLSvTCVUqdJZB92JLBwZlstwm83fQjn7D0/uZMDgPK7RAAAAAElFTkSuQmCC);\r\n}\r\n\r\n.img-banner-Nichol {\r\n    width: 304px; height: 160px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-banner-Rain {\r\n    width: 318px; height: 160px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-banner-Sakura {\r\n    width: 334px; height: 160px;\r\n    background-image: url(data:image/png;base64,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);\r\n}"

/***/ }),

/***/ "./src/assets/css-img/elements.css":
/*!*****************************************!*\
  !*** ./src/assets/css-img/elements.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n/* \r\n * Generated on Mon Sep 03 2018 14:37:25 GMT+0200 (Paris, Madrid (heure d’été))\r\n */\r\n\r\n.img-element-dark {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-element-earth {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-element-fire {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-element-ice {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-element-light {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-element-lightning {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-element-noElement {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAADAFBMVEUAAAAAAAEAAAAAAAAAAAAAAQEEBgYAAAAfJCQCAwMjLCoAAAAbIycgKh57goQBAQEAAAAAAACBhoYzOzspMTAeJhqKjpCRlpqGjY5zen0AAAAlLC1scnWOlJUCAwMBAQCMkZKGjI0yPDcAAAAAAAAAAAAAAABxdnhnb26Vm54sNTU3QD88Q0MDBAQDBQQAAAApMy4AAAAjKipmbnOhqKiepKVCUEFAS1EAAABSXFsHCQkCAwMRFBQOEhINEBANCwsWHR3Z2doLDg6zt7YQDg4SEBAJCwwfJicSFxgEBgZxeXkvOjwUEhILCQkJBwc9R0grMzQTGhsWFBSwtbV0e3taXV5EUVI1ODcnMzQoLi8kLi8iKCogICBwd3dkaGcyNTWtsLE6Q0UcJCUGBQWTrK5pcXFaYGE4QEEuNzgkLCwgKywaICAeHR0aGRmuztCOlJRpbm5TZmhJV1hETU5FS0s4SEk0QEE0PD0mJiYiJCMbIiMWFhbCx8jBxMZtf4B2fn5meXlzeHhsdHRXbW9eZWVIT1BAS0w6PDw2Ojrb3N26vr+gury4u7uqrq2HnZ9xjI9vc3NWX19QXl9YW1xDVVZLUlM6S0wxPj8qNzgvMjIrKysEAQGoyMvGycqOsbSgp6edo6SXoKFlg4Zfc3VkdHRibGxXZGZLY2VQYWJPWls0Q0U+QUEaHBylxMe+wMGXtbioqqqLn6GNmZl3lJeBj493i4xjfoBcbW5campLWlxEWVtPVlcyOTnv/f7O6+3I6OrF4eSz3uK62Nmk1Niu1NfNztCevsGcsrSbrq+Hqq6kq6yNqKuJpaiBoqWAmpyTmZp8lZiKk5N7j5GAiop0iIpwg4Rse3xgeHpacnVvcXFlbm5XWllAUlRBRkbU9Pbe8/Ws29/R1Na1x8mkvsCovLyRt7qktLV6nqKClZdth4mEiIdEYGI9TlBGSEf4//7g/v7O7/HA6+/r6ezn5efd4uPL2tu309Wex8yTvcFbeHtkcnLo7O3Ez9CjytCPo6NqhYeC5AFUAAAAOHRSTlMAGAYwPGsQoUHQhCKFhPuGXy785yWF/vn5+X4e+bKvqqefbFhTRjf5+fbk3svJvJd7cj35qp1YVsyHt/4AAAclSURBVEjHvdRlcBNBGAZgWiBIseLu7s5xubscIdp4GuLSpPE0pa5UqENpS0u9VGhLHXd3d3d3d9cLkhSG/uW92b3Zm3lmv925+Rr97+DGN28w453+KSbNnTd9+nR3d2zYpunYsE22zJs7sUcj57+FUz+PeTem/c6cOdhwLG7M9ejb8W/Ro59HxJ7OurgZP3JphlKnxOYZC7DM0CvbF0Z49Or4l+jrEfFqKoAFjwWgyGQQVYoAQAERQujYx/jXs+zGIV4u8GSzCSQCi11g9WfgAUDqnxciMZnNMn5BAT5rTn3jjFWVsvTlJU8WgUwieOVtflKeAMgrxHh1eZA02MAQy5gFbHz8nIgUzPy6g479ls99le5JYPL5fFWAODd6HSxMXrIsEDCWVXDykoIYoWwCG581benyn3eAuSkp7oWbsJqYZGZiglS4JoPCOLxwr3bFJvR0cnpIniFIwiQTPPH+s9xTJjvbtsHh+pcUnrCdw8vrSfqGk9tvCct37q/K9r39enVGkff9xX45oUyyzTwsLOmPw9mIS/9he+YDrNDghPizftmHkjfkRLappYGWKxd8JNmHlx2O9KtOwo7JYl/YM6y/C0acnVzGdtkj8JQYTTIxg5cTHYQnyhEKQoFRWp0GlJSdz5VkrE9isghsQeGwsS5OzhhxbdmlUFDHRYhmP0bAsRgKAHqCEOQpqwxkBBIB/5ULQIQrVJNYrNmzurR0/UEat5w5S2BCQMN67dG7HpvMGh4NhiC68HisbyYPn+/+eV0OlZaZ70mwkca/SYTABFAzTu3Trk6kVZYFZgaGoZoHRbGXzRAPTly9zPskQL1CYM2OcJDOSxUSGF2379BaLp6uPrnqwOHKmvNLii7nWmgWCx7yfbvTiPfns+YvnWknXefOp3Lpp5etSoBhBM5ctXfrwntfni30DWTIeCgEUNdo/VAhnzB/bmcHmTefLNTknFlZSyciNHHlgWfXig7sfvGudGOQhULBS1aXh1VNJZH+JBfY6RyguDgfocHmwA+7dkczxOJzO66XPqYSYcRUsgjYsJhPuDCvq520n66rSwhE70ZRs8/Hbox9fz0TT4TAgqod7yszY8syqfoTjMdCEcFnej3i7iPRREdWmcIC1x59sGpXKRvkIShIL71edGBZ2mUUVKcelanDfdxPtbYTjxiqZsVeI4BAYTWxd95lEyE6QKeB6jdbrt55TAOBYO/kYFPoRY/2dtImRWeRpi4MAogUgHdu6xt/7A0ACHzlxhbvtWZsofZOTrBQlQfbOMjBxRL0fnIwAMFEcen2T0o8BAMwjV65+8hGKQQjdIY2WWr0qk+iipUSbrXvWTWE3XH23qfzZABMRID8u7seoRBCBJNiKtapa5n1SbfiOH6WENy/0gtP16Rtu7b1iJRIo5iWP31xz0gHQWIbd6s0MoSkLLaTVt1K4gjxZRS3RSoAPbdzSemRHbfOnD9z+7n3nR1arHGErl4Rxi2Xk+NKutnJkEVxpICgzR/XcPE5aQ9qxBvvXb2669qWokc10QuPiIG6Mu3pumADKW5RfaInByDqm/s4ALWKAVvEa7ct+XBzy3EpCteszQY0x3eukIX78/X1SM9jehIHhW9vT42XmS0QkZe2O5YX652GUqUwRJNEet866+e5Wa4/NsROdMdmEFQJoPp06qyHJArKRr+lmUDqo41Q2GVzwZOVC9+uqODSuaFTZ/bs9JsMnTmDZM3i8GDzyhQRQIRMGxggSIHDaAhPo4zYvyq1mgpKDfw/yQIyKWRTBofGPZtBASg8lEiBEeyfAUOVy2cGa7i8MC4nhHSpPjmxicRnhurP+PkePRSNgnlyFgiySWSVT/uHOioaZDT4cUII5KknJtiJzyk9xPQKDwkQRmq9tx3Pnb/cx0KHrnReWqyLjK7xXaMPEMlJLDDulO4XcW3lI4hKJPG95IkGjn/Gvm1pfik316yL1M4qkeTu/+pbESC3kvlMVnAbQUynX02p6Uid22wROdwqCuZkJfqnHtIA57Y/37okFzBG++YIa73kcq9w1ub2UbqRTX/sgnMd2HbERYFChd2AkcHJyuIIq6jck9rUagrnfoUhPgkTViZLFRV1cUTbga44Z1tPHtS0WYfFbjEqAjmfK2bkig0f19PwPDqeU16bny+31lnDmQRVlNvFDs2aDrL1ZFtlA7v3Gb5eEZOEQDJZmNQYyjckoCAcJAxhWq3h4eFY31dFKRZ36N19AFaXjeBcmrRr22e4UuETkCRKrBXlqVSqgOoN1fGiPJFos0gkSkqMV9hE23ZNXGx1OUxcjEAgcHNzUyjc3Ga7zVZgkwJ7sIVAELPeIeyme58O6elTG0i63iHqm2ajR7VoIKNGN+tuF3YzeOC4tmOaNZAxbccNsAuHaTxoQNMGM2DQYLtwGCcX18FNGshgVxcnu3AYZxzOqcHgcM528R2AAgCuNQFUJAAAAABJRU5ErkJggg==);\r\n}\r\n\r\n.img-element-water {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-element-wind {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}"

/***/ }),

/***/ "./src/assets/css-img/equipments.css":
/*!*******************************************!*\
  !*** ./src/assets/css-img/equipments.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n/* \r\n * Generated on Mon Sep 03 2018 14:37:25 GMT+0200 (Paris, Madrid (heure d’été))\r\n */\r\n\r\n.img-equipment-accessory {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-equipment-axe {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-equipment-bow {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-equipment-clothes {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-equipment-dagger {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-equipment-fist {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-equipment-greatSword {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-equipment-gun {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-equipment-hammer {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAACB1BMVEUAAAAwU4gxU4gxVIg2WJA1VY0vVIguU4cxVIgvU4cuUYQvU4cvUoYxU4gxUYgxVIgxVIgxU4gvU4cuU4cxU4j///8ANYg1V44AMH0AI1oALHIAKWwAHU4AM4EwVIcEIEQ0VIwANIYAGkMAEDsAJGAALnkCGkDc+fwBG0cAJWQADCoAH1Lh+fwAFzk2WZAAOYoAJ2c1WpIAAmgAIlgABBgAAABBZaAGIkcDEzLo+/wzWIoADy4IGTYAP4wKHj8AO4c7X5gtUYQAByPp/f4ARY4ALHDk+/3T9/kAMnHz///w/f7Y+fzc6/XW6PMALnUALl4AJ10JJEq/8vYALoMAL2wABlAAGU4AF0MCHjkDDCD5///L9vvQ9/l6v9cAQokALIAAFXQAAEUAADwAAhHt/f6y6fVTmbsAXpY5XZMAI3wAPXsAHHcEKk0AEyTV/v7f/f7G9vm07/ao6PRgr8ldocE8ob9Ok7kAcKQCbaEsVY0AKn0AM3wAOHcADG0ALGcABl0AAFan4e602+pussxSp8NEkbYAibMAga4AeagAZZ4ATpEAVJAASYoANmUAGVsAADjI/v/f8ffM3+2k2eqPx9mHx9iGv9R+ttJNor4nmb0AkbYijbUxkrQRi7M4f6EDU4wAHm4AADTU8vbj6fKd0eav1OK1zeKUwdggpb8vUIgAQnAAFWcGNFVowzU3AAAAFXRSTlMAcA1l/fQhmQN6/H6PE/ODXVGznSqcNegzAAAFOUlEQVRIx6XW91faUBQHcO2me91GIAwjhpAYRggSGnCAA6QVWrRY96jV1lqt1mqrVrv33nvv/pG9DxFw/tIvBHI4fM69j5e8R95/ZNOu/LWrJH/XmiVk7XZq/SqhtmsWi/zN/RUURZkpl50ymym7GV/mYreTo7+/cstiUeryK2V+0XvIa/J6mSKv13uIxIsR/WWKnypFs1BUKJ5gMMjzvMjQao/Me+lksgij4EdBucfDu9AsFH6PKooswwmxI5+El1/DD2JxgRYEGsOwrKjIR+05Zi2KJllhGYZ2x+LdjW/PAIxc7L5n0ca1JALNMaLYQ4wmp0aPyLKcEA+7u/suAURboLe6K9zgtFlICGLFnkFXqZGYbZpfdhfpiqEFS8P9xrEI1LTUtkThzMnZKZ0eg07rJkY+SlVs37kpb+9uc4XXw4ssrdXru35fgubW1qjVWmuFw+2zU5PFOl21Xm/TamlGVD2Ki9qxLW/DHsqlyEU4bn248f71ELTUWjFzZqa8oLi4XqfTYyE0Mm9cl78mb8NGs6tMFjk63tD4Yait6iDUWkusJSUlUTQfBgwFBQWIsI6bZoP+/VnC0u6Gro8tANfKDwABPp/PaoXLAycMBjTYnMVNM7zfnCVJIXb/5I02iMA5NAhqfL6SEDzrTBjmjN6pFRiVnSf2smAy5m58Au3HoTlVx+cLhXw1cPrOgKOwsBBNfbXTouVUJt0YhYSOdY0BHHQcB0jVCR07ForA6PQ+EjRYBn8AhUlXcVFlovCgb6h5GA5kTF1dHQy3n3BkiU1LF5n2zxOTica2Wltrcw3AGwnFsoSiDjUF34CvFWcDezuL5lr7I4AfnYZ9KxAzdSpI9+IURnE+0ubtbXgsdVTlEmcucR3yvITTtXiZlNT40qbt5utbOaQgTTLzcsrzFGqxLzKDaAJovgx8b666sIRkG5Pv9UI0ipNeEzpWBwdvP3t0+wXAFSnhWIl4TZ8u9gKpQkgdRG5+RFEz0RlYoQpFedl7D8JnoISMJVQH8Pj1N5zX8RuBRNWyY0Fi4nH2T6LBMhGA59MTEfCNX4Gn0x1VyzdmN/EcXvonD4M1BPD53XRHInC17zqQ0RQSs9xYeE7rDM+iAetouWSoqjohdd5tQzMqOdAs1xgSW8PkzN3Lz+9KJxz4MzkKAxekUTRXiVk6fHuK6OsnBzo7CSBx7ENzFc0ryRFYeo0hYZDoigsuJFDMJ9AhjQFErkuBckOKCDnDL0NiIcRgKMwINAnpVTMcuyE5FhOKELdtMcG0F0rvIhCakAxT1c7cW4zcyIxgcVYXo0GSWycg3RyCob7ZqXCDReDUXJKkyWB0pExO9iXKA9LEaRi+MxO2xN0Mzy5clLRIigsQ5aYDTd8wPLzV3c2dMqm5i5LICVpLyixJ+cydhzB+vM0t495kTJE9FOWXVSyDplqH6ylxxangYlSvmyz/c2v8J8DIe04eNPYjIct4k4fHnYIYRLpqPOZDTuvD3WNw+jBc5tPL+LYdxn7j0Xljc5Ld4SJ5zZzYtF1tcLh55JRnsLJiM24WeZs0xlIXGoajCbLg02JLB0/j+AEnXIIRr6fpfKlxKwqMprK04qhHYVmC3G7tgrjdghDred/7d07kpbOlstQle1RFZLgkx3H0EfI4coSm8Z3jkkVsU1BGUUFqZA3pTeZ5VVVw4xbZIpbFQ0zt4oqqqrJnMNNV1lDKoN+P32QYxpQJQ8KKflWpzIissbuMq8Se6SobzWbKvo5aIevsFIqlf640+atEs3PNYoFmzarJ1vgHyiyPh8PbuEwAAAAASUVORK5CYII=);\r\n}\r\n\r\n.img-equipment-harp {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-equipment-hat {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-equipment-heavyArmor {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-equipment-heavyShield {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-equipment-helm {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-equipment-katana {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-equipment-lightArmor {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-equipment-lightShield {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-equipment-mace {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-equipment-materia {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-equipment-robe {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAACH1BMVEUAAAA1Vo4vU4gvVIcxVIgvVIgvVIgvU4cvU4cxVIgvU4cvUYguU4cvUIgxU4gxU4gvVIgxU4gxU4gxVIgxVIj///81V44AI1sAKm0AHlAADSsCHUkAJmQDHEAwU4gFFzQHI0g1WpEAEDzp/P0AJWABCB/j+vz7//8AGUECFzzc+Pz0///4/v/u/f8uUYQAIlYAAAA5XZUALHEANngAOIEADW0ANH0AL3cBG0Xf+PxAZZ7n+fzW+PlCZqIAUY4AAmAAEl8ADzEAAxMAeKgAaaAAEDXo//8AHXcAJ2gAA1UAADoAADXY+fzQ9/k0Wo8ALGgABEIKHj/e/f7M9vnS9vg1oMEAgq4AfqsAXZM1WYwAK14AEULU///q/v7m/PxpttBTsstbqcdPosACh7EAbaAAVZQAKnwAQnoAKncCE3EAHWkADGMAA1vv/P7f8/qg2+eLyNx7vtR1udEAjbMSibM2h6gASY4AQYoAHl7K+f/z/P7A+f3B7PTC3+u41+mf0uOozOCdzN6Vy96SxdkjkLUAcaQ0f6AEZJ0AX5sAY5cvWI0AMYIAI3AAKFMAAk7Z8vjU7/Wz5O+x3umV0OBNrctxr8pJpcIsoMEjl7tEmrlJi6sfbZ8ASYQAP4EACGkAD0nW9Pjk7/e06PHR5O+o3Ois1ujJ2OdxzOK1zt+Zx9luv9NkrMgulLZJlqg5YJgANm6P0eaow9OHvNIpeJkAcJAm2bcYAAAAFXRSTlMA+X5eVyGZkHsIafpt9IZEnCsYtbNgx+9wAAAFrUlEQVRIx6WW91vacBDG6d67B4EAKbLCiAiEJZQhyNAqqHXUuveuW9tq66zb7r333v0De4lPK6KPP7TvE5KQ5PO8d8c3dwj+R4e2bd9E2w6tJ/YeEG7ZRMJ9u9cR+8zm/HzhfD7uhGc4Cc8IcUPl4zZvNstTmP3pmWaKKqB0J5JF8nuZDm9Qwkz51hTiiyQjS8JJl5aWdvbsWf6D0uEltVqdIVFkpicxe9MzM6kMiU5GO8mlpac5ubm5Obk5OXhMPBUtkSSt01FqteJk+u5koiCL0smcpFhUnvj6+cHAwBXUwMCDz18TcZGYg6gstRmZP5mjR1a2jkRAVZ6YeVszUnHx/MWL58+fGql5+zMhFZnEpJNjFJkrNTh0wGymMgI6p1gkUsWHly9ByVxzc5nXW9ZsDZUaXvqH4yoROsmoDLXQLD94VLBnv/DLCcwDCZU0arG0XQbjteqon2jxt9c+M8D1ligRlapEYqdOklFgFh4/ItizbYuCytLJSJNKSlisj20txUaA6nbW3nELAG6xT9hmgkAGbdQSueLwDoEAkQK1DvOQRgkr21rSE2wYgSJvU9PQCDybbrjdH2GtFkKKoenUlFCxk0eEBWpazJk42PZ+tKir74J7ttZ6uND3CY3u2uwOS1xlEtNJyAkJjSaExd7mvQh5lfD6FZxr9X2AG5fBkAeFIZudt6ElfxHFCQlmEiUcDt9dKPTolVCpNLx5U6lUAqM/pYcan8NBRFUmUpLkEsByERaH3dYDeo1Go1SGtVrGqGSULrdGD+MRO5eNiQwkIySHWNmFc4AACqB+VgsMnmk0cH1ogY+MlMhWkWySS4WNzFSARlnFdHYCzLEGYBimUqnRhqdtjx1cMusQh/1JL2iqGC2gbrJNHwFlxOCg28Y6Ul0CHGL3zxUCJ+bq6APb2Kjt4WgXAzwX9FnXBcbVmGjvBrhxpy7Y2Oj1vge4VOYtmw3W1Y0BXF4kUpE0ROL+Mu1z71ADO/X+3VXg1fXu+322cdD7EoKxjRCi7eFNdvD5tWAXoLQoQLlDly48jEwM+DdErPbYfQxn9hoYtUYthxmN4J4ZB/joW7BuiDhavRUY9uxVMCLBOxmgM/QBgMElsyHSZCvBAk+GLkCStCXVwMBUu2VjF18xVMLE4OtkZLTxB4ShtoOwbJiLvxdccKPpScPd3snxsbHxyZ7i6VbbOdDDzYg1Fcnm1pjV+gqRiVD9gq/DZ4tEbHiI1Ie68eKLITuhWrtgAojE/XMV2kKoLQX9xO17paGZ4FRtdxf03YFCJlzaHkUkkOIi7ajXak9BbZCvlqGw0MCnHywGvQHuL0tTlyX3vhCPb+FTd0pBq+w0AspoVBqg9B6eVTe3rAuMQxxtsT4jFJeCQeNWrkhjgL4pgOJYmxWRNW+lBAPD/rLYUQ3F02BwI1OFQJWbgZISmPQtWgl8K+k1iNPEvWPNbGtNYx1UajT4NO5cGjfcHqxpijzi20WaJKUpIdMy1B8q0YPepXdpOMLl0hvCfY39gy1IrG1KK61PFPc/qoDOcJFHj3LpOXk8zAWtoSwmVSW1Pmyw+ZQ6m0ZE2mbvxvIW5Xk8nlOcPJ68IiziuUd+KTZy+k+DxTZu5sYRif2SkC421JwHd1FR3mmUx1PkhorqBmI4LjLxbZxSCI8dEQi2H1DIca7R/HQZXo55vwGET+flIVWFDmWx2HC5CgluWMjN8l1HccBsxdHKMwiVl0ufxvqvh1d+yvCLT/5lgs/DSVMZWfMn5bv2CDjtTj+JDCWTkWIxVk6cY/pV19vT01sbFOWKyzEmMUnLkJAjwQO8D89QOhyvNClaonG4JhKJnNyzYhNJ004nnU1lrRJJjBrndSCQtiqa22UHuDG+6pHEzFMSipJtKApvpacQHKNQyJOUjkr+rjCnEliDfZv/7VlP4Co4uHUTHdyL1f1n/QbhX6E++LaMSgAAAABJRU5ErkJggg==);\r\n}\r\n\r\n.img-equipment-rod {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-equipment-spear {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-equipment-staff {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-equipment-sword {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAB0VBMVEUAAAAxVIgvU4g3WJAvU4gwVIgxU4gvVIgvVIg2Vo4uVIgvU4cuUIYuUoYuVIcvU4g1VYwxU4guVIgxVIgxVIgANYgAIlr///8ALnoALHI1Vo4AMn4AJWU1WI8AM4EAKWwuU4cAHlAANIcALG0AJWAAHEwAFDwEIEMzVYoAHEcBG0AADCsBCycAOYgAQowIJEkCHEMALnIAKWcAIFNAZaAADTUEFS4BFzcIGTbz//85XpYANoQAAhMAAAAABh8AEG4AIlY2WpMAP4sAJHwAGnQKHT8AEjcAPIkuUYQAKX8AJ2YCDB74/v8AAmjr+/4AL4IAIHkACG0AAGUADTMARY9DaKQAW5UAOn8ABBrM7PSn3OlwvNNMo8EAeakAO3oANXcALHcAI3MAEXMAAl4AAk4AF0UAAD/o///h/v/Y/P7P+f6/9vjC6vOZ1eaIwNd/vdVksMxDq8pNqMldrMhjpsUkiq8AYZkAMmoAEF8AAjQAACTs///J+/7G9fjY6/XO4+684O2s3+ui3OukzuCYx9yExdhttdFyssw2ocBcnbslk7kAZZ0ATIgAAlgAKlW26fS01udClbgAlLgAhqw6gqQRdJcATpQRUHgASHMAQ14AGlhpAaJcAAAAFXRSTlMAA3n9a1sRIQn4mX/7jpln+BOoS0NbZY5gAAAE0UlEQVRIx33WB3uaUBQGYDXdprvhAg60gikiBEdAxBlX1Diapkl3m9m999577/Fre7gxDmzzPQSBhzfnHgSulnbWrV812y39se3YsmnLlk39wUd32K19Ys0gTdMDAy66N8Y+Puixm8XWwWycdrn20NiYnYuOxz02c41oNqYUFCVWKKiF4XZgpxBTlEIstifqsZtEXEkmUqlUMCgIwU4E2EtBDiSVbHTcbhbBoirLPM95IZFMxAhscRwvB1RVOVB1gen0EY3GDhQDw3B6hDDCOnFYAicCSlUTVahj6xKJgPf2ImucjU+vVCrhcAU+nbDPGsivJoLZ6B6bFcSubdl4LKn4f/9cWrp5k2EYH0XBysdAKMr4DLMs4eUDsUSVjg+utVqsa+j4SFII3OY/Pj22xBw7TlJUKEThwAbeYpzYKMlYlravs1jXbnQpCVXm77xG9z7fujWjk+ZArQqb4WQ1JXgG1mzApJAK8AS3cB6hp+/mxZLu6ArpIMkTUAf6CQRjewa2tglH+BZunNbQmaOToqS7u2KwEMWwGa8sAGlVGQ4GvESYen8Z3UPam1pDEnd3orsN46sQEVkIrJCBEYGPEOHjTPo8OquhS3vLU+LQSrCBfsIswQtyu8qI4CVYhppJi/fR2Tq6mM9JIqC2AkMxQPYNd8goRzgZitRr0yfR/To6n8tLJbGX+JwEN9om9MgoTzh9FOnWa0fhCtTRkzI2JuItmqoAcYi7a18QOl1HjxtgekmF8Pr/QdwlffIVQqc09BjqtMrg/kO+cC/Zh3sBsnusUbuKUH0CPdKNsWEi4vbDpoF5gYQMMjRWrl1CSEPokZg2xiaV8rkxkaRwFRPxLRMwe18gNIHQOSkN13pMfyvlVifYHEZGDkrpqaHaG+3cu9nVCZhcl6kdmUBXJ2dDqxJsLiwbPT89dwTIiU6V/vZbJg1mYgKdmyo3P6HpvKOfcG1iMg/2XkYXJx2mXrYtfy8+CpOOwf28PIpOu/O6uX0zwZHKk3Ctr5Xq2vSc1HfD0NCLmZSGxEbz2UvpgXY03ZBmSONR5nq+/QjB9pAxaS79Q5x/W9duHHkozZWW7+TRYdMjhknLiOXXz3LNawgEQody6WN9j5jAE2yFIkmHvhsjsTmE0POH6OD0/HO4dw5Rt4772Ay/T26TYUGOEBU8MqgD0Rvlixq6e82Rn2peQVCHWWDZD7wQaF/kQsqPRxYiAUEcbrGc+3p9am9TlGYnryANHZpZWvzQ9VICovIR45pRFCAcsZFPN91ukpyZnb+CTp08c/jXaDeJVVWZy7BhxiCwdOXEiWPUwuW7Z0+iS8liMGgQ/BqPJQU/D0NjGV/77d3J8T/vn0yc0r4lhKSCX+OWnYNxTxVe/bw3A1NRGKYI+MNTBazDxvrm7etIe3VHTSQ8cQ9MFharzRONY8NFALGwsM5WYBP+Desduf79TvBAwhP1bN5gMWIb34+NzMEcmckQPYEDEa8/lVBB7PdshhotY9RRigFZXjTmV64rPL8o+6HxBBaWduzYVGHOHi36jQRW1kV/cZ8xkSc7NTqGVqqKqvoDODCZw4SONw2nBIPjbdExWdf4uOe/cWXNAswgnYXfKrCspLVlHBzIugZBmLPWblsl9q0gzLFuX7dKtnfEX36PZTmYGMcXAAAAAElFTkSuQmCC);\r\n}\r\n\r\n.img-equipment-throwing {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-equipment-whip {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}"

/***/ }),

/***/ "./src/assets/css-img/homepage-backgrounds.css":
/*!*****************************************************!*\
  !*** ./src/assets/css-img/homepage-backgrounds.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/***/ }),

/***/ "./src/assets/css-img/homepage.css":
/*!*****************************************!*\
  !*** ./src/assets/css-img/homepage.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n/* \r\n * Generated on Sat Sep 15 2018 23:07:36 GMT+0200 (Romance Daylight Time)\r\n */\r\n\r\n.img-homepage-border-fill {\r\n    width: 1px; height: 30px;\r\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAeCAMAAADaS4T1AAAAP1BMVEUACSYACiYACSYACiYcIjkAABsDDCoACiYACiYACiYACiYACiYACiYACiYAABX////Au6uKjZozNkkiJTwAAAERhPXyAAAADnRSTlNtBEoPz6adXVNBNy4lGyJnbqAAAAAuSURBVAjXRcHHEYAgAACwiL0rsP+scHxIDO1Y3y6nwy7YrLrZ5BM9dfL6ZYtQABVBAOjYM0fUAAAAAElFTkSuQmCC);\r\n}\r\n\r\n.img-homepage-border-left {\r\n    width: 220px; height: 30px;\r\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAAAeCAMAAABwpIAMAAAA8FBMVEUACiYACSYACSYACSYACiUACSUACiYACiYACiYACiYACiYACiYACiYACiYACiYAAR8BCygLESoUGjIaHzdXUkSTj4Curq2goKEGDCcIDCaEg4JYWF1JR0xsbXE9PT4AABwAABQAAAMAASIWGy3///8GDCpQSjweIji6tadUVV8OEy8CAQyIi5gxNEcmKj0tMEJydIGDhpP6+vZ6fInx8ehtb3l+gY8XGzSJhXhaXGd0bl4cIDKsqJhmZ3JfYW3h3tG+uqu1sKHJx7+AempiXEzn5t9qZFSloI9JS1XW1cva2tmZl5WdmIjDv7TSz8EyMC3TiI5wAAAAH3RSTlMCZ0pxXWxBUzcuGxMMByWmnc/P0P3+/fR66eTiv6mhwk5RAAAAAbNJREFUWMPswcsVgCAMAMEFIyR+ONt/pdbhPmf4fdUtxiXGKcYhxqqlRWVpkSO1GH1o0WfXYsbUIlpoEVvToj271ts9vfUmCENxAO+m7tV5AbxtUopXdGKFCd5lYysw5/f/NmujArqZ4NSY8MvpSV/68E/PAalCIrbAXTCWbPvu4iT0c6lUoUBnNBEfIJ1N73CWIFTSMQKyxcyW4K7KOVzO3EY2qhw70YB8fWNU57BrKLqcX9fPlqe15z3w4RuFvQUMHxf42vjcmQSWvqZvwYAiQqgtIcXzIOlBGs5C4hBdyTiscczLMb2/dY8BRUmSlHUVElvQhQ70XAcTKErXVT2HSNEWAQsHDdlAkHc93lpqBPa1CVLo+1sLMtD7aYJwykQmHnZ53l53ZbVaExGPufGwvVG7tDatNq3ohmGNEwC+udQsQ8Oabbuyq8kUtjHr2nw+d6zm6RYbK8ZivhmHmu/YjObDPvmSQJ4gz7E4Ux8MBmpfneoqMzNnlNkipPVPZsv0zbamIbpP3TfY97qv/0vnOFDSCcfzCjygMOJFKYfgtYGnkiN4lcdYAslnQSglH+7j6Ae+16TUGqm+jQAAAABJRU5ErkJggg==);\r\n}\r\n\r\n.img-homepage-border-right {\r\n    width: 220px; height: 30px;\r\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAAAeCAMAAABwpIAMAAAA7VBMVEUACSUACiYACSYACSYACiYACiYACiYACiYACiYACiYACiYACiYACiYACiYBCygAASAMEisXHDRXUUSYkoMEBhUGDCerq6kIDCahoZ9RUFWEg4JsbXE9PT4AAB0AABQAAAMGDSr///8WGiwAAiNQSjwfIjlUVV8ZHTK5tacQFTACAQyIi5gxNUd9gI0mKj0tMEJ0doX6+vZvcXtiZG6DhpTx8ehkXk69uaqPinxbXWeoopLh3tG1sKFpa3iAempvaVnn5t/Ixr+emYlKS1bW1cvQzb/EwLGdnJx2cWHa2tmuqpqPjo6Ggna1tbQyMC0KnRZOAAAAHXRSTlNpAkpxQRtdUzclDAcuE52mz9D++716++np0eSpoTCbiZkAAAGqSURBVFjD3M/BAYAgDMDACKWtCk/3X9U9chscl5g794rxiHG01mGJcYuxtXrTWtGE1giGVg1KK4vUIvGaiH0w/27s9ilBGAwA+O7qcy8KCBZM8AVFS4dRaFKsUUiI//+f01BeCqXMMO/43bbb9uF59tzu9mGlxYISOynVzQHAsmxaEZ2elwcj8DyuMsnyHFwewMVRMAIaCIHHM9G6xoCHWHdllnhfm6ZeYtWQmVqEnlLztefUfUYlq/Vny4qsa6aHzNY82qmAQZ7hdrd52nnUHyhFUCUF0+LgkEDX19Rmj4atAWkX4mo4gCZtBRAlSJDj+bDvWq5NoLjU6C4tbi+imFYtHpskacrU8CExZphzPQ4qpryATbEG2jtQt+l9r/EfaBraVdVEnCI1RF0eLO2A85BL5KlGb04uEkoYCTv0GHOo1wjG+C0SvWm/hB0a0UBhYhvJlOHJnm0byFhgY9blQD/f3YabHKMsPWbp1tr4i8knnb0R0pmsoo11mnFkWbo/oofRJz52fIVUADw0LUsqlBbayBkEPtHr4KyUBNd16lfl/GY4BXWXvwYf3eeJ3CDU0H8AAAAASUVORK5CYII=);\r\n}\r\n\r\n.img-homepage-button {\r\n    width: 350px; height: 82px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-homepage-kuppo_message {\r\n    width: 400px; height: 104px;\r\n    background-image: url(data:image/png;base64,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);\r\n}"

/***/ }),

/***/ "./src/assets/css-img/killers.css":
/*!****************************************!*\
  !*** ./src/assets/css-img/killers.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n/* \r\n * Generated on Mon Sep 03 2018 14:37:25 GMT+0200 (Paris, Madrid (heure d’été))\r\n */\r\n\r\n.img-killer-magical-aquatic {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-killer-magical-beast {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-killer-magical-bird {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-killer-magical-bug {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-killer-magical-demon {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-killer-magical-dragon {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-killer-magical-human {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-killer-magical-machine {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-killer-magical-plant {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-killer-magical-spirit {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-killer-magical-stone {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAACnVBMVEUAAAAAAAEPHyUAAQEAAQEGFiAAAAIFCxAAAAEBBQkBAwUCCQ0LIjADEhsEBgsAAAADBgpOnq0HLz8AAwQBAQJpvcsAAAAAAgYGJzcHHCcWPU4ECAp51d8BAQIMJjMJHikGDxcIFx8CDRh/2eMWNUUHERkOEA4SKTgSR1cULTwCBQYAAwUETVkDNUQVJzQaPUgCBQ8ZTWAAAAAAAABbo7AOOEgWNEAdRU0AAwUBBAYAAABbuMhTrL8HhYwEZG4SIixis8EjS1YBBAUGFB7H/v6N8/YYFBsqGAwpYXMjVGQdt7owrLMJa3gIQk7s/f1XmKQIBAO39Piu4uUiHyAIjpMAfoMdfIcDdXkDPEpQnKgCAwQCBAZ96upEMiGL7PN03uhuub9PpbQZOUhev89LzM9sztQzwcVWtMMYqa4LW2QiRlYRGCF0wsQRLDgAAACV/v9ImalNRkIxKiCe4+bA0tKK4uZ/y89X29sNo6QUMj8GlZoAVWNqw9BMkZs2bX0OHicFDRDU/P3j9vmP/Pyl8PFUTVyZx9Bdq703YWw0cH5bmqV4zdteq7xd+PWR2dtJhpEcFhR01N0TJS4nVmRVipUmV2Ncrr1arLwRN0IrX2yD2+eFrKQ04NtBkZcHGR1PmKv09fX5+fnm7/H+/v7s8vPt7Ozb6eqF2era3+Pk6u3W5+mp////+vpv1eEuan6D1eNCh5fg7e994e/S5eb24+bD3+NXNx+2///i5+o8fo4aDwuZ8/42HhD86uzf5ebs4OXk4eTO3+LN2d5QjZpJk6Pv0ILhsE2eZi1FJBH//pJLgo3Dk0x1Rxqh9/3D6evh1trv55e0ejmTcDlmTS560+X5193z/rK+s4e6oV5xYz01Mi3Tx3jTuW+NelQgRVI6aPh5AAAAoHRSTlMA+Azpbezv63VnIPf29OuM7qbxe002Kvzy8+8F9Bru7ez9/fXu6v748e3AWvTz7cz+9D84/vDQypRKFP769/Xu7Muzkv7+/v79+/n59fL+/v79/fz49/b19PHUpf7+/f39/f38+/r6+vf07+vg0IL+/v7+/f37+vn49/b07+3oikf+/v39/fv778e7Ohn8/PTu4N3Rvb23mJGGLf76+MZpMZLphgAABp1JREFUSMd10odfEmEYB/Be4xDhQLqKOygRCYgdRJQjtcw0V7k123vvvffeexeCErNSEEeuLEd77/G39L6MoPX73H3el9PvPc/7vtcvnONXjw3+d44du9rvX2HeujTgf7l4afCQv0XclTNDh8EMDVwo4XHo9ou7/xLJjOXOiXdv3w1dKP4RTd/VP3ceHfm3aLx9GMfx4cPhjUYUNPofzZ1y/08TN3B55v0cen8UevBGAxwDEzCl0Xl+0JAIwVg++f4kEPgzh4Ou0DRkWIeczqNJURFd7bmfA+h0LocTHR3N4aBBmo7BAc1E0Rwunc6e7cz8VSdKdSTz+VxA53K58B8wTCqKhlkmJOKj/ZNlomguNKzmzKLLvOARXpna+BDQOUhAkp6OQYNpMaFWFC2VYumYFJXh0sHszCNJQwLk8o5GfxEIpBgWr9Vq4zGFQIgJ4+EPhRDDUGuQPMm8MCgquF3jnD8QQe+EhJBItPEKiVGt4QuNEgWEyHDo4GHjBVWQ7DoDt4vOQTVg0gUFCoWcoMqvL5QLBZBgy9Dy4EaPco6P8ZMo5q7tE+9AgsWLRBjG10oERnXeovLNzyeXE4KlAgmsIpWKuACezTlagPAmjLuPCOpdKMQJAaEpL7Lsz9t4cIlGI5cvRa3B10ESrBImUq1AvpTYVrq5rLJ8r2VPqZrQpJWp4coksD0tJKOcY8Jkup9QAgGROqz4RdHitLzZ5YSmIu9k0bzUbYRAL1DEc+n/IBhFEBWzarxtrv2laeq01Qv273G59s6cn0boJekYIo3jIwjaMT6fn7rB1vDA2l6zoCB/osXlqq4xN7W5Nm0TCAMkci1wxwAbZy+ZWNfV5aizVx9Ub7S4aqpNNWaz3VuUWymk+Iis+tVY4lRYBYhw9o3JXV3ttWbz3jlljZbq6mqTyVRT52irz6cICpJD+yKIWw8AF+Onruvy1NntpszUPIurGhlYx+qty62UKEQgVCXcWPpS/VZ3l83R0GQZVnHQAhMg9vba6WVaRTyLfIhI6PRPwMbwpZKKTXUdjgaTJa/U5LJUh4ijaXIeQWxJ0D3ZNyJAhjB3Tc0hgT/5HlebxbKgbCMqgQQiVk/tgiUFOEv3cGKwSrJhGi7LyiJL1raUsEqurWuYXbpwsstkCgpYxeYdlqphs8CUUGMGWtWXb90fP7368OrDxxawdWvZfCRQkKizemzvT26lIHm4L3gujIzTXx8/ftXd87T78ePuEvbimaY2c10Nil+0ex50FudquCzwqD64lsQqX8/TTz1PfS3Zz3q614CNllqr3VyLYjabrY52T0PDA/c2RN4FSWxVdl9r3+cDYplM1tfHYq93eRz2Wn/s9iarw/agYf3L4nx6RJWVytOt2WsO6Egy27dWVnigowl+ZlaHtclutVptKC/fv9iUxoZk1ojQWpbNaF2Dk2TLmzdZ5Nr15pedNpvH44AFHA6brbPJ1jBzYYUch8sPEVViVUmrjATit08/60DBiVnr27wdHV6vt6Ozs8NrL9owf3EFhRspFngSaoynUiZkQZLl8z1bIwaVixcu2LBuXXFx8YPO9hcbNuWWplVSfD7OBqA5RKJ40/R3cABkLYXPer5nkXh+furmzYtzcxfOn5+bukQt1xBGPpvPBuSd+vG0wAfDm3BoXg6ARtba+/r1W0Dp1ZUa9RJ1Wn6BRi3X640ExfaTZveR0Gc5cMfMUXxoxOLC1t43MvYkPUUZ5UaBnKIEcn1OAYXzoQBzU9zjVUGiypjqnrMFABYAuhl9OlaBEacIgVwuICgKTgicjcSdFPfORIOfJDMNDOXU+tXDAUzCDF+2jsWGjVBbtuBsGNQTC75s0qJZO6epeMlDIInjjVTF3tzhXs1HJuttbwvJgmEnJLBZwcDnOSkphzMYgwxxAZIUQ4tVjnI342IdPNDXvWTCcLE4QQxvFDghQc4c985pjBjVyDj/WuIMMTRodtSnNN97kkBm9/p0c2c/unOvufleIM33Vqf4BU1lSPZvchQziYbMqXlz5sycQpKtz7LFp7YvWjQvZWwgi1LmjT2cAUXMSNRX4DAHIZMxYsSKFSPOssgWXwn97PjRK0YHs2LFuTHTVtKCImwYA1fGoiQq++tm+FjKxNjfMpBBi9nNhCLSwIcwaCe4hWu/VCXCaUQYjHCNCOMPY2Cski6bIVPGwsLhhEWkiWGgwForM/oXFlZBEhFVWIQN05A0CCVpd1JMojJjpWp34HfgoQGJv0wy81d4Iw085m9JDoufYqBjYdqOgSgAAAAASUVORK5CYII=);\r\n}\r\n\r\n.img-killer-magical-undead {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-killer-physical-aquatic {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAACl1BMVEUAAAAAAAEAAQMDBAgFCxEAAAAAAQIAAwcAAAF3zdoECAoDDxkDBQkAAAAbN0JhuMUAAAAFExxSobEAAAABLTwAAwU7ZXoCCA8FPUsCTVkBRVMIHSgBHy8EDBEBBgsMJzULFBgFGSUDDBKV8vuS3eIOoqYHanMDcHoCNkMOMUEAAAEBAwMAAABbt8YWZHMZO0QeRU4AAAEECguc/f8lVmRTorUXk5cNhpACfIQokZ0QQFEECxDJ/v9hwM6X7PBPmqoHGCIBVWAJXGgwZHTu9/nM8/d33erW/v40cIQzYW8dO0dDjJtTzNI4vcIor7IghpIBZWsCBgkDCgz1///k/v9szNsSJTBe0NSq/v6D1NZpsLgiS1lIpKwAhoQfnKEAAAABAwUAAQKF7vG85ua78/V85+Vpx8+w6+9rvMN26+1Zrrxip69e6+1EvsE7z9ACk5UOUl0LIisAAACP+fsjHyF2xc8quL1w3t+j1tlTv8Ng2uBCrrU1pKsWKjZmu8gBBQkAAQOo5OR4zta4+P3X9PWN5upT3uIpYnN7+fqD2+Umoq0beoNhsMAcMj8pWWgaNz4BAAAMGSBCfYEmWWYjR1NWpbYVbn1LkqA+gZNvxdIkUl0AAAC80t9y9fNE4eAzjphVnKoxY3NZq7IJFRw0WWI0ZXRjtMWCp7UECBFWo7b//v7u7/CQ7Pf29va8//9v1eVcn6yv///+8vMsZ3ozLjAaEBBRk6CC5PLf7O325+nK5+m1vMG5sag1KR/m9ffU5+k+gJAeHBikp6JOh5FTVVFAREU+Ojp2YC5NPCZsSiD//9PJw8D/952WlJBlaGhkW01IS0jb3+HW0s6ZoZ+Aenngvm65pWn/2miajV+sdDmUbznChzjn36xCinQOAAAAqnRSTlMA/e/r63T1aSwZB/T9HA/efex9XfOi/v319PTz8pX18f7u9/39+fb19PFvTCX99MzLVBD+/vz49/f28mf+/vv7+vX04f7+/v39/f38+vn59/aMWf7+/v79/Pz6+vn5+OJFPP7+/f39/Pz7+/v6+vn59Ykz/v38/Pv7+/r5+O/ju6r+/v39/fz8+/n39u7u4tPNxMO3kYf17evozMT9+/r15cu+r56Kb/vNQuxYvOkAAAbBSURBVEjHfdSFWxNhHAdw343dkB26uZtLViyJKQIriW10N0gLKtJgd3d3d+sLbIKAUnZ39x/je7vNKcb32Xb5eb6/i2djfsnY/2TM3zLuysUDE/6eAwcu/s0E5J9duXL86Kz0Lg74/ykizkZ2Bgd3euJe8Wyh3dc7gy+EjRahe6dFNqVdmzhxYloa+TORCrXcdHtLd/D+sFEde53dGRjtnxEvcMbt9/+9I6Y7Wkr3ppruR/8tNFr6hsjO88j4OmKc7g46OteP/FA/5MK9goz+unPa+RqvqNnnjEnFyX7yfDp1qsIq8/sZskcWG7N4TqDngVw47SwDFEAHWX4cDodOqONzRHS06kfnkN3osE3l3Dc9gHro+w8500mCBE1naZzI8WM5MmcMDq7VKBR0fVmFkDLYvZh9oRSZMud0NyLkRDRR64m4TIPE0Zw4cGOgZ7NZYs2KizxpoKO4SQRFAucciYxCxI/jR1t+smrhxqrclo6BW7cGb8FSwZLMypZmC3mNNHC1++jUcV4SvIkinE3tutLZWlPcwA2UWz1JlcbmllyH1c9NmrqPMj0kaHtwqpsoZCxJVWE9sTymw52BlGxiWWEsweJw0ASg/ycJ8xDOih0yoipxWi4RXthBJXGpQDCroJGQ6VcgcnXaZB+pvUYS/Y4V2ga4TCeMvUmJnpsbHZK2lCSTZMcODkW8g61sQIScy9oW15MjsG5d19PR0dXV0ZOSLRRo19xUEytkqKXJR/KO1HqIUL2mp8VOaJph101E4EwtIVAnQbVAr3DfMV/L9lkeItAugs5MjaQqBSZ2dcGCMkK4bB2crdXpOSSJ9JFDiGAsRPSEemYPjDuoyy6AiJQINUsL4K2FQkKmoGPg6ryfZM6W4ChExAqJ3ZxdUl+fvMhijkM1HcbKpRuXLKjLMookYhYG4r0kYPq5ptpUkkhMzbWqtSWxa2dvyJoBIexYsjRp8ZKSUlVniVGISL93sBoeDZSnyTG63pIEZydvSIFwcE0idGfGGggLN2zpLEjM1inx/nmTKMKlyx/MB0DKORi7uMxktlSU1ZEVMxfNhLBrfWlZhsVkqhis1WB4f+0k6h2L2H3n2ds7yBicS+x2oU6iU8chYbKbVGihFkkIgUiontaP4ehaKOIfRL/fBd/NB7qU+txFZQLhcpVLBetFdpGpYHDhlgUawakFy9s2N/1yxwJCd/NfPoNvRoAgM3J2hXkWVC1UFWYIDI7cG+vVJeipGNclqpodqOU6ORiZsNXy+SMv38CXIL1oWWUmXFxZlZSSIzIYNDMK1W0qWGrOnrF4mxRdi8tLAuesAPcfyN/CdwBoGgauaoTmRbBCZGg3F6zX2h3GpOO5wnaJVIr3J/8k+w/z++6PyIfgMwAaIwWEQbTtZmmuQ5id0iS0ikThhcsJQq9Ag/lIUHgjuDP8ENyFQ0CetbU9R6TLijSKDjZstAsNOTmVJZu36aP06PJdPnL4ejF4ePc1Mu+BYN2C3K3Zba3LhMaGrSKtKavI2HbilMJKSLF7130ktagcgNfDvWAYPgSXNpvbDebWTJFlVo62xbgwrjSrtZ0lEUux27+Q+MZygIPeFw/A0BDALBYAijNbiYpZ6pb1FZVLYxq0LBn5WqYm+17+6PByDFPi8t7e+UND8zEbv6/PRgiqslQwySLU5BgkYrFYiYjrDHMKRfIOuTKkGEsJ8Ad48fHhPgDuD8uBQKNVxbRqrDoJSyxmoRJbtOsM10OYk4qKUuWYVGzD5fzeF69w8BC+ADaBzrHNTlijrBIFGgtLz3BF86j/5IDA6Xm76ly3lagH4/Px3td3eoeffubLZTIWilimRx1SLD06OX5ViP+UAJKE1XCDJtXH3pYDTKrk4zj/0fPnjwAutyGgVEql6IshEZ6xhx3qH0iRUC6Dt6uuaJMS8G04AH0fPj0BAC9WAtTJR1+0rzjDFb+KzcyvQcQ9GDOEEbSrLvb2tXQ+AODxp699IzgoTosqj0qLQikvvxbtit7DZjK5NYFIIOMfEUKa6OjktQC8evTtY7H8yxPAv5dc1xhOJrYoNjweiRBmaBgqITNlLhcZ3p6EhAQxv/fD8/eo6duTPsDambAzwf05nLAqj8mkBFVDGgY7iMfjnbtMf/zKRq+mPf7ypA+vPsbzJo8Rwozwp4SnJ5/BZjAYCK6qBtWrebuxka/f72KrGEyGN8xQn/DM5jF5vNWr89i8avD56dM7x3zEO9WoHjLUCezVtJGPj8AxNoNNhRKjTSiXTH5ERER+fn4I6qHtzuNGcKlMp8QoE+j/a6Yz2Qxuzc/NQJ/4AaADOo8TsnpDAAAAAElFTkSuQmCC);\r\n}\r\n\r\n.img-killer-physical-beast {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAClFBMVEUAAAAAAAEAAQMEBwwAAAAGERoAAAAFGCIBAgUBAgJ2zdoIGSIFDRMDDhUDCA8HMUAAAAAAAAAbNUECBwxRobEAAAAAAAEWLz4BAQJjucYBBAcABAwHJzYNO0sDOEgAAAACBAUBUlwAAAIAAgMCBAQNJjMGHysJKzwAAAEPGiAjYnQVQVMHIS4dRk1kwc0aOUlhtsJWpbcJi5MEcHcSOksRHykYO0U6aXwJCgokUWEal58BXWgBQFAQNEYVJDAAAQIAAwSS/P1GjJ0FFB0CeoEISFgBAQMFEhkAAQMBAwUAAQIAAAB/6OkmTFmD2+AbOUc3dIY6vcABZ24SUGIvY3MECxADBQgpTliF6O/E5ueZ7++r5ukzXm9KhI9k1tstwMQffIoWSlsnWWkAAAAIHyjR//+j///a/Pzb9vbD8PPR09M/REmv8PNuydEVLzur/Ps/g5aX2dxL1NYusLZVscEMoaJLmatotsUbOUAkUFxBfYFWprbE/v7S7/G36+500thByMtp3eEbr7OL4e5UxMgDi4oUb36c9f1grrxLkqBxxdIPIy6gvMdVnKo2d4khRlEwY3MSJi0qXm4hVV9itsY6o6dH5dtSmp1ivcY/cHklWG0YN0FYpbb+///9/fyR7fjz9fX+9fb1+Pg3Y3UAAAD5+Piu//81Li1WobJZtcW6//9v0+Kc+v/2/v7u8vJQlKMrXGoZFRZ22ena4+Rgoa1WUkxAPDwgHRjn8fWJ7/Tp6+1qyNianpsaGyUMERgVCgjw//964fG8vr2rrrK3sql7dmxNPCVtSh8vJh3//9DAxs//+JxnYFWwdjjn+PmNkI7yzXa4pWlWXWGagk+LZityXyvMwrvn36vft2X/3FvHkzxtYzvdKX8wAAAAnXRSTlMA+u7sc+sr9PboGe3r9vrz8h4PaH19YO7+36X98/DyWgr0aU4S7fPwbgf88PDL/e7d/Pb17+zK/v349/Xz7+2bRv39+/b1yJaRiD0z/v79/fz59vPhv7CV/v79/f38+fn18eLehv7+/v7+/v79/Pz7+/r6+vn59fLUzMOI/v7+/vz7+vn59/Tv7+3ol/3l5ODLy7e2b/r5xbaWfl9C66VyOQAABmFJREFUSMd9koVfE2EYx33nxh3O3W3qwhVuuBAmEwbSiJSA0iWohNjd3d3denODwWhFJCTt7o5/xuflxjbz93mv3nu+9/u973PDvDTiPxr2N426dm7rmL9r69Zzf2MmXL00duyksSC4wJgEJxhDd1t9/iT8Ly64/k/NvHPwsugPYsuCptvVoNl4hFeHh4fDFe7hIfxmdmbtwSLR70RDbYKQ8y8JiZ6Gg0U+vxLza4Mpji9oOB6shuODfRBm7W267sWM89syvyGBFHKgYCTU4MHjw92QfMFnxcyGlUXpQx7pZxu2ZQPBGT5yJI83EnM8nYE/WM1OcDATNH/1PJGrIVeON2xEQniBC8L4PADDdLo4uI7kh4WBHcskrm44Ez+BbXrR4YYMBJP4m/w4XRgPznFhcXx40sXhT7A+5JxtZ/xZZPy847VZCBNQy9dJpXEmg1QqVRl0UrPUpOfz2WwYOes3zoUcaYpEeCEsAopVgUJVFVJedIieB8IMul27WTJqEBHNO3L9JkbgFURRBYaazaEqlTk0VK3OzdxNwzyIRbQuZNqhpgDEwRZgYq4IDKWxVDGakLISpjjaFAbzvOFCdMON+EzbiBG+DrJDHLNBnbs/KiQpKidz4WubfVmS1AxRAQGXiaOHXDbewS6xNB0IojXrSlbWNk1deZex222v12gMsbHSOIzULfBCZgQgIScmJClZFZi8fwZjtVoZOFVV2eyLo9QxGpUJmsPxdjl6BLtwyncU5yRpLCWMtQoIBoM1NcVr1weVlqmhNUK8fLfLoUGX8kX2xaU5u5utVc2AuJiWHcuYu2WmwR2ra3K7pB7GiDC6pK3NzlhrqqCUBXC2mu6azBgijI+RqYC4Wrl3ajIiqQPLuttgwbZBgrUBvsU+K0RN00qB0IOMi5cfuhOJCMIyw969aJHNyrgJYGAHMvesiYpRE15Iupwji8xIJHTq9cu61u66y5Z7bLraupkgdShfiILvuBCJb39HJ0KE2RyTUxqdVLp8Na5lD0BsLXZmQTkdCEjdzMks4lfZ+XlJpwwRsaG5FnWeJfc8lLoR3Jo1+/FaSE8wn1TfdhvT24oEUhWtyrMkZUKxe5MB2Z1LG5QCAYVuDCET/FMU7+8zbU8RGRsQbdkzo9mzx0AM7phBSWCEDYZtCvv7nj7qsr9EZEDZrr3NuNq19hqbraXFvjJEqTRBsBuNk90/jNTR3tG3hOlF6Fhzm5Vphnp2HTab3bbItvCCRm8iALnlRormUK3tT6n7zHMHtYQpXl6/eiHuSQ0wLbbiXfv25QRAMFLhhUxbF+xofdjheMDcR0vn74nWREd1Mc1VEM/e3bUzVxOdHFiBg3khqavurZB1PFjq6GUeobwoi+ZAyNrtVtv2WTO3262zkmJovaGCFpBkwj0Pkt2TIZO1P3Q6Hlg7kLK8nNZrcu7ad5SFrJ21sCQqOZY2KZWEkJzjQaZtWJeBkMzZu1R2bMmAjA4kEZW8hlm8XqOxrI86oKZj9QQBy8++N1E7tGPB9RmkkFL0O519D547EYlaW5GydJ8mOa9CTauVeiD0AoSyb50aPZ5F0g43JlAk9CpiaUTf84cDSPb+fifSWOiYvLzIQIMSE2CSWNd4SuJy0U7e2ZOdSFJEoqJf4XzzUuHoYN44KNpgoNWRkQalCWIJUVZCY508fhwmJoji0zYtb1xFIYGApKgIZ3un8+GzRwqKwFIq4QQ/GJkVfGtDgdFnMNg4UbpkysmgoFWJiKQgnUzx6cWLTwOUAIRr8UECUZ9QIPafPn4CRnz8Jdwpm5b3BAhQRGKEzNH69dsThyOCoJCCUmAhhPQJjRsK0rR+6SJXsNFGYMAnPAtMHI/ffhxwRshWhFdH3qy+CYrMqK5rDC4QjzZK0nEwbONnxExw8K2d0NGP398R/a+eyBRzGoPW1WMF9QTVbzgt1hq18SJYPtb46RIuMKfzT+SbFM63Lx6B06snAw7Byfy5+flzQSfyIZVW6+8DhJsxcsWpcrm8MMX38cs+30ohMK0RvinyKfJBTUnjGlnCw/hxxVwueKUVViLfwikppPPDl16ygDuaOyQ34fEBBitVXihPE8srHR+ePetMEbsRo4fw9sFiC8SFnKfvfshSxHgSi/X4nfGXYPmxMsorZcKUVImfhFX8nwQwIh9vxWvFXEm6+1HkIX4Cca9rME5syKMAAAAASUVORK5CYII=);\r\n}\r\n\r\n.img-killer-physical-bird {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-killer-physical-bug {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-killer-physical-demon {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAACplBMVEUAAAAAAAIAAgMFCxEDAwUBAQIABAgIFh8SJS4EGCMAAAB2zdoFCQsAAAAAAAEENkQAAAAAAAAVLj5RobANJTIHHysAAAABBAcEEBcAAAA7ZXgDDxcNQlITPU0GLDsXNkdoxtRiuMYAAAEAAwQeRk0AAACZ/f8KCgoDCxAbOEQMmp0JeYcBdHoEU2ASXm0FJjQXRFURNUQOHynH/v/H8/YSExar//8DRFEBTVlnvMpgtcIZOkUAAQIAAQMAAwUnIR175OdSpbczcIEgU2MAY20FERrQ//+H8PO46u6J5OxUobEiS1jg//9wztSV+Ps3xMQEW2UAAAABBAek6eorVmQNGSQnt8NDiJZZqbcUrqsFjZESSFoqXW0zZ3cBAgQNIysAAADU+/pw19lFjZ8SJjF+2uk7rLQZoKgAgogbf4xqwcwAanVNmKpfscIbO0ADBQcAAACj9/w0Xm6I/P2NtMJb09YtX3BSw8gij5Sd8vcYbnsgSVlLkqElT1wMGSEsYXCs8fHL1Nhi3eNmtL1Nz86Y2d0vnKdG7OsdmJ1ToKc7eopFf4IxVF4OJC4rV2NbrL1QRTeW6eZWrL0hUlxitcYsWmcJlrRj8/cv09lQmZ46dXpivMZKlaUrXnMVNkBZo7b///+T7fj1/Pz+8fL59/ft8PH++/v/9vjz8/QsZXju9ff27/Ds7O1w1eVatsa8///k9vbj6+3d6etBQEIzLTBbnqxOlqNdX10UDQqy/v574fHX7O/h3+DTzMqlp6KUkpBVOyIcGyD35ee5vcK5tLA+fo9MTk1aUEc1Kx7p///Z+Pn//9T/3XF0cnGldj12VCG4ytpppbL//Km0qqhSiJF/goioll7EiDpuYziMZir29OvMvLeZqLTo4a/kw3jAq3DbuGN7dU/A0UReAAAAoHRSTlMA/fTs6u1o7Q7zexoIcy7yXSjufe3xb6X5E/7y8e/y7v7eVE3LIf7+/fz4+PX18/Pw7uz+/v799PPh3sqbjkP+/f39+vaS/v7+/v7+/f38+vTivf79/fv7+fn38eLhyYY3/v39/fv6+Pj39vb17tawg/79/Pz7+/n39vbt68zEwf7+/fz7+fn49/HrxZuVkIX+/f22bxj9+/nFvbaRfV9CthvSdQAABrxJREFUSMd9k4dfEmEYx3uPFZQeEKtkpalIgJAYaKlpZlqu3CNt77333nvv9coWMGdpe++99/pPeu6AbH8/B++9d/fl97zvc3T5iW7/ocvf6Hpq/64ef2fXrv1/c7qfPJaUlNw7Kak3kJyc3Du5NxxJvZOTkqnhePifRuSRmLp/kjM0f2f070bUtv4xz3rV9+o1lzqAjIyFMJbQs/pbE/ov2R79W8bRxnPlBCsAjCGYwSul6sYlOwW/ZmT1TyeYFAzmDxidMyIuJ6Zuu+CnjG1ZjeMISmEwGIEPh8P4MYEvFqHMaey/fXTISN3XmHCLIFhMJgvuBhCJOKFTOo9FxE3N2jAquJ4DJ5Y3rkMEVTLBFTM41LP9AGoEkRvBgh+Dm7INjatSuweavnN5YxxiQcTSdfMn6sQcQCQ0CeGkH8eirZi/RU5vAfEyYVVUQDkwakt/UMDYNC83YVNfkVAkEqpUJhGckAUxueZDZWIm5ICyLzKg9ByVFFMChYkNFqW2uPmwVagwCQMotdnXCyzkFCWshkBn+q/gd6VXHz1qat1CggVFMxjxU+3rM4UKo4JGKK+82KKL4HIZAIGenVvBppWugiEz8usRi8Hg9BMpJ7rHZppMCrmxulquUJGVzuxp8SIOAMrZkNIzfMiMOfWI4EDtQkuBt2kSqSQDKDPX4uxpclU/kZBDF9YnmALKUFAYIoVKWLjAYS+euHhKX4opGxeY3dlVJLUVvyjdBUOSBoHC5JhUZOZYe4vfNmZ1Xd2cuiXme95mu3kSKNCeX5UdU4fSikhlnJZnb7ng8/k9bpfD4/M1X7Df18pVIlE/Wvl5+VQKtF1YrS/A9ianz+6gsHuaW1yrddVGMfSUUmJCKdEpy0OKnOwb47J7MXZ5vQ5s89rtWWWkUa5k0DtWMQ+UYCsn5A+HHROaVAq5fMraXFwxscnmxRsWr8FzygxyhbFa2I8b8VOKIEpaMbQEycQqo0JeWKjUr8XlFjXGCX31F3KrSKtBThqXLVOCMiyk8IqYaHiJrJQbT+qrqiq1ZOacpvSy+zjv4ATbFlJXqa3SWZVCoxiUoUGlCCW2piEkMyyesi5nz+qERdayezi7CZvv4z2Zuvys4pxBi/qSQg6lDAgoUuLah0vg6DclYLfdjQfpdHmYxqzNrMx12+FafoGFACU/mMKWjrjzHl/pQEvnea/7HdmLMw3TFmBsw+e0BoMur6nZ7i5eMm8S96e1CPi1qP0GvpiG4ifmtzjMWqt+WgF22XDxZL21cKzN1zR28tIMAyhncwaE3jGp5lraI4+tHRGTcu3uQdqqRVmguHDOpMmVZpc7T2cVc7kRoDSAEnxhhOh267U1+DJC8/HFpjG5Nuxy2BwufG/MGKfPvNliMHHElDLhhzJqqybxzl3NDXwJoTX4ugs7nF6Px2ZzuLHLbh+z0WpYZhL/kgLvWAVKvNmKLuMbqBVfbHY6nX6PzeOlR2xbVGiRK35LSSk/Px61vqCcR6hXgq3Fhh3NHo/H6fS1rC9YsNlKKuNBIcrPdypb84YjdPtmG7qJd6OMLHzphgP7nWB4Bk3WF+rlJL184lanMmT6XlBQ25XbaP6lDmK6Pw3d8WN/S7PvQlmh3EKS8VxKQRnnO/9iFaeHE4QMJba1Xft4KY0Yj2LRtVc25wV38eRqIxkvBkNMKQ2rfqQsbxgHCoFQa8f4py86EGq/mYieui7a1usHD1bSCnSyNL1hFT/Qymj2gLHqDBlBcCFI03alPRb27Qpq918f2pdcCEo8ZRBx4xqGSVNppWd06uyZ6oZyGREhIzSa2LbbaW2XH3xDr9wJm6EgKiIiAoz0hulFkvCAIhjNHzhzqvqWDEF1mlikefLw+VsUeyV7IxeqhQMA4/S4lbyo8J7dKSU8ih82cKZaXQ9OaSxCiV8fPkEoNm48QjKEkAYB48dBxmw2P7VnsDC2hHbKM+Ko+1cfvou9C2pcyfDBC0sGA8PrhzWkr5zNlvBH00r3roJICeWkp5/PQ+jOuzdfShMfX0Wys4PUe0/TqNWnp1MGOyqaqosujU85K2tqasSo7fPzR5D05kkHSlxWM3JkzUhga01RCpvNjhKAEXRGg8NLGSiVzqpl7m4vZY4grj6+2hE7okgK1ygGpoRJ2JG00emE8XhhEolk9qwRaMSsgbXE3cefLhNFPFhmAF5nRqg22gmDLOksaQpPOgK9fvAgrZbHDgo8SdD4LYeGeiCMN4t19/VbVMuT8Gj+yADo9tBERkbCRwI5RG0KP5IfIFUAff/DiQ7vRBCeyuaF8VPhJDCP7jS+A4ieQZmELZwbAAAAAElFTkSuQmCC);\r\n}\r\n\r\n.img-killer-physical-dragon {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-killer-physical-human {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-killer-physical-machine {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-killer-physical-plant {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-killer-physical-spirit {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAACnVBMVEUAAAAAAAECBAcAAAEFDhQBAQMOHSICBgwCCA0AAAAAAABjuMV2y9oAAAACBwsQTF4JGiQHFB1SobEHMEAAAAAPO0sAAAABBAYAAAA3ZXYAPUkLIS0AAAAJEBWQ7PcAUV0DKjkPY3Cu//8CZ3QGGyYEHy0DDRYWKzoHcXkDNkcaPUUGFBwCXGUAAAEAAgMBAgLa/f5PlaIFeH8db3sDRlUFFh8eXW4gSFAKDxUhgY0RWGkQQlMAAQIBAwUAAAC4//9y1+Rv0eArZnmP/f4LjpMJJjQHFR0AAgMAAAC+///v/f7/+vqM6vBjwc9foq5PxMgokplPorIaT2MDCQ2G8/Vy4uhEhpKb7uwss7mW9vkPmJ0TNUMvYXHV8PGC1d0jTFo+an/A8/av7/Sp1t85wsYWHylGnKobVGVgs8MSKDUAAAABAgMCBQcMISoAAACh+P3J3eJEi5xUs7sbOUdi3+KXz9OCy9MLKTZJ0tRAursonp+K4+cYMz4bnaYDQVBHj58aNj7i+PhmzNlwytOq4urC6OmW4+hlxMk+qrIiobIFgYgaRFUDEiAjRFMjSFQAAABWh5CT3N9wxNImWGlFgIMwZ3I4YGlbrL183e1yoade8vN3vcCKsLgevsAuc4cdLkI+f5Axan1TmZ81a3sPHiciU11itcWP6fT/0dlVoLJkvMdKlKUkV2oXN0BYpLb///+T7vkzLi/O//8YFhhatsZCQUP88vQwX2wiIB5dqbdTorQmV2Sf/v995vE+e4s0b4Lw8fHHyMZdYmNYTUrh6eyprq6goZ6Qh4Kcfk6DXSY2Kh7//9Dc2M+1ws+yt7u4sqa8gThpUyVNOSIXDw3/+6Thvm68pGr/2mhcW1MmR1FrYkdZRSvn36z/8I91dHdUqItyAAAAr3RSTlMA/Or07O0N/fZwLd8adWfy7et9813xHqRW/vTufAX+9fL1/vb18vHt9vLL+vZpTBP+/vf09PTyy/328vGXQzb+/v7+/ffxlosl/v7+/v79+vf28sD9/f38+fj47eL+/v79/Pz7+vn38u7u4cywiYD+/v79/fz8+/v6+vr5+fjz79P+/v79/fv6+vr37+/tkRr9/OjixbmbhP79/Pv6+PDu6d/Uy8a2bxT85raRfl9CRqA9vgAABuNJREFUSMd91YdbEmEcB/BeDzyw6LDjBEFlrwAjQBJHakrkyr1Lc2ea7b333nvvPV6BMLXlaO+962/p5YC0+fWe4w7vw/f33vE8DBqQc0P+mXOD/pbgq2f3Dft79u07O+QvIvLKxcH/yaWQP4Xg5M2otraoqKg29IeO0DHa/MdZWWV7x/0uonfLph24PiY8fNKk8OvhaJsUjo7RK72/XSkr2xr2W8eedNkMjPmvYIpVSWVbQ37tcMm6WEH9YTKDfgm2OOtm1N5+EyzY7UqfgWH0dQxGEL1n+I/oFyYTmSTZ3tGBjsQz6em3WUggw0Chd5sJUsXwJjSUgQgy2a7aqWH+kssXkjqBV9CfzhWFoutUwpQGmnC56JQ2uh3pexIjaTJk67L0T8BfEcptUou4XCa5KClppAqditTI0ATb7toT7SMjpp6UzQKYX4jUanWFWnHNmDfHJd1cUaFWo1Z6OYicEQTIzps3AOadKhRFpKbitetvzpynTy2UUvFUk3cyhDBsvGzU0GCabJu6s20MIt4OLkNlpzZJrHCRmJSUZ9RKKjZRSnpNTAyMTxpl8JGwsZPb7iASKhKJQpVyWyOllFavkhPiJdVzJfZNVptFhT5LhYGRP1vGjZ08jSbqLWqlrbBBK0xL01TWkLakhfJyjWTpuiIxt0LNQC0DSdYYuuUYtbGw2qosTSpZuAaunwNnLkgqk8aMd80Xqpu85CYigcFu0YQril8gS7bYMrpXr2hvh+3dsHo1XCvMlRVKN3Ppln6ys9BPSE3R3dqSGrMwNwtCaFypEXam75heXSfkcoMw0Cn7vYXBtZPinExozJFLhJpkuGK9WCIsX7QCTkyT2LlBTND5c7BtCcuKEFGhFq04p739bsoRm1VrgnOE8eYldbV32yeWk3aRtyV1OCK+R7mo7AYiIlETJS51ZXZXlpqt8hw4cYm+MS1neiaMSpNIKtBaulL9LcGJ/LxCdJMZ6gqK0srnuzLXlIrJJUYIi+TkxuTujKgNhISkmtBzCZDRfCaoCtdh3C3HiHK5VpxWmVmzQSifBmGOUD4brijVWLSajWR9PV4cGIwXFOvpAABrIrQLU+drCP0CCDPmWkw164TmGojWbqFMs6flKnR4cZSfCJrdPU/dALC0dYtqyxbol5S0T58I5+hNelsGnH43Y7ZGWrR27kEzho9s85MQR1BfN7zfARbDA/NWz9XvgJVy/TpYu3E9NOaKNxhhrslYrKuZM2AtkdHNeG8PfPoY9I4cv3amOLfsoEmCluIywgVCcV3qXKmp8ND21GLUcitwk8e1xHY4e6fDXtCXOd9ECNPmN4hNJXBiBqzTm3NK9Za4tBK4EEMkZXng6U9dDPo87h54H8RKNQQRJ5WaZsM1pgZo3CCVxhFx+UvNuVoWCx+5f3iAbD2Ouz8+jn0GnwMQbyPy4ywaY0apUJ4FD1kQaLTmW5ZSXESSh/d/xzqB+4UH3If3AGsMQVgJzZqS8jh5nfHwUqk1Pj6/kSC21LOwASRh2a15wHPPA+7BByDGbCbMuUeyDlts1bM1cVJr3FKKktglShZ2+1Y/OZryCQDPCyd4nukE5NE40i5em6kfDxeKzUSjlSJJu0K5+RcyNm9mFQDA+cADnvUAQG5iAcyWnlO5WozGIhopUquMUagwcHv/AHKtCsNicbfT2fG8pwOwgNsNbrTLyrUEQeTnUxJlTIwSkTsppwLEsSxlBgtjsQDuweuf3XsDQO/TDnC+RE9qLcjE25FQsICuK/kUz0e2GYanrLyjw1jomxeLOx98xIEH3YdJeUIJSZIUEY/GimFhs2Yk5/ETaRIZluhYnp1SHIvpUBUyfR3OF08e4gqK5CpiFAqlUqFSIdFZlFfADgmORCQ4bDQvYfi67Ns6gIbDAY4/+vb2FcBjdTGsQDBsVte1ZQUR0SEjaDIumsdOWL5q5XW0GB0OgPvdh1cA4PVI+wPAvBnJDQWtBkHitkjfYEPZnITl2dnFd2ah/4LXHx69ceJg3pjrVdfDb6BUVYV3peQVtA5l80aP8P0khQjYbNTT1VW0CoC+Ry/fK2IfosmKk7NnXvMme2X2tYbTrQa2IToseBCdEaN5XnN6wokJItz57u131PTy0Rug2zJh1wR6O36iwGEwGKLH+QQajTYRCXw+v6U56Mvn+qAp2OuXX9zYlAK+PwkODtsgCKFFoEfAjuCwURwtU8CUFn4z6/HDr/exAs5QNh0Oh2OI7hf+2TgR6H02x8Fv4Tta+VPAwydPOpoR4fjCDkw1sIcTgYKc96KIFubj959BQSubfrM1wreO3000zxuBL2zUgzU7eAKeL4l/CnQPwkIGJtEQweEl/jwN6xc/AJ1QHWxiHDA+AAAAAElFTkSuQmCC);\r\n}\r\n\r\n.img-killer-physical-stone {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-killer-physical-undead {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}"

/***/ }),

/***/ "./src/assets/css-img/sorts.css":
/*!**************************************!*\
  !*** ./src/assets/css-img/sorts.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n/* \r\n * Generated on Mon Sep 03 2018 14:37:25 GMT+0200 (Paris, Madrid (heure d’été))\r\n */\r\n\r\n.img-sort-a-z {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-sort-atk {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-sort-def {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAABXFBMVEUAAAAxU4gvVIguU4c1WpEvU4gxU4gvU4cvUIgvUocvUoYsUIMxU4gxVIguVIgxU4j///8ANYgAIlk1V5AALHIAJWUALnsFH0E0VY0AGUEANIYAKm0AMH4uUoYAHEYACikDFTEAHVAAJWABHUoAIFQBNogAETwAM4IAMoEAJ2cAM4XU2ORAZaEANIMBCSIAAAAAMoMAKWsAHU4DECgAFzo4XpYzWIkAFkFndpk5WpQAMYAAAxMvVYsALXUADS6jrcXU2OUFOooJGjnq7fOjrsmjrcgCN4YAEDUACBrU1+BnfKsAJF75+vzm6/NdfrJneqkcTJX19vnf4uykr8qjq71neKM6X55ndJQFM34AK3HH0uTIz96xwtu9xNeitNKwudCQp8qHoMehr8aAmsOHl7p+lLiHlLV4iLBbeqxUbKI3Un4ZP3u8wtSWo8KWosKHkKQkRYZUY4IkQXcAKXIdK4Z0AAAAEHRSTlMADiGZ/XlwgP5pjvtatKgqy4ts6QAABDRJREFUSMeFlgl3mkAQgLW11d7IJaDiilCBBMWrFK2m2kSTmLtJmvS+77v//73O7qooWvuF1SXuxzDLc8bIhOiFpUQj81y+eXEJN+PzxpWExEkcRZoAJ3RIificcc1vkMVkBJBzMHw/Gw8bq7EeSiGEUql6KgBOyD9Rj1sFZ9ZooHKrtFkq5TDwGryVgM1yrQFO2KihuiyrhUIe0AkwqRYKqirXUa1ci2EnMFZ7LRDUQl5nMZpA0VhA1wtYamHn0owBgs5qgABYBMES4NA0Vq+qMjgN6kQvJ/xGr1wDA65uWZV0mufTU1QsC6S86iG4Nz9xPRK5dUNqpMo5DwxNsGD9PGlLYMGRURnFpHg0cuEiF0OtuoyNyjnPt9viLO02z1csjS3I9VIt61/GihRLteqq/mtra2Vl5ev7n2IGWKG8p7Otra0fulovoTuxsbIpV9lHDOXwg2kWiwxlYzI7ZvNyridNKXmsrKxtPIFP9x07yTAPNoB9xYXZ2trx8SNWVztyEKXk6dpdhllrOv23sMRIgnI/CdiODVfKiCIP2YByb6RwqZzKClgxFduAOJ8MgyiKoiQVUJoZ8TytsdXBIsUxjHWG+Y6jHN4HFAWUo5OTk7u/BbYwSI1y4WIzykOGeQgKBUeh3BXY/O2JMhXF7ndB+Wbg9NcBRZlV7gQ3VqCKkkwazxhme5z+KBczI/LpxcoGKJ/g+t0uUYgzSp+vLFae7W+/OGSYDwbesaPt7e39RiiKFFYob42k0Wco6/+LAhy9ODUMyGisJKmyOJc0L2ZcJQkYeHT7MKcP0w2iSHNKEVZQyTD6fQcLtp20l0UpYoNK4DiuWzRdWylmcJTlCnXgtoqgmMVmc9GOqdPKy70utbp7L23bMR3XzLRnonBhZY958OogqRy8esDsgQJHMxPKJax0d2F7nz6Fl92u7SqKbTZJLnpI0aZyecOMeOM4tuLQGwvnIrNChRfFDFUOdqixc2C7rm27Nlagxkx/xUqqrlmgjMM8p8pzx7RNPIrhL3IMlDwkAxWsCA48wFOqnDru6E+E7HWPKEFR0lmLJ3EIj7Hx2GyaGTLO2tZQ1z1alILSh/eMSJiPWPmYIYhQYKBY6AU5hybPBW0OoPaxUJFBIQX2bBd2+Ewc80cYglGvkQJLyngPl/E8dIrKpIq/Y5h34/l5GnKHdlGDMs5BGY/Gs/69Wrkjg0NqfwX3i/SXnZ0vk24haLTwtxKNLDQL7Kw2SqTB6CANh7QpvX4tULQhS1pSp9y6t5q4Sn8yXCIOkiEQSHBgPn+m77hjgiAjbGSvEiFwBiCpHjTYQrVKRhVQYbnnoVkDoPe2Wet0Brcxde+258EgJ4NOJ1cKGdSRUAkhaMtz1OsIwfaGDOz4XDabyI5IBHM64/ywAc4dyY9x/8D3uQQYYa7HLy0hfiWygOhSgnV/AXYuCdS9MhhjAAAAAElFTkSuQmCC);\r\n}\r\n\r\n.img-sort-evade {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-sort-hp {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAABI1BMVEUAAAAvVIguU4cvU4gxU4gxU4gxU4g1WpEvUIgvUocvUoYsUIMvU4gvVIgxU4gxU4j///8ANYgALHI1V48ALnsAKm0AI1oBHEgzVY0AMH4AJWUBGkEuUoYAM4IAEzsEIEMACikAM4YANIUAJWAAJmcAHVCjrskAIFQCFDQBCiIBN4gAMYEAMoMAIlhne6oBDywJHT8AAABBZaEAKGoAHU41WpIDFS/U2eQ5WpMzWIkAFkA4XpajrsdneaYFOooALXQABBUALXkJGjkACBro7PP5+vw7Yp68xNeHlLVdfrIAAxDf4uxUaZoFM37q7vXH0uSxwtuitNKQp8qHoMeAmsN+lLhbeqwgT5cZSJIZP3vIzt6wt82Wob14h61Ua584U343Un6BzRaGAAAAEHRSTlMAIZl6EXAM/f5pjvuDrloqqEXV/wAABAZJREFUSMeNlYl2mkAUhm1jUtumLQiyilHAAAJFoyJFa4zZmu77vr3/U/SfGWVsOPX0OxmWOJ/3XmTuVAqqN7ZSrZTZvXdzC/d2ysbtmiZpEkMrwA0bWm2nZNzNpnQyHRx6DyPLmjvXjaPxMu2nqd/vt/oHBbjp+2na95fSEXO4cTFNB4vgNAjaBBz5KQCng2TKHB4DRuK3TFNV1S7wKLgYqcBs+ckgGROHGxfLRdoyMd1TYkVRHIPhkDvPo9IioA43nvoQPMUBBnAphmvgz3EUb6Sa/tNglVt1t5ZNl4MERqw4rjtsNOr1xgZD14XUVXMfuWW1+5XKg3va9GDQzlUV6ZD5ZRquocRd1UwH/ljbr1Zu3JTG/gJ1xDDw+cmJ/DfHx/X60HVi1BMkzWyXKNq4v2ihDmN48nwyeSLLuk7Ouv5kQvj2XJbrDUPx1FbgP7q1u8eUU3MUO8O6/FgQZroehuRsWTOB8QTO0Im7ZnupbShdxW0cy2yqZT8UhEOxA+VydgknQxgXYRKTRwlyD0FOdCiHdkcUqSIeCsJD24b4HWFcR4GyjiL126piNOoyVXripiJ2aLII4ygj/y8lXitnE/CsUDqdr4LwgxRjKKp/sFKk8QFXCpjybHKObwl1+sy6rUKRoBSJTQ7BJUkQCoD2UyeKS5R1+YUSkhrmvfm8qOXycPZQtHmUkmKRqb1ejyq9VS1iJ9oSJaLfDmfzidmIUihaOTGmiDjPtkYpKyyxcpSyokcdEfTImPdsnDrXomglxcIMBgqybZsIiLIlMSjiGihWFFlWZHes/1UwbMsKI4xSYiXl7dWcafOrt7ZthXZk6cd/RZGuK1fCy3efxM6ndy+FKyioKYSyNbH5Gd6s169xOJvbETXYUqYKf/kdrojvhRXvbZSPgcRWbzJXzBjtBY2CKZ/PmXH+OWJAGWJVbi6xQPUcF8o6zBumvEHpIR1kIccbC3kMpYtijmXZgoNf/IIpF3hWERmWTErJqcKbkqe4dRqH8ooYr8Iw1Ol4gbw8L183Jd76GnUqET4S5aNOkXVZbjixp5ptv/hd/FMfvQ+dDE+NNdgXZ3jCL2QK/lNHWusGu0fb+JK08S52imHRxT8Iwgfex1E7totkkI4ltPHqfjPTArJZdGP0frcxHDbAl/PzL8VuYZDNwvQHi9q0ic2isrfTPJpSR/UgEQwwm613MgcbGY2x0I5qd/YqBOb4JgJ5cewplN+/Yhxxix0TAmI81Y6adyqAOymR1FwFoxEdI6Biep6nKTc2ndMkwa5MyVt5jkGv/SRpB4NFYXBHS4PUxz5eAlIaBM3C4E4mNZu15ooav2ZXUlYY3HmkZWPpH2SZVCsMzv39nS3s3y4JoLoVPu8PsMn/IMf8hssAAAAASUVORK5CYII=);\r\n}\r\n\r\n.img-sort-inflict {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-sort-mag {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-sort-mp {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAABPlBMVEUAAAAxU4gvVIguU4c1WpEvU4gxU4gvU4cvUIgvUocvUoYsUIMxU4gxVIguVIgxU4j///8ANYg1V5AALHI0VYwAKm0ALnsAI1oAGUEAJWUAHU8uUoYAMH4EIEMAHEYACikAM4YAJWAAM4IBHUoAIFQAETwANIUDGDkAMoMAJ2cAIlhAZaEAMYHU2OIANIMJHT8DFjQBCSIAAAABN4gAKGoDECjU2OUDFS8AL304XpY5WpMAAxPU2OSkrslne6sAJWQvVYsADS4ALHMALXYAEDUACBr19vnq7fO9xNff4uyWo8JUap0GOor5+vzm6/Oir8Z4ibNdfrIkR4vIzt6Hl7s/XJnH0uSxwtuitNKwuM+Qp8qHoMeAmsOWob1+lLhbeqxneKU4YKAgT5cZSJI/V5A3Un4ZP3sAIFKwt8p4iLGrPTH2AAAAEHRSTlMADiGZ/XlwgP5pjvtatKgqy4ts6QAABCxJREFUSMeN1ol2mkAUBuDY2mr3YRNQomxlCyIKFsVYY2J2kzRb933v+79A7wwIJp7Y/skQJuE79wo6k5UshVtLU1hZzN3Ht5fkcWlR3CuzNEsnYbPAJBlsubQgHsR9cjEZecgcRBzXStfFWtGMWlHkt1pmazULTFp+FLV8k15LTS76UWfQ3m63GzhwxEknkO1Ot5+ZXHR9UxDqmlaF6CT4TNPqdcH0u51uEZtcrJmDyITrqzrv8DyviEkUPNN1DaMBNnfmhQ9A5xWICLFJRFuEb0Xh9WpdANNPTOFuOe6bnS4Ih1dsO+Q4huHmEto2IGygt7j8cGXlySO2v9ppgOCVEb5+MZwt8g6YqOMX2VJh5dZtuugPTEFzQDCbm1tblavZ2mKY0FYcTTDb3Vp8FxO22BqYdZ0fhb+bzeb3XqUnSSdwdihJb5o4H74znMjrdbPts8UZ2RaqjhIyTYTQB0lyXXUHzj6r6joi2TlkQsWpCg3zCuFFbguTfVX1vD8I8lyWgQxP4LALrwfKjIWctAUdilSaaBehS5mi9tA5EIp6hpBB4CFjKzyQjZTQrUYdimCyvo8uKIraQReYyEBkTx5CkwwHN3pyhTgpGaLzgHqB9g9mVWTqDEqfMeGI1yaraWN0cTUnh/DnYA8dDGfkGb4FexWGG/HVpxmhV/PGgl10Eeygy4zgnJ8BEecIC0RLyTPqDdqDvqiMDIcHh650I1kH8gLtQF85kSnZknpLCYWf4mWQE4MyllfBzwTtB8HVKtLS1wKdQV/XqtzcmGTJFCTAYxoY8EOWSZUlRJWxISwIDM/AAKosJ9QsmFiWqlqGrErS/xEYhqq6FgxJ6m0ukPo8eXs6Tdj09K1heK5nqdcIfZ2cot13Xyn567tddAoEK+kfVabHCKFXr+BwPDUswzDcpDGdkPzNr+SEeo/SvPc8y/BIY+k7OSeCI8KnsiIl5NtRIo6+WUlUaTNUeG3+I9au64oNZFbmdUJee67h4qH2GFiW5j7IRSBkuahUVDDwxL8k5ItnpV8V6EsXCMlXGJ23GVKH5CUWL13XlcjAfel6tihlSx/cM4JwPmHyCR6hBKPXq3CKo2tCw8+ei789gbWPtzkOCLQH7hjusFSZhRF5EGaXLLBkGTfxMl6FnSLMVvGPCH2cW8cVvIx3O1GRhmW8UKrFG93OGIwDW5HNhSEH+Xl09DPbLUbpZjEo92uwWWCz1m+TDUYHhDOCTenkRMQZjWBzIVvSuDPYWCvfT/5luEOML0Ah3XF0nuTHDweOMP31qwpA8LGo3ScgM9EEUB2K4R2WjCoM+A0kilKRJeltuzseT57imMJTQYBBJpPxuNHOxLxho3bkwz6+ENP0I7i9mchNTNdq5Vqacn6enNFxJnLDsnGRviFxTJczkedh6c6SlO4tAEhhafLr/gJlKggFcYanfwAAAABJRU5ErkJggg==);\r\n}\r\n\r\n.img-sort-resist {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.img-sort-spr {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAABXFBMVEUAAAAvVIguU4c1WpExU4gvU4gxU4gxU4gvU4cvUIgvUocvUoYsUIMxU4gxVIguVIgxU4j///80Vo4ANYgALHIAI1oAJWUALnsAGUEAKm0ANIYAHU8uUoYAMoIEIEMAMH4AHEYACikDFTEAJmcAJWABHUoAIFTU2OQAETwxV4oAM4YAMoMAIlgBDywBOIgAKWsJHT8BCSIAAABBZaEANIMAMYAAFzoAFkFne6s4XpY5WpMAAxOjrsn19vkALXUJGjnq7PICN4YAEDUACBrf4utneaYGOooDDySjrcU7Yp5UaZsALXkAJF35+vzm6/O8w9WWoLpdfrI/XJolSpHIzdq8ws+WosOHlLV4h60/V49UZo4FM37q7vXH0uTU1+CitNKwudCQp8qHoMehr8aAmsN+lLh4ibJbeqwgT5cZSJI3Un4/UnsZP3vIzt6xwtuxwduwuM9ndpokQ30kQXkqUMjZAAAAEXRSTlMAIZn+EXlwDID+aY77WrSoKsJwfSEAAARcSURBVEjHfZaJW9owGMbZYAq709IrUFt6MUsLFGkZoCA48ZjOOd3Uufu+z///efYlYS0Ox2sTE8nPN1/afh+pWJkLM5VJTWvuxsUZupGdJi7nuJnKZaeIq532LKLTKWb/JZbSfaNuGEa9HtUXYsGE/tHoc0uMSYitttHoBmtBUCKCPvkVgNYafpsxiQcQvhHJsm7bBZBDRUa2retyZPgNP02YhNjqdwHQ7YIjeIIgWCKTRWaOYxOouwHMpTMEAI5ggUSQSSWaIlyWJTgFXQamzZjMXK7T7jd8IDzBMs2aouTzyoRqpglQQW8ZsLdO7loqdfM6115olFq6Ddsh66elmKLgEZ+GkeaymdSFi1za6Eay7QEBn9+9K51Vr5fP10zLs+Uo8IudOYbUu5HuCJ8friBUvn8ibZeJ9o41EB0e3v8tCo4eBcZiem6eIWtywfsMANF2uI6Y9lRVHQ9XHlteQS71uUlEeIjQ5vrxXllVASkvv4D/cOS6CK1ubt5B6JkJNr6cuAQtx3qGkBY2B1Xs3kZomeeh/8pjoF1VA8a0hAmEq5d0QTxE6L6K3WqVZwgPq7FLu7CMkAIHPTyDeOJPBB+vV3m+SpAq/wihF9QFV45gezVRsIcLcSwLBFGOVgj0gLqslldh8gDjOHxFFAq3YoQDRBCV/MkegsUH4MKWveP5MbJ6AreGIIsJYhNECh9AnI8AgRNbfncABCB3bv9A6DhPXaYRFdMwaPhwDCAWyx208us8l9XN7QpeBheecowgCO9uI3SoUIQ7g/wN9IAio8GES7gJN+AcF7j79MT4scsgcQk12Nrj82LZXl+HkJmqowGmDObBRZPGJ8b9G76mYvwX4QeDJnYxTy6CKGxj04jLAAoNmpWKqlYwVjXmMhthwvD0AxUyl+m7nyAv90cMGe2/xLipNiuq1otdzkX20ZNXH3j84dUTtA8IXKEGLrOQ0T2E0Pdv0N0bYYgFqyHEAq8yRZKH35qI5Q0a602zWcFNtjH2JCeI7EF6kSSNIR93GbH7sUJFEUuwJ1+xQHcskyBjm+cMed5UcUiblIe0dPbd1wsQTE+SVGBc191iyFazMv6RFAilRZEkwziCmac+VE8J8VQNVY2205654zgtlpSS1EfOjEJE7wnyXqOSNElSLM+x5ZIRx2KsDSH3CaYCp3a3J4FO78EJn0pUkHLz4g4Q0QZJsPM0jfdJGi9ApajFWfwtQm8n8rhF0rg/TuOZbLGzuEGKBfhYoqnUapD/lS+7u1/iagGliSb+bq5dhGKRms8Wl9oBYWwHoJ0dVpRevxaZrB0oZNSju7iUuzKfIrpEGUMGI8fzHIHq0ycPephCyQQAPIAoXqFAwgwB0qE2kQpLWwGaDstbLSMhxmJ7W/N9f3iLKGrdarWg0cnQ90tBTEwynBEYBpTlKUWRYWxsFGMiYTpcsZgrjpVLxmzEdWIiYRa5Tvr/32C4XEwkupa9NEPZy6lzlJmpZN0f4asPjnH/m2oAAAAASUVORK5CYII=);\r\n}"

/***/ }),

/***/ "./src/assets/css-img/stats.css":
/*!**************************************!*\
  !*** ./src/assets/css-img/stats.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n/* \r\n * Generated on Mon Sep 03 2018 14:37:25 GMT+0200 (Paris, Madrid (heure d’été))\r\n */\r\n\r\n.img-stat-atk {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAABLFBMVEUAAAAvVIguU4cvU4gxU4gxU4gxU4g1WpEvUIgvUocvUoYsUIMvU4gvVIgxU4gxU4g0Vo7+/v4ANYgDGkAALHIAI1oAMH4AM4IALnsAJWUAKm0AM4YAHU8ANIUuUoYEIEMAHEYACikDFTEAMoEBN4gAJWABHUoAIFTT2OQAJ2cAETwBCiIAIlgAMoQBDywAAABBZaEAKWujrck1WpIALnkAFzozWIkAFkA4XpY5WpMvVYsALXUABBX09fjp6/ABOYkJGjmHlLgAEDUACBre4uq7wdBneqgAKm4AJF6vt80AAxC7w9VUa589ZJ0+W5okSI4+VofT1t+WosGVnrV3h68GOoskRIYkQnvHzd3HzNqjr8qVoL2jqrx3gZlmdZlUaJlmc5RUYoI+UHYkPnN47sAiAAAAEHRSTlMAIZl6EXAM/f5pjvuDrloqqEXV/wAABB5JREFUSMd9lol60kAUhdHSilo1k5UQQsNkIyYNTQGBFlqkta1arfu++/7v4JkhMFCQ/2OA0PycOxNyp4UZxRtrKRaW2bx3cw33NpaN2yVpLaWNJeNuv7fO6PdrG9eNvdaIKpRSRekoOzNwwD+kI2kPzoLxokebg/gkjusMPIuXGJw00x6chQwYKcVXOkFQBSGnCoLAcZQOTZtpiznCeDEaQHCCaqglmqb55gSfHYVhwKRBzB1hPKMQQs0HJog4ZmTi4ftaWHUU+izOaytulvq9UTOFkWh+FGWViqpW5siiCFLV6VLU1i/dLxQe3JN6O8161wlQToTzl6lEppawnCZtSdvFwo2bUosOOkqQ+GaGv7fb7fICh4eqmkV+EiidOK31NyeKMug4oWZmh2WOvgg+USumFjqdmD66tbk1UU6UauJHalvnuK4xD3cyP6kq9ZE0r2jm+WFZd41dnGTbMrAsy7YtdsxiIsSkikiJu6GfqW0YtmdbssBmkqvDiXwNykGuSErd0Uyu2LvesRCQI1u2Zbt6W61goccLSmKeq6yuY8/zZODNSQZLyUwtGO/M5rLDlApXPKTgkTs8RUYKX7Pqw5kiQdGgfGg0Gm+OvWPvcWOKZTUaTw0s9JPXr/9AeSSUgCmPCSFH3nvv+AuZYsmENJDynJC32grlMzki5BKlne3v7+NUPFsWXg0dX/bEXKG8IuTxEXkuexxC9jGXScolIacfxVyE8paQl0/JEAoe77kCB8rVkAxfZatSTsmpfUbIOyjyQkqDkDO1skJBXV8Na8gqk+GIFMY7NVtR2FNM5ewM33gl54pt8xQyRGEfV6UcEQ5EmQHFwG/Uxbpf7WPBVszlF5nSmCqybTCl4eqnhPxYvvpPCPmpG5b8Ces2VeDYUGzjEll/8xShDMlRmSm4am/yuVgwuGK7mOi368p3lMuVl7hseQqMieLqHzDT3yFXxI/fr6hcmWHbxm4+DFc/zBdZKEqCWwyNYl7ZFTDF14L5Wyx2Qj+CMo1ht4nh2u5ssBs5mbuRW1DQLiroSQYcy+IG2LXzYbTP0ZW6XBEdJtQiledMcIE+HagrugjD7rQpidZXUbl0nbJebp/7SRgodTpbMXoyRu/TWEcut1GeAN22DVTzIpw22C3exkesjVexU2QIWsF55LM2nuZtvLhd6x/EbLNADuv9GfaLBbIIWxNv/INSr4bNorC1UdvrcScIIV1c8E1J4F9gI+MZg4O90p2tAmPiUAVBYZKEWk7CRsK2TAjIeHawV7vDBeGMITnYm9gOy0cVw8Hp3S4VxoJzkqbp+CGj033Y7WLwg3Ga1uPmYGYIR6IxpdiWl+h0KI3j2swQTl+q1Uq1nJJ4P3kn9WeGcB5J/db//4ORSjCuc397Yw3btwsrKK5FnPcPe1L7mQTynhwAAAAASUVORK5CYII=);\r\n}\r\n\r\n.img-stat-def {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAA/1BMVEUAAAAvVIguU4cxU4gvU4gxU4gxU4guUIYvU4cvUocvUoYxU4gxVIguVIgxU4j+/v41WJAANYgAIlkzVYwDGkAALHIALnsAKW0ANIYAMoIAJWUAMH4AHU8uUoYCFDLT2OQEIEMAHEYACikAJWAAJmcAM4MBHUoAIFQAETwACCBAZaEBN4gBDywAAAABNYQALnkAFzo4XpY5WpQAMX8AFkBmdZkAAxMAMoOjrcmjrMUALHPT1+BmeqoAMoUAKGkJGjkBOYqjrcgALXYDDySvuM+HlbpmeKRUa6G8w9ajq7/09fjp6/HHzd2VocF3ibPe4uuvtcaHkawnTJFUZo8+VYS2jePJAAAAD3RSTlMAIZkReXAM/YBpjlq0qCrwTJVjAAADt0lEQVRIx4WViXqaQBRGbW2qXUXAyCJjkK0qIgI1iUZta7bu6/s/S/87YxHU2PMx+WbMHO7cAe5UcqqPjlKt7HPy6vERXtX3jWc1RVIkgZKDgWhKrb5vJBM+WbQcPoaRJFZ91xhIK6YyxlQ1Vs9yMOA/spU0gFM2Jmw07YMegb/EZkCMwgmcXSNkuKXt+x0QcKjn+7atxiwchcU4MAarKQTb7wQy4RgChwZB4JM0XcN5UjIgBLIDDOByDNfA5Thy0LFVOBPhVE+wV6tRCAN3d912u91qtYu4LqSOnTGsLam9qFRev1QmZ6NeBsMxlpi/T9s1ZJnijJik1KuVR48liU1jlRut2Ww8Hp+W+PCBJEf21bgfWskJKYqkTmM7kI32BzHJLINfWm1DDuy4zxTp5KlQ+mpHdpatsZmaZprqZYSDdNTeqqy4CGLq3rmuR9GiCTRNWyw0jHVSXIQJ1YKSBSKIFw01rblFi+BRnBayKSk9G5lA0aPFcFgQoENapOaYr4ztKbSuIWiCYUHyUrEBPjvbKJJ0livRcPiuiQuOMOjCyrjSebOj/J7P593u/c2vdxTousu51jT05uCHW1AUKL5svG0IPn17hyhdMeg2tU1vbhxUuu8vvuC/V3Aw8QLcaKRcXl5+/Hk4ynvs702j8Rkrw0SRCyk8l8PKZRMgzp1QuENKekShx3jRaHxtktIFdzzK7e3t2z8PKJ5QLvL0rygK5+MDio4wFIUr70HSXPxPQZR73JsrWkTv6Dl65pFcoNxhx5pcQfJ4iz2R/mxPsblyf3t1/anR+CaUK3DHc/F0s6xIuSK4gZE/fa5EqflQFPD9etIsKbQwPcXC8CkXFBWKQ28ycslB9l4kGhZGSqekqPzlPzWLind+7onm6emsjRrDih+yHTgulH9h6DPxdE3P296HDKUjapIOR3y+uo7bR5vmjSmVrKSoqN9ui8fZYurpvzZbOkGQiaJUKn0tLu1yap6OkUngqz2WPxfWZyhkqGTYgjGWtwXVdgxaBhnxGgUWCpXxFZVx1EsHziFQkqmMhyjjEsp4tW4lyhqHBRxe+5fL9g6uwQ2cjLWJhcOi8rRuDSZ9cvwAEmEUcRwcZDzGVBnUnj+tEE+4w1QEgoSrCB2ZEFRGhvWcC1uHJBtnE52wvHXQbEzPMlY2gFhbPwxD9oaIszdZhsYHLAx7/dwoOgq2muFY3iOOGVuvLW6UnUSyrJq1obbti56U7BpwFCWRHiJJpBqMXV7Unxyh/qxygOpRKjl/AYR262fvrPf8AAAAAElFTkSuQmCC);\r\n}\r\n\r\n.img-stat-hp {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAA5FBMVEUAAAAxU4gvVIguU4cwU4gvU4gvU4cvUoYsUIMvU4gxU4gxVIguVIg1WJAANYj+/v4ALHIAIlkALnszVYwAJWUAMH4AGUEAKm0FH0EAMoIuUYYAHU8AHEYACikANIMAJWAAM4YAM4UDFTHT2OQBHUoAIFQAMYE4XJQAJ2cAETwACCACN4gANYYAKWsAL30BDywAAABBZaEAFzpmeqkAAxMALXajrccCOYoJGjkAEDUDDySjrckBL3sDN4X09fjp6/HT2OOwudB3iLE9ZJ3U2OS7w9bHzdyvt82VocCHlLVUbKIkSY+jDdvyAAAADXRSTlMADiGZbnl+jvuDWrSoOAHFqAAAA5FJREFUSMeNlYeamkAUhTUxZZMAKkVBpIy0UF2ia4mbsunJ+79Pzp1ZUWL58n9cWVh+z4w6dzoN3SdX6XZO6b15eoU3z88YliqpkkBtwIUo1Tpxei/jmD/M6wC/hhHH5LSNW2nNxoyx8bgeH8AFv8nW0i2clvElZvNFCqYEXg+nlJhXMZxWBoyK1YZhB8EEhJwJCALbNmpWzavjHBhf1gsIdjAJB4SrCVy6CMOApMUWzrOWASEcuEADCUdLNByuOwgntgEnFk63Z8Xxel7BwLsnSTEa9fujI4okgUQOxhZbrzqdJ6/VeDyfkuFqCZ4/ZZRoA+EwSb3pdp48lSS2qA0yCvx/uRy2WS77/SJxB4FRp5UV90hRpfGitsOBVix3JRiWegto/ZE2CO06Zaq0V1Jjgnn0hzrHjMxjuFNgOsZ03Va00bLUI8c3Tcfxc1mWPc/zfc+HRDEJYirjWAndoj8sI+c+yz15T577Dkk6HMympUxtzATjinI/y3JEAJGTe47nRyViMLLNP8qIFCeT80wGmYgRkg6l0AbBZvyoSC0lW8k44IgY2fNzP9L5ZzZ5e0YxP80+Z6ssy2Y4y79nxLcHkSKUw8ACrkSeosxW2Wol4yzL7xTBN55yXjFJyTI4dCZldvf5g6L8opQrCs0j26fcyR5ev19JyYUik5JxxfNw75N+eS6+onyYEYry9f4x5aei/CgvpuiO0vA1y6F8nH3E3/HluegmHnpPYGD391CIDw/6lRST5kLgzFM+3d09/DF1MZfrSvOJRY5pRrpenqbYlxTfdyLHMctlK0U6r3h7hSz9/1Jyrjg5/SxLmkv4j+JyxZMbcixOUacDI8XgS2yoewfD901/X6a+LFysl+OFbIfULZoYWiaO6UdNlWIhtxTeLoZDE45YidQ1cDzWjrqS0VIM9O+kz3MEEdCb0hEShrwptVvfqM+lY0rUrtzt0CzCwJiy5nth6QaNbICODGU5PKWvkVFvRYOlNr6mNo5+6RYIOtvHeeuv0MYltPHujRWr23lFDu/9BfaLFkWicQM7o8U3i073uXUbp+QEISRCO8Z1sZHxjIV6a73odohn3GEGgiDhOIa2TAgGEwYXDs4Gko0w2mF5TVC4A1jbAGJsaVVVm7dEbbw1DBS/2FTVNN0bLUdlKWPYlk+oa8a2W4sbbSeWrCtIMTfajqrG0iXiWIJxwqubZ1e46XXO0L1Kp+EvdqzZOrgybZUAAAAASUVORK5CYII=);\r\n}\r\n\r\n.img-stat-mag {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAABOFBMVEUAAAAvVIguU4cvU4gxU4gxU4gxU4g1WpEvUocvUoYsUIMvU4gvVIgxU4gxU4j+/v40Vo4ANYgALnsALHIAM4YBHEgAMoIAMH4AKW0uUYYBGkEACioAI1oEIEMAJWUAJWAAHVAANIMAJ2gAIFQAETwCFDQDEy0BCiIDGDkAIlgJHT8AAABBZaEAHU41WpIAMoQAMX8zWIkAFkDp6/HT2OQ4XpY5WpMBN4gAJWS7w9ajq78vVYsBOIkALXYABBWvuM8+WpeVocFmeaYACBrT197e4uqvtst3h7EkSo8AJF309ffIzt3Hzd1UbKJmdpwCOIYAAxD09fijrciHlbqHlLdUa6E9ZJ1UaZrp6/CwuM+7wc6VnrNWbqNmc5IAK3Dp6+/HzNjHy9SjrcmHkayHj6QkR4k+Vog+VINliOAhAAAAD3RSTlMAIZl6EXAM/WmO+4OuWiqDt97TAAAEF0lEQVRIx32WiXqaQBSFbWO6pe2gCAgSUOiwaFTqbltNarSJbdYmabrvy/u/Qc8MFBes/8fkC8n8OXeQuZNUTPrGWtKpJJv3b67h/kbSuKMKa1E3Esa9Tnud0enAWTJ2ap5TdhxaLnvl7RjclKnjlKkn7MBZMN60ncrQ3XfdAgNfGdEN2K84bTgLGTAc6mmaJElFYHPwTVUCmkfx6xqcOeONN3Q8DdNt3dd13TRCTHZn21wautyZGWcUgq2bwAAWx7AMXKap21VJo2duVFt6U+20vYoDw9dNy8rn86KYn8eyIBWlBkVtHfVBKvXwvtDerhQakqSbPQhikrxl6H5R0pwKrQlb6dSNm0KNDrEOH8ZnURwMsosMBkwyfazHddTOZqiUhx7W0ctHs5VF8BMxb+i25Ln08e3NW6Gyr1V90xKzSqAoQSAvEjqmX9QKnjCnFHXj8yCryKW6LJdKuQzIceqQmGIhpqDNUtyGHYaUTk9zmB+TKzFJgWOZOpSnkSKUC5Ju5KHIuXr32UxACJcChVWmV+mC4odK6Vm3280AiDMpYJX1dIlux2vZnildpOCCExr8khWuFB/FigBlPB5/hVI/ffaq1Wqx+f1Wqx+m7PUnhLwcf4DyeE4h4DrAyj8SAGOPgD2WckFCxiuUFzKUXQKQ8pycn5PnSDnAff/g5Mf7nwnlC3nLlCZ5RQieQZP0+6SJlCYhl2wtxvJakIE6Mplj0vyOlFPUd4G/f5W7IqQVhEoi5cmY1bFLdpGS6b4j5DBDyC4KJK8DZXRy8ulTUvlAJiWUcdyCwurLZY5Q2WtCRoFCGInCnvxGZVekmWEKano3GuFRHEB5HinJFHFCLlEXV/okoj/CKhWs5clK5QU5Ql1MOTwnES/3MH7FirCkXBOCuphygWoyAGu/RODkWhm8X5mSfYtHxJWj6INHxNHhhHBWK/hojrmCtHCzNFHkYT8s8ZsNZf7lN8P9Mr+7SvVolEajkz8LbzIUjb/8WWVeqcv1ejTkYIAtJs1vMVfiGzmOYesoyTk5Hmwj+3MbuQYF7YL1JBlOuBNZ18AVjSx2mN2AMt+UbN0Sec4MRQ7+DdGa2lDCpjRrfVgNl5bJosGgjdmSVqDxE6P7FL1PR0eGgvISiMbUjhosFNbGPdbGizgp4CQJW3KVtXGHt/H0ltp56lYKmlT0cRRZeZwXS1g9dlhotDJU2+ywSN3aUHfaLj9gbEjTqWn2jJhez5zq/EgqVIZPd9S7t1KM0KEagmzft/UInw2fnZgQkHHGjFRElMMkqSGBapWPKpAwvdFwnNhYcPadQoE+YniNR40GBr+h7CBHVbERO4LjOhTneAIPR7jrqrExczqCugahs2zAeSx0av//D0aAkeDB1sYatu6kVpBey2zeX4au9SEpK4uGAAAAAElFTkSuQmCC);\r\n}\r\n\r\n.img-stat-mp {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAA/FBMVEUAAAAvVIguU4c1WpEwU4gxU4gvU4gxU4gvU4cvUoYsUIMvVIgxU4gxU4g0Vo7+/v4ANYgALnsALHICHkQDGkAAI1oAKm0AJWUuUYYAL34AHU8AEzsACikAM4IAJWADFTEAM4YBHUoBNYUAIFTT2OQAMoMBN4gAJ2cACCAANIMAMYEAKWsAIlgANIcAAABBZaHT1+MDECgAMX+jrckzWIkAFkBmeqk4XpY5WpMAAxMAJWQvVYsADS4COYoALXQJGjkAEDX09fgALXfe4uuVocF3iLK7w9Y+XJokR4vp6/HIzt2vuM6Ilro9ZJ1UaZu8w9aWosJUbKLp6/A+WZKH2zdRAAAADnRSTlMAIZn+bhF5DICO+65aKufhDREAAAPnSURBVEjHfZYJY5owGIbdrKu7OISIiIRTkMtWnfOYV1t7rO266///l31fUJBZeWosKo9vEsgXKxm1N6XUKsecfXxbwsf6K0aLK6VVPzI+TCdlxnSKTtG4qK4N2TAMWdZkKQNesDeNNXcBTsH4MTH6sx7QQeA5/9dD+oMJOIUMMAYGfKVkWW3AYeCRZWGWMegPqujkxo/1DATJajskJoRQJYXiK8exUJqh865ggOAQCiiAz1B8BR6UEqctyeBMUqd21ppO1v0BGDGhvh81m41G84DI90FqS2MD+jZtfapUPn/kJlK/M5YsQuc+nH9M01dIjDl9o8rVa5U3b7mqMdNkK6bzCD6/vhaLrFaNRuTT2JK13qA1PUsVeaZJDplHu7PVIvBOo6kQR9J6xpfq2Xmq9OR2TP2GqA7V4XAYhvohzIlo3JY7a+5QIUrzWlRDvavrQWAmgiCYjC5IGONDzEI+SBk7NMKQwPZsU9iTJHZgmybmNHxKQPm2Uzi5IxEFldA2PS9JMsU0EzMwzaEKMTDRm4ISK01UAg8QAC91UEq6QxzMnFgbKRuLdKgsBXjsHAg07cQMMWVO2lqmcKAQVJ4uL917bwlBI9d1fwvCk4ts/4ISKah8yRWLKZc8z/9aesulcAVHXwXB5RlXL5ByWrnxQLnlM2U0gqc/JSnfef4e+vWTf9wrMBZ4ftmlcMeKe8M/ex706zlTEnMEx6dT3BH/6Hm3/M2vPOUBoh9Oj8X9DR9Dv7ajveJC4+9gLCc7lnznn6Ff96jY9m7GHh/EkhThib+DfgmoBN1LnLHti1pyXUC55a/u+C1TBBsUuJNhPYjHMyZlCruK96mSgGIHYdDV1VWecqzc8dAvppg2U2w7GKqrZokCV36bKnbXhY7Zth0O2VgcpuQ3PwVF1U0hA768u2/YscKdDIoc4xIT1VxJ7G6OPlxFlFiHS6wnOVgtshhcJt3QDoNd03EhxwcLuQoKlouVKOrgmGz56no3yP9EWGHOuKDIUL/9BstJCQE1HO7byqeOM06LUl76cM6Y9D8iFJgmjR1L7hjZjBm9DdQ+ghVZhAJ7TEMhYGgDLLDnrIyvsYy3CaURBL1axymW8cGujNfqrem3QX8hS5BDFb8Z4X5R3C3mlLDCP2tNcLOonNdbF5Me22AckJC5kjGfU0rYlrToz75dtN6fV5B3zDFkCHLi2CE7YmwxbpkgYAYaTMidDUgS7E24w7LWhibB6eOxUTCQtG+9wWKx0RhjbTyGpiGbxaLT2xsFB6baMGBbPkLTDAOmlxlFZ8q1SuCmzCg6X7hp9fQvGA6MIz7V35VQP6u8Qq2USsY/Uivoe8q0PGAAAAAASUVORK5CYII=);\r\n}\r\n\r\n.img-stat-spr {\r\n    width: 50px; height: 50px;\r\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAABEVBMVEUAAAAxU4gvVIguU4cvU4gxU4g1WpEvUIgvUocvUoYsUIMvU4gvVIgxU4gxU4g0Vo7+/v4ANYgCHkQALHIAI1oAM4IALnsAMH4AJWUAKm0AGUEANIYAHU8uUoYAEzsCFDIACikANIUAJWAAJmcBHUoANogAIFQAMYHT2OQBCiIAIlgAKWsAMoQBDyxmeqoJHT8AAABBZaE1WpIALnkABRc4XpY5WpQzWIkAFkGjrcnp6/EvVYsCOYmvuM4ALXUJGjnHzdtmeKX09fi7wtWjrMQkSY4kQXkAAxCHlbl4iLJUbaI9ZJ3e4umWo8KVnraHkq8+V4/p7PHT1t+HkayHkKlmdp1mdZlmdZhUZ5IkRIU+VYStjFulAAAAD3RSTlMADiGZenD9/mmO+4OuWiqmqxn2AAAECklEQVRIx32WCX/SQBDFQauoVXMXkgBLDkKTNEAhRKAcpYf3fev3/yC+2WAWBHk/liawf97MZHe2pULlOwdVLu3q3uO7B/T4aJd4UJEOqnK0QzzKRoeILGuA2SbOB0vWY4z1es2eWgg3/EO2lM7BbBFvRqyfhmkYtkh4F39CKO0nIzBbHiAS1rQs1ffrUMBFV76vqlaTJf1kQIwg3ixTAKpfD/RI13W3lsuluyDwCUpDzgjiBQMQ6C5Ecz2umlfDy3X1oK5a7EW4jq18r5KNlv0ERKS7nhebpqaZG4o9D1BdHTPEllWelEpPH0sjtd8aqz7Cofm7Mr2aHpFPnw2k43Lpzl1pwNKm5Ucg8P1wODzZ0mKhabHnRr7VDJNGdi9HemlTDfRavMgnVbeFTzSzpgdqM2TP7heIVY/cWBvmczodY1Ocid2obrWW0iaie+bipNoxzjDJcRTItm3HsemebDzYJJZwCccBmYBwZrattJW/cjhUBeO5OpCLNSL1WioyIcQ5a88ws51DNnDbsZ1OdaiZKDTbQqKaqVFcszZEkCIg7hLXdJ+pRS7qBgIXvNYMd1HgwmtWbxaIpFJg5vObqSy/nb+evT4lXb8iZs6vbz7i0RDyTCA+kLcy17t2V851DZfT9fUHuOwgX2T5studT28JOZ3Mr2T5pULIZHIpy1fP97jcyPLKViBCJjN6v+QuyGUuy985Im0h7xHJ7QbShhd3QcXwcz/2uDxHJNOXf5H27J0sz9cuK9Tl9770f05lQF1FATI9/YSbkSLSj/cEZmq/bmAkvwbCdfXKLiq20sx9LniUt9fIWeEVm7y6NbBGgXRfIkQt/g9i2JQz5cKXmW0QYlDBvsFl5+lfXq+qBlU2R/iacQjpOLdTeSqei0A+y7m6HGkrdtt2DAcINsAKv7QHeX8li4pNcg+H0qfFj9C+6gFHxOJ3Te3japUpXMiDPM4cPmgzL+J8JQvEirDF0CjsHOEeZ0KEuLq/ucVCNXA9QgzO5Hl0nE4xaCNHGxt5AKSOKqMnGWD4TqRoENR6GEPqSmOOiA4T6J7GfXJ1oGoxqgvPDYIxNaXt1mdqHPpXJ9WToelGgW+1WFExljL0PnQyrIAhwhNCtx1CGsISDZba+JLaeB0nRQyjvX3cpTaerNt4+biRXYR0WMDHrXlmHMfmlmIPRxNv/Gll1HhCB8xR43zEGT8ARKptynVxkHGP9OK88rBcIuUMs2AURFGgrxXRiOjIBACPFxfnjYccEAxBKs4mOmH5qGOomD4eM0FsMWmS4FTmGjfHYwx+zZKkhS8LQjASCxnDsbwjQCwMGwUhmExqNCqNtSriOr+SsoIQzDMpG/z/PxipUhBCT46PDuj4QWmPygcl5v0BjETwDQ8FPO0AAAAASUVORK5CYII=);\r\n}"

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    baseUrl: "http://localhost:3000/"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Users\egqss\Documents\ffbeEquipNG\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map