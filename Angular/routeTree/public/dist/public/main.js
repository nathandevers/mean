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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _product_brand_brand_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product/brand/brand.component */ "./src/app/product/brand/brand.component.ts");
/* harmony import */ var _product_category_category_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product/category/category.component */ "./src/app/product/category/category.component.ts");
/* harmony import */ var _review_details_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./review/details/details.component */ "./src/app/review/details/details.component.ts");
/* harmony import */ var _review_review_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./review/review.component */ "./src/app/review/review.component.ts");
/* harmony import */ var _review_all_all_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./review/all/all.component */ "./src/app/review/all/all.component.ts");
/* harmony import */ var _review_author_author_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./review/author/author.component */ "./src/app/review/author/author.component.ts");
/* harmony import */ var _product_productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product/productdetails/productdetails.component */ "./src/app/product/productdetails/productdetails.component.ts");











var routes = [
    { path: 'products', component: _product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"], children: [
            { path: 'brand/:brand', component: _product_brand_brand_component__WEBPACK_IMPORTED_MODULE_4__["BrandComponent"] },
            { path: 'category/:cat', component: _product_category_category_component__WEBPACK_IMPORTED_MODULE_5__["CategoryComponent"] },
            { path: 'details/:id', component: _product_productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_10__["ProductdetailsComponent"] }
        ]
    },
    { path: 'reviews', component: _review_review_component__WEBPACK_IMPORTED_MODULE_7__["ReviewComponent"], children: [
            { path: 'all/:id', component: _review_all_all_component__WEBPACK_IMPORTED_MODULE_8__["AllComponent"] },
            { path: 'author/:id', component: _review_author_author_component__WEBPACK_IMPORTED_MODULE_9__["AuthorComponent"] },
            { path: 'details/:id', component: _review_details_details_component__WEBPACK_IMPORTED_MODULE_6__["DetailsComponent"] }
        ]
    },
    { path: '**', redirectTo: '/' },
    { path: '', pathMatch: 'full', redirectTo: '/' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#root{\n    width: 500px;\n    border: 1px solid red;\n    padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNyb290e1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgcGFkZGluZzogMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"root\">\n  <div>\n    <h1>Root Component</h1>\n    <button [routerLink]=\"['/products']\">Products</button>\n    <button [routerLink]=\"['/reviews']\">Reviews</button>\n  </div>\n  <div>\n    <router-outlet></router-outlet>\n  </div>\n</section>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'public';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _review_review_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./review/review.component */ "./src/app/review/review.component.ts");
/* harmony import */ var _product_brand_brand_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product/brand/brand.component */ "./src/app/product/brand/brand.component.ts");
/* harmony import */ var _product_category_category_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product/category/category.component */ "./src/app/product/category/category.component.ts");
/* harmony import */ var _review_details_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./review/details/details.component */ "./src/app/review/details/details.component.ts");
/* harmony import */ var _review_all_all_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./review/all/all.component */ "./src/app/review/all/all.component.ts");
/* harmony import */ var _review_author_author_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./review/author/author.component */ "./src/app/review/author/author.component.ts");
/* harmony import */ var _product_productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./product/productdetails/productdetails.component */ "./src/app/product/productdetails/productdetails.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _product_product_component__WEBPACK_IMPORTED_MODULE_5__["ProductComponent"],
                _review_review_component__WEBPACK_IMPORTED_MODULE_6__["ReviewComponent"],
                _product_brand_brand_component__WEBPACK_IMPORTED_MODULE_7__["BrandComponent"],
                _product_category_category_component__WEBPACK_IMPORTED_MODULE_8__["CategoryComponent"],
                _review_details_details_component__WEBPACK_IMPORTED_MODULE_9__["DetailsComponent"],
                _review_all_all_component__WEBPACK_IMPORTED_MODULE_10__["AllComponent"],
                _review_author_author_component__WEBPACK_IMPORTED_MODULE_11__["AuthorComponent"],
                _product_productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_12__["ProductdetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/product/brand/brand.component.css":
/*!***************************************************!*\
  !*** ./src/app/product/brand/brand.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#brand {\n    width: 300px;\n    border: solid 1px blue;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC9icmFuZC9icmFuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtFQUN4QiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvYnJhbmQvYnJhbmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNicmFuZCB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGJvcmRlcjogc29saWQgMXB4IGJsdWU7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/product/brand/brand.component.html":
/*!****************************************************!*\
  !*** ./src/app/product/brand/brand.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"brand\">\n  <div>\n    <h1>Brand Component</h1>\n    <p>The parameter in the route is {{ brand }}</p>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/product/brand/brand.component.ts":
/*!**************************************************!*\
  !*** ./src/app/product/brand/brand.component.ts ***!
  \**************************************************/
/*! exports provided: BrandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandComponent", function() { return BrandComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var BrandComponent = /** @class */ (function () {
    function BrandComponent(route) {
        this.route = route;
    }
    BrandComponent.prototype.ngOnInit = function () {
        this.brand = this.route.snapshot.params['brand'];
    };
    BrandComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-brand',
            template: __webpack_require__(/*! ./brand.component.html */ "./src/app/product/brand/brand.component.html"),
            styles: [__webpack_require__(/*! ./brand.component.css */ "./src/app/product/brand/brand.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], BrandComponent);
    return BrandComponent;
}());



/***/ }),

/***/ "./src/app/product/category/category.component.css":
/*!*********************************************************!*\
  !*** ./src/app/product/category/category.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#category {\n    width: 300px;\n    border: solid 1px red;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC9jYXRlZ29yeS9jYXRlZ29yeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtFQUN2QiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvY2F0ZWdvcnkvY2F0ZWdvcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjYXRlZ29yeSB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGJvcmRlcjogc29saWQgMXB4IHJlZDtcbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/app/product/category/category.component.html":
/*!**********************************************************!*\
  !*** ./src/app/product/category/category.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"category\">\n  <div>\n    <h1>Category Component</h1>\n    <p>The parameter in the route is {{ cat }}</p>\n  </div>\n  </section>"

/***/ }),

