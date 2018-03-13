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

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!doctype html>\n\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n  <meta name=\"description\" content=\"\">\n  <meta name=\"author\" content=\"\">\n  <link rel=\"icon\" href=\"../../../../favicon.ico\">\n\n  <title>Sticky Footer Navbar Template for Bootstrap</title>\n\n  <!-- Bootstrap core CSS -->\n  <link href=\"https://getbootstrap.com/dist/css/bootstrap.min.css\" rel=\"stylesheet\">\n\n  <!-- Custom styles for this template -->\n  <link href=\"https://getbootstrap.com/docs/4.0/examples/sticky-footer-navbar/sticky-footer-navbar.css\" rel=\"stylesheet\">\n</head>\n\n<body>\n\n  <header>\n    <!-- Fixed navbar -->\n    <nav class=\"navbar navbar-expand-md navbar-dark fixed-top bg-dark\">\n      <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n        <ul class=\"navbar-nav mr-auto\">\n          <li class=\"nav-item active\">\n            <a class=\"nav-link\" routerLink=\"home\">Home</a>\n          </li>\n          <li class=\"nav-item active\">\n            <a class=\"nav-link\" routerLink=\"signup\">Sign Up</a>\n          </li>\n          <li class=\"nav-item active\">\n            <a id=\"log\" class=\"nav-link\" routerLink={{route}}></a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n  </header>\n\n  <!-- Begin page content -->\n  <div class=\"container\">\n    <router-outlet></router-outlet>\n  </div>\n\n\n\n  <!-- Bootstrap core JavaScript\n    ================================================== -->\n  <!-- Placed at the end of the document so the pages load faster -->\n  <script src=\"https://code.jquery.com/jquery-3.2.1.slim.min.js\"></script>\n  <script>window.jQuery || document.write('<script src=\"../../../../assets/js/vendor/jquery-slim.min.js\"><\\/script>')</script>\n  <script src=\"https://getbootstrap.com/assets/js/vendor/popper.min.js\"></script>\n  <script src=\"https://getbootstrap.com/dist/js/bootstrap.min.js\"></script>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        this.route = "login";
    }
    AppComponent.prototype.ngDoCheck = function () {
        var login = document.getElementById('log');
        if (sessionStorage.getItem('token') == null) {
            this.route = "login";
            login.textContent = "Login";
        }
        else {
            this.route = "logout";
            login.textContent = "Log Out";
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("./src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppGuard = /** @class */ (function () {
    function AppGuard(service) {
        this.service = service;
    }
    AppGuard.prototype.canActivate = function (next, state) {
        return this.service.getsession();
    };
    AppGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]])
    ], AppGuard);
    return AppGuard;
}());

// import { Injectable } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import { Observable } from 'rxjs/Observable';
// import { DataService } from './data.service';
// @Injectable()
// export class ProtectGuard implements CanActivate {
//   constructor(private dataService: DataService) { }
//   canActivate(): boolean {
//     if (this.dataService.getSessionData()) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_route__ = __webpack_require__("./src/app/app.route.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_guard__ = __webpack_require__("./src/app/app.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_service__ = __webpack_require__("./src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__signup_signup_component__ = __webpack_require__("./src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__logout_logout_component__ = __webpack_require__("./src/app/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pagenotfound_pagenotfound_component__ = __webpack_require__("./src/app/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__list_list_component__ = __webpack_require__("./src/app/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__main_list_main_list_component__ = __webpack_require__("./src/app/main-list/main-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_11__logout_logout_component__["a" /* LogoutComponent */],
                __WEBPACK_IMPORTED_MODULE_12__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_13__pagenotfound_pagenotfound_component__["a" /* PagenotfoundComponent */],
                __WEBPACK_IMPORTED_MODULE_14__list_list_component__["a" /* ListComponent */],
                __WEBPACK_IMPORTED_MODULE_15__main_list_main_list_component__["a" /* MainListComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_route__["a" /* Approutes */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__app_guard__["a" /* AppGuard */], __WEBPACK_IMPORTED_MODULE_5__app_service__["a" /* AppService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.route.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Approutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_signup_signup_component__ = __webpack_require__("./src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_guard__ = __webpack_require__("./src/app/app.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_logout_logout_component__ = __webpack_require__("./src/app/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_pagenotfound_pagenotfound_component__ = __webpack_require__("./src/app/pagenotfound/pagenotfound.component.ts");








var route = [
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_6__app_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_1__app_login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'signup',
        component: __WEBPACK_IMPORTED_MODULE_2__app_signup_signup_component__["a" /* SignupComponent */]
    },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_3__app_dashboard_dashboard_component__["a" /* DashboardComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__app_guard__["a" /* AppGuard */]]
    },
    {
        path: 'logout',
        component: __WEBPACK_IMPORTED_MODULE_5__app_logout_logout_component__["a" /* LogoutComponent */]
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_7__app_pagenotfound_pagenotfound_component__["a" /* PagenotfoundComponent */]
    }
];
var Approutes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(route);


/***/ }),

/***/ "./src/app/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
    }
    AppService.prototype.signUp = function (data) {
        return this.http.post('http://localhost:5000/signup', data);
    };
    AppService.prototype.login = function (data) {
        return this.http.post('http://localhost:5000/login', data);
    };
    AppService.prototype.getsession = function () {
        if (sessionStorage.getItem('token') != null)
            return true;
        else
            return false;
    };
    ;
    AppService.prototype.getUsersList = function () {
        return this.http.post('http://localhost:5000/mainList', '');
    };
    AppService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin-top: 10px\">\n  <div class=\"col-sm-6\">\n    <h3>Main List</h3>\n    <app-main-list></app-main-list>\n  </div>\n  <div class=\"col-sm-6\">\n    <h3>List</h3>\n    <app-list></app-list>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n<title>W3.CSS Template</title>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Montserrat\">\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n<style>\nbody, h1,h2,h3,h4,h5,h6 {font-family: \"Montserrat\", sans-serif}\n.w3-row-padding img {margin-bottom: 12px}\n/* Set the width of the sidebar to 120px */\n.w3-sidebar {width: 120px;background: #222;}\n/* Add a left margin to the \"page content\" that matches the width of the sidebar (120px) */\n#main {margin-left: 120px}\n/* Remove margins from \"page content\" on small screens */\n@media only screen and (max-width: 600px) {#main {margin-left: 0}}\n</style>\n<body class=\"w3-black\">\n\n\n\n<!-- Page Content -->\n<div class=\"w3-padding-large\" id=\"main\">\n  <!-- Header/Home -->\n  <header class=\"w3-container w3-padding-32 w3-center w3-black\" id=\"home\">\n    <h1 class=\"w3-jumbo\"><span class=\"w3-hide-small\">Angular</span> Node</h1>\n    <p>From team of vendathavar....</p>\n    <!-- <img src=\"/w3images/man_smoke.jpg\" alt=\"boy\" class=\"w3-image\" width=\"992\" height=\"1108\"> -->\n  </header>\n\n  <!-- About Section -->\n  <div class=\"w3-content w3-justify w3-text-grey w3-padding-64\" id=\"about\">\n    <h2 class=\"w3-text-light-grey\">My Name</h2>\n    <hr style=\"width:200px\" class=\"w3-opacity\">\n    <p>It's me Anand R.\n    </p>\n    <h3 class=\"w3-padding-16 w3-text-light-grey\">My Skills</h3>\n    <p class=\"w3-wide\">Angular</p>\n    <div class=\"w3-white\">\n      <div class=\"w3-dark-grey\" style=\"height:28px;width:95%\"></div>\n    </div>\n    <p class=\"w3-wide\">Node</p>\n    <div class=\"w3-white\">\n      <div class=\"w3-dark-grey\" style=\"height:28px;width:85%\"></div>\n    </div>\n    <p class=\"w3-wide\">CSS</p>\n    <div class=\"w3-white\">\n      <div class=\"w3-dark-grey\" style=\"height:28px;width:80%\"></div>\n    </div><br>\n    \n    <div class=\"w3-row w3-center w3-padding-16 w3-section w3-light-grey\">\n      <div class=\"w3-quarter w3-section\">\n        <span class=\"w3-xlarge\">11+</span><br>\n        Partners\n      </div>\n      <div class=\"w3-quarter w3-section\">\n        <span class=\"w3-xlarge\">55+</span><br>\n        Projects Done\n      </div>\n      <div class=\"w3-quarter w3-section\">\n        <span class=\"w3-xlarge\">89+</span><br>\n        Happy Clients\n      </div>\n      <div class=\"w3-quarter w3-section\">\n        <span class=\"w3-xlarge\">150+</span><br>\n        Meetings\n      </div>\n    </div>\n\n  <!-- End About Section -->\n  </div>\n  \n\n  <!-- Contact Section -->\n  <div class=\"w3-padding-64 w3-content w3-text-grey\" id=\"contact\">\n    <h2 class=\"w3-text-light-grey\">Contact Me</h2>\n    <hr style=\"width:200px\" class=\"w3-opacity\">\n\n    <div class=\"w3-section\">\n      <p><i class=\"fa fa-map-marker fa-fw w3-text-white w3-xxlarge w3-margin-right\"></i> Pattom, Kerala</p>\n      <p><i class=\"fa fa-phone fa-fw w3-text-white w3-xxlarge w3-margin-right\"></i> Phone: +00 151515</p>\n      <p><i class=\"fa fa-envelope fa-fw w3-text-white w3-xxlarge w3-margin-right\"> </i> Email: mail@mail.com</p>\n    </div><br>\n\n  <!-- End Contact Section -->\n  </div>\n  \n    <!-- Footer -->\n  <footer class=\"w3-content w3-padding-64 w3-text-grey w3-xlarge\">\n    <i class=\"fa fa-facebook-official w3-hover-opacity\"></i>\n    <i class=\"fa fa-instagram w3-hover-opacity\"></i>\n    <i class=\"fa fa-snapchat w3-hover-opacity\"></i>\n    <i class=\"fa fa-pinterest-p w3-hover-opacity\"></i>\n    <i class=\"fa fa-twitter w3-hover-opacity\"></i>\n    <i class=\"fa fa-linkedin w3-hover-opacity\"></i>\n    <p class=\"w3-medium\">Powered by <a href=\"https://www.w3schools.com/w3css/default.asp\" target=\"_blank\" class=\"w3-hover-text-green\">w3.css</a></p>\n  <!-- End footer -->\n  </footer>\n\n<!-- END PAGE CONTENT -->\n</div>\n\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/list/list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<table cellpadding=\"0\" cellspacing=\"2\">\n  <tr style=\"background-color:palegoldenrod\">\n    <th style=\"border-bottom:2px solid #dadada;border-right:2px solid #dadada;border-top:2px solid #dadada;border-left: 2px solid #dadada\" align=\"left\">Name</th>\n    <th style=\"border-bottom:2px solid #dadada;border-right:2px solid #dadada;border-top:2px solid #dadada;border-left: 2px solid #dadada\" align=\"left\">Gender</th>\n    <th style=\"border-bottom:2px solid #dadada;border-right:2px solid #dadada;border-top:2px solid #dadada;border-left: 2px solid #dadada\" align=\"left\">Date of Birth</th>\n    <th style=\"border-bottom:2px solid #dadada;border-right:2px solid #dadada;border-top:2px solid #dadada;border-left: 2px solid #dadada\" align=\"left\">Phone Number</th>\n    <th style=\"border-bottom:2px solid #dadada;border-right:2px solid #dadada;border-top:2px solid #dadada;border-left: 2px solid #dadada\" align=\"left\">Edit</th>\n    <th style=\"border-bottom:2px solid #dadada;border-right:2px solid #dadada;border-top:2px solid #dadada;border-left: 2px solid #dadada\" align=\"left\">Delete</th>\n  </tr>\n<tr *ngFor=\"let el of dataArray; let i = index\"  [ngStyle]=\"i%2!=0?{'background-color':'whitesmoke'}:{'background-color':'white'}\">\n  <td style=\"border-bottom:2px solid #dadada;border-right:2px solid #dadada;border-top:2px solid #dadada;border-left: 2px solid #dadada\" align=\"left\">{{el.firstName}}</td>\n  <td style=\"border-bottom:2px solid #dadada;border-right:2px solid #dadada;border-top:2px solid #dadada;border-left: 2px solid #dadada\" align=\"left\">{{el.gender}}</td>\n  <td style=\"border-bottom:2px solid #dadada;border-right:2px solid #dadada;border-top:2px solid #dadada;border-left: 2px solid #dadada\" align=\"left\">{{el.dob}}</td>\n  <td style=\"border-bottom:2px solid #dadada;border-right:2px solid #dadada;border-top:2px solid #dadada;border-left: 2px solid #dadada\" align=\"left\">{{el.phoneNumber}}</td>\n  <td style=\"border-bottom:2px solid #dadada;border-right:2px solid #dadada;border-top:2px solid #dadada;border-left: 2px solid #dadada;text-align: center\" align=\"left\">\n    <a (click)=\"editClick(data)\"> <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></a>\n  </td>\n    <td style=\"border-bottom:2px solid #dadada;border-right:2px solid #dadada;border-top:2px solid #dadada;border-left: 2px solid #dadada;text-align: center\" align=\"left\">\n      <a (click)=\"deleteClick(el._id)\"> <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i></a>\n    </td>\n</tr>\n</table>\n"

/***/ }),

/***/ "./src/app/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("./src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListComponent = /** @class */ (function () {
    function ListComponent(appService) {
        this.appService = appService;
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        debugger;
        this.appService.getUsersList().subscribe(function (data) {
            debugger;
            if (data['Status'] == "success")
                _this.dataArray = data["Data"];
            else
                alert("No Data Exits...");
        });
    };
    ListComponent.prototype.editClick = function (data) {
    };
    ListComponent.prototype.deleteClick = function (id) {
    };
    ListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-list',
            template: __webpack_require__("./src/app/list/list.component.html"),
            styles: [__webpack_require__("./src/app/list/list.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container-fluid\">\n  <div class=\"login__page\">\n    <div class=\"row\">\n      <div class=\"card col-md-4 col-md-offset-4\">\n        <div class=\"login__card\">\n          <div class=\"card-block\">\n            <form #loginDetails=\"ngForm\" (ngSubmit)=\"onSubmit(loginDetails)\">\n                <h3 align=\"center\">Login Form</h3>\n              <div class=\"form-group\">\n                <label>Login Name:</label>\n                <input type=\"text\" name=login ngModel required>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n</div> -->\n\n\n<div id=\"container\" class=\"container\">\n  <!-- <div class=\"row\"> -->\n  <h3 align=\"center\">Login Form</h3>\n  <form class=\"justify-content-center\" #loginDetails=\"ngForm\" (ngSubmit)=\"onLogin(loginDetails.value)\">\n    <div class=\"form-group\">\n      <label for=\"email\">Login Name:</label>\n      <input type=\"email\" class=\"form-control\" id=\"email\" name=\"loginName\" ngModel required>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"pwd\">Password:</label>\n      <input type=\"password\" class=\"form-control\" id=\"pwd\" name=\"password\" ngModel required>\n    </div>\n    <div class=\"checkbox\">\n      <label>\n        <input type=\"checkbox\"> Remember me</label>\n    </div>\n    <button class=\"btn btn-default\" type=\"submit\" [disabled]=\"!loginDetails.valid\">\n      <i class=\"fa fa-floppy-o\"></i>\n      Login\n    </button>\n    <button class=\"btn btn-default\" type=\"button\" (click)=\"resetClick(loginDetails)\">\n      <i class=\"fa fa-repeat\"></i>\n      Reset\n    </button>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("./src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(appService, router) {
        this.appService = appService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLogin = function (event) {
        var _this = this;
        debugger;
        var that = this;
        this.appService.login(event).subscribe(function (data) {
            debugger;
            if (data["Status"] == "success") {
                sessionStorage.setItem("token", data["session"][0]['loginName']);
                alert(" Login is successfull....");
                _this.router.navigate(['/dashboard']);
            }
            else
                alert("Login failed....");
        });
    };
    LoginComponent.prototype.resetClick = function (data) {
        if (data != null)
            data.reset();
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/logout/logout.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/logout/logout.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  logout works!\n</p>\n"

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("./src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(appService, router, cdRef) {
        this.appService = appService;
        this.router = router;
        this.cdRef = cdRef;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        sessionStorage.clear();
        this.router.navigate(['/login']);
    };
    LogoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-logout',
            template: __webpack_require__("./src/app/logout/logout.component.html"),
            styles: [__webpack_require__("./src/app/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/main-list/main-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-list/main-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"container\" class=\"container\">\n    <!-- <h3 align=\"center\">Sign Up</h3> -->\n    <form class=\"justify-content-center\" #editDetails=\"ngForm\" (ngSubmit)=\"onEditDetails(editDetails.value)\">\n  \n      <div class=\"form-group\" style=\"display: inline-flex;\">\n        <label for=\"Name\" style=\"margin-top: 10px;\">Name:</label>\n        <input type=\"text\" class=\"form-control\" style=\"margin-left: 5px;\" placeholder=\"First Name\" name=\"firstName\" ngModel required>\n        <input type=\"text\" class=\"form-control\" style=\"margin-left: 8px;\" name=\"lastName\" placeholder=\"Last Name\" ngModel required>\n      </div>\n  \n      <div>\n        <label for=\"gender\">Gender:</label>\n        <div style=\"margin-left: 60px;\" class=\"form-group\">\n          <input type=\"radio\" value=\"Male\" name=\"gender\" ngModel checked=\"checked\" required> Male\n          <br>\n          <input type=\"radio\" value=\"Female\" name=\"gender\" ngModel required> Female\n          <br>\n        </div>\n      </div>\n  \n      <div class=\"form-group\">\n        <label for=\"gender\">Date of Birth:</label>\n        <input type=\"date\" name=\"dob\" ngModel required>\n      </div>\n  \n      <div class=\"form-group\">\n        <label for=\"gender\">Phone Number:</label>\n        <input type=\"number\" class=\"form-control\" name=\"phoneNumber\" ngModel required>\n      </div>\n  \n      <button class=\"btn btn-default\" type=\"submit\" [disabled]=\"!editDetails.valid\">\n        <i class=\"fa fa-floppy-o\"></i>\n        Save Changes\n      </button>\n      <button class=\"btn btn-default\" type=\"button\" (click)=\"resetClick(editDetails)\">\n        <i class=\"fa fa-repeat\"></i>\n        Reset\n      </button>\n    </form>\n  </div>"

/***/ }),

/***/ "./src/app/main-list/main-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainListComponent = /** @class */ (function () {
    function MainListComponent() {
    }
    MainListComponent.prototype.ngOnInit = function () {
    };
    MainListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main-list',
            template: __webpack_require__("./src/app/main-list/main-list.component.html"),
            styles: [__webpack_require__("./src/app/main-list/main-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainListComponent);
    return MainListComponent;
}());



/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  Oops pagenotfound...!\n</p>\n"

/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagenotfoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PagenotfoundComponent = /** @class */ (function () {
    function PagenotfoundComponent() {
    }
    PagenotfoundComponent.prototype.ngOnInit = function () {
    };
    PagenotfoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-pagenotfound',
            template: __webpack_require__("./src/app/pagenotfound/pagenotfound.component.html"),
            styles: [__webpack_require__("./src/app/pagenotfound/pagenotfound.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PagenotfoundComponent);
    return PagenotfoundComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"container\" class=\"container\">\n  <h3 align=\"center\">Sign Up</h3>\n  <form class=\"justify-content-center\" #signUpDetails=\"ngForm\" (ngSubmit)=\"onSignUp(signUpDetails.value)\">\n\n    <div class=\"form-group\" style=\"display: inline-flex;\">\n      <label for=\"Name\" style=\"margin-top: 10px;\">Name:</label>\n      <input type=\"text\" class=\"form-control\" style=\"margin-left: 5px;\" placeholder=\"First Name\" name=\"firstName\" ngModel required>\n      <input type=\"text\" class=\"form-control\" style=\"margin-left: 8px;\" name=\"lastName\" placeholder=\"Last Name\" ngModel required>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"loginName\">Login Name: </label>\n      <input type=\"text\" class=\"form-control\" name=\"loginName\" ngModel required>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"pwd\">Password:</label>\n      <input type=\"password\" class=\"form-control\" id=\"pwd\" name=\"password\" ngModel required>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"pwd\">Confirm Password:</label>\n      <input type=\"password\" class=\"form-control\" id=\"confPwd\" name=\"confirmPassword\" ngModel required>\n    </div>\n\n    <div>\n      <label for=\"gender\">Gender:</label>\n      <div style=\"margin-left: 60px;\" class=\"form-group\">\n        <input type=\"radio\" value=\"Male\" name=\"gender\" ngModel checked=\"checked\" required> Male\n        <br>\n        <input type=\"radio\" value=\"Female\" name=\"gender\" ngModel required> Female\n        <br>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"gender\">Date of Birth:</label>\n      <input type=\"date\" name=\"dob\" ngModel required>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"gender\">Phone Number:</label>\n      <input type=\"number\" class=\"form-control\" name=\"phoneNumber\" ngModel required>\n    </div>\n\n    <button class=\"btn btn-default\" type=\"submit\" [disabled]=\"!signUpDetails.valid\">\n      <i class=\"fa fa-floppy-o\"></i>\n      Sign Up\n    </button>\n    <button class=\"btn btn-default\" type=\"button\" (click)=\"resetClick(signUpDetails)\">\n      <i class=\"fa fa-repeat\"></i>\n      Reset\n    </button>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("./src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignupComponent = /** @class */ (function () {
    function SignupComponent(appService) {
        this.appService = appService;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.onSignUp = function (event) {
        debugger;
        var that = this;
        if (event.password != event.confirmPassword) {
            alert("Password and Confrim password are not same...");
            return;
        }
        else {
            if (event.confirmPassword)
                delete event.confirmPassword;
            this.appService.signUp(event).subscribe(function (data) {
                debugger;
                if (data["Status"] == "success") {
                    that.userDetails = data["Data"];
                    alert(" Sign Up is successfull....");
                }
                else
                    alert("Login Name already exits....");
            });
        }
    };
    SignupComponent.prototype.resetClick = function (data) {
        if (data != null)
            data.reset();
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signup',
            template: __webpack_require__("./src/app/signup/signup.component.html"),
            styles: [__webpack_require__("./src/app/signup/signup.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]])
    ], SignupComponent);
    return SignupComponent;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map