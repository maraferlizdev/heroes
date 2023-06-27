"use strict";
(self["webpackChunkmy_app"] = self["webpackChunkmy_app"] || []).push([["main"],{

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/navbar/navbar.component */ 953);



class AppComponent {
  constructor() {
    this.title = 'my-app';
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 3,
  vars: 0,
  consts: [[1, "container", "main-container"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.routes */ 2016);
/* harmony import */ var _services_heroes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/heroes.service */ 8012);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/navbar/navbar.component */ 953);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ 159);
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/about/about.component */ 6352);
/* harmony import */ var _components_heroes_heroes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/heroes/heroes.component */ 567);
/* harmony import */ var _components_heroe_heroe_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/heroe/heroe.component */ 3102);
/* harmony import */ var _components_buscador_buscador_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/buscador/buscador.component */ 5852);
/* harmony import */ var _components_heroe_tarjeta_heroe_tarjeta_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/heroe-tarjeta/heroe-tarjeta.component */ 5791);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 7947);

//Rutas

//Servicios

//Componentes










class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
  providers: [_services_heroes_service__WEBPACK_IMPORTED_MODULE_1__.HeroesService],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _app_routes__WEBPACK_IMPORTED_MODULE_0__.APP_ROUTING]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent, _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__.NavbarComponent, _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__.HomeComponent, _components_about_about_component__WEBPACK_IMPORTED_MODULE_5__.AboutComponent, _components_heroes_heroes_component__WEBPACK_IMPORTED_MODULE_6__.HeroesComponent, _components_heroe_heroe_component__WEBPACK_IMPORTED_MODULE_7__.HeroeComponent, _components_buscador_buscador_component__WEBPACK_IMPORTED_MODULE_8__.BuscadorComponent, _components_heroe_tarjeta_heroe_tarjeta_component__WEBPACK_IMPORTED_MODULE_9__.HeroeTarjetaComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule]
  });
})();

/***/ }),

/***/ 2016:
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APP_ROUTING: () => (/* binding */ APP_ROUTING)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home/home.component */ 159);
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/about/about.component */ 6352);
/* harmony import */ var _components_heroes_heroes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/heroes/heroes.component */ 567);
/* harmony import */ var _components_heroe_heroe_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/heroe/heroe.component */ 3102);
/* harmony import */ var _components_buscador_buscador_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/buscador/buscador.component */ 5852);






const ROUTES = [{
  path: 'home',
  component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: 'about',
  component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent
}, {
  path: 'heroes',
  component: _components_heroes_heroes_component__WEBPACK_IMPORTED_MODULE_2__.HeroesComponent
}, {
  path: 'buscador/:termino',
  component: _components_buscador_buscador_component__WEBPACK_IMPORTED_MODULE_4__.BuscadorComponent
}, {
  path: 'heroe/:id',
  component: _components_heroe_heroe_component__WEBPACK_IMPORTED_MODULE_3__.HeroeComponent
}, {
  path: '**',
  pathMatch: 'full',
  redirectTo: 'home'
}];
const APP_ROUTING = _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(ROUTES);

/***/ }),

/***/ 6352:
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutComponent: () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class AboutComponent {}
AboutComponent.ɵfac = function AboutComponent_Factory(t) {
  return new (t || AboutComponent)();
};
AboutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AboutComponent,
  selectors: [["app-about"]],
  decls: 5,
  vars: 0,
  consts: [[1, "animated", "fadeIn", "fast"], [1, "animated", "fadeIn"]],
  template: function AboutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sobre Comic App");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, explicabo! Quibusdam, cumque! Neque corporis nostrum ipsum! Nisi ducimus molestias et corporis enim harum delectus cumque, unde, vel nulla aliquam eius.\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  encapsulation: 2
});


/***/ }),

/***/ 5852:
/*!***********************************************************!*\
  !*** ./src/app/components/buscador/buscador.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BuscadorComponent: () => (/* binding */ BuscadorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_services_heroes_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/heroes.service */ 8012);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);




function BuscadorComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5)(1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 8)(4, "h5", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 10)(9, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 12)(12, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BuscadorComponent_div_10_Template_button_click_12_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const i_r2 = restoredCtx.index;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.verHeroe(i_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Ver m\u00E1s..");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const heroe_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", heroe_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", heroe_r1.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](heroe_r1.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](heroe_r1.bio);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](heroe_r1.aparicion);
  }
}
class BuscadorComponent {
  constructor(activatedRoute, _heroesService, router) {
    this.activatedRoute = activatedRoute;
    this._heroesService = _heroesService;
    this.router = router;
    this.heroes = [];
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHero(params['termino']);
    });
  }
  verHeroe(idx) {
    this.router.navigate(['/heroe', idx]);
    console.log(idx);
  }
}
BuscadorComponent.ɵfac = function BuscadorComponent_Factory(t) {
  return new (t || BuscadorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_heroes_service__WEBPACK_IMPORTED_MODULE_0__.HeroesService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
BuscadorComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: BuscadorComponent,
  selectors: [["app-buscador"]],
  decls: 11,
  vars: 3,
  consts: [[1, "row"], [1, "col-md-12"], ["role", "alert", 1, "alert", "alert-info"], [1, "row", "row-cols-1", "row-cols-md-3", "g-4"], ["class", "col", 4, "ngFor", "ngForOf"], [1, "col"], [1, "card", "h-100", "animated", "fadeIn"], [1, "card-img-top", 3, "src", "alt"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "text-body-secondary"], [1, "d-grid", "gap-2"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"]],
  template: function BuscadorComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Buscando: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "small");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 0)(6, "div", 1)(7, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, BuscadorComponent_div_10_Template, 14, 5, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.termino, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" No existen resultados con el t\u00E9rmino: ", ctx.termino, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.heroes);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf],
  encapsulation: 2
});


/***/ }),

/***/ 5791:
/*!*********************************************************************!*\
  !*** ./src/app/components/heroe-tarjeta/heroe-tarjeta.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeroeTarjetaComponent: () => (/* binding */ HeroeTarjetaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class HeroeTarjetaComponent {
  constructor(router) {
    this.router = router;
    this.heroe = {};
  }
  verHeroe() {
    this.router.navigate(['/heroe', this.index]);
    console.log(this.index);
  }
}
HeroeTarjetaComponent.ɵfac = function HeroeTarjetaComponent_Factory(t) {
  return new (t || HeroeTarjetaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
};
HeroeTarjetaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: HeroeTarjetaComponent,
  selectors: [["app-heroe-tarjeta"]],
  inputs: {
    heroe: "heroe",
    index: "index"
  },
  decls: 14,
  vars: 5,
  consts: [[1, "col"], [1, "card", "h-100", "animated", "fadeIn"], [1, "card-img-top", 3, "src", "alt"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "text-body-secondary"], [1, "d-grid", "gap-2"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"]],
  template: function HeroeTarjetaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3)(4, "h5", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5)(9, "small", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7)(12, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroeTarjetaComponent_Template_button_click_12_listener() {
        return ctx.verHeroe();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Ver m\u00E1s..");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.heroe.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.heroe.nombre);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.heroe.nombre);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.heroe.bio);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.heroe.aparicion);
    }
  },
  encapsulation: 2
});


/***/ }),

/***/ 3102:
/*!*****************************************************!*\
  !*** ./src/app/components/heroe/heroe.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeroeComponent: () => (/* binding */ HeroeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _services_heroes_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/heroes.service */ 8012);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);




function HeroeComponent_img_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 9);
  }
}
function HeroeComponent_img_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 10);
  }
}
const _c0 = function () {
  return ["/heroes"];
};
class HeroeComponent {
  constructor(activatedRoute, _heroesService) {
    this.activatedRoute = activatedRoute;
    this._heroesService = _heroesService;
    this.heroe = {};
    this.activatedRoute.params.subscribe(params => {
      // console.log(params['id']);
      this.heroe = this._heroesService.getHeroe(params['id']);
      console.log(this.heroe);
    });
  }
}
HeroeComponent.ɵfac = function HeroeComponent_Factory(t) {
  return new (t || HeroeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_heroes_service__WEBPACK_IMPORTED_MODULE_0__.HeroesService));
};
HeroeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: HeroeComponent,
  selectors: [["app-heroe"]],
  decls: 24,
  vars: 15,
  consts: [[1, "animated", "fadeIn"], [1, "row", "animated", "fadeIn", "fast"], [1, "col-md-4"], [1, "img-fluid", 3, "src", "alt"], [1, "d-grid", "gap-2"], [1, "btn", "btn-outline-danger", "btn-block", 3, "routerLink"], [1, "col-md-8"], ["class", "logo", "src", "../../../assets/img/DC_Comics_logo.png", "alt", "DC", 4, "ngIf"], ["class", "logo", "src", "../../../assets/img/Marvel_Logo.svg.png", "alt", "Marvel", 4, "ngIf"], ["src", "../../../assets/img/DC_Comics_logo.png", "alt", "DC", 1, "logo"], ["src", "../../../assets/img/Marvel_Logo.svg.png", "alt", "Marvel", 1, "logo"]],
  template: function HeroeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "uppercase");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "small");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 1)(8, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 3)(10, "br")(11, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 4)(13, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Regresar");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 6)(16, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, HeroeComponent_img_21_Template, 1, 0, "img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, HeroeComponent_img_22_Template, 1, 0, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 9, ctx.heroe.nombre), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("(", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](5, 11, ctx.heroe.aparicion, "y"), ") ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.heroe.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", ctx.heroe.nombre);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](14, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.heroe.nombre, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.heroe.bio, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.heroe.casa == "DC");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.heroe.casa == "Marvel");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_3__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe],
  encapsulation: 2
});


/***/ }),

/***/ 567:
/*!*******************************************************!*\
  !*** ./src/app/components/heroes/heroes.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeroesComponent: () => (/* binding */ HeroesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_heroes_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/heroes.service */ 8012);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _heroe_tarjeta_heroe_tarjeta_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../heroe-tarjeta/heroe-tarjeta.component */ 5791);





function HeroesComponent_app_heroe_tarjeta_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-heroe-tarjeta", 3);
  }
  if (rf & 2) {
    const heroe_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("heroe", heroe_r1)("index", i_r2);
  }
}
class HeroesComponent {
  constructor(_heroesService, router) {
    // console.log("constructor");
    this._heroesService = _heroesService;
    this.router = router;
    this.heroes = [];
  }
  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    // console.log(this.heroes);
  }

  verHeroe(idx) {
    this.router.navigate(['/heroe', idx]);
    console.log(idx);
  }
}
HeroesComponent.ɵfac = function HeroesComponent_Factory(t) {
  return new (t || HeroesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_heroes_service__WEBPACK_IMPORTED_MODULE_0__.HeroesService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};
HeroesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: HeroesComponent,
  selectors: [["app-heroes"]],
  decls: 8,
  vars: 1,
  consts: [[1, "container"], ["data-masonry", "{\"percentPosition\": true }", 1, "row", "row-cols-1", "row-cols-md-3", "g-4"], [3, "heroe", "index", 4, "ngFor", "ngForOf"], [3, "heroe", "index"]],
  template: function HeroesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "H\u00E9roes ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "small");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Marvel y DC");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 0)(6, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, HeroesComponent_app_heroe_tarjeta_7_Template, 1, 2, "app-heroe-tarjeta", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.heroes);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _heroe_tarjeta_heroe_tarjeta_component__WEBPACK_IMPORTED_MODULE_1__.HeroeTarjetaComponent],
  encapsulation: 2
});


/***/ }),

/***/ 159:
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class HomeComponent {}
HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)();
};
HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["app-home"]],
  decls: 5,
  vars: 0,
  consts: [[1, "animated", "fadeIn", "fast"], [1, "display-5", "fw-bold"], [1, "col-md-8", "fs-4"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Comics App");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Esta es una aplicaci\u00F3n de comics.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
  },
  encapsulation: 2
});


/***/ }),

/***/ 953:
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavbarComponent: () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_heroes_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/heroes.service */ 8012);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);



const _c0 = function () {
  return ["home"];
};
const _c1 = function () {
  return ["heroes"];
};
const _c2 = function () {
  return ["about"];
};
class NavbarComponent {
  constructor(_heroesService, router) {
    this._heroesService = _heroesService;
    this.router = router;
    this.heroes = [];
  }
  buscarHeroe(termino) {
    this.router.navigate(['/buscador', termino]);
  }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
  return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_heroes_service__WEBPACK_IMPORTED_MODULE_0__.HeroesService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
NavbarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NavbarComponent,
  selectors: [["app-navbar"]],
  decls: 22,
  vars: 6,
  consts: [["data-bs-theme", "dark", 1, "navbar", "navbar-expand-lg", "bg-body-tertiary", "navbar", "border-bottom"], [1, "container-fluid"], ["href", "#", 1, "navbar-brand"], ["src", "assets/img/A-64.png", "alt", "Bootstrap", "width", "30", "height", "24"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0"], [1, "nav-item"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink"], ["role", "search", 1, "d-flex"], ["type", "search", "placeholder", "Buscar heroe", 1, "form-control", "me-2", 3, "keyup.enter"], ["buscarTexto", ""], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"]],
  template: function NavbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6)(7, "ul", 7)(8, "li", 8)(9, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 8)(12, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Heroes");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li", 8)(15, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "About");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 10)(18, "input", 11, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup.enter", function NavbarComponent_Template_input_keyup_enter_18_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](19);
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.buscarHeroe(_r0.value));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_20_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](19);
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.buscarHeroe(_r0.value));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Buscar");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c2));
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive],
  encapsulation: 2
});


/***/ }),

/***/ 8012:
/*!********************************************!*\
  !*** ./src/app/services/heroes.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeroesService: () => (/* binding */ HeroesService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class HeroesService {
  constructor() {
    this.heroes = [{
      nombre: "Aquaman",
      bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
      img: "assets/img/aquaman.png",
      aparicion: "1941-11-01",
      casa: "DC"
    }, {
      nombre: "Batman",
      bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
      img: "assets/img/batman.png",
      aparicion: "1939-05-01",
      casa: "DC"
    }, {
      nombre: "Daredevil",
      bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.",
      img: "assets/img/daredevil.png",
      aparicion: "1964-01-01",
      casa: "Marvel"
    }, {
      nombre: "Hulk",
      bio: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).",
      img: "assets/img/hulk.png",
      aparicion: "1962-05-01",
      casa: "Marvel"
    }, {
      nombre: "Linterna Verde",
      bio: "Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)",
      img: "assets/img/linterna-verde.png",
      aparicion: "1940-06-01",
      casa: "DC"
    }, {
      nombre: "Spider-Man",
      bio: "Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \"sentido arácnido\", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.",
      img: "assets/img/spiderman.png",
      aparicion: "1962-08-01",
      casa: "Marvel"
    }, {
      nombre: "Wolverine",
      bio: "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.",
      img: "assets/img/wolverine.png",
      aparicion: "1974-11-01",
      casa: "Marvel"
    }];
    console.log("Servicio listo para usar!!!");
  }
  getHeroes() {
    return this.heroes;
  }
  getHeroe(idx) {
    return this.heroes[idx];
  }
  buscarHero(termino) {
    let heroesArr = [];
    termino = termino.toLocaleLowerCase();
    for (let heroe of this.heroes) {
      let nombre = heroe.nombre.toLocaleLowerCase();
      if (nombre.indexOf(termino) >= 0) {
        heroesArr.push(heroe);
      }
    }
    return heroesArr;
  }
}
HeroesService.ɵfac = function HeroesService_Factory(t) {
  return new (t || HeroesService)();
};
HeroesService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: HeroesService,
  factory: HeroesService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(6576), __webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map