/***/ "./src/app/product/category/category.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product/category/category.component.ts ***!
  \********************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(route) {
        this.route = route;
    }
    CategoryComponent.prototype.ngOnInit = function () {
        this.cat = this.route.snapshot.params['cat'];
    };
    CategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-category',
            template: __webpack_require__(/*! ./category.component.html */ "./src/app/product/category/category.component.html"),
            styles: [__webpack_require__(/*! ./category.component.css */ "./src/app/product/category/category.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "./src/app/product/product.component.css":
/*!***********************************************!*\
  !*** ./src/app/product/product.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#product {\n    width: 400px;\n    border: solid 1px purple;\n    padding: 20px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLGFBQWE7RUFDZiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3Byb2R1Y3Qge1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBib3JkZXI6IHNvbGlkIDFweCBwdXJwbGU7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/product/product.component.html":
/*!************************************************!*\
  !*** ./src/app/product/product.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"product\">\n  <div>\n    <h1>Product Component</h1>\n    <p><button [routerLink] = \"['details', 37]\"> Go to /products/details/37</button></p>\n    <p><button [routerLink] = \"['brand', 'gucci']\"> Go to /products/brand/gucci</button></p>\n    <p><button [routerLink] = \"['category', 'briefcases']\"> Go to /products/category/briefcases</button></p>\n  </div>\n  <div>\n    <router-outlet></router-outlet>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductComponent = /** @class */ (function () {
    function ProductComponent() {
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/product/product.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/product/productdetails/productdetails.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/product/productdetails/productdetails.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n#details {\n    width: 300px;\n    border: solid 1px green;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC9wcm9kdWN0ZGV0YWlscy9wcm9kdWN0ZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7RUFDekIiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0L3Byb2R1Y3RkZXRhaWxzL3Byb2R1Y3RkZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiNkZXRhaWxzIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggZ3JlZW47XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/product/productdetails/productdetails.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/product/productdetails/productdetails.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"details\">\n  <div>  \n    <h1>Details Component</h1>\n    <p>The parameter in the route is {{ productId }}</p>\n  </div>  \n</section>\n"

/***/ }),

/***/ "./src/app/product/productdetails/productdetails.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/product/productdetails/productdetails.component.ts ***!
  \********************************************************************/
/*! exports provided: ProductdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductdetailsComponent", function() { return ProductdetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ProductdetailsComponent = /** @class */ (function () {
    function ProductdetailsComponent(route) {
        this.route = route;
    }
    ProductdetailsComponent.prototype.ngOnInit = function () {
        this.productId = this.route.snapshot.params['id'];
    };
    ProductdetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-productdetails',
            template: __webpack_require__(/*! ./productdetails.component.html */ "./src/app/product/productdetails/productdetails.component.html"),
            styles: [__webpack_require__(/*! ./productdetails.component.css */ "./src/app/product/productdetails/productdetails.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ProductdetailsComponent);
    return ProductdetailsComponent;
}());



/***/ }),

/***/ "./src/app/review/all/all.component.css":
/*!**********************************************!*\
  !*** ./src/app/review/all/all.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n#all {\n    width: 300px;\n    border: solid 1px green;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV2aWV3L2FsbC9hbGwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0VBQ3pCIiwiZmlsZSI6InNyYy9hcHAvcmV2aWV3L2FsbC9hbGwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuI2FsbCB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGJvcmRlcjogc29saWQgMXB4IGdyZWVuO1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/review/all/all.component.html":
/*!***********************************************!*\
  !*** ./src/app/review/all/all.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section id=\"all\">\n  <div>\n    <h1>All Component</h1>\n    <p>The parameter in the route is {{ id }}</p>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/review/all/all.component.ts":
/*!*********************************************!*\
  !*** ./src/app/review/all/all.component.ts ***!
  \*********************************************/
/*! exports provided: AllComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllComponent", function() { return AllComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AllComponent = /** @class */ (function () {
    function AllComponent(route) {
        this.route = route;
    }
    AllComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.params['id'];
    };
    AllComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-all',
            template: __webpack_require__(/*! ./all.component.html */ "./src/app/review/all/all.component.html"),
            styles: [__webpack_require__(/*! ./all.component.css */ "./src/app/review/all/all.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], AllComponent);
    return AllComponent;
}());



/***/ }),

/***/ "./src/app/review/author/author.component.css":
/*!****************************************************!*\
  !*** ./src/app/review/author/author.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#author {\n    width: 300px;\n    border: solid 1px green;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV2aWV3L2F1dGhvci9hdXRob3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7RUFDekIiLCJmaWxlIjoic3JjL2FwcC9yZXZpZXcvYXV0aG9yL2F1dGhvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2F1dGhvciB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGJvcmRlcjogc29saWQgMXB4IGdyZWVuO1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/review/author/author.component.html":
/*!*****************************************************!*\
  !*** ./src/app/review/author/author.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section id=\"author\">\n  <div>\n    <h1>Author Component</h1>\n    <p>The parameter in the route is {{ id }}</p>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/review/author/author.component.ts":
/*!***************************************************!*\
  !*** ./src/app/review/author/author.component.ts ***!
  \***************************************************/
/*! exports provided: AuthorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorComponent", function() { return AuthorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuthorComponent = /** @class */ (function () {
    function AuthorComponent(route) {
        this.route = route;
    }
    AuthorComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.params['id'];
    };
    AuthorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-author',
            template: __webpack_require__(/*! ./author.component.html */ "./src/app/review/author/author.component.html"),
            styles: [__webpack_require__(/*! ./author.component.css */ "./src/app/review/author/author.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], AuthorComponent);
    return AuthorComponent;
}());



/***/ }),

/***/ "./src/app/review/details/details.component.css":
/*!******************************************************!*\
  !*** ./src/app/review/details/details.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#details {\n    width: 300px;\n    border: solid 1px green;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV2aWV3L2RldGFpbHMvZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtFQUN6QiIsImZpbGUiOiJzcmMvYXBwL3Jldmlldy9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNkZXRhaWxzIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggZ3JlZW47XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/review/details/details.component.html":
/*!*******************************************************!*\
  !*** ./src/app/review/details/details.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section id=\"details\">\n  <div>\n    <h1>Review Details Component</h1>\n    <p>The parameter in the route is {{ id }}</p>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/review/details/details.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/review/details/details.component.ts ***!
  \*****************************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(route) {
        this.route = route;
    }
    DetailsComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.params['id'];
    };
    DetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/review/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.css */ "./src/app/review/details/details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/review/review.component.css":
/*!*********************************************!*\
  !*** ./src/app/review/review.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#review {\n    width: 400px;\n    border: solid 1px purple;\n    padding: 20px\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV2aWV3L3Jldmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLHdCQUF3QjtJQUN4QjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvcmV2aWV3L3Jldmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3JldmlldyB7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIGJvcmRlcjogc29saWQgMXB4IHB1cnBsZTtcbiAgICBwYWRkaW5nOiAyMHB4XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/review/review.component.html":
/*!**********************************************!*\
  !*** ./src/app/review/review.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section id=\"review\">\n  <div>\n    <h1>Product Component</h1>\n    <p><button [routerLink] = \"['all', 22]\"> Go to /review/all/22</button></p>\n    <p><button [routerLink] = \"['author', 1782]\"> Go to /review/author/1782</button></p>\n    <p><button [routerLink] = \"['details', 37]\"> Go to /review/details/37</button></p>\n  </div>\n  <div>\n    <router-outlet></router-outlet>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/review/review.component.ts":
/*!********************************************!*\
  !*** ./src/app/review/review.component.ts ***!
  \********************************************/
/*! exports provided: ReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewComponent", function() { return ReviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ReviewComponent = /** @class */ (function () {
    function ReviewComponent() {
    }
    ReviewComponent.prototype.ngOnInit = function () {
    };
    ReviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-review',
            template: __webpack_require__(/*! ./review.component.html */ "./src/app/review/review.component.html"),
            styles: [__webpack_require__(/*! ./review.component.css */ "./src/app/review/review.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ReviewComponent);
    return ReviewComponent;
}());



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
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nathandevers/Desktop/mean_stack/angular/routeTree/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map