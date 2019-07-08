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

/***/ "./src/app/add-player/add-player.component.css":
/*!*****************************************************!*\
  !*** ./src/app/add-player/add-player.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.wrapper {\n    padding: 15px;\n}\n\n.content {\n    width: 80%;\n    height: 200px;\n    border: solid 1px black;\n    background-color: lightgray;\n    padding: 10px;\n}\n\nlabel {\n    width: 200px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXBsYXllci9hZGQtcGxheWVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLDJCQUEyQjtJQUMzQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2FkZC1wbGF5ZXIvYWRkLXBsYXllci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ud3JhcHBlciB7XG4gICAgcGFkZGluZzogMTVweDtcbn1cblxuLmNvbnRlbnQge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxubGFiZWwge1xuICAgIHdpZHRoOiAyMDBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/add-player/add-player.component.html":
/*!******************************************************!*\
  !*** ./src/app/add-player/add-player.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h1>Add Player</h1>\n<form name=\"addPlayerForm\" #addPlayerForm=\"ngForm\" (submit)=\"addPlayers()\">\n    <label for=\"name\">Player Name: </label>\n    <input type=\"text\" name=\"name\" id=\"\"\n    required\n    minlength=\"3\"\n    [(ngModel)] = newPlayer.name\n    #name = \"ngModel\"\n    >\n    <br>\n    <label for=\"position\">Preferred Position: </label>\n    <input type=\"text\" name=\"position\"\n    [(ngModel)]= newPlayer.position\n    #position = \"ngModel\">\n\n    <br>\n    <input [disabled]=\"!addPlayerForm.valid\" type=\"submit\" value=\"Add Player\" class=\"btn-primary\">\n\n</form>\n\n"

/***/ }),

/***/ "./src/app/add-player/add-player.component.ts":
/*!****************************************************!*\
  !*** ./src/app/add-player/add-player.component.ts ***!
  \****************************************************/
/*! exports provided: AddPlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPlayerComponent", function() { return AddPlayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _player_management_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../player-management.service */ "./src/app/player-management.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AddPlayerComponent = /** @class */ (function () {
    function AddPlayerComponent(playerService, route, router) {
        this.playerService = playerService;
        this.route = route;
        this.router = router;
        this.newPlayer = {
            name: '',
            position: '',
        };
    }
    //on form submit, add player to db
    AddPlayerComponent.prototype.addPlayers = function () {
        console.log("submitting form", this.newPlayer);
        this.playerService.addPlayers(this.newPlayer)
            .subscribe(function (response) {
            // this.playerService.getPlayers();
            console.log("from add player", response);
        }, function (err) {
            console.log("error in list component delete player", err);
        });
        console.log("addPlayComponent > after adding in service");
        this.newPlayer.name = '';
        this.newPlayer.position = '';
        this.router.navigate(['']);
    };
    AddPlayerComponent.prototype.ngOnInit = function () {
    };
    AddPlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-player',
            template: __webpack_require__(/*! ./add-player.component.html */ "./src/app/add-player/add-player.component.html"),
            styles: [__webpack_require__(/*! ./add-player.component.css */ "./src/app/add-player/add-player.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_player_management_service__WEBPACK_IMPORTED_MODULE_2__["PlayerManagementService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AddPlayerComponent);
    return AddPlayerComponent;
}());



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
/* harmony import */ var _list_players_list_players_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-players/list-players.component */ "./src/app/list-players/list-players.component.ts");
/* harmony import */ var _add_player_add_player_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-player/add-player.component */ "./src/app/add-player/add-player.component.ts");
/* harmony import */ var _player_status_player_status_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./player-status/player-status.component */ "./src/app/player-status/player-status.component.ts");
/* harmony import */ var _list_and_add_list_and_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-and-add/list-and-add.component */ "./src/app/list-and-add/list-and-add.component.ts");







var routes = [
    { path: '', component: _list_and_add_list_and_add_component__WEBPACK_IMPORTED_MODULE_6__["ListAndAddComponent"], children: [
            { path: '', component: _list_players_list_players_component__WEBPACK_IMPORTED_MODULE_3__["ListPlayersComponent"] },
            { path: 'players/addPlayer', component: _add_player_add_player_component__WEBPACK_IMPORTED_MODULE_4__["AddPlayerComponent"] }
        ] },
    // {path: 'players/list', component: ListPlayersComponent},
    // {path: 'players/addPlayer', component: AddPlayerComponent},
    { path: 'status', component: _player_status_player_status_component__WEBPACK_IMPORTED_MODULE_5__["PlayerStatusComponent"] }
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

module.exports = "*{\n    margin: 0 auto;\n}\n.container {\n    padding: 15px;\n    background-color: lightgray;\n}\n.content {\n    width: 80%;\n    height: 100%;\n    border: solid 1px black;\n    background-color: white;\n}\na{\n    text-decoration: none;\n    color: black;\n}\na:hover{\n    color: red;\n}\n.first{\n    padding-left: 10%;\n}\ndiv{\n    margin-top: 6%;\n    margin-bottom: 8%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsMkJBQTJCO0FBQy9CO0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLHVCQUF1QjtJQUN2Qix1QkFBdUI7QUFDM0I7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCO0FBRUE7SUFDSSxVQUFVO0FBQ2Q7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cbi5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xufVxuXG4uY29udGVudCB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbmF7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuYTpob3ZlcntcbiAgICBjb2xvcjogcmVkO1xufVxuXG4uZmlyc3R7XG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XG59XG5cbmRpdntcbiAgICBtYXJnaW4tdG9wOiA2JTtcbiAgICBtYXJnaW4tYm90dG9tOiA4JTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <a class=\"first\" [routerLink]=\"['']\">Manage Players | </a><a [routerLink]=\"['status']\">Manage Player Status</a>\n  <div class=\"content\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

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
        this.title = 'appTeamManager';
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _list_players_list_players_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./list-players/list-players.component */ "./src/app/list-players/list-players.component.ts");
/* harmony import */ var _player_status_player_status_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./player-status/player-status.component */ "./src/app/player-status/player-status.component.ts");
/* harmony import */ var _add_player_add_player_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-player/add-player.component */ "./src/app/add-player/add-player.component.ts");
/* harmony import */ var _list_and_add_list_and_add_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./list-and-add/list-and-add.component */ "./src/app/list-and-add/list-and-add.component.ts");
/* harmony import */ var _player_management_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./player-management.service */ "./src/app/player-management.service.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _list_players_list_players_component__WEBPACK_IMPORTED_MODULE_7__["ListPlayersComponent"],
                _player_status_player_status_component__WEBPACK_IMPORTED_MODULE_8__["PlayerStatusComponent"],
                _add_player_add_player_component__WEBPACK_IMPORTED_MODULE_9__["AddPlayerComponent"],
                _list_and_add_list_and_add_component__WEBPACK_IMPORTED_MODULE_10__["ListAndAddComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [_player_management_service__WEBPACK_IMPORTED_MODULE_11__["PlayerManagementService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/list-and-add/list-and-add.component.css":
/*!*********************************************************!*\
  !*** ./src/app/list-and-add/list-and-add.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.wrapper {\n    padding: 15px;\n}\n\n.content {\n    border: solid 1px black;\n    background-color: lightgray;\n    padding: 10px;\n}\n\na{\n    text-decoration: none;\n    color: black;\n    /* padding-left: 5px; */\n}\n\na:hover{\n    color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC1hbmQtYWRkL2xpc3QtYW5kLWFkZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsMkJBQTJCO0lBQzNCLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2xpc3QtYW5kLWFkZC9saXN0LWFuZC1hZGQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLndyYXBwZXIge1xuICAgIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5jb250ZW50IHtcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gICAgcGFkZGluZzogMTBweDtcbn1cbmF7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICAvKiBwYWRkaW5nLWxlZnQ6IDVweDsgKi9cbn1cblxuYTpob3ZlcntcbiAgICBjb2xvcjogcmVkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/list-and-add/list-and-add.component.html":
/*!**********************************************************!*\
  !*** ./src/app/list-and-add/list-and-add.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <a [routerLink]=\"['']\">List | </a><a [routerLink]=\"['players/addPlayer']\">Add Player</a>\n  <div class=\"content\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/list-and-add/list-and-add.component.ts":
/*!********************************************************!*\
  !*** ./src/app/list-and-add/list-and-add.component.ts ***!
  \********************************************************/
/*! exports provided: ListAndAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListAndAddComponent", function() { return ListAndAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ListAndAddComponent = /** @class */ (function () {
    function ListAndAddComponent() {
    }
    ListAndAddComponent.prototype.ngOnInit = function () {
    };
    ListAndAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-and-add',
            template: __webpack_require__(/*! ./list-and-add.component.html */ "./src/app/list-and-add/list-and-add.component.html"),
            styles: [__webpack_require__(/*! ./list-and-add.component.css */ "./src/app/list-and-add/list-and-add.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ListAndAddComponent);
    return ListAndAddComponent;
}());



/***/ }),

/***/ "./src/app/list-players/list-players.component.css":
/*!*********************************************************!*\
  !*** ./src/app/list-players/list-players.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\ntd {\n    width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC1wbGF5ZXJzL2xpc3QtcGxheWVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9saXN0LXBsYXllcnMvbGlzdC1wbGF5ZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbnRkIHtcbiAgICB3aWR0aDogMjAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/list-players/list-players.component.html":
/*!**********************************************************!*\
  !*** ./src/app/list-players/list-players.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<table class=\"table-striped table-lg\">\n  <thead>\n      <th>Player Name</th>\n      <th>Preferred Position</th>\n      <th>Delete ?</th>\n  </thead>\n  <tbody>\n      <tr *ngFor=\"let player of allPlayers\">\n          <td>{{player.name}}</td>\n          <td>{{player.position}}</td>\n          <td><button class=\"btn-danger\" (click)=\"deletePlayer(player)\">Delete</button></td>\n      </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./src/app/list-players/list-players.component.ts":
/*!********************************************************!*\
  !*** ./src/app/list-players/list-players.component.ts ***!
  \********************************************************/
/*! exports provided: ListPlayersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPlayersComponent", function() { return ListPlayersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _player_management_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../player-management.service */ "./src/app/player-management.service.ts");



var ListPlayersComponent = /** @class */ (function () {
    function ListPlayersComponent(playerService) {
        this.playerService = playerService;
        this.allPlayers = [];
    }
    ListPlayersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.playerService.getPlayers()
            .subscribe(function (response) {
            console.log("success in list component!", response);
            _this.allPlayers = response;
        }, function (err) {
            console.log("error in list component!!", err);
        });
    };
    ListPlayersComponent.prototype.deletePlayer = function (player) {
        var _this = this;
        var confirm = window.confirm("Are you sure you want to delete " + player.name + "?");
        if (confirm == true) {
            console.log("You pushed confirm to delete ", player.name);
            this.playerService.deletePlayer(player)
                .subscribe();
            this.playerService.getPlayers()
                .subscribe(function (response) {
                console.log("success in list component! delete player", response);
                _this.allPlayers = response;
            }, function (err) {
                console.log("error in list component!!", err);
            });
        }
        else {
            console.log("you cancelled");
        }
    };
    ListPlayersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-players',
            template: __webpack_require__(/*! ./list-players.component.html */ "./src/app/list-players/list-players.component.html"),
            styles: [__webpack_require__(/*! ./list-players.component.css */ "./src/app/list-players/list-players.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_player_management_service__WEBPACK_IMPORTED_MODULE_2__["PlayerManagementService"]])
    ], ListPlayersComponent);
    return ListPlayersComponent;
}());



/***/ }),

/***/ "./src/app/player-management.service.ts":
/*!**********************************************!*\
  !*** ./src/app/player-management.service.ts ***!
  \**********************************************/
/*! exports provided: PlayerManagementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerManagementService", function() { return PlayerManagementService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



// import { BehaviorSubject } from 'rxjs';
var PlayerManagementService = /** @class */ (function () {
    function PlayerManagementService(http) {
        this.http = http;
    }
    PlayerManagementService.prototype.getPlayers = function () {
        return this.http.get('/allPlayers');
    };
    PlayerManagementService.prototype.deletePlayer = function (player) {
        console.log("before hitting deleteplayer in server.js", player.name, player._id);
        return this.http.delete('/deletePlayer/' + player._id);
    };
    PlayerManagementService.prototype.editPlayer = function (player, status, game) {
        console.log("hitting edit player in service.ts ");
        return this.http.put('/editPlayer/' + player._id + '/' + game + '/' + status, player);
    };
    PlayerManagementService.prototype.addPlayers = function (player) {
        return this.http.post('/processPlayer', player);
    };
    PlayerManagementService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PlayerManagementService);
    return PlayerManagementService;
}());



/***/ }),

/***/ "./src/app/player-status/player-status.component.css":
/*!***********************************************************!*\
  !*** ./src/app/player-status/player-status.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div{\n    padding-left: 5%;\n    \n}\ntd {\n    width: 300px;\n    height: 10vh; \n    overflow: scroll;\n}\nspan{\n    font-weight: bolder;\n}\na:hover{\n    color: red;\n}\n.first{\n    padding-left: 9em;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheWVyLXN0YXR1cy9wbGF5ZXItc3RhdHVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7O0FBRXBCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxVQUFVO0FBQ2Q7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3BsYXllci1zdGF0dXMvcGxheWVyLXN0YXR1cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2e1xuICAgIHBhZGRpbmctbGVmdDogNSU7XG4gICAgXG59XG50ZCB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMTB2aDsgXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuc3BhbntcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG5hOmhvdmVye1xuICAgIGNvbG9yOiByZWQ7XG59XG5cbi5maXJzdHtcbiAgICBwYWRkaW5nLWxlZnQ6IDllbTtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/player-status/player-status.component.html":
/*!************************************************************!*\
  !*** ./src/app/player-status/player-status.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1 *ngIf=\"game1\">Player Status - Game 1</h1>\n  <h1 *ngIf=\"game2\">Player Status - Game 2</h1>\n  <h1 *ngIf=\"game3\">Player Status - Game 3</h1>\n\n  <span>\n    <a (click)=\"getGameOne(1)\">Game 1 | </a>\n    <a (click)=\"getGameTwo(2)\">Game 2 | </a>\n    <a (click)=\"getGameThree(3)\">Game 3</a>\n  </span>\n\n\n  <table class=\"table-striped table-lg\">\n      <thead>\n          <th>Player Name</th>\n          <th>Actions</th>\n      </thead>\n      <tbody>\n          <tr *ngFor=\"let player of allPlayers\">\n              <td>{{player.name}}</td>\n              <td *ngIf=\"game1\">\n                <button *ngIf=\"player.gameOne == 'playing'\" style=\"background-color: green;\">playing</button>\n                <button *ngIf=\"player.gameOne !== 'playing'\" (click)=\"gameStatus(player, 'playing', 'gameOne')\">playing</button>\n                \n                <button *ngIf=\"player.gameOne == 'notPlaying'\" style=\"background-color: red;\">not playing</button>\n                <button *ngIf=\"player.gameOne !== 'notPlaying'\" (click)=\"gameStatus(player, 'notPlaying', 'gameOne')\">not playing</button>\n\n                <button *ngIf=\"player.gameOne == 'undecided'\" style=\"background-color: yellow;\">undecided</button>\n                <button *ngIf=\"player.gameOne !== 'undecided'\" (click)=\"gameStatus(player, 'undecided', 'gameOne')\">undecided</button>\n              \n              </td>\n              <td *ngIf=\"game2\">\n                <button *ngIf=\"player.gameTwo == 'playing'\" style=\"background-color: green;\">playing</button>\n                <button *ngIf=\"player.gameTwo !== 'playing'\" (click)=\"gameStatus(player, 'playing', 'gameTwo')\">playing</button>\n                \n                <button *ngIf=\"player.gameTwo == 'notPlaying'\" style=\"background-color: red;\">not playing</button>\n                <button *ngIf=\"player.gameTwo !== 'notPlaying'\" (click)=\"gameStatus(player, 'notPlaying', 'gameTwo')\">not playing</button>\n\n                <button *ngIf=\"player.gameTwo == 'undecided'\" style=\"background-color: yellow;\">undecided</button>\n                <button *ngIf=\"player.gameTwo !== 'undecided'\" (click)=\"gameStatus(player, 'undecided', 'gameTwo')\">undecided</button>\n              </td>\n\n              <td *ngIf=\"game3\">\n                <button *ngIf=\"player.gameThree == 'playing'\" style=\"background-color: green;\">playing</button>\n                <button *ngIf=\"player.gameThree !== 'playing'\" (click)=\"gameStatus(player, 'playing', 'gameThree')\">playing</button>\n                \n                <button *ngIf=\"player.gameThree == 'notPlaying'\" style=\"background-color: red;\">not playing</button>\n                <button *ngIf=\"player.gameThree !== 'notPlaying'\" (click)=\"gameStatus(player, 'notPlaying', 'gameThree')\">not playing</button>\n\n                <button *ngIf=\"player.gameThree == 'undecided'\" style=\"background-color: yellow;\">undecided</button>\n                <button *ngIf=\"player.gameThree !== 'undecided'\" (click)=\"gameStatus(player, 'undecided', 'gameThree')\">undecided</button>\n                </td>\n          </tr>\n      </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/player-status/player-status.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/player-status/player-status.component.ts ***!
  \**********************************************************/
/*! exports provided: PlayerStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerStatusComponent", function() { return PlayerStatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _player_management_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../player-management.service */ "./src/app/player-management.service.ts");



var PlayerStatusComponent = /** @class */ (function () {
    function PlayerStatusComponent(playerService) {
        this.playerService = playerService;
        this.allPlayers = [];
        this.game1 = true;
        this.game2 = false;
        this.game3 = false;
        console.log(this.playerService);
    }
    PlayerStatusComponent.prototype.getGameOne = function (num) {
        this.game1 = true;
        this.game2 = false;
        this.game3 = false;
        this.thisGame = num;
    };
    PlayerStatusComponent.prototype.getGameTwo = function (num) {
        this.game1 = false;
        this.game2 = true;
        this.game3 = false;
        this.thisGame = num;
    };
    PlayerStatusComponent.prototype.getGameThree = function (num) {
        this.game1 = false;
        this.game2 = false;
        this.game3 = true;
        this.thisGame = num;
    };
    PlayerStatusComponent.prototype.gameStatus = function (player, status, game) {
        var _this = this;
        console.log(player, status, game);
        this.playerService.editPlayer(player, status, game)
            .subscribe();
        this.playerService.getPlayers()
            .subscribe(function (response) {
            console.log("success in list component! delete player", response);
            _this.allPlayers = response;
        }, function (err) {
            console.log("error in list component!!", err);
        });
    };
    PlayerStatusComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.playerService.getPlayers()
            .subscribe(function (response) {
            console.log("success in list component!", response);
            _this.allPlayers = response;
        }, function (err) {
            console.log("error in list component!!", err);
        });
    };
    PlayerStatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-player-status',
            template: __webpack_require__(/*! ./player-status.component.html */ "./src/app/player-status/player-status.component.html"),
            styles: [__webpack_require__(/*! ./player-status.component.css */ "./src/app/player-status/player-status.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_player_management_service__WEBPACK_IMPORTED_MODULE_2__["PlayerManagementService"]])
    ], PlayerStatusComponent);
    return PlayerStatusComponent;
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

module.exports = __webpack_require__(/*! /Users/nathandevers/Desktop/mean_stack/angular/BeltReviewer/teamManager/appTeamManager/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map