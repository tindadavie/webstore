(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-module"],{

/***/ "BT2B":
/*!******************************************************!*\
  !*** ./src/app/directives/dynamic-size.directive.ts ***!
  \******************************************************/
/*! exports provided: DynamicSizeDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicSizeDirective", function() { return DynamicSizeDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class DynamicSizeDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    onLoad() {
        const container = this.el.nativeElement.parentElement;
        const image = this.el.nativeElement;
        this.renderer.setStyle(image, 'width', `${container.clientWidth}px`);
        this.renderer.setStyle(image, 'height', `${container.clientWidth}px`);
    }
    onResize() {
        const container = this.el.nativeElement.parentElement;
        const image = this.el.nativeElement;
        this.renderer.setStyle(image, 'width', `${container.clientWidth}px`);
        this.renderer.setStyle(image, 'height', `${container.clientWidth}px`);
    }
}
DynamicSizeDirective.ɵfac = function DynamicSizeDirective_Factory(t) { return new (t || DynamicSizeDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
DynamicSizeDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DynamicSizeDirective, selectors: [["", "appDynamicSize", ""]], hostBindings: function DynamicSizeDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function DynamicSizeDirective_load_HostBindingHandler() { return ctx.onLoad(); })("resize", function DynamicSizeDirective_resize_HostBindingHandler() { return ctx.onResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } } });


/***/ }),

/***/ "CsZ6":
/*!****************************************************************!*\
  !*** ./src/app/directives/mouse-out-hide-navmenu.directive.ts ***!
  \****************************************************************/
/*! exports provided: MouseOutHideNavMenuDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MouseOutHideNavMenuDirective", function() { return MouseOutHideNavMenuDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MouseOutHideNavMenuDirective {
    constructor() {
        this.fileDropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    onMouseOver(evt) {
        console.log("ou");
        this.mouseover = true;
    }
    onMouseOut(evt) {
        this.mouseover = false;
    }
}
MouseOutHideNavMenuDirective.ɵfac = function MouseOutHideNavMenuDirective_Factory(t) { return new (t || MouseOutHideNavMenuDirective)(); };
MouseOutHideNavMenuDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MouseOutHideNavMenuDirective, selectors: [["", "mouseOutHideNavMenu", ""]], hostVars: 2, hostBindings: function MouseOutHideNavMenuDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function MouseOutHideNavMenuDirective_mouseover_HostBindingHandler($event) { return ctx.onMouseOver($event); })("mouseout", function MouseOutHideNavMenuDirective_mouseout_HostBindingHandler($event) { return ctx.onMouseOut($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("menu-hide", ctx.mouseover);
    } }, outputs: { fileDropped: "fileDropped" } });


/***/ }),

/***/ "FPq/":
/*!**************************************************!*\
  !*** ./src/app/views/footer/footer.component.ts ***!
  \**************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


class FooterComponent {
    constructor() {
        this.name = "";
        this.name = sessionStorage.getItem("name");
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 17, vars: 3, consts: [[1, "container-fluid", "footer-main"], [1, "row", "footer-top", 2, "padding-top", "30px"], [1, "col-sm-1", "col-lg-1"], [1, "col-sm-3", "col-lg-3"], [1, "col-sm-8", "col-lg-8"], [1, "row"], [2, "font-weight", "700", "font-size", "large"], [1, "row", 2, "margin-top", "10px"], [2, "font-size", "medium"], ["type", "email", "placeholder", "Enter Email Address", 2, "height", "50px", "border-radius", "2px", "font-size", "large", "padding-left", "10px", "padding-right", "10px"], [2, "background-color", "#313133", "border", "1px solid white", "color", "white", "border-radius", "2px", "margin-left", "10px", "min-width", "80px", "height", "50px"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Subscribe to our newsletter to get updates on our latest offers!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "SUBMIT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 1, ctx.name), " SUBSCRIPTION");
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["UpperCasePipe"]], styles: ["*[_ngcontent-%COMP%] {\n  font-family: \"sofia\" !important;\n}\n\n.footer-main[_ngcontent-%COMP%] {\n  background-color: #535357;\n  color: white;\n  padding-bottom: 20px;\n}\n\n.footer-top[_ngcontent-%COMP%] {\n  background-color: #313133;\n  padding-bottom: 20px;\n  padding-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUdBO0VBQ0kseUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FBQUoiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcbiAgICBmb250LWZhbWlseTogJ3NvZmlhJyAhaW1wb3J0YW50O1xuICB9XG4gIFxuLmZvb3Rlci1tYWlue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MzUzNTc7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5cbi5mb290ZXItdG9we1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMTMxMzM7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbiJdfQ== */"] });


/***/ }),

/***/ "Ffdx":
/*!*****************************************!*\
  !*** ./src/app/pipe/title-case.pipe.ts ***!
  \*****************************************/
/*! exports provided: TitleCasePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleCasePipe", function() { return TitleCasePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TitleCasePipe {
    transform(value) {
        if (!value)
            return value;
        let r = value.toLowerCase().split(' ').map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(' ');
        console.log(value, r);
        return r;
    }
}
TitleCasePipe.ɵfac = function TitleCasePipe_Factory(t) { return new (t || TitleCasePipe)(); };
TitleCasePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "titleCase", type: TitleCasePipe, pure: true });


/***/ }),

/***/ "HBHD":
/*!************************************************************!*\
  !*** ./src/app/views/item-detail/item-detail.component.ts ***!
  \************************************************************/
/*! exports provided: ItemDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailComponent", function() { return ItemDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class ItemDetailComponent {
    constructor() { }
    ngOnInit() {
        this.currentSlide(1);
    }
    currentSlide(n) {
        this.showSlides(this.slideIndex = n);
    }
    showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("demo");
        if (n > slides.length) {
            this.slideIndex = 1;
        }
        if (n < 1) {
            this.slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[this.slideIndex - 1].style.display = "block";
        dots[this.slideIndex - 1].className += " active";
    }
}
ItemDetailComponent.ɵfac = function ItemDetailComponent_Factory(t) { return new (t || ItemDetailComponent)(); };
ItemDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ItemDetailComponent, selectors: [["app-item-detail"]], decls: 485, vars: 0, consts: [[1, "navbar", "navbar-expand", "fixed-top", "bg-white", "shadow"], [1, "container-fluid"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], ["routerLink", "/", 1, "btn"], [1, "bi", "bi-chevron-left"], [1, "navbar-nav", "ms-auto", "me-3", "gap-2", "align-items-center"], [1, "nav-item"], [1, "btn"], [1, "bi", "bi-heart"], [1, "bi", "bi-share"], ["type", "button", 1, "nav-link", "btn", "position-relative"], [1, "bi", "bi-bag", "fs-5"], [1, "position-absolute", "top-0", "start-100", "translate-middle", "mt-2", "badge", "bg-danger"], [1, "visually-hidden"], ["id", "items-gallery", 1, "items-gallery", "container-fluid"], [1, "mySlides"], [1, "numbertext"], ["src", "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8amFja2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", "alt", "jacket 1"], ["src", "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8amFja2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", "alt", "jacket 2"], ["src", "https://images.unsplash.com/photo-1548883354-94bcfe321cbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8amFja2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", "alt", "jacket 3"], ["src", "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8amFja2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", "alt", "jacket 4"], [1, "row"], [1, "column"], ["src", "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8amFja2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", "alt", "The Woods", 1, "demo", "cursor", 3, "click"], ["src", "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8amFja2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", "alt", "Cinque Terre", 1, "demo", "cursor", 3, "click"], ["src", "https://images.unsplash.com/photo-1548883354-94bcfe321cbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8amFja2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", "alt", "Mountains and fjords", 1, "demo", "cursor", 3, "click"], ["src", "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8amFja2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", "alt", "Northern Lights", 1, "demo", "cursor", 3, "click"], [1, "container-fluid", "mb-5", "pb-5"], [1, "card", "mt-3", "border-0"], [1, "card-body", "px-0"], [1, "d-flex", "align-items-center", "gap-2"], [1, "bi", "bi-shop"], [1, "mb-0", "small", "text-muted", "text-capitalize"], [1, "fw-bold", "h5", "my-3"], [1, "d-flex", "align-items-center", "justify-content-evenly"], [1, "d-flex", "gap-1"], [1, "bi", "bi-star-fill", "text-warning"], [1, "mb-0", "text-muted"], [1, "mb-2"], ["id", "myTab", "role", "tablist", 1, "nav", "nav-tabs"], ["role", "presentation", 1, "nav-item"], ["id", "about-tab", "data-bs-toggle", "tab", "data-bs-target", "#home-tab-pane", "type", "button", "role", "tab", "aria-controls", "about-tab-pane", "aria-selected", "true", 1, "nav-link", "active"], ["id", "reviews-tab", "data-bs-toggle", "tab", "data-bs-target", "#profile-tab-pane", "type", "button", "role", "tab", "aria-controls", "reviews-tab-pane", "aria-selected", "false", 1, "nav-link"], ["id", "item-tab-content", 1, "tab-content", "pt-3"], ["id", "about-tab-pane", "role", "tabpanel", "aria-labelledby", "about-tab", "tabindex", "0", 1, "tab-pane", "fade", "show", "active"], [1, "row", "g-3"], [1, "col-6", "d-flex", "gap-1"], [1, "mb-0"], [1, "mb-0", "fw-bold"], ["id", "description", 1, "collapse", "show"], [1, "divider"], [1, "fw-bold"], [1, "small"], ["data-bs-toggle", "collapse", "href", "#description", "role", "button", "aria-expanded", "true", "aria-controls", "description", 1, "btn", "btn-sm", "btn-light", "mt-3"], [1, "bi", "bi-chevron-up", "ms-2"], [1, "d-flex", "gap-2"], [1, "d-flex", "mt-2", "gap-2"], [1, "d-flex", "align-items-center", "gap-3"], ["src", "https://images.unsplash.com/photo-1435575653489-b0873ec954e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", "alt", "seller title", "height", "72", "width", "72", 1, "object-fit-cover", "rounded-circle"], [1, "vstack", "align-items-start", "gap-2"], [1, "fw-bold", "mb-0"], [1, "btn", "btn-sm", "btn-primary"], [1, "bi", "bi-box-arrow-up-right", "me-2"], [1, "row", "align-items-center"], [1, "col-4", "text-center"], [1, "display-3", "fw-normal"], [1, "d-flex", "mt-2", "justify-content-center", "gap-1"], [1, "bi", "bi-star-half", "text-warning"], [1, "mb-0", "mt-2", "small", "text-muted"], [1, "col-8", "vstack", "gap-1"], ["role", "progressbar", "aria-label", "Basic example", "aria-valuenow", "75", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress", 2, "height", ".65rem", "width", "100%", "max-width", "136px"], [1, "progress-bar", 2, "width", "75%"], ["role", "progressbar", "aria-label", "Basic example", "aria-valuenow", "40", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress", 2, "height", ".65rem", "width", "100%", "max-width", "136px"], [1, "progress-bar", 2, "width", "40%"], ["role", "progressbar", "aria-label", "Basic example", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress", 2, "height", ".65rem", "width", "100%", "max-width", "136px"], [1, "progress-bar", 2, "width", "25%"], ["role", "progressbar", "aria-label", "Basic example", "aria-valuenow", "20", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress", 2, "height", ".65rem", "width", "100%", "max-width", "136px"], [1, "progress-bar", 2, "width", "20%"], ["role", "progressbar", "aria-label", "Basic example", "aria-valuenow", "2", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress", 2, "height", ".65rem", "width", "100%", "max-width", "136px"], [1, "progress-bar", 2, "width", "2%"], [1, "d-flex", "justify-content-between", "align-items-center", "gap-2"], ["src", "https://images.unsplash.com/photo-1548126032-079a0fb0099d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGphY2tldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", "alt", "", "height", "72", "width", "72", 1, "object-fit-cover", "rounded-3"], ["src", "https://images.unsplash.com/photo-1525457136159-8878648a7ad0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGphY2tldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", "alt", "", "height", "72", "width", "72", 1, "object-fit-cover", "rounded-3"], ["src", "https://images.unsplash.com/photo-1493568000180-ca2fb70ddcba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGphY2tldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", "alt", "", "height", "72", "width", "72", 1, "object-fit-cover", "rounded-3"], [1, "position-relative"], ["src", "https://images.unsplash.com/photo-1608063615781-e2ef8c73d114?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGphY2tldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", "alt", "", "height", "72", "width", "72", 1, "object-fit-cover", "rounded-3"], [1, "img-overlay"], [1, "centered", "text-white", "fw-bold", "text-white"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "fw-bold", "mb-1"], [1, "small", "mb-0"], [1, "dropdown"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-light", "btn-sm", "dropdown-toggle"], [1, "dropdown-menu"], ["href", "#", 1, "dropdown-item"], [1, "list-group", "list-group-flush", "mt-3"], [1, "list-group-item", "list-group-item-action", "px-0"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], ["src", "https://images.unsplash.com/photo-1557418669-db3f781a58c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGphY2tldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", "alt", "", "height", "36", "width", "36", 1, "object-fit-cover", "rounded-circle"], [1, "btn", "btn-sm"], [1, "bi", "bi-three-dots"], [1, "d-flex", "gap-2", "tag", "mb-2"], [1, "btn", "btn-sm", "btn-outline-dark", "rounded-pill"], [1, "small", "my-3"], [1, "btn", "btn-light", "btn-sm"], [1, "bi", "bi-hand-thumbs-up", "me-2"], [1, "mb-0", "small"], [1, "d-flex", "align-items-center", "justify-content-between", "mt-3"], ["aria-label", "Page navigation example"], [1, "pagination", "mb-0"], [1, "page-item"], ["href", "#", "aria-label", "Previous", 1, "page-link"], ["aria-hidden", "true"], ["href", "#", 1, "page-link"], ["href", "#", "aria-label", "Next", 1, "page-link"], [1, "btn", "btn-light"], [1, "bi", "bi-three-dots", "ms-2"], [1, "cart-items-wrapper"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "mb-0", "h5", "fw-bold"], [1, "btn", "text-success", "text-capitalize"], [1, "row", "row-cols-2", "row-cols-md-4", "g-2"], [1, "col"], [1, "card", "h-100", "border-0", "cart-item"], ["src", "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80", "height", "136", "alt", "item image", 1, "card-img-top", "object-fit-cover"], [1, "btn", "btn-light", "position-absolute", "end-0"], [1, "card-body", "px-2"], [1, "small", "text-muted", "mb-1"], [1, "fw-normal", "mb-2", "small", "fw-bold"], [1, "ratings"], [1, "text-muted"], [1, "h5", "text-success", "mb-0", "fw-bold"], ["id", "reviews-tab-pane", "role", "tabpanel", "aria-labelledby", "reviews-tab", "tabindex", "0", 1, "tab-pane", "fade"], [1, "bottom-nav", "container-fluid"], [1, "mb-1"], [1, "h4", "mb-0", "fw-bold"], ["role", "group", "aria-label", "Basic example", 1, "btn-group"], ["type", "button", 1, "btn", "btn-primary", "btn-lg"], [1, "bi", "bi-bag"], [1, "fs-5", "ms-1"], ["type", "button", 1, "btn", "btn-dark", "btn-lg"]], template: function ItemDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "unread messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "1 / 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "2 / 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "3 / 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "4 / 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemDetailComponent_Template_img_click_39_listener() { return ctx.currentSlide(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemDetailComponent_Template_img_click_41_listener() { return ctx.currentSlide(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemDetailComponent_Template_img_click_43_listener() { return ctx.currentSlide(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemDetailComponent_Template_img_click_45_listener() { return ctx.currentSlide(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "tokobaju.id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Fashion Jacket Men Bomber Jacket Coat Two Side Double Side");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "4.9 ratings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "2.3k+ Reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "2.9k+ Sold");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "ul", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "About Item ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Reviews ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Brand:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Checkers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Color:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Aprikot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Category:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Casual");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Material:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Polyester");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Condition:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "New");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Heavy:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "200g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "hr", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "p", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Description:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "li", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "li", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "li", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "li", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Bibendum ut tristique et egestas quis ipsum. Eget egestas purus viverra accumsan in nisl nisi scelerisque.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "button", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "show less");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "i", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "hr", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "p", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Shipping information:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Delivery:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Shipping from Jakarta, Indonesia.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Shipping:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Free international shipping");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Delivery date:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "25/04/2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "hr", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "p", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Seller information:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "p", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Thrift Shop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "i", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Visit store");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "hr", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "p", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Reviews & Ratings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "4.9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "/ 5.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "i", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "2.3k+ reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "1.45k");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "710");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "410");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](214, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "hr", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "p", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "Reviews with images and videos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "img", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "img", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](224, "img", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](226, "img", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "p", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "132+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](230, "hr", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "p", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "Top Reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "p", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "Show 3 out of 2.3k+ reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "button", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, " Popular ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "ul", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "a", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "Recent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "a", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "Relevant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "a", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "A-Z");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](255, "img", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](260, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "5.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "button", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](264, "i", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "button", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "Tag 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "button", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, "Tag 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "button", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "Tag 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "p", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, "Dolor sit amet consectetur adipiscing elit. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet dictum sit amet justo donec enim diam vulputate.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "button", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](276, "i", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, "Helpful?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "p", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "Yesterday");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](283, "img", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](288, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, "5.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "button", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](292, "i", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "button", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "Tag 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "button", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "Tag 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "button", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "Tag 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "p", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "Dolor sit amet consectetur adipiscing elit. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet dictum sit amet justo donec enim diam vulputate.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "button", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](304, "i", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305, "Helpful?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "p", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, "Yesterday");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](311, "img", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](313, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](316, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, "5.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "button", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](320, "i", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "button", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323, "Tag 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "button", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, "Tag 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "button", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, "Tag 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "p", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](329, "Dolor sit amet consectetur adipiscing elit. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet dictum sit amet justo donec enim diam vulputate.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "button", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](332, "i", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](333, "Helpful?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "p", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, "Yesterday");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "nav", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "ul", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "li", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "a", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "span", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "\u00AB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "li", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "a", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](345, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "li", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "a", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "li", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "a", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](351, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "li", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "a", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "span", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](355, "\u00BB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "button", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357, "load more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](358, "i", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](359, "hr", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "div", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "div", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "p", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](363, "Recommended");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "button", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](365, "see more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "div", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "div", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](369, "img", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "button", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](371, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "div", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "p", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](374, "Shirt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "p", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](376, "Fashion Jacket Coat-Men Bomber Jacket");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "div", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](379, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "small", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](381, "4.9 | 2912");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "p", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](383, "$12.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "div", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "div", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](386, "img", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "button", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](388, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "div", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "p", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](391, "Shirt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "p", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](393, "Fashion Jacket Coat-Men Bomber Jacket");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "div", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](396, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "small", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](398, "4.9 | 2912");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "p", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](400, "$12.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "div", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "div", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](403, "img", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "button", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](405, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "div", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "p", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](408, "Shirt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "p", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](410, "Fashion Jacket Coat-Men Bomber Jacket");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "div", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](413, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "small", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](415, "4.9 | 2912");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "p", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](417, "$12.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](418, "div", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "div", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](420, "img", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](421, "button", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](422, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](423, "div", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "p", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](425, "Shirt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "p", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](427, "Fashion Jacket Coat-Men Bomber Jacket");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](429, "div", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](430, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](431, "small", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](432, "4.9 | 2912");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](433, "p", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](434, "$12.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "div", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](436, "div", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](437, "img", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](438, "button", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](439, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](440, "div", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](441, "p", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](442, "Shirt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](443, "p", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](444, "Fashion Jacket Coat-Men Bomber Jacket");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](445, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](446, "div", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](447, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](448, "small", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](449, "4.9 | 2912");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](450, "p", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](451, "$12.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](452, "div", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](453, "div", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](454, "img", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](455, "button", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](456, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](457, "div", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](458, "p", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](459, "Shirt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](460, "p", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](461, "Fashion Jacket Coat-Men Bomber Jacket");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](462, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](463, "div", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](464, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](465, "small", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](466, "4.9 | 2912");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](467, "p", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](468, "$12.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](469, "div", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](470, "... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](471, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](472, "div", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](473, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](474, "p", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](475, "Total price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](476, "p", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](477, "$18.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](478, "div", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](479, "button", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](480, "i", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](481, "span", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](482, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](483, "button", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](484, "Buy Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpdGVtLWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "IV1m":
/*!*****************************************************************!*\
  !*** ./src/app/directives/hover-activated-navmenu.directive.ts ***!
  \*****************************************************************/
/*! exports provided: HoverActivatedNavMenuDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoverActivatedNavMenuDirective", function() { return HoverActivatedNavMenuDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HoverActivatedNavMenuDirective {
    constructor() {
        this.fileDropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    onMouseOver(evt) {
        this.mouseover = true;
    }
    onMouseOut(evt) {
        this.mouseover = false;
    }
}
HoverActivatedNavMenuDirective.ɵfac = function HoverActivatedNavMenuDirective_Factory(t) { return new (t || HoverActivatedNavMenuDirective)(); };
HoverActivatedNavMenuDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: HoverActivatedNavMenuDirective, selectors: [["", "hoverActivatedNavMenu", ""]], hostVars: 2, hostBindings: function HoverActivatedNavMenuDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function HoverActivatedNavMenuDirective_mouseover_HostBindingHandler($event) { return ctx.onMouseOver($event); })("mouseout", function HoverActivatedNavMenuDirective_mouseout_HostBindingHandler($event) { return ctx.onMouseOut($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("menu-show", ctx.mouseover);
    } }, outputs: { fileDropped: "fileDropped" } });


/***/ }),

/***/ "MR1q":
/*!**************************************************!*\
  !*** ./src/app/views/header/header.component.ts ***!
  \**************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_user_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user-info.service */ "lg7r");
/* harmony import */ var src_app_services_search_bar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/search-bar.service */ "b/hC");
/* harmony import */ var src_app_services_biz_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/biz.service */ "Epua");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _directives_hover_activated_navmenu_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../directives/hover-activated-navmenu.directive */ "IV1m");
/* harmony import */ var _directives_mouse_out_hide_navmenu_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../directives/mouse-out-hide-navmenu.directive */ "CsZ6");











function HeaderComponent_div_12_ng_container_12_div_1_ng_container_3_a_1_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 60);
} if (rf & 2) {
    const pdt_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", pdt_r10.product.images[0].image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function HeaderComponent_div_12_ng_container_12_div_1_ng_container_3_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_div_12_ng_container_12_div_1_ng_container_3_a_1_img_1_Template, 1, 1, "img", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pdt_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("routerLink", "/", ctx_r11.bizService.getBizId(), "/product/", pdt_r10.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", pdt_r10.product.images.length != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pdt_r10.product.name);
} }
function HeaderComponent_div_12_ng_container_12_div_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_div_12_ng_container_12_div_1_ng_container_3_a_1_Template, 4, 4, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const pdt_r10 = ctx.$implicit;
    const sub_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", pdt_r10.product.sub_category == sub_r7.id);
} }
function HeaderComponent_div_12_ng_container_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HeaderComponent_div_12_ng_container_12_div_1_ng_container_3_Template, 2, 1, "ng-container", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const cat_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate3"]("routerLink", "/", ctx_r8.bizService.getBizId(), "/products/", cat_r4.name, "/", sub_r7.name, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sub_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.products);
} }
function HeaderComponent_div_12_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_div_12_ng_container_12_div_1_Template, 4, 5, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const sub_r7 = ctx.$implicit;
    const cat_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r7.category == cat_r4.id);
} }
function HeaderComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function HeaderComponent_div_12_Template_div_mouseenter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const cat_r4 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.onMouseEnterTopMenu(cat_r4.id); })("mouseleave", function HeaderComponent_div_12_Template_div_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.onMouseLeaveTopMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HeaderComponent_div_12_ng_container_12_Template, 2, 1, "ng-container", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("routerLink", "/", ctx_r0.bizService.getBizId(), "/products/", cat_r4.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r0.getTopMenuHoverStyle(cat_r4.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.navbarCategoryFormat(cat_r4.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cat_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.sub_categories);
} }
function HeaderComponent_span_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r1.getBackgroundStyle());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.userInfoService.getCartItems().length);
} }
function HeaderComponent_a_72_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_a_72_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_a_73_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_a_73_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    constructor(formBuilder, router, userInfoService, searchBarService, bizService, apiService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.userInfoService = userInfoService;
        this.searchBarService = searchBarService;
        this.bizService = bizService;
        this.apiService = apiService;
        this.categories = [];
        this.sub_categories = [];
        this.search_input = "";
        this.isSticky = false;
        this.products = [];
        this.url = '/' + this.bizService.getBizId();
        this.user_info = {
            name: "User",
            email: "",
        };
        this.hovered_cat_id = "";
        this.hovered_cart_menu = false;
        this.hovered_user_menu = false;
    }
    checkScroll() {
        console.log(window.pageXOffset);
        this.isSticky = window.pageYOffset >= 40;
    }
    ngOnInit() {
        this.user_info = this.userInfoService.getUserInfo();
        this.searchForm = this.formBuilder.group({
            search: [''],
        });
        this.apiService.getProducts('').subscribe(res => {
            this.products = res;
        }, err => {
        });
        this.apiService.getProductCategory('').subscribe(res => {
            this.categories = res;
        }, err => { });
        this.apiService.getProductSubCategory('').subscribe(res => {
            this.sub_categories = res;
        }, err => { });
    }
    searchClick() {
        if (!(this.router.url.split('/')[2] === 'products')) {
            this.router.navigateByUrl(this.bizService.getBizId() + "/products");
        }
        this.searchBarService.search(this.searchForm.value.search);
    }
    logout() {
        this.userInfoService.signOut();
        this.router.navigateByUrl(this.bizService.getBizId());
    }
    login() {
        this.router.navigateByUrl(this.bizService.getBizId() + "/login");
    }
    navbarCategoryFormat(title) {
        title = title.toLowerCase();
        return title;
        // if(title.length<10){
        //   return title
        // }else{
        //   if(title.indexOf("room")>-1){
        //     title=title.replace("room","rm")
        //     return this.navbarCategoryFormat(title)
        //   }
        //   if(title.indexOf("electonics")>-1){
        //     title=title.replace("electonics","elec")
        //     return this.navbarCategoryFormat(title)
        //   }
        //   if(title.indexOf("electonic")>-1){
        //     title=title.replace("electonic","elec")
        //     return this.navbarCategoryFormat(title)
        //   }
        //   if(title.indexOf("appliances")>-1){
        //     title=title.replace("appliances","appl")
        //     return this.navbarCategoryFormat(title)
        //   }
        //   if(title.indexOf("appliance")>-1){
        //     title=title.replace("appliance","appl")
        //     return this.navbarCategoryFormat(title)
        //   }
        //   if(title.indexOf("machinery")>-1){
        //     title=title.replace("machinery","mach")
        //     return this.navbarCategoryFormat(title)
        //   }
        //   title=title.substring(0, 10);
        //   var l=title.split(' ');
        //   if(l.length>1){
        //     var item =l[l.length-1];
        //     if (item.length<2){
        //       title=title.replace(" "+item,"..");
        //     }
        //     if (item.length==2 && item!="rm"){
        //       title=title.replace(item,"..");
        //     }
        //   }
        // return title.substring(0, 10);
        //}
    }
    onMouseEnterTopMenu(id) {
        this.hovered_cat_id = id;
    }
    onMouseLeaveTopMenu() {
        this.hovered_cat_id = "";
    }
    getTopMenuHoverStyle(id) {
        if (id == this.hovered_cat_id) {
            return {
                color: this.bizService.get_background_color()
            };
        }
        else {
            return {
                color: 'black'
            };
        }
    }
    getCartMenuHoverStyle() {
        if (this.hovered_cart_menu) {
            return {
                color: this.bizService.get_background_color()
            };
        }
        else {
            return {};
        }
    }
    getUserMenuHoverStyle() {
        if (this.hovered_user_menu) {
            return {
                color: this.bizService.get_background_color()
            };
        }
        else {
            return {};
        }
    }
    getBackgroundStyle() {
        return {
            'background-color': this.bizService.get_background_color()
        };
    }
    onMouseEnterCartMenu() {
        this.hovered_cart_menu = true;
    }
    onMouseLeaveCartMenu() {
        this.hovered_cart_menu = false;
    }
    onMouseEnterUserMenu() {
        this.hovered_user_menu = true;
    }
    onMouseLeaveUserMenu() {
        this.hovered_user_menu = false;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_info_service__WEBPACK_IMPORTED_MODULE_3__["UserInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_search_bar_service__WEBPACK_IMPORTED_MODULE_4__["SearchBarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_biz_service__WEBPACK_IMPORTED_MODULE_5__["BizService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], hostBindings: function HeaderComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function HeaderComponent_scroll_HostBindingHandler($event) { return ctx.checkScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 74, vars: 19, consts: [[1, "navbar", "navbar-expand", "shadow", "fixed-top", 2, "height", "150px", "padding-top", "40px", "background-color", "whitesmoke", 3, "ngClass"], [1, "container-fluid", 2, "position", "absolute", "top", "0", "padding-top", "40px"], [1, "navbar-brand", 2, "min-width", "280px", "z-index", "1040"], [1, "logo", 3, "routerLink"], [2, "height", "50px", 3, "src"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", 2, "position", "relative"], ["role", "search", 1, "d-flex", "flex-fill", 2, "justify-content", "center", "z-index", "1000", "margin-right", "10px", 3, "formGroup"], [1, "input-group"], ["formControlName", "search", "type", "text", "placeholder", "Search ...", "aria-label", "search", "aria-describedby", "basic-addon1", 1, "form-control", "bg-transparent", "search-bar-input", "rounded-pill", 2, "padding-left", "20px", "border-color", "#C1C7D6", "border-left", "1px solid #C1C7D6", 3, "keydown.enter"], ["id", "basic-addon1", 1, "input-group-text", "bg-transparent", "search-bar-icon", "rounded-pill", 2, "margin-left", "-70px", "border", "none", 3, "click"], [1, "bi", "bi-search"], [1, "top-menu", 2, "padding-top", "70px"], ["class", "top-menu-item", "hoverActivatedNavMenu", "", 3, "mouseenter", "mouseleave", 4, "ngFor", "ngForOf"], [1, "navbar-nav", "mx-3", "gap-2"], [1, "nav-item", "menu-button", 3, "mouseenter", "mouseleave"], ["type", "button", 1, "nav-link", "btn", "position-relative"], [3, "routerLink"], [1, "unhovered"], ["width", "32px", "height", "32px", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["id", "SVGRepo_bgCarrier", "stroke-width", "0"], ["id", "SVGRepo_tracerCarrier", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "SVGRepo_iconCarrier"], ["d", "M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z", "stroke", "#000000", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "hovered"], ["d", "M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["class", "position-absolute top-0 start-100 translate-middle mt-2 badge", 3, "ngStyle", 4, "ngIf"], [2, "text-decoration", "none", 3, "routerLink"], [1, "menu-text", 3, "ngStyle"], [1, "nav-item", 3, "mouseenter", "mouseleave"], [1, "nav-item", "dropdown", "menu-button", 2, "height", "40px"], ["href", "#", "data-bs-toggle", "dropdown", 1, "nav-link", "dropdown-toggle"], ["id", "User / User_Circle"], ["id", "Vector", "d", "M17.2166 19.3323C15.9349 17.9008 14.0727 17 12 17C9.92734 17 8.06492 17.9008 6.7832 19.3323M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21ZM12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11C15 12.6569 13.6569 14 12 14Z", "stroke", "#000000", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "Vector", "d", "M17.2166 19.3323C15.9349 17.9008 14.0727 17 12 17C9.92734 17 8.06492 17.9008 6.7832 19.3323M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21ZM12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11C15 12.6569 13.6569 14 12 14Z", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "dropdown-menu", 2, "left", "auto", "right", "0"], ["href", "#", 1, "dropdown-item"], [2, "border", "1px solid black", "width", "100%"], [1, "dropdown-item", 3, "routerLink"], [2, "padding-right", "10px", "padding-left", "2px"], [1, "fa", "fa-list", 2, "font-size", "18px", "color", "black"], [2, "padding-right", "4px"], ["width", "24px", "height", "24px", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["href", "javascript:void(0);", "class", "dropdown-item", 3, "click", 4, "ngIf"], ["hoverActivatedNavMenu", "", 1, "top-menu-item", 3, "mouseenter", "mouseleave"], ["hoverActivatedNavMenu", "", 2, "display", "block", "width", "fit-content"], [1, "TopNav_topNavLink_13", 2, "text-decoration", "none", 3, "routerLink", "ngStyle"], ["hoverActivatedNavMenu", "", 1, "TopNav_dropDown_5f", 2, "max-width", "976px", "min-width", "976px", "animation-delay", "0ms", "background-color", "whitesmoke", "left", "calc((100% - 976px) / 2)"], [1, "TopNav_retailDropDown_14"], [1, "DropDown_subMenu_a5", 2, "max-height", "620px"], [1, "row", 2, "width", "100%", "margin-left", "0px", "margin-right", "0px"], [2, "text-align", "start", "text-transform", "uppercase", "padding-left", "0px", "padding-right", "0px"], [4, "ngFor", "ngForOf"], ["id", "hdShim", "mouseOutHideNavMenu", "", 1, "header_shim_0c"], ["class", "DropDown_column_27", 4, "ngIf"], [1, "DropDown_column_27"], [1, "DropDown_columnLink_c4", "DropDown_columnTitle_ec", 3, "routerLink"], ["class", "DropDown_columnLink_c4", "tabindex", "-1", 3, "routerLink", 4, "ngIf"], ["tabindex", "-1", 1, "DropDown_columnLink_c4", 3, "routerLink"], ["width", "32px", "height", "32px", 3, "src", 4, "ngIf"], [2, "padding-left", "10px"], ["width", "32px", "height", "32px", 3, "src"], [1, "position-absolute", "top-0", "start-100", "translate-middle", "mt-2", "badge", 3, "ngStyle"], [1, "visually-hidden"], ["href", "javascript:void(0);", 1, "dropdown-item", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function HeaderComponent_Template_input_keydown_enter_8_listener() { return ctx.searchClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_span_click_9_listener() { return ctx.searchClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HeaderComponent_div_12_Template, 14, 6, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function HeaderComponent_Template_li_mouseenter_14_listener() { return ctx.onMouseEnterCartMenu(); })("mouseleave", function HeaderComponent_Template_li_mouseleave_14_listener() { return ctx.onMouseLeaveCartMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "svg", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "g", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "g", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "g", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "svg", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "g", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "g", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "g", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, HeaderComponent_span_29_Template, 4, 2, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function HeaderComponent_Template_li_mouseenter_33_listener() { return ctx.onMouseEnterUserMenu(); })("mouseleave", function HeaderComponent_Template_li_mouseleave_33_listener() { return ctx.onMouseLeaveUserMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "svg", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "g", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "g", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "g", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "g", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "path", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "svg", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "g", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "g", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "g", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "g", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "path", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "My Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "My Orders ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "svg", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "g", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "g", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "g", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "g", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "path", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Account Information ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, HeaderComponent_a_72_Template, 2, 0, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, HeaderComponent_a_73_Template, 2, 0, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.isSticky ? "navbar-sticky" : "navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/", ctx.bizService.getBizId(), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.bizService.get_company_logo(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/", ctx.bizService.getBizId(), "/cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("stroke", ctx.bizService.get_background_color());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userInfoService.getCartItems().length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/", ctx.bizService.getBizId(), "/cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.getCartMenuHoverStyle());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("stroke", ctx.bizService.get_background_color());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.getUserMenuHoverStyle());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user_info.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/", ctx.bizService.getBizId(), "/my-orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/", ctx.bizService.getBizId(), "/account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userInfoService.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.userInfoService.isLoggedIn());
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbNavbar"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgStyle"], _directives_hover_activated_navmenu_directive__WEBPACK_IMPORTED_MODULE_9__["HoverActivatedNavMenuDirective"], _directives_mouse_out_hide_navmenu_directive__WEBPACK_IMPORTED_MODULE_10__["MouseOutHideNavMenuDirective"]], styles: ["*[_ngcontent-%COMP%]:focus {\n  box-shadow: none !important;\n}\n@media (max-width: 991.98px) {\n  .navbar[_ngcontent-%COMP%] {\n    background-color: white;\n    height: 70px !important;\n  }\n\n  .container-fluid[_ngcontent-%COMP%] {\n    padding-top: 10px !important;\n    padding-bottom: 10px !important;\n  }\n}\n@media (min-width: 991.98px) {\n  .navbar[_ngcontent-%COMP%] {\n    margin-top: 40px;\n    background-color: white;\n  }\n\n  .navbar-sticky[_ngcontent-%COMP%] {\n    margin-top: 0px;\n  }\n\n  .logo[_ngcontent-%COMP%] {\n    padding-left: 40px;\n  }\n}\n@media (max-width: 991.98px) {\n  .navbar-brand[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .search-bar-icon[_ngcontent-%COMP%] {\n    border-top-left-radius: 30px;\n    border-bottom-left-radius: 30px;\n    height: 40px;\n    border-color: grey !important;\n    padding-left: 5px;\n  }\n\n  .search-bar-input[_ngcontent-%COMP%] {\n    border-top-right-radius: 30px;\n    border-bottom-right-radius: 30px;\n    height: 40px;\n    border-color: grey !important;\n    margin-right: 35px;\n  }\n\n  .input-group[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (max-width: 991.98px) {\n  .top-menu[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .menu-text[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (min-width: 991.98px) {\n  .dropdown-toggle[_ngcontent-%COMP%]::after {\n    content: none;\n  }\n\n  .menu-text[_ngcontent-%COMP%] {\n    padding-left: 8px;\n    color: #211e22;\n  }\n\n  .navbar[_ngcontent-%COMP%] {\n    height: 110px;\n  }\n\n  .search-bar-icon[_ngcontent-%COMP%] {\n    border-top-left-radius: 10px;\n    border-bottom-left-radius: 10px;\n    height: 50px;\n    border-color: grey;\n    padding-left: 40px;\n  }\n\n  .search-bar-input[_ngcontent-%COMP%] {\n    border-top-right-radius: 10px;\n    border-bottom-right-radius: 10px;\n    height: 50px;\n    border-color: grey;\n    padding-left: 40px;\n  }\n}\n.app-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 40px;\n}\n.input-group[_ngcontent-%COMP%] {\n  max-width: 800px;\n}\n@media (min-width: 991.98px) {\n  .top-menu[_ngcontent-%COMP%] {\n    padding-top: 50px;\n    display: flex;\n    margin-top: 35px;\n    position: absolute;\n    text-align: center;\n    width: calc(100% + 296px);\n    justify-content: center;\n    margin-left: -296px;\n  }\n}\n.menu-button[_ngcontent-%COMP%]   .unhovered[_ngcontent-%COMP%] {\n  display: contents;\n}\n.menu-button[_ngcontent-%COMP%]   .hovered[_ngcontent-%COMP%] {\n  display: none;\n}\n.menu-button[_ngcontent-%COMP%]:hover   .unhovered[_ngcontent-%COMP%] {\n  display: none;\n}\n.menu-button[_ngcontent-%COMP%]:hover   .hovered[_ngcontent-%COMP%] {\n  display: contents;\n}\n.top-menu-item[_ngcontent-%COMP%] {\n  padding-right: 10px;\n  padding-left: 10px;\n  vertical-align: top;\n  text-align: center;\n  font-weight: 500;\n}\n.top-menu-item[_ngcontent-%COMP%]:hover {\n  border-radius: 20px;\n  background-color: #ece9e5;\n}\n.top-menu-item[_ngcontent-%COMP%]:hover   .TopNav_topNavLink_13[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n@media (min-width: 1200px) {\n  .top-menu-item[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n@media (min-width: 500px) and (max-width: 1199px) {\n  .top-menu-item[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n@media (max-width: 499px) {\n  .top-menu-item[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n.top-menu-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n}\n.menu-show[_ngcontent-%COMP%]   .TopNav_dropDown_5f[_ngcontent-%COMP%] {\n  display: block !important;\n  opacity: 1 !important;\n  z-index: 1000;\n  transition: opacity 0.5s ease;\n}\n.menu-show[_ngcontent-%COMP%]   .header_shim_0c[_ngcontent-%COMP%] {\n  opacity: 0;\n  pointer-events: all;\n  width: calc(100% + 350px);\n  left: 0;\n  margin-top: 10px;\n  margin-left: -300px;\n  height: 11256px;\n  transition: opacity 0.5s ease;\n}\n.menu-hide[_ngcontent-%COMP%] {\n  background-color: transparent;\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  transition: opacity 0.5s ease;\n  width: 0px !important;\n  z-index: 1;\n  height: 0px !important;\n}\n.TopNav_dropDown_5f[_ngcontent-%COMP%] {\n  display: none;\n  opacity: 0;\n  position: absolute;\n}\n.header_shim_0c[_ngcontent-%COMP%] {\n  background-color: rgba(47, 51, 55, 0.45);\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  width: 100%;\n  z-index: 998;\n  height: 11256px;\n}\n.TopNav_retailDropDown_14[_ngcontent-%COMP%] {\n  padding: 32px 24px;\n}\n.DropDown_subMenu_a5[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: flex-start;\n  flex-flow: wrap;\n  overflow: auto;\n}\n.DropDown_column_27[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  align-self: flex-start;\n  margin-bottom: 22px;\n  width: 25%;\n}\n.DropDown_columnTitle_ec[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  color: #2f3337;\n  font-weight: 700;\n}\n.DropDown_columnLink_c4[_ngcontent-%COMP%] {\n  font-size: 14px;\n  cursor: pointer;\n  color: #626669;\n  border-bottom: 1px solid #2f3337;\n  margin: 0 0 8px;\n  padding: 0 0 2px;\n  text-decoration: none;\n  border-bottom: 1px solid transparent;\n  line-height: normal;\n  align-self: flex-start;\n}\n.TopNav_topNavLink_13[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  color: inherit;\n  text-decoration: none;\n  text-transform: lowercase;\n  border-bottom: 2px solid transparent;\n}\n._1qx9x3g0[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 24px;\n  height: 24px;\n}\n@media screen and (min-width: 1280px) {\n  ._1qx9x3g0[_ngcontent-%COMP%], ._1qx9x3g1._1qx9x3g1._1qx9x3g1[_ngcontent-%COMP%] {\n    width: 1.875rem;\n    height: 1.875rem;\n  }\n}\n._16q98ey2_6101[_ngcontent-%COMP%], ._16q98ey3_6101[_ngcontent-%COMP%], ._16q98ey4_6101[_ngcontent-%COMP%] {\n  stroke-width: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0dBQUE7QUFLQTtFQUNJLDJCQUFBO0FBQUo7QUFHQTtFQUNJO0lBQ0ksdUJBQUE7SUFDQSx1QkFBQTtFQUFOOztFQUdFO0lBQ0ksNEJBQUE7SUFDQSwrQkFBQTtFQUFOO0FBQ0Y7QUFJQTtFQUNJO0lBQ0ksZ0JBQUE7SUFDQSx1QkFBQTtFQUZOOztFQUtFO0lBQ0ksZUFBQTtFQUZOOztFQUtFO0lBQ0ksa0JBQUE7RUFGTjtBQUNGO0FBT0E7RUFDSTtJQUNJLGFBQUE7RUFMTjs7RUFRRTtJQUNJLDRCQUFBO0lBQ0EsK0JBQUE7SUFDQSxZQUFBO0lBQ0EsNkJBQUE7SUFDQSxpQkFBQTtFQUxOOztFQVNFO0lBQ0ksNkJBQUE7SUFDQSxnQ0FBQTtJQUNBLFlBQUE7SUFDQSw2QkFBQTtJQUVBLGtCQUFBO0VBUE47O0VBVUU7SUFDSSxXQUFBO0VBUE47QUFDRjtBQVVBO0VBQ0k7SUFDSSxhQUFBO0VBUk47O0VBV0U7SUFDSSxhQUFBO0VBUk47QUFDRjtBQWNBO0VBQ0k7SUFDSSxhQUFBO0VBWk47O0VBZUU7SUFDSSxpQkFBQTtJQUNBLGNBQUE7RUFaTjs7RUFlRTtJQUNJLGFBQUE7RUFaTjs7RUFlRTtJQUNJLDRCQUFBO0lBQ0EsK0JBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxrQkFBQTtFQVpOOztFQWVFO0lBQ0ksNkJBQUE7SUFDQSxnQ0FBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0VBWk47QUFDRjtBQWtCQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQWhCSjtBQW1CQTtFQUNJLGdCQUFBO0FBaEJKO0FBc0JBO0VBQ0k7SUFDSSxpQkFBQTtJQUNBLGFBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSx5QkFBQTtJQUNBLHVCQUFBO0lBQ0EsbUJBQUE7RUFuQk47QUFDRjtBQXlCSTtFQUNJLGlCQUFBO0FBdkJSO0FBMkJJO0VBQ0ksYUFBQTtBQXpCUjtBQWdDSTtFQUNJLGFBQUE7QUE3QlI7QUFpQ0k7RUFDSSxpQkFBQTtBQS9CUjtBQW9DQTtFQUVJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFsQ0o7QUFxQ0E7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0FBbENKO0FBb0NJO0VBQ0ksMEJBQUE7QUFsQ1I7QUF1Q0E7RUFDSTtJQUNJLGVBQUE7RUFwQ047QUFDRjtBQXVDQTtFQUNJO0lBQ0ksZUFBQTtFQXJDTjtBQUNGO0FBd0NBO0VBQ0k7SUFDSSxlQUFBO0VBdENOO0FBQ0Y7QUEyQ1E7RUFDSSxxQkFBQTtFQUNBLGNBQUE7QUF6Q1o7QUErQ0k7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0FBNUNSO0FBK0NJO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxPQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtBQTdDUjtBQXNEQTtFQUNJLDZCQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FBbkRKO0FBMERBO0VBQ0ksYUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQXZESjtBQTBEQTtFQUNJLHdDQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUF2REo7QUEyREE7RUFDSSxrQkFBQTtBQXhESjtBQTZEQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBMURKO0FBOERBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQTNESjtBQStEQTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBNURKO0FBaUVBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQTlESjtBQWtFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0NBQUE7QUEvREo7QUFrRUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUEvREo7QUFtRUE7RUFFSTs7SUFFSSxlQUFBO0lBQ0EsZ0JBQUE7RUFqRU47QUFDRjtBQW9FQTs7O0VBR0ksaUJBQUE7QUFsRUoiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyp7XG4gICAgZm9udC1mYW1pbHk6XCJzb2ZpYVwiLFwic29maWFGYWxsYmFja1wiLGFyaWFsLHNhbnMtc2VyaWY7XG4gIH1cbiAgKi9cblxuKjpmb2N1cyB7XG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpIHtcbiAgICAubmF2YmFyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIGhlaWdodDogNzBweCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5jb250YWluZXItZmx1aWQge1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xuICAgIH1cblxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkxLjk4cHgpIHtcbiAgICAubmF2YmFyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgLm5hdmJhci1zdGlja3kge1xuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgfVxuXG4gICAgLmxvZ28ge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gICAgfVxuXG5cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XG4gICAgLm5hdmJhci1icmFuZCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLnNlYXJjaC1iYXItaWNvbiB7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDMwcHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBncmV5ICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgICAvLyBtYXJnaW4tcmlnaHQ6IC0zMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLnNlYXJjaC1iYXItaW5wdXQge1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzBweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDMwcHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBncmV5ICFpbXBvcnRhbnQ7XG4gICAgICAgIC8vIHBhZGRpbmctbGVmdDogMHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDM1cHg7XG4gICAgfVxuXG4gICAgLmlucHV0LWdyb3VwIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpIHtcbiAgICAudG9wLW1lbnUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5tZW51LXRleHQge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cblxuXG5cblxuQG1lZGlhIChtaW4td2lkdGg6IDk5MS45OHB4KSB7XG4gICAgLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBub25lO1xuICAgIH1cblxuICAgIC5tZW51LXRleHQge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICAgICAgY29sb3I6ICMyMTFlMjI7XG4gICAgfVxuXG4gICAgLm5hdmJhciB7XG4gICAgICAgIGhlaWdodDogMTEwcHg7XG4gICAgfVxuXG4gICAgLnNlYXJjaC1iYXItaWNvbiB7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBncmV5O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gICAgfVxuXG4gICAgLnNlYXJjaC1iYXItaW5wdXQge1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBncmV5O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG5cbiAgICB9XG5cbn1cblxuXG4uYXBwLXRpdGxlIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbn1cblxuLmlucHV0LWdyb3VwIHtcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xufVxuXG5cblxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkxLjk4cHgpIHtcbiAgICAudG9wLW1lbnUge1xuICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWFyZ2luLXRvcDogMzVweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAyOTZweCk7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBtYXJnaW4tbGVmdDogLTI5NnB4O1xuICAgICAgICAvLyBwYWRkaW5nLWxlZnQ6MCU7XG4gICAgICAgIC8vIHBhZGRpbmctcmlnaHQ6NSU7XG4gICAgfVxufVxuXG4ubWVudS1idXR0b24ge1xuICAgIC51bmhvdmVyZWQge1xuICAgICAgICBkaXNwbGF5OiBjb250ZW50cztcblxuICAgIH1cblxuICAgIC5ob3ZlcmVkIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcblxuICAgIH1cbn1cblxuXG4ubWVudS1idXR0b246aG92ZXIge1xuICAgIC51bmhvdmVyZWQge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuXG4gICAgfVxuXG4gICAgLmhvdmVyZWQge1xuICAgICAgICBkaXNwbGF5OiBjb250ZW50cztcblxuICAgIH1cbn1cblxuLnRvcC1tZW51LWl0ZW0ge1xuICAgIC8vIHdpZHRoOiBjYWxjKDEwMCUgLyA3KTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4udG9wLW1lbnUtaXRlbTpob3ZlciB7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlOWU1O1xuXG4gICAgLlRvcE5hdl90b3BOYXZMaW5rXzEzIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG5cbiAgICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgICAudG9wLW1lbnUtaXRlbSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1MDBweCkgYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIC50b3AtbWVudS1pdGVtIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ5OXB4KSB7XG4gICAgLnRvcC1tZW51LWl0ZW0ge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxufVxuXG4udG9wLW1lbnUtaXRlbSB7XG4gICAgc3BhbiB7XG4gICAgICAgIGEge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5tZW51LXNob3cge1xuICAgIC5Ub3BOYXZfZHJvcERvd25fNWYge1xuICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgICAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG4gICAgICAgIHotaW5kZXg6IDEwMDA7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjVzIGVhc2U7XG4gICAgfVxuXG4gICAgLmhlYWRlcl9zaGltXzBjIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSArIDM1MHB4KTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0zMDBweDtcbiAgICAgICAgaGVpZ2h0OiAxMTI1NnB4O1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC41cyBlYXNlO1xuICAgIH1cbn1cblxuLy8gLm1lbnUtc2hvd3tcbi8vICAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbi8vICAgICAgICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xuXG4vLyB9XG4ubWVudS1oaWRlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC41cyBlYXNlO1xuICAgIHdpZHRoOiAwcHggIWltcG9ydGFudDtcbiAgICB6LWluZGV4OiAxO1xuICAgIGhlaWdodDogMHB4ICFpbXBvcnRhbnQ7XG5cbn1cblxuXG5cblxuLlRvcE5hdl9kcm9wRG93bl81ZiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmhlYWRlcl9zaGltXzBjIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ3LCA1MSwgNTUsIC40NSk7XG4gICAgb3BhY2l0eTogMDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogOTk4O1xuICAgIGhlaWdodDogMTEyNTZweDtcbn1cblxuXG4uVG9wTmF2X3JldGFpbERyb3BEb3duXzE0IHtcbiAgICBwYWRkaW5nOiAzMnB4IDI0cHg7XG59XG5cblxuXG4uRHJvcERvd25fc3ViTWVudV9hNSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGZsZXgtZmxvdzogd3JhcDtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuXG4uRHJvcERvd25fY29sdW1uXzI3IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMnB4O1xuICAgIHdpZHRoOiAyNSU7XG59XG5cblxuLkRyb3BEb3duX2NvbHVtblRpdGxlX2VjIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGNvbG9yOiAjMmYzMzM3O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cblxuXG4uRHJvcERvd25fY29sdW1uTGlua19jNCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogIzYyNjY2OTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzJmMzMzNztcbiAgICBtYXJnaW46IDAgMCA4cHg7XG4gICAgcGFkZGluZzogMCAwIDJweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbn1cblxuXG4uVG9wTmF2X3RvcE5hdkxpbmtfMTMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbi5fMXF4OXgzZzAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODBweCkge1xuXG4gICAgLl8xcXg5eDNnMCxcbiAgICAuXzFxeDl4M2cxLl8xcXg5eDNnMS5fMXF4OXgzZzEge1xuICAgICAgICB3aWR0aDogMS44NzVyZW07XG4gICAgICAgIGhlaWdodDogMS44NzVyZW07XG4gICAgfVxufVxuXG4uXzE2cTk4ZXkyXzYxMDEsXG4uXzE2cTk4ZXkzXzYxMDEsXG4uXzE2cTk4ZXk0XzYxMDEge1xuICAgIHN0cm9rZS13aWR0aDogMXB4O1xufSJdfQ== */"] });


/***/ }),

/***/ "N8wx":
/*!**************************************************!*\
  !*** ./src/app/views/orders/orders.component.ts ***!
  \**************************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var src_app_services_user_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user-info.service */ "lg7r");
/* harmony import */ var src_app_services_biz_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/biz.service */ "Epua");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../header/header.component */ "MR1q");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../footer/footer.component */ "FPq/");







function OrdersComponent_div_15_ng_container_15_tr_11_input_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 39);
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r4.shipping.state);
} }
function OrdersComponent_div_15_ng_container_15_tr_11_input_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 40);
} }
function OrdersComponent_div_15_ng_container_15_tr_11_input_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 41);
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r4.shipping.postal_code);
} }
function OrdersComponent_div_15_ng_container_15_tr_11_input_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 42);
} }
function OrdersComponent_div_15_ng_container_15_tr_11_tr_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r14.product, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r14.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r14.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r11.getProductsTotalPrice(item_r14.price, item_r14.quantity), " ");
} }
function OrdersComponent_div_15_ng_container_15_tr_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Order Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Contact Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Company Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Secondary Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Unit Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "State");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, OrdersComponent_div_15_ng_container_15_tr_11_input_46_Template, 1, 1, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, OrdersComponent_div_15_ng_container_15_tr_11_input_47_Template, 1, 0, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Zip Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, OrdersComponent_div_15_ng_container_15_tr_11_input_52_Template, 1, 1, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, OrdersComponent_div_15_ng_container_15_tr_11_input_53_Template, 1, 0, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Order Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Reorder Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "table", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Product Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "SKU");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, OrdersComponent_div_15_ng_container_15_tr_11_tr_83_Template, 10, 4, "tr", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("border: 1px solid  ", ctx_r6.bizService.get_background_color(), ";");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r4.order_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r4.shipping.contact);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r4.shipping.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r4.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r4.shipping.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r4.shipping.address_2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r4.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r4.shipping.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r4.shipping.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r4.shipping.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r4.shipping.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r4.products);
} }
function OrdersComponent_div_15_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrdersComponent_div_15_ng_container_15_Template_tr_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const item_r4 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.selectItem(item_r4.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, OrdersComponent_div_15_ng_container_15_tr_11_Template, 85, 16, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.order_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.shippingItemsFormat(item_r4.products));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 5, item_r4.created, "dd-MM-yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.selected_item == item_r4.id);
} }
function OrdersComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Order Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, OrdersComponent_div_15_ng_container_15_Template, 12, 8, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.ordersPending);
} }
function OrdersComponent_div_25_ng_container_15_tr_11_input_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 39);
} if (rf & 2) {
    const item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r19.shipping.state);
} }
function OrdersComponent_div_25_ng_container_15_tr_11_input_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 40);
} }
function OrdersComponent_div_25_ng_container_15_tr_11_input_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 41);
} if (rf & 2) {
    const item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r19.shipping.postal_code);
} }
function OrdersComponent_div_25_ng_container_15_tr_11_input_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 42);
} }
function OrdersComponent_div_25_ng_container_15_tr_11_tr_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r29 = ctx.$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r29.product, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r29.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r29.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r26.getProductsTotalPrice(item_r29.price, item_r29.quantity), " ");
} }
function OrdersComponent_div_25_ng_container_15_tr_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Order Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Contact Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Company Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Secondary Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Unit Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "State");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, OrdersComponent_div_25_ng_container_15_tr_11_input_46_Template, 1, 1, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, OrdersComponent_div_25_ng_container_15_tr_11_input_47_Template, 1, 0, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Zip Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, OrdersComponent_div_25_ng_container_15_tr_11_input_52_Template, 1, 1, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, OrdersComponent_div_25_ng_container_15_tr_11_input_53_Template, 1, 0, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Order Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Reorder Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "table", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Product Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "SKU");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, OrdersComponent_div_25_ng_container_15_tr_11_tr_83_Template, 10, 4, "tr", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("border: 1px solid ", ctx_r21.bizService.get_background_color(), ";");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r19.order_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r19.shipping.contact);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r19.shipping.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r19.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r19.shipping.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r19.shipping.address_2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r19.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r19.shipping.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r19.shipping.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r19.shipping.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r19.shipping.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r19.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r19.products);
} }
function OrdersComponent_div_25_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrdersComponent_div_25_ng_container_15_Template_tr_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const item_r19 = ctx.$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r31.selectItem(item_r19.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, OrdersComponent_div_25_ng_container_15_tr_11_Template, 85, 16, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r19 = ctx.$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r19.order_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r19.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r18.shippingItemsFormat(item_r19.products));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 5, item_r19.created, "dd-MM-yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.selected_item == item_r19.id);
} }
function OrdersComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Order Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, OrdersComponent_div_25_ng_container_15_Template, 12, 8, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.ordersProgress);
} }
function OrdersComponent_div_35_ng_container_15_tr_11_input_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 39);
} if (rf & 2) {
    const item_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r34.shipping.state);
} }
function OrdersComponent_div_35_ng_container_15_tr_11_input_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 40);
} }
function OrdersComponent_div_35_ng_container_15_tr_11_input_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 41);
} if (rf & 2) {
    const item_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r34.shipping.postal_code);
} }
function OrdersComponent_div_35_ng_container_15_tr_11_input_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 42);
} }
function OrdersComponent_div_35_ng_container_15_tr_11_tr_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r44 = ctx.$implicit;
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r44.product, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r44.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r44.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r41.getProductsTotalPrice(item_r44.price, item_r44.quantity), " ");
} }
function OrdersComponent_div_35_ng_container_15_tr_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Order Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Contact Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Company Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Secondary Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Unit Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "State");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, OrdersComponent_div_35_ng_container_15_tr_11_input_46_Template, 1, 1, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, OrdersComponent_div_35_ng_container_15_tr_11_input_47_Template, 1, 0, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Zip Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, OrdersComponent_div_35_ng_container_15_tr_11_input_52_Template, 1, 1, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, OrdersComponent_div_35_ng_container_15_tr_11_input_53_Template, 1, 0, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Order Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Reorder Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "table", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Product Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "SKU");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, OrdersComponent_div_35_ng_container_15_tr_11_tr_83_Template, 10, 4, "tr", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("border: 1px solid  ", ctx_r36.bizService.get_background_color(), ";");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r34.order_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r34.shipping.contact);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r34.shipping.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r34.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r34.shipping.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r34.shipping.address_2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r34.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r34.shipping.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r34.shipping.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r34.shipping.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r34.shipping.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r34.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r34.products);
} }
function OrdersComponent_div_35_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrdersComponent_div_35_ng_container_15_Template_tr_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const item_r34 = ctx.$implicit; const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r46.selectItem(item_r34.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, OrdersComponent_div_35_ng_container_15_tr_11_Template, 85, 16, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r34 = ctx.$implicit;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r34.order_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r34.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r33.shippingItemsFormat(item_r34.products));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 5, item_r34.created, "dd-MM-yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r33.selected_item == item_r34.id);
} }
function OrdersComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Order Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, OrdersComponent_div_35_ng_container_15_Template, 12, 8, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.ordersCompleted);
} }
class OrdersComponent {
    constructor(apiService, userInfoService, bizService) {
        this.apiService = apiService;
        this.userInfoService = userInfoService;
        this.bizService = bizService;
        this.ordersPending = [];
        this.ordersProgress = [];
        this.ordersCompleted = [];
        this.initChecked = false;
    }
    ngOnInit() {
        this.apiService.getOrders({ "status": "Pending", "customer": this.userInfoService.getCustomerId() }).subscribe(res => {
            this.ordersPending = res;
        }, err => { });
        this.apiService.getOrders({ "status": "Acknowledged", "customer": this.userInfoService.getCustomerId() }).subscribe(res => {
            this.ordersProgress = res;
        }, err => { });
        this.apiService.getOrders({ "status": "Completed", "customer": this.userInfoService.getCustomerId() }).subscribe(res => {
            this.ordersCompleted = res;
        }, err => { });
    }
    getProductsTotalPrice(price, quantity) {
        return Math.round((parseFloat(price)) * (parseFloat(quantity))).toFixed(2);
    }
    changeBorderColor() {
    }
    selectItem(id) {
        if (this.selected_item == id) {
            this.selected_item = "";
        }
        else {
            this.selected_item = id;
        }
    }
    toString(i) {
        return i.toString();
    }
    shippingItemsFormat(items) {
        if (items.length > 1) {
            return "(" + (items.length).toString() + ") Items";
        }
        else if (items.length == 1) {
            return items[0].product;
        }
        else {
            return "(0) Items";
        }
    }
    selectAll(initChecked, items) {
        if (!initChecked) {
            items.forEach((f) => {
                f.isSelected = true;
            });
        }
        else {
            items.forEach((f) => {
                f.isSelected = false;
            });
        }
    }
}
OrdersComponent.ɵfac = function OrdersComponent_Factory(t) { return new (t || OrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_info_service__WEBPACK_IMPORTED_MODULE_2__["UserInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_biz_service__WEBPACK_IMPORTED_MODULE_3__["BizService"])); };
OrdersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrdersComponent, selectors: [["app-orders"]], decls: 38, vars: 3, consts: [[1, "container-fluid"], [1, "row", "main-content"], [1, "card", "order-card", 2, "border", "none"], [1, "card-body", 2, "padding-top", "100px"], [1, "row", "info-title-section"], [1, "col-lg-12", "col-sm-12", "col-12"], [1, "row"], [1, "info-title"], [1, "dash", 2, "float", "right", "margin-top", "-15px"], [1, "line"], ["class", "row", 4, "ngIf"], [2, "padding-top", "20px"], [1, "table-responsive"], [1, "table", "datanew"], [4, "ngFor", "ngForOf"], [1, "order-item", 3, "click"], [1, "text-bolds"], [4, "ngIf"], ["colspan", "5"], [1, "card"], [1, "row", "form-info"], [1, "col-lg-3", "col-sm-3", "col-12"], [1, "form-group"], ["disabled", "", "type", "text", "placeholder", "GLP7001-0001", 1, "round-input", 3, "value"], ["disabled", "", "type", "text", "placeholder", "Troy Speirs", 1, "round-input", 3, "value"], ["disabled", "", "type", "text", "placeholder", "1-999-999-9999", 1, "round-input", 3, "value"], ["disabled", "", "type", "text", "placeholder", "Company Name", 1, "round-input", 3, "value"], ["disabled", "", "type", "text", "placeholder", "33453 Administrative Avenue ", 1, "round-input", 3, "value"], ["disabled", "", "type", "text", "placeholder", "Suite 320", 1, "round-input", 3, "value"], ["disabled", "", "type", "text", "placeholder", "$7876", 1, "round-input", 3, "value"], ["disabled", "", "type", "text", "placeholder", "Utah", "class", "round-input", 3, "value", 4, "ngIf"], ["disabled", "", "type", "text", "placeholder", "", "class", "round-input", 4, "ngIf"], ["disabled", "", "type", "text", "placeholder", "8788", "class", "round-input", 3, "value", 4, "ngIf"], ["disabled", "", "type", "text", "class", "round-input", 4, "ngIf"], [1, "row", 2, "text-align", "center", "font-size", "x-large", "margin-top", "30px"], [1, "row", 2, "text-align", "center", "font-size", "x-large"], [1, "col-lg-9", "col-sm-9", "col-12"], [1, "table-responsive", 2, "margin-top", "30px"], ["class", "order-item", 4, "ngFor", "ngForOf"], ["disabled", "", "type", "text", "placeholder", "Utah", 1, "round-input", 3, "value"], ["disabled", "", "type", "text", "placeholder", "", 1, "round-input"], ["disabled", "", "type", "text", "placeholder", "8788", 1, "round-input", 3, "value"], ["disabled", "", "type", "text", 1, "round-input"], [1, "order-item"]], template: function OrdersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "My Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, OrdersComponent_div_15_Template, 16, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "In Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, OrdersComponent_div_25_Template, 16, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, OrdersComponent_div_35_Template, 16, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "footer", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ordersPending.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ordersProgress.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ordersCompleted.length > 0);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: [".main[_ngcontent-%COMP%] {\n  font-size: large;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-weight: 700;\n  padding-left: 10px;\n}\n\n.card[_ngcontent-%COMP%] {\n  border-radius: 30px;\n  padding: 20px;\n}\n\n.page-title[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  margin-left: 30px;\n  font-size: xx-large;\n}\n\n.card-round[_ngcontent-%COMP%] {\n  background-color: #F0FBF9;\n  border-radius: 50px;\n  height: 100%;\n  padding: 20px;\n}\n\n.info-title[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  font-weight: 500;\n  font-size: medium;\n}\n\n.info-title-section[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n@media (min-width: 991.98px) {\n  .main-content[_ngcontent-%COMP%] {\n    padding-left: 50px;\n    padding-right: 50px;\n  }\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 450px;\n  height: 200px;\n  padding: 2rem;\n  text-align: center;\n  border: dashed 1px #979797;\n  position: relative;\n  margin: 0 auto;\n}\n\n.container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  position: absolute;\n  z-index: 2;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n\n.container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: white;\n  width: 183px;\n  height: 44px;\n  border-radius: 21.5px;\n  background-color: #db202f;\n  padding: 8px 16px;\n}\n\n.container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #38424c;\n}\n\n.dash[_ngcontent-%COMP%] {\n  background-color: #797575;\n  height: 3px;\n  width: 15px;\n  border-radius: 10px;\n}\n\n.line[_ngcontent-%COMP%] {\n  background-color: #7a7878;\n  height: 3px;\n  width: 100%;\n}\n\n.form-info[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  display: grid;\n}\n\n.form-group[_ngcontent-%COMP%]   .round-input[_ngcontent-%COMP%] {\n  border-radius: 20px !important;\n  height: 50px;\n  padding-left: 10px;\n  border: none;\n}\n\n.full-height[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.form-group[_ngcontent-%COMP%]   .text-area-height[_ngcontent-%COMP%] {\n  height: 75%;\n}\n\n.img-table[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n\n.table-borderless[_ngcontent-%COMP%] {\n  border: 0px;\n}\n\n.submit-button-section[_ngcontent-%COMP%] {\n  padding-top: 100px;\n}\n\n.btn-submit[_ngcontent-%COMP%] {\n  float: right;\n  height: 50px;\n  padding: auto;\n  border-radius: 40px;\n  font-size: large;\n}\n\n.upload-image-input[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 250px;\n  border-radius: 20px;\n  border: 3px dashed #dad6d6;\n}\n\n.image-upload-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0 !important;\n  top: auto !important;\n}\n\n.background-image-upload[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -50px 0 0 -50px;\n}\n\n.fade[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  opacity: 0.5;\n  background-color: #f1f1f1;\n}\n\n.fileover[_ngcontent-%COMP%] {\n  background-color: #F0FBF9;\n}\n\n.files-list[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n\n.files-list[_ngcontent-%COMP%]   .single-file[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0.5rem;\n  justify-content: space-between;\n  align-items: center;\n  border: dashed 1px #979797;\n  margin-bottom: 1rem;\n  display: flex;\n  flex-grow: 1;\n}\n\n.files-list[_ngcontent-%COMP%]   .single-file[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%] {\n  display: flex;\n  margin-left: 0.5rem;\n  cursor: pointer;\n  align-self: flex-end;\n}\n\n.files-list[_ngcontent-%COMP%]   .single-file[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #353f4a;\n  margin: 0;\n}\n\n.files-list[_ngcontent-%COMP%]   .single-file[_ngcontent-%COMP%]   .size[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #a4a4a4;\n  margin: 0;\n  margin-bottom: 0.25rem;\n}\n\n.files-list[_ngcontent-%COMP%]   .single-file[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ninput[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.order-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.order-item[_ngcontent-%COMP%]:hover {\n  background-color: #c7c4c4;\n}\n\n@media (max-width: 991.98px) {\n  .order-card[_ngcontent-%COMP%] {\n    padding: 0px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL29yZGVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDSSxtQkFBQTtFQUNBLGFBQUE7QUFFSjs7QUFBQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUdKOztBQURBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBSUo7O0FBREE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFJSjs7QUFEQTtFQUNJLG1CQUFBO0FBSUo7O0FBREE7RUFDSTtJQUNJLGtCQUFBO0lBQ0EsbUJBQUE7RUFJTjtBQUNGOztBQUZBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUlKOztBQUZJO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QUFJTjs7QUFESTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQUdOOztBQUFJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUVOOztBQUdBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0E7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBQUY7O0FBR0E7RUFDSSxnQkFBQTtBQUFKOztBQUVBO0VBQ0UsYUFBQTtBQUNGOztBQUdJO0VBQ0ksOEJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQVI7O0FBSUE7RUFDSSxZQUFBO0FBREo7O0FBS0E7RUFDSSxXQUFBO0FBRko7O0FBUUE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtBQUxEOztBQVNBO0VBQ0ksV0FBQTtBQU5KOztBQVVBO0VBQ0ksa0JBQUE7QUFQSjs7QUFVQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFQSjs7QUFZQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0FBVEY7O0FBWUE7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7QUFURjs7QUFXQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0FBUkY7O0FBV0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBUkY7O0FBV0E7RUFDQSx5QkFBQTtBQVJBOztBQVlBO0VBQ0Esa0JBQUE7QUFUQTs7QUFXQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFVQSxhQUFBO0VBQ0EsWUFBQTtBQWxCRjs7QUFTRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQVBKOztBQWNFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUFaSjs7QUFlRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7QUFiSjs7QUFnQkU7RUFDRSxXQUFBO0FBZEo7O0FBbUJBO0VBQ0ksdUJBQUE7QUFoQko7O0FBb0JBO0VBQ0ksZUFBQTtBQWpCSjs7QUFvQkE7RUFDSSx5QkFBQTtBQWpCSjs7QUFzQkE7RUFHRTtJQUNFLHVCQUFBO0VBckJGO0FBQ0YiLCJmaWxlIjoib3JkZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW57XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbn1cblxubGFiZWx7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5jYXJke1xuICAgIGJvcmRlci1yYWRpdXM6MzBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuLnBhZ2UtdGl0bGV7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICBtYXJnaW4tbGVmdDozMHB4O1xuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG59XG4uY2FyZC1yb3VuZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGQkY5O1xuICAgIGJvcmRlci1yYWRpdXM6NTBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuLmluZm8tdGl0bGV7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuXG59XG4uaW5mby10aXRsZS1zZWN0aW9ue1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTEuOThweCl7XG4gICAgLm1haW4tY29udGVudHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xuICAgIH1cbn1cbi5jb250YWluZXIge1xuICAgIHdpZHRoOiA0NTBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIHBhZGRpbmc6IDJyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlcjogZGFzaGVkIDFweCAjOTc5Nzk3O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgXG4gICAgaW5wdXQge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHotaW5kZXg6IDI7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgfVxuICBcbiAgICBsYWJlbCB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB3aWR0aDogMTgzcHg7XG4gICAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAyMS41cHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGIyMDJmO1xuICAgICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgfVxuICBcbiAgICBoMyB7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6ICMzODQyNGM7XG4gICAgfVxuICB9XG4gIFxuXG4uZGFzaHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIxLCAxMTcsIDExNyk7XG4gICAgaGVpZ2h0OiAzcHg7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmxpbmV7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjIsIDEyMCwgMTIwKTtcbiAgaGVpZ2h0OiAzcHg7XG4gIHdpZHRoOiAxMDAlO1xuXG59XG4uZm9ybS1pbmZve1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uZm9ybS1ncm91cHtcbiAgZGlzcGxheTogZ3JpZDtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICAgIC5yb3VuZC1pbnB1dHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cbn1cblxuLmZ1bGwtaGVpZ2h0e1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuXG4uZm9ybS1ncm91cCAudGV4dC1hcmVhLWhlaWdodHtcbiAgICBoZWlnaHQ6IDc1JTtcbn1cblxuXG5cblxuLmltZy10YWJsZXtcbiB3aWR0aDogMTZweDtcbiBoZWlnaHQ6IDE2cHg7XG59XG5cblxuLnRhYmxlLWJvcmRlcmxlc3N7XG4gICAgYm9yZGVyOjBweDtcbn1cblxuXG4uc3VibWl0LWJ1dHRvbi1zZWN0aW9ue1xuICAgIHBhZGRpbmctdG9wOjEwMHB4O1xufVxuXG4uYnRuLXN1Ym1pdHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHBhZGRpbmc6IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICBmb250LXNpemU6IGxhcmdlO1xufVxuXG5cblxuLnVwbG9hZC1pbWFnZS1pbnB1dHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiAyNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm9yZGVyOiAzcHggZGFzaGVkIHJnYigyMTgsIDIxNCwgMjE0KTtcbn1cblxuLmltYWdlLXVwbG9hZC1pY29ue1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMCAhaW1wb3J0YW50O1xuICB0b3A6IGF1dG8gIWltcG9ydGFudDtcbn1cbi5iYWNrZ3JvdW5kLWltYWdlLXVwbG9hZCB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW46IC01MHB4IDAgMCAtNTBweDtcbn1cblxuLmZhZGV7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3BhY2l0eTogMC41O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQxLCAyNDEsIDI0MSk7IDtcbn1cblxuLmZpbGVvdmVyIHtcbmJhY2tncm91bmQtY29sb3I6ICNGMEZCRjk7XG59XG5cblxuLmZpbGVzLWxpc3Qge1xubWFyZ2luLXRvcDogMS41cmVtO1xuXG4uc2luZ2xlLWZpbGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyOiBkYXNoZWQgMXB4ICM5Nzk3OTc7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG5cbiAgLmRlbGV0ZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgfVxuXG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1ncm93OiAxO1xuXG4gIC5uYW1lIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzM1M2Y0YTtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAuc2l6ZSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICNhNGE0YTQ7XG4gICAgbWFyZ2luOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG4gIH1cblxuICAuaW5mbyB7XG4gICAgd2lkdGg6IDEwMCVcbiAgfVxufVxufVxuXG5pbnB1dHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuXG4ub3JkZXItaXRlbXtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5vcmRlci1pdGVtOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk5LCAxOTYsIDE5Nik7XG59XG5cblxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpIHsgXG5cblxuICAub3JkZXItY2FyZHtcbiAgICBwYWRkaW5nOjBweCAhaW1wb3J0YW50O1xuICB9XG5cbn0iXX0= */"] });


/***/ }),

/***/ "QB/w":
/*!************************************************!*\
  !*** ./src/app/views/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_user_info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user-info.service */ "lg7r");
/* harmony import */ var src_app_services_biz_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/biz.service */ "Epua");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








const _c0 = function (a0) { return { "color": a0 }; };
const _c1 = function (a0) { return { "background-color": a0 }; };
class LoginComponent {
    constructor(apiService, formBuilder, router, userInfoService, bizService, location) {
        this.apiService = apiService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.userInfoService = userInfoService;
        this.bizService = bizService;
        this.location = location;
        this.submitted = false;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]]
        });
    }
    submitLogin() {
        this.submitted = true;
        this.apiService.login(this.loginForm.value).subscribe(res => {
            this.submitted = false;
            if (res.token) {
                this.userInfoService.saveUserInfo(res);
                // this.router.navigateByUrl(this.bizService.getBizId())
                this.location.back();
            }
        }, err => {
            this.submitted = false;
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_info_service__WEBPACK_IMPORTED_MODULE_4__["UserInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_biz_service__WEBPACK_IMPORTED_MODULE_5__["BizService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 39, vars: 15, consts: [[1, "logo", 3, "href"], ["height", "60px", 3, "src"], [1, "container-fluid"], [2, "padding", "0px"], [1, "row", 2, "justify-content", "center", "margin-top", "30px !important"], [2, "max-width", "500px"], [1, "card", 2, "width", "100%", "border", "none"], [1, "row", 2, "text-align", "center"], [2, "font-weight", "700", "font-size", "xx-large"], [1, "card-body"], [3, "formGroup"], [1, "row", 2, "margin-top", "20px"], [1, "form-group"], ["formControlName", "email", "type", "email", "placeholder", "Email Address", 1, "round-input"], ["formControlName", "password", "type", "password", "placeholder", "Enter your password", 1, "round-input"], [1, "row", 2, "margin-top", "20px", "display", "block"], [1, "fa-regular", "fa-circle", 3, "ngStyle"], [2, "padding-left", "10px"], [2, "float", "right", "width", "fit-content", 3, "ngStyle"], [1, "row", 2, "margin-top", "30px", "padding-left", "10px", "padding-right", "10px"], [1, "btn", "login-button", 3, "ngStyle", "click"], [2, "padding-top", "20px"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "main", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Customer Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Remember Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Forgot Password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_31_listener() { return ctx.submitLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Don't have an Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Request to Become a Customer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "footer", 21);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx.bizService.get_webstore_link(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.bizService.get_company_logo(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, ctx.bizService.get_background_color()));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c0, ctx.bizService.get_background_color()));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c1, ctx.bizService.get_background_color()));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c0, ctx.bizService.get_background_color()));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"]], styles: [".app-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 40px;\n}\n\n@media (min-width: 991.98px) {\n  .app-title[_ngcontent-%COMP%] {\n    margin-left: 20px;\n  }\n}\n\n@media (max-width: 991.98px) {\n  .app-title[_ngcontent-%COMP%] {\n    margin-left: 10px;\n  }\n}\n\n.form-group[_ngcontent-%COMP%]   .round-input[_ngcontent-%COMP%] {\n  border-radius: 15px !important;\n  height: 50px;\n  padding-left: 20px;\n  border: 2px solid #C1C7D6;\n}\n\n.form-group[_ngcontent-%COMP%]   .round-input[_ngcontent-%COMP%]:focus {\n  border: 1px solid #C1C7D6;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  display: grid;\n}\n\n.login-button[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50px;\n  color: #fff;\n  font-size: large;\n  padding: auto;\n  font-weight: 500;\n  border-radius: 10px;\n}\n\n.login-button[_ngcontent-%COMP%]:hover {\n  border: gray solid 1px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBQUY7O0FBSUE7RUFDRTtJQUNJLGlCQUFBO0VBREo7QUFDRjs7QUFJQTtFQUNFO0lBQ0ksaUJBQUE7RUFGSjtBQUNGOztBQVFFO0VBQ0ksOEJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQU5OOztBQVFFO0VBQ0kseUJBQUE7QUFOTjs7QUFVQTtFQUNFLGFBQUE7QUFQRjs7QUFVQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFQSjs7QUFhQTtFQUNDLHNCQUFBO0FBVkQ7O0FBWUE7RUFDRSxnQkFBQTtBQVRGIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uYXBwLXRpdGxle1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDQwcHg7ICAgIFxufVxuXG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTEuOThweCkgeyBcbiAgLmFwcC10aXRsZXtcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkgeyBcbiAgLmFwcC10aXRsZXtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG59XG5cblxuLmZvcm0tZ3JvdXAge1xuXG4gIC5yb3VuZC1pbnB1dHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNDMUM3RDY7XG4gIH1cbiAgLnJvdW5kLWlucHV0OmZvY3Vze1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI0MxQzdENjtcbiAgfVxufVxuXG4uZm9ybS1ncm91cHtcbiAgZGlzcGxheTogZ3JpZDtcbn1cblxuLmxvZ2luLWJ1dHRvbntcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICAgIHBhZGRpbmc6IGF1dG87XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuXG5cbn1cblxuXG4ubG9naW4tYnV0dG9uOmhvdmVye1xuIGJvcmRlcjogZ3JheSBzb2xpZCAxcHg7XG59XG5sYWJlbHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn0iXX0= */"] });


/***/ }),

/***/ "QlPV":
/*!**********************************************!*\
  !*** ./src/app/views/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var src_app_services_user_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user-info.service */ "lg7r");
/* harmony import */ var src_app_services_biz_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/biz.service */ "Epua");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../header/header.component */ "MR1q");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../footer/footer.component */ "FPq/");
/* harmony import */ var _spin_loader_spin_loader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../spin-loader/spin-loader.component */ "YcN/");
/* harmony import */ var _directives_dynamic_size_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../directives/dynamic-size.directive */ "BT2B");











function HomeComponent_6_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", image_r5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function HomeComponent_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeComponent_6_ng_template_0_Template, 2, 1, "ng-template", 26);
} }
function HomeComponent_app_spin_loader_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-spin-loader");
} }
function HomeComponent_div_16_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 42);
} if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "product/", item_r8.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r8.product.images[0].image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function HomeComponent_div_16_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 43);
} }
function HomeComponent_div_16_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_16_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "small", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "reviews");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r8.product.rating, "| ", item_r8.product.reviews, " ");
} }
function HomeComponent_div_16_small_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "u", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login for Pricing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_16_p_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r8.currency, "", item_r8.first_cost, "");
} }
function HomeComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_16_img_2_Template, 1, 2, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_div_16_div_3_Template, 1, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeComponent_div_16_button_4_Template, 2, 0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HomeComponent_div_16_div_8_Template, 6, 2, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HomeComponent_div_16_small_11_Template, 4, 0, "small", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "small", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HomeComponent_div_16_p_14_Template, 2, 2, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r8.product.images.length > 0 && item_r8.product.images[0].image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r8.product.images.length == 0 || !item_r8.product.images[0].image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.userInfoService.isLoggedIn());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "product/", item_r8.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r8.product.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.userInfoService.isLoggedIn());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.userInfoService.isLoggedIn());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("MSRP ", item_r8.currency, "", item_r8.msrp, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.userInfoService.isLoggedIn());
} }
function HomeComponent_app_spin_loader_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-spin-loader");
} }
function HomeComponent_div_40_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 42);
} if (rf & 2) {
    const item_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "product/", item_r18.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r18.product.images[0].image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function HomeComponent_div_40_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 43);
} }
function HomeComponent_div_40_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_40_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "small", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "reviews");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r18.product.rating, "| ", item_r18.product.reviews, " ");
} }
function HomeComponent_div_40_small_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "u", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login for Pricing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_40_p_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r18.currency, "", item_r18.first_cost, "");
} }
function HomeComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_40_img_2_Template, 1, 2, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_div_40_div_3_Template, 1, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeComponent_div_40_button_4_Template, 2, 0, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HomeComponent_div_40_div_8_Template, 6, 2, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HomeComponent_div_40_small_11_Template, 4, 0, "small", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "small", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HomeComponent_div_40_p_14_Template, 2, 2, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r18 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r18.product.images.length > 0 && item_r18.product.images[0].image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r18.product.images.length == 0 || !item_r18.product.images[0].image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.userInfoService.isLoggedIn());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "product/", item_r18.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r18.product.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.userInfoService.isLoggedIn());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.userInfoService.isLoggedIn());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("MSRP ", item_r18.currency, "", item_r18.msrp, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.userInfoService.isLoggedIn());
} }
const _c0 = function (a0) { return { "background-image": a0, "background-size": "auto 300px" }; };
class HomeComponent {
    constructor(apiService, userInfoService, bizService, config) {
        this.apiService = apiService;
        this.userInfoService = userInfoService;
        this.bizService = bizService;
        this.section_one = {
            name: "",
            products: []
        };
        this.section_two = {
            name: "",
            products: []
        };
        this.loading = false;
        // arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.partners = [
            {
                "image": "assets/img/amazon.jpg",
                "name": "Amazon"
            },
            {
                "image": "assets/img/alibaba.png",
                "name": "Alibaba"
            },
            {
                "image": "assets/img/fedex.png",
                "name": "Fedex"
            },
            {
                "image": "assets/img/f6s.jpg",
                "name": "F6s"
            }
        ];
        this.totalCards = this.partners.length;
        this.currentPage = 1;
        this.pagePosition = "0%";
        // images=[];
        this.images = [
            "https://picsum.photos/id/700/900/500",
            "https://picsum.photos/id/1011/900/500",
            "https://picsum.photos/id/984/900/500"
        ];
        config.interval = 2000;
        config.keyboard = true;
        config.pauseOnHover = false;
        // config.wrap=false;
    }
    ngOnInit() {
        // this.cardsPerPage = this.getCardsPerPage();
        // this.initializeSlider();
        // this.getTopSellerProducts();
        // this.getTopProducts();
        this.getHomeSectionItems();
        this.sliders = this.bizService.get_sliders();
        // this.sliders.forEach(item => {
        //   this.images.push(item.image);
        // });
    }
    getHomeSectionItems() {
        this.loading = true;
        this.apiService.getHomeSectionItems(this.bizService.get_company_id()).subscribe(res => {
            this.loading = false;
            this.section_one = res.section_one;
            this.section_two = res.section_two;
        }, err => {
            this.loading = false;
            console.log("[ERROR]>>>", err);
        });
    }
    getTopProducts() {
        this.loading = true;
        this.apiService.getTopProducts().subscribe(res => {
            this.loading = false;
            this.section_one.products = res;
            this.section_one.name = "Top Products";
            this.section_two.products = res;
            this.section_two.name = "Hot line";
        }, err => {
            this.loading = false;
            console.log("[ERROR]>>>", err);
        });
    }
    formatImageUrlToCss(src) {
        return 'url(' + src + ')';
    }
    initializeSlider() {
        this.totalPages = Math.ceil(this.totalCards / this.cardsPerPage);
        this.overflowWidth = `calc(${this.totalPages * 100}% + ${this.totalPages *
            40}px)`;
        this.cardWidth = `calc((${100 / this.totalPages}% - ${this.cardsPerPage *
            40}px) / ${this.cardsPerPage})`;
    }
    // getCardsPerPage() {
    //   return Math.floor(this.container.nativeElement.offsetWidth / 400);
    // }
    changePage(incrementor) {
        this.currentPage += incrementor;
        this.populatePagePosition();
    }
    populatePagePosition() {
        this.pagePosition = `calc(${-100 * (this.currentPage - 1)}% - ${40 *
            (this.currentPage - 1)}px)`;
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_info_service__WEBPACK_IMPORTED_MODULE_2__["UserInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_biz_service__WEBPACK_IMPORTED_MODULE_3__["BizService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCarouselConfig"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 43, vars: 13, consts: [[1, "container-fluid"], [2, "padding-top", "80px", "margin-bottom", "40px"], ["id", "hero-carousel", "data-bs-ride", "carousel", 1, "carousel", "slide", "pb-2"], [4, "ngFor", "ngForOf"], [1, "container", "vstack", "gap-2"], [1, "cart-items-wrapper", "mb-5", "pb-5"], [1, "d-flex", "align-items-center", "justify-content-between", "cart-items-header", "mb-3", "px-2", 2, "padding-left", "0px", "position", "static"], [1, "mb-0", "h5", "fw-bold"], ["routerLink", "products", 1, "btn", "text-capitalize", "btn-sm", "text-success"], [4, "ngIf"], [1, "row", "row-cols-2", "row-cols-md-4"], ["class", "col", 4, "ngFor", "ngForOf"], [1, "row", 2, "padding-left", "15px", "padding-right", "15px", "margin-left", "0px", "margin-right", "0px"], [1, "col-sm-12", "col-lg-12"], [1, "bottom-card", 3, "ngStyle"], [1, "card-text"], [1, "row"], [1, "col-sm-6"], [1, "txt"], [1, "txt2"], ["target", "_blank", 2, "text-decoration", "none", "color", "#525252", 3, "href"], [2, "font-size", "xx-large", "font-weight", "600"], [2, "font-size", "x-large", "font-weight", "500"], [1, "container", "vstack", "gap-2", 2, "margin-top", "20px"], [1, "d-flex", "align-items-center", "justify-content-between", "cart-items-header", "mb-3", "px-2", 2, "padding-left", "0px"], [2, "padding-top", "20px"], ["ngbSlide", ""], [1, "wrapper"], ["alt", "Random first slide", 3, "src"], [1, "col"], [1, "position-relative"], ["appDynamicSize", "", "style", "border-radius: 10%; cursor: pointer; border: 1px solid whitesmoke;", "class", "card-img-top object-fit-cover scale-up", "alt", "item image", 3, "routerLink", "src", 4, "ngIf"], ["class", "card-img-top object-fit-cover", "style", "height:136px", 4, "ngIf"], ["style", "margin: 15px;", "class", "btn btn-light position-absolute end-0", 4, "ngIf"], [1, "card-body", "px-2", 2, "padding-top", "15px"], [1, "fw-normal", "mb-2", "small", "fw-bold", 2, "cursor", "pointer", 3, "routerLink"], ["class", "ratings", 4, "ngIf"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "", 2, "width", "100%", "display", "flex", "justify-content", "space-between"], ["style", "font-size: 15px;font-weight: 500;text-decoration: underline;", 4, "ngIf"], [2, "font-size", "15px", "font-weight", "500"], ["class", "h5 mb-0", 4, "ngIf"], ["appDynamicSize", "", "alt", "item image", 1, "card-img-top", "object-fit-cover", "scale-up", 2, "border-radius", "10%", "cursor", "pointer", "border", "1px solid whitesmoke", 3, "routerLink", "src"], [1, "card-img-top", "object-fit-cover", 2, "height", "136px"], [1, "btn", "btn-light", "position-absolute", "end-0", 2, "margin", "15px"], [1, "bi", "bi-heart"], [1, "ratings"], [1, "bi", "bi-star-fill", "text-warning"], [1, "text-muted"], [2, "padding-left", "10px"], [2, "font-size", "15px", "font-weight", "500", "text-decoration", "underline"], ["routerLink", "login"], [2, "color", "black"], [1, "h5", "mb-0"], ["appDynamicSize", "", "class", "card-img-top object-fit-cover scale-up", "style", "border-radius: 10%; cursor: pointer; border: 1px solid whitesmoke;", "alt", "item image", 3, "routerLink", "src", 4, "ngIf"], ["style", "margin: 15px;", "class", "btn btn-light position-absolute top-0 end-0", 4, "ngIf"], [1, "btn", "btn-light", "position-absolute", "top-0", "end-0", 2, "margin", "15px"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ngb-carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomeComponent_6_Template, 1, 0, undefined, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "see more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HomeComponent_app_spin_loader_14_Template, 1, 0, "app-spin-loader", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, HomeComponent_div_16_Template, 15, 10, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "see more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, HomeComponent_app_spin_loader_38_Template, 1, 0, "app-spin-loader", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, HomeComponent_div_40_Template, 15, 10, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "footer", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sliders);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.section_one.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.section_one.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.formatImageUrlToCss(ctx.bizService.get_mid_banner_image())));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.bizService.get_mid_banner_link(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.bizService.get_mid_banner_first_line());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.bizService.get_mid_banner_second_line(), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.section_two.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.section_two.products);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbSlide"], _spin_loader_spin_loader_component__WEBPACK_IMPORTED_MODULE_9__["SpinLoaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], _directives_dynamic_size_directive__WEBPACK_IMPORTED_MODULE_10__["DynamicSizeDirective"]], styles: ["*[_ngcontent-%COMP%] {\n  font-family: \"sofia\" !important;\n}\n\n.bottom-card[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  width: 100%;\n}\n\n.card-text[_ngcontent-%COMP%] {\n  text-align: center;\n  height: 300px;\n  background: -webkit-linear-gradient(rgba(0, 255, 2, 0), rgba(0, 255, 2, 0) 0%), -webkit-linear-gradient(-20deg, rgba(4, 0, 255, 0) 50%, rgba(255, 255, 235, 0.7) 0%);\n}\n\n.txt[_ngcontent-%COMP%] {\n  height: 300px;\n  display: table-cell;\n  vertical-align: middle;\n  width: inherit;\n}\n\n.txt2[_ngcontent-%COMP%] {\n  display: grid;\n}\n\n.scale-up[_ngcontent-%COMP%] {\n  transition: transform 0.3s;\n}\n\n.scale-up[_ngcontent-%COMP%]:hover {\n  transform: scale(1.03);\n}\n\n.w-100[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n\n.brands-div[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding-left: 50px;\n  padding-right: 50px;\n  display: flex;\n  position: relative;\n  justify-content: center;\n}\n\n@media (min-width: 500px) {\n  .brands-cards[_ngcontent-%COMP%] {\n    width: calc(100% - 80px);\n    overflow: hidden;\n    height: 200px;\n  }\n}\n\n@media (max-width: 499px) {\n  .brands-cards[_ngcontent-%COMP%] {\n    width: 100%;\n    overflow: hidden;\n    height: 200px;\n  }\n}\n\n.overflow[_ngcontent-%COMP%] {\n  position: relative;\n  transition: left 0.5s ease-in-out;\n}\n\n.brand-card[_ngcontent-%COMP%] {\n  height: 200px;\n  background-color: #e0e1e2;\n  border-radius: 5px;\n  display: inline-block;\n  margin-right: 40px;\n  position: relative;\n}\n\n.no-right-margin[_ngcontent-%COMP%] {\n  margin-right: 0px;\n}\n\n.brand-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 48px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 30px;\n  color: black;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n@media (min-width: 992px) {\n  .left[_ngcontent-%COMP%] {\n    margin-left: 50px;\n    left: 0;\n  }\n\n  .right[_ngcontent-%COMP%] {\n    right: 0;\n    margin-right: 50px;\n  }\n}\n\n@media (max-width: 991px) {\n  .left[_ngcontent-%COMP%] {\n    margin-left: 0px;\n    left: 0;\n  }\n\n  .right[_ngcontent-%COMP%] {\n    right: 0;\n    margin-right: 0px;\n  }\n}\n\n.left.disabled[_ngcontent-%COMP%], .right.disabled[_ngcontent-%COMP%] {\n  color: #CCC;\n}\n\n@media (min-width: 992px) {\n  .carousel-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 700px;\n  }\n}\n\n@media (min-width: 600px) and (max-width: 991px) {\n  .carousel-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 400px;\n  }\n}\n\n@media (min-width: 400px) and (max-width: 599px) {\n  .carousel-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 300px;\n  }\n}\n\n@media (max-width: 399px) {\n  .carousel-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 200px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSwrQkFBQTtBQUFGOztBQUlDO0VBQ0csbUJBQUE7RUFDQSxXQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxvS0FDQTtBQUZKOztBQU9BO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBSko7O0FBT0E7RUFDSSxhQUFBO0FBSko7O0FBT0E7RUFDRSwwQkFBQTtBQUpGOztBQU9BO0VBQ0Usc0JBQUE7QUFKRjs7QUFRQTtFQUNJLHNCQUFBO0FBTEo7O0FBU0E7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQU5KOztBQVdFO0VBQ0U7SUFDRSx3QkFBQTtJQUNBLGdCQUFBO0lBQ0EsYUFBQTtFQVJKO0FBQ0Y7O0FBYUU7RUFDRTtJQUNFLFdBQUE7SUFDQSxnQkFBQTtJQUNBLGFBQUE7RUFYSjtBQUNGOztBQWNFO0VBQ0Usa0JBQUE7RUFDQSxpQ0FBQTtBQVpKOztBQWVFO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFaSjs7QUFlRTtFQUNFLGlCQUFBO0FBWko7O0FBZUU7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FBWko7O0FBZUU7O0VBRUUsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFaSjs7QUFlRTtFQUNFO0lBQ0UsaUJBQUE7SUFDQSxPQUFBO0VBWko7O0VBZUU7SUFDRSxRQUFBO0lBQ0Esa0JBQUE7RUFaSjtBQUNGOztBQWtCQTtFQUNFO0lBQ0UsZ0JBQUE7SUFDQSxPQUFBO0VBaEJGOztFQW1CQTtJQUNFLFFBQUE7SUFDQSxpQkFBQTtFQWhCRjtBQUNGOztBQW1CRTtFQUNFLFdBQUE7QUFqQko7O0FBc0JBO0VBRUk7SUFDRSxhQUFBO0VBcEJKO0FBQ0Y7O0FBd0JBO0VBRUk7SUFDRSxhQUFBO0VBdkJKO0FBQ0Y7O0FBMkJBO0VBRUk7SUFDRSxhQUFBO0VBMUJKO0FBQ0Y7O0FBK0JBO0VBRUk7SUFDRSxhQUFBO0VBOUJKO0FBQ0YiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuKntcbiAgZm9udC1mYW1pbHk6ICdzb2ZpYScgIWltcG9ydGFudDtcbn1cblxuXG4gLmJvdHRvbS1jYXJkeyAgICBcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgXG59XG4uY2FyZC10ZXh0e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIGJhY2tncm91bmQ6IFxuICAgIC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMjU1LCAyLCAwKSwgcmdiYSgwLCAyNTUsIDIsIDAuMCkgMCUpLFxuICAgLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoLTIwZGVnLCByZ2JhKDQsIDAsIDI1NSwgMCkgNTAlLCByZ2JhKDI1NSwgMjU1LCAyMzUsIDAuNykgMCUpO1xufVxuXG5cbi50eHR7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgd2lkdGg6IGluaGVyaXQ7XG4gICAgXG59XG4udHh0MntcbiAgICBkaXNwbGF5OiBncmlkO1xufVxuXG4uc2NhbGUtdXAge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zczsgXG59XG5cbi5zY2FsZS11cDpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XG59XG5cblxuLnctMTAwIHtcbiAgICB3aWR0aDogMTAwJSFpbXBvcnRhbnQ7XG4gIH1cblxuICBcbi5icmFuZHMtZGl2IHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctbGVmdDogNTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIFxuXG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDUwMHB4KSB7XG4gICAgLmJyYW5kcy1jYXJkcyB7XG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gODBweCk7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICB9XG4gIH1cblxuICBcbiAgICBcbiAgQG1lZGlhICAobWF4LXdpZHRoOiA0OTlweCl7XG4gICAgLmJyYW5kcy1jYXJkcyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIH1cbiAgfVxuICBcbiAgLm92ZXJmbG93IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdHJhbnNpdGlvbjogbGVmdCAwLjVzIGVhc2UtaW4tb3V0O1xuICB9XG4gIFxuICAuYnJhbmQtY2FyZCB7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMWUyO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICBcbiAgLm5vLXJpZ2h0LW1hcmdpbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIH1cbiAgXG4gIC5icmFuZC1jYXJkIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTo0OHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIH1cbiAgXG4gIC5sZWZ0LFxuICAucmlnaHQge1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgfVxuICBcbiAgQG1lZGlhICAobWluLXdpZHRoOiA5OTJweCkgIHtcbiAgICAubGVmdCB7XG4gICAgICBtYXJnaW4tbGVmdDogNTBweDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgfVxuICAgIFxuICAgIC5yaWdodCB7XG4gICAgICByaWdodDogMDtcbiAgICAgIG1hcmdpbi1yaWdodDogNTBweDtcbiAgICB9XG4gIH1cblxuXG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5sZWZ0IHtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgIGxlZnQ6IDA7XG4gIH1cbiAgXG4gIC5yaWdodCB7XG4gICAgcmlnaHQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIH1cbn1cblxuICAubGVmdC5kaXNhYmxlZCwgLnJpZ2h0LmRpc2FibGVkIHtcbiAgICBjb2xvcjojQ0NDO1xuICB9XG4gIFxuXG4gIFxuQG1lZGlhICAobWluLXdpZHRoOiA5OTJweCl7XG4gIC5jYXJvdXNlbC1pdGVte1xuICAgIGltZ3tcbiAgICAgIGhlaWdodDogNzAwcHg7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSAgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuY2Fyb3VzZWwtaXRlbXtcbiAgICBpbWd7XG4gICAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgIChtaW4td2lkdGg6IDQwMHB4KSBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgLmNhcm91c2VsLWl0ZW17XG4gICAgaW1ne1xuICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICB9XG4gIH1cbn1cblxuXG5AbWVkaWEgKG1heC13aWR0aDogMzk5cHgpIHtcbiAgLmNhcm91c2VsLWl0ZW17XG4gICAgaW1ne1xuICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICB9XG4gIH1cbn1cblxuXG4iXX0= */"] });


/***/ }),

/***/ "R7A+":
/*!****************************************************************************!*\
  !*** ./src/app/views/item-detail-desktop/item-detail-desktop.component.ts ***!
  \****************************************************************************/
/*! exports provided: ItemDetailDesktopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailDesktopComponent", function() { return ItemDetailDesktopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var src_app_services_biz_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/biz.service */ "Epua");
/* harmony import */ var src_app_services_user_info_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user-info.service */ "lg7r");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../header/header.component */ "MR1q");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../footer/footer.component */ "FPq/");
/* harmony import */ var _pipe_title_case_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pipe/title-case.pipe */ "Ffdx");












const _c0 = ["imageContainer"];
const _c1 = ["container"];
function ItemDetailDesktopComponent_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "titleCase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("href", "/", ctx_r0.bizService.getBizId(), "/products/", ctx_r0.category, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, ctx_r0.category));
} }
function ItemDetailDesktopComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "titleCase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " / ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "titleCase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("href", "/", ctx_r1.bizService.getBizId(), "/products/", ctx_r1.category, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 7, ctx_r1.category));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate3"]("href", "/", ctx_r1.bizService.getBizId(), "/products/", ctx_r1.category, "/", ctx_r1.subcategory, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 9, ctx_r1.subcategory));
} }
const _c2 = function (a0) { return { "disabled": a0 }; };
function ItemDetailDesktopComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemDetailDesktopComponent_div_19_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.currentPage != 1 && ctx_r20.changePage(-1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c2, ctx_r4.currentPage === 1));
} }
const _c3 = function (a0) { return { "width": a0 }; };
const _c4 = function (a0) { return { "background-image": a0 }; };
function ItemDetailDesktopComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemDetailDesktopComponent_div_22_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const img_r22 = ctx.$implicit; const index_r23 = ctx.index; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.imageClicked(img_r22, index_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r22 = ctx.$implicit;
    const index_r23 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c3, ctx_r5.cardWidth));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c4, "url(\"" + img_r22.image + "\")"))("ngClass", ctx_r5.current_image_index == index_r23 ? "small-card-selected" : "small-card-not-selected");
} }
function ItemDetailDesktopComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemDetailDesktopComponent_div_24_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const index_r27 = ctx.index; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.imageClicked(ctx_r28.image, index_r27); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vid_r26 = ctx.$implicit;
    const index_r27 = ctx.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c3, ctx_r6.cardWidth));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c4, "url(\"" + vid_r26.video + "\")"))("ngClass", ctx_r6.current_image_index == index_r27 ? "small-card-selected" : "small-card-not-selected");
} }
function ItemDetailDesktopComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemDetailDesktopComponent_div_25_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.currentPage != ctx_r30.totalPages && ctx_r30.changePage(+1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c2, ctx_r7.currentPage === ctx_r7.totalPages));
} }
function ItemDetailDesktopComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" $ ", ctx_r8.item_detail.first_cost, " ");
} }
function ItemDetailDesktopComponent_small_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "u", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login for Pricing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c5 = function (a0) { return { "background-color": a0 }; };
function ItemDetailDesktopComponent_button_63_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemDetailDesktopComponent_button_63_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.addItemToCart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add to Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c5, ctx_r10.bizService.get_background_color()));
} }
function ItemDetailDesktopComponent_button_64_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemDetailDesktopComponent_button_64_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.checkout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Proceed to Checkout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c5, ctx_r11.bizService.get_background_color()));
} }
function ItemDetailDesktopComponent_button_66_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemDetailDesktopComponent_button_66_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.removeItemToCart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ItemDetailDesktopComponent_i_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 34);
} }
function ItemDetailDesktopComponent_i_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 54);
} }
function ItemDetailDesktopComponent_ul_85_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r39);
} }
function ItemDetailDesktopComponent_ul_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ItemDetailDesktopComponent_ul_85_li_1_Template, 2, 1, "li", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r15.featuresArray);
} }
function ItemDetailDesktopComponent_th_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const spec_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](spec_r40.name);
} }
function ItemDetailDesktopComponent_th_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Brand");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ItemDetailDesktopComponent_td_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const spec_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", spec_r42.value, " ");
} }
function ItemDetailDesktopComponent_span_109_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r19.product.dimensions[0].dimension_class, "");
} }
const _c6 = function (a0) { return { "w-100": a0 }; };
const _c7 = function (a0, a1) { return { "width": a0, "left": a1 }; };
const _c8 = function () { return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]; };
class ItemDetailDesktopComponent {
    constructor(route, router, apiService, bizService, userInfoService, rateConfig) {
        this.route = route;
        this.router = router;
        this.apiService = apiService;
        this.bizService = bizService;
        this.userInfoService = userInfoService;
        this.rateConfig = rateConfig;
        this.show_features = false;
        this.item_detail = {
            retail_cost: '',
            first_cost: ''
        };
        this.videos = [];
        this.variations = [];
        this.product = {
            brand: "",
            id: '1',
            name: "",
            images: [],
            price: "",
            rating: "",
            reviews: "",
            sku: "",
            stock_status: "",
            product_count: 1,
            description: "",
            dimensions: [],
            weights: {
                weight: '',
                weight_class: ''
            },
            features: {}
        };
        this.msrp = "";
        this.featuresArray = [];
        this.channel_detail = {
            name: '',
            id: ''
        };
        this.current_image = "";
        this.current_image_index = 0;
        this.totalCards = 14;
        this.currentPage = 1;
        this.pagePosition = "0%";
        this.imageContainerStyle = {
            "padding-left": '0px',
            "padding-right": '0px'
        };
        rateConfig.max = 5;
        rateConfig.readonly = !userInfoService.isLoggedIn();
    }
    windowResize() {
        let newCardsPerPage = this.getCardsPerPage();
        if (newCardsPerPage != this.cardsPerPage) {
            this.cardsPerPage = newCardsPerPage;
            this.initializeSlider();
            if (this.currentPage > this.totalPages) {
                this.currentPage = this.totalPages;
                this.populatePagePosition();
            }
        }
    }
    setShowFeatures() {
        if (this.show_features === false) {
            this.show_features = true;
        }
        else {
            this.show_features = false;
        }
    }
    getImageContainerStyle() {
        return this.imageContainerStyle;
    }
    onImageLoad(event) {
        const imgElement = event.target;
        const naturalWidth = imgElement.naturalWidth;
        const naturalHeight = imgElement.naturalHeight;
        var width = this.imageContainer.nativeElement.offsetWidth;
        const aspectRatio = naturalWidth / naturalHeight;
        const newWidth = 600 * aspectRatio;
        // imgElement.style.width = `${newWidth}px`;
        // imgElement.style.height = '600px';
        var imageContainerStyle_padding = (width - newWidth) / 2;
        this.imageContainerStyle = {
            "padding-left": `${imageContainerStyle_padding}px`,
            "padding-right": `${imageContainerStyle_padding}px`
        };
    }
    ngOnInit() {
        this.cardsPerPage = this.getCardsPerPage();
        this.initializeSlider();
        this.apiService.getChannelsDetails(this.route.snapshot.params.id).subscribe(res => {
            this.channel_detail = res[0];
        }, err => { });
        this.apiService.getProductDetail(this.route.snapshot.params.id).subscribe(res => {
            this.product = res.product;
            this.msrp = res.msrp;
            this.item_detail = res;
            this.product["product_count"] = 1;
            this.totalCards = 14;
            this.current_image = this.product.images[0].image;
            this.featuresArray = Object.values(res.product.features);
            this.apiService.getVariations("?product=" + this.product.id).subscribe(res => {
                this.variations = res;
            }, err => { });
            this.apiService.getProductVideo("?product=" + this.product.id).subscribe(res => {
                this.videos = res;
            }, err => { });
            try {
                let p = this.product;
                this.category = p.category_details.name;
            }
            catch (err) { }
            try {
                let p = this.product;
                this.subcategory = p.sub_category_details.name;
            }
            catch (err) { }
        }, err => {
            console.log("[ERROR]>>>", err);
        });
    }
    checkout() {
        this.router.navigateByUrl("/" + this.bizService.getBizId() + "/cart");
    }
    addItemToCart() {
        var p = this.product;
        var pricing = this.item_detail;
        pricing["product"] = p.id;
        p["pricing"] = pricing;
        this.userInfoService.addItemCart(p);
    }
    removeItemToCart() {
        this.userInfoService.removeItemCart(this.product);
    }
    reduceProductCount() {
        if (this.product.product_count > 1) {
            this.product.product_count = this.product.product_count - 1;
            if (this.userInfoService.isItemInCart(this.product)) {
                this.userInfoService.updateItemCart(this.product);
            }
        }
    }
    increaseProductCount() {
        this.product.product_count = this.product.product_count + 1;
        if (this.userInfoService.isItemInCart(this.product)) {
            this.userInfoService.updateItemCart(this.product);
        }
    }
    imageClicked(img, index) {
        this.current_image = img.image;
        this.current_image_index = index;
    }
    initializeSlider() {
        this.totalPages = Math.ceil(this.totalCards / this.cardsPerPage);
        this.overflowWidth = `calc(${this.totalPages * 100}% + ${this.totalPages *
            10}px)`;
        this.cardWidth = `calc((${100 / this.totalPages}% - ${this.cardsPerPage *
            10}px) / ${this.cardsPerPage})`;
    }
    getCardsPerPage() {
        return Math.floor(this.container.nativeElement.offsetWidth / 100);
    }
    changePage(incrementor) {
        this.currentPage += incrementor;
        this.populatePagePosition();
    }
    populatePagePosition() {
        this.pagePosition = `calc(${-100 * (this.currentPage - 1)}% - ${10 *
            (this.currentPage - 1)}px)`;
    }
}
ItemDetailDesktopComponent.ɵfac = function ItemDetailDesktopComponent_Factory(t) { return new (t || ItemDetailDesktopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_biz_service__WEBPACK_IMPORTED_MODULE_4__["BizService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_info_service__WEBPACK_IMPORTED_MODULE_5__["UserInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbRatingConfig"])); };
ItemDetailDesktopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ItemDetailDesktopComponent, selectors: [["app-item-detail-desktop"]], viewQuery: function ItemDetailDesktopComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.imageContainer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
    } }, hostBindings: function ItemDetailDesktopComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function ItemDetailDesktopComponent_resize_HostBindingHandler() { return ctx.windowResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbRatingConfig"]])], decls: 116, vars: 36, consts: [[1, "container-fluid", 2, "margin-bottom", "200px"], [1, "row", "main-content"], [1, "col-sm-12", "col-lg-12"], [1, "main-card", 2, "padding", "20px"], [1, "row"], [1, "d-flex", "align-items-center", "justify-content-between", "cart-items-header", "mb-3", "px-2"], ["class", "mb-0 h5 ", 4, "ngIf"], ["style", "font-size: 16px;", "class", "mb-0 h5 ", 4, "ngIf"], [1, "col-sm-7", "col-lg-7", 2, "padding-right", "30px"], [2, "width", "100%", "height", "fit-content", "object-fit", "contain", 3, "ngStyle"], ["imageContainer", ""], ["width", "100%", "id", "main-image", 1, "large-product-image", 3, "src"], [1, "container"], ["container", ""], ["class", "left", 3, "ngClass", "click", 4, "ngIf"], [1, "cards", 3, "ngClass"], [1, "overflow", 3, "ngStyle"], ["class", "small-card", 3, "ngStyle", "click", 4, "ngFor", "ngForOf"], [1, "small-card", 2, "width", "3px", "background-color", "black", "margin-left", "10px"], ["class", "small-card", "style", "position: relative;", 3, "ngStyle", "click", 4, "ngFor", "ngForOf"], ["class", "right", 3, "ngClass", "click", 4, "ngIf"], [1, "col-sm-5", "col-lg-5"], [1, "text-muted"], [1, "product-name"], [1, "row", 2, "padding-top", "20px"], [1, "product-rating"], [3, "rate", "rateChange"], [1, "", 2, "color", "red", "padding-top", "10px"], ["class", "product-price", 4, "ngIf"], ["style", "font-size: 15px;font-weight: 500;text-decoration: underline;", 4, "ngIf"], [1, "col-sm-12", 2, "margin-top", "30px !important"], [1, "col-sm-8"], [2, "font-weight", "700"], [1, "col-sm-4", 2, "text-align", "right"], [1, "fa-solid", "fa-plus", 2, "font-family", "fontAwesome", "font-size", "larger"], [1, "col-sm-12"], [1, "cart-buttons"], [1, "item-count", 2, "border", "2px solid rgb(90, 90, 90)", "border-radius", "30px", "width", "fit-content", "padding", "0px", "display", "flex", "height", "35px"], [2, "padding-left", "15px", "padding-right", "10px", "display", "flex", "align-items", "center", "justify-content", "center", "font-size", "medium", 3, "click"], [1, "fa", "fa-minus", 2, "font-family", "'Font Awesome 6 Free' !important"], [2, "padding-left", "10px", "padding-right", "10px", "display", "flex", "align-items", "center", "justify-content", "center", "font-weight", "500", "font-size", "large", "border-right", "2px solid rgb(90, 90, 90)", "border-left", "2px solid black", "width", "50px", "text-align", "center"], [2, "padding-left", "10px", "padding-right", "15px", "display", "flex", "align-items", "center", "justify-content", "center", "font-size", "medium", 3, "click"], [1, "fa", "fa-plus", 2, "font-family", "'Font Awesome 6 Free' !important"], ["class", "btn  buy-now-button", 3, "ngStyle", "click", 4, "ngIf"], ["class", "btn  checkout-button", 3, "ngStyle", "click", 4, "ngIf"], ["class", "btn  remove-button", "style", "margin-top: 10px;", 3, "click", 4, "ngIf"], [1, "col-sm-12", "mt-3"], [1, "col-sm-4", 2, "text-align", "right", 3, "click"], ["class", "fa-solid fa-plus", "style", "font-family: fontAwesome;font-size: larger;", 4, "ngIf"], ["class", "fa-solid fa-minus", "style", "font-family: fontAwesome;font-size: larger;", 4, "ngIf"], ["style", "padding-right: 12px;", 4, "ngIf"], [1, "row", 2, "position", "relative", "margin-top", "20px"], [2, "font-weight", "600", "font-size", "large"], [2, "position", "absolute", "right", "0", "width", "fit-content", "margin-top", "5px"], [1, "fa-solid", "fa-minus", 2, "font-family", "fontAwesome", "font-size", "larger"], [1, "col-lg-12", "col-sm-12", "col-12"], [1, "table-responsive"], ["datatable", "", "id", "printTable", 1, "table", "table-borderless"], [2, "background", "white"], ["style", "border-bottom: 1px solid grey ;", 4, "ngFor", "ngForOf"], [2, "border-bottom", "1px solid grey"], ["style", "font-size:large;", 4, "ngFor", "ngForOf"], [2, "font-size", "large"], [4, "ngIf"], [2, "padding-top", "20px", "position", "fixed", "bottom", "0", "width", "100%"], [1, "mb-0", "h5"], [1, "text-color-inherit", 2, "text-decoration", "none", "font-size", "16px", 3, "href"], [1, "mb-0", "h5", 2, "font-size", "16px"], [1, "left", 3, "ngClass", "click"], [1, "fa-solid", "fa-angle-left", 2, "font-size", "xx-large", "font-family", "'Font Awesome 6 Free' !important"], [1, "small-card", 3, "ngStyle", "click"], [1, "small-img", 3, "ngStyle", "ngClass"], [1, "small-card", 2, "position", "relative", 3, "ngStyle", "click"], [1, "small-img", 2, "opacity", "0.3", 3, "ngStyle", "ngClass"], [1, "small-img", 2, "position", "absolute", "top", "0"], ["src", "assets/img/video-play.svg", "height", "100%"], [1, "right", 3, "ngClass", "click"], [1, "fa-solid", "fa-angle-right", 2, "font-size", "xx-large", "font-family", "'Font Awesome 6 Free' !important"], [1, "product-price"], [2, "font-size", "15px", "font-weight", "500", "text-decoration", "underline"], ["routerLink", "login"], [2, "color", "black"], [1, "btn", "buy-now-button", 3, "ngStyle", "click"], [1, "fa-solid", "fa-plus", 2, "font-family", "'Font Awesome 6 Free' !important"], [2, "padding-left", "10px"], [1, "btn", "checkout-button", 3, "ngStyle", "click"], [1, "btn", "remove-button", 2, "margin-top", "10px", 3, "click"], [1, "fa", "fa-trash", 2, "font-family", "'Font Awesome 6 Free' !important"], [2, "padding-right", "12px"], ["style", "color: #525252;", 4, "ngFor", "ngForOf"], [2, "color", "#525252"]], template: function ItemDetailDesktopComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ItemDetailDesktopComponent_p_8_Template, 4, 5, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ItemDetailDesktopComponent_p_9_Template, 8, 11, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ItemDetailDesktopComponent_div_19_Template, 2, 3, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ItemDetailDesktopComponent_div_22_Template, 2, 7, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ItemDetailDesktopComponent_div_24_Template, 4, 7, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ItemDetailDesktopComponent_div_25_Template, 2, 3, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ngb-rating", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rateChange", function ItemDetailDesktopComponent_Template_ngb_rating_rateChange_37_listener($event) { return ctx.product.rating = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, ItemDetailDesktopComponent_div_41_Template, 2, 1, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, ItemDetailDesktopComponent_small_42_Template, 4, 0, "small", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Select Variation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemDetailDesktopComponent_Template_span_click_57_listener() { return ctx.reduceProductCount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemDetailDesktopComponent_Template_span_click_61_listener() { return ctx.increaseProductCount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, ItemDetailDesktopComponent_button_63_Template, 4, 3, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, ItemDetailDesktopComponent_button_64_Template, 2, 3, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, ItemDetailDesktopComponent_button_66_Template, 4, 0, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Feature");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemDetailDesktopComponent_Template_div_click_79_listener() { return ctx.setShowFeatures(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, ItemDetailDesktopComponent_i_80_Template, 1, 0, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, ItemDetailDesktopComponent_i_81_Template, 1, 0, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, ItemDetailDesktopComponent_ul_85_Template, 2, 1, "ul", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " Data ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "i", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "table", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "thead", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](97, ItemDetailDesktopComponent_th_97_Template, 2, 1, "th", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "th", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Metric");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "th", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Weight");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "th", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Metric");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](104, ItemDetailDesktopComponent_th_104_Template, 2, 0, "th", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](107, ItemDetailDesktopComponent_td_107_Template, 2, 1, "td", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "td", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](109, ItemDetailDesktopComponent_span_109_Template, 2, 1, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "td", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "td", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "footer", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.subcategory == "" || ctx.subcategory == null) && (ctx.category != "" || ctx.category != null));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.subcategory != "" && ctx.subcategory != null && (ctx.category != "" || ctx.category != null));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.getImageContainerStyle());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.current_image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.totalPages > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](30, _c6, ctx.totalPages === 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](32, _c7, ctx.overflowWidth, ctx.pagePosition));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.product.images);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.videos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.totalPages > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" SKU:", ctx.product.sku, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rate", ctx.product.rating);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" MSRP: $ ", ctx.msrp, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userInfoService.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.userInfoService.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.product_count);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.userInfoService.isItemInCart(ctx.product));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userInfoService.isItemInCart(ctx.product));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userInfoService.isItemInCart(ctx.product));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.product.description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show_features === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show_features === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show_features === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.product.dimensions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](35, _c8));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.product.dimensions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.product.dimensions.length > 0 && ctx.product.dimensions[0].dimension_class);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.product.weights.weight, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.product.weights.weight_class, " ");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbRating"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], pipes: [_pipe_title_case_pipe__WEBPACK_IMPORTED_MODULE_9__["TitleCasePipe"]], styles: [".text-color-inherit[_ngcontent-%COMP%] {\n  color: inherit;\n}\n\n*[_ngcontent-%COMP%] {\n  font-family: \"sofia\";\n}\n\n.large-product-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  max-height: 600px;\n}\n\n.product-price[_ngcontent-%COMP%] {\n  line-height: 24px;\n  font-size: 40px;\n  font-weight: 700;\n}\n\n.product-rating[_ngcontent-%COMP%] {\n  float: right;\n  margin-top: -10px;\n}\n\n.product-name[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: 700;\n}\n\n.product-description[_ngcontent-%COMP%] {\n  font-size: large;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.product-description-header[_ngcontent-%COMP%] {\n  font-size: x-large;\n  margin-top: 30px;\n}\n\n.line[_ngcontent-%COMP%] {\n  background-color: #7a7878;\n  height: 3px;\n  width: 98%;\n  margin: auto;\n}\n\n.icon[_ngcontent-%COMP%] {\n  right: 0;\n  margin-right: 20px;\n  top: 0;\n  position: absolute;\n  font-size: large;\n}\n\n.add-cart[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  font-size: x-large;\n  color: white;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\n.add-cart-button[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: auto;\n  color: #fff;\n  font-weight: 500;\n  border-radius: 5px;\n}\n\n.buy-now-button[_ngcontent-%COMP%] {\n  min-width: 30%;\n  color: #fff;\n  font-weight: 500;\n  border-radius: 10px;\n}\n\n.checkout-button[_ngcontent-%COMP%] {\n  min-width: 35%;\n  color: #fff;\n  font-weight: 500;\n  border-radius: 10px;\n}\n\n.remove-button[_ngcontent-%COMP%] {\n  min-width: 30%;\n  border-color: #d10404;\n  background: white;\n  color: black;\n  font-weight: 500;\n  border-radius: 10px;\n}\n\n.product-stock-status[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: medium;\n}\n\n.delivery-policy[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: medium;\n}\n\n.like-button[_ngcontent-%COMP%] {\n  float: right;\n  font-size: xx-large;\n}\n\n.product-card-detail[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  padding: 10px;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.card-detail[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n\n.product-description-header[_ngcontent-%COMP%] {\n  font-size: xx-large !important;\n  font-weight: 500;\n}\n\n.product-description[_ngcontent-%COMP%] {\n  font-size: medium !important;\n}\n\n.w-100[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n\n\n\n.container[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: flex;\n  position: relative;\n  justify-content: center;\n}\n\n.cards[_ngcontent-%COMP%] {\n  width: calc(100% - 80px);\n  overflow: hidden;\n}\n\n.overflow[_ngcontent-%COMP%] {\n  position: relative;\n  transition: left 0.5s ease-in-out;\n}\n\n.small-card[_ngcontent-%COMP%] {\n  height: 100px;\n  background-color: #e0e1e2;\n  border-radius: 5px;\n  padding: 1px;\n  display: inline-block;\n  margin-right: 10px;\n  position: relative;\n}\n\n.small-card-selected[_ngcontent-%COMP%] {\n  border: solid 1px black;\n  border-radius: 5px;\n}\n\n.small-card-not-selected[_ngcontent-%COMP%] {\n  border: 0px;\n  border-radius: 5px;\n}\n\n.small-img[_ngcontent-%COMP%] {\n  background-repeat: round;\n}\n\n.no-right-margin[_ngcontent-%COMP%] {\n  margin-right: 0px;\n}\n\n.small-card[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n  height: 30px;\n  padding-left: 5px;\n  padding-right: 5px;\n  width: 30px;\n  color: black;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.left.disabled[_ngcontent-%COMP%], .right.disabled[_ngcontent-%COMP%] {\n  color: #CCC;\n}\n\n.left[_ngcontent-%COMP%] {\n  left: 0;\n}\n\n.right[_ngcontent-%COMP%] {\n  right: 0;\n}\n\n.button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 8px 16px;\n  background-color: #f1f1f1;\n  border: none;\n  border-radius: 4px;\n  color: #555;\n  font-size: 16px;\n  cursor: pointer;\n  transition: background-color 0.3s;\n}\n\n.button[_ngcontent-%COMP%]:hover {\n  background-color: #ddd;\n}\n\n.button[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 24px;\n  margin-right: 8px;\n  background-color: #555;\n  color: #fff;\n  border-radius: 50%;\n  font-size: 14px;\n}\n\n.button[_ngcontent-%COMP%]   .plus[_ngcontent-%COMP%]:before {\n  content: \"+\";\n}\n\n.button[_ngcontent-%COMP%]   .minus[_ngcontent-%COMP%]:before {\n  content: \"-\";\n}\n\n@media (min-width: 991.98px) {\n  .main-content[_ngcontent-%COMP%] {\n    padding-top: 140px;\n    padding-left: 50px;\n    padding-right: 50px;\n  }\n}\n\n@media (max-width: 991.98px) {\n  .main-content[_ngcontent-%COMP%] {\n    padding-top: 80px;\n    padding-left: 5px;\n    padding-right: 5px;\n  }\n\n  .cart-buttons[_ngcontent-%COMP%] {\n    display: contents;\n  }\n\n  .remove-button[_ngcontent-%COMP%], .buy-now-button[_ngcontent-%COMP%], .checkout-button[_ngcontent-%COMP%] {\n    margin-left: 0px;\n    margin-top: 10px;\n  }\n}\n\n@media (min-width: 991.98px) {\n  .cart-buttons[_ngcontent-%COMP%] {\n    display: flex;\n  }\n\n  .buy-now-button[_ngcontent-%COMP%], .checkout-button[_ngcontent-%COMP%] {\n    margin-left: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2l0ZW0tZGV0YWlsLWRlc2t0b3AuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxjQUFBO0FBQUY7O0FBSUE7RUFDRSxvQkFBQTtBQURGOztBQUlBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQURGOztBQUdBO0VBRUUsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFHQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFJQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBREY7O0FBSUE7RUFDRSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBREY7O0FBS0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBRkY7O0FBUUE7RUFDTSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFMTjs7QUFTQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQU5GOztBQWFBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQVZGOztBQWNBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQVhGOztBQWNBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQVhGOztBQWFBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBVkY7O0FBYUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUFWRjs7QUFZQTtFQUNFLHVCQUFBO0FBVEY7O0FBV0E7RUFDRSxZQUFBO0FBUkY7O0FBVUE7RUFFRSw4QkFBQTtFQUNBLGdCQUFBO0FBUkY7O0FBV0E7RUFDRSw0QkFBQTtBQVJGOztBQVVBO0VBQ0Usc0JBQUE7QUFQRjs7QUFTQTs7Ozs7Ozs7OztFQUFBOztBQVlBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQVBGOztBQVVBO0VBQ0Usd0JBQUE7RUFDQSxnQkFBQTtBQVBGOztBQVVBO0VBQ0Usa0JBQUE7RUFDQSxpQ0FBQTtBQVBGOztBQVVBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBUEY7O0FBU0E7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0FBTkY7O0FBUUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFMRjs7QUFPQTtFQUNFLHdCQUFBO0FBSkY7O0FBT0E7RUFDRSxpQkFBQTtBQUpGOztBQU9BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFKRjs7QUFPQTs7RUFFRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFKRjs7QUFPQTtFQUNFLFdBQUE7QUFKRjs7QUFPQTtFQUNFLE9BQUE7QUFKRjs7QUFPQTtFQUNFLFFBQUE7QUFKRjs7QUFTQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtBQU5GOztBQVNBO0VBQ0Usc0JBQUE7QUFORjs7QUFTQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQU5GOztBQVNBO0VBQ0UsWUFBQTtBQU5GOztBQVNBO0VBQ0UsWUFBQTtBQU5GOztBQVNBO0VBQ0U7SUFDRSxrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RUFORjtBQUNGOztBQVNBO0VBQ0U7SUFDRSxpQkFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7RUFQRjs7RUFVQTtJQUNFLGlCQUFBO0VBUEY7O0VBVUE7SUFDRSxnQkFBQTtJQUNBLGdCQUFBO0VBUEY7QUFDRjs7QUFXQTtFQUVFO0lBQ0UsYUFBQTtFQVZGOztFQVlBO0lBQ0UsaUJBQUE7RUFURjtBQUNGIiwiZmlsZSI6Iml0ZW0tZGV0YWlsLWRlc2t0b3AuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi50ZXh0LWNvbG9yLWluaGVyaXQge1xuICBjb2xvcjppbmhlcml0XG59XG5cblxuKntcbiAgZm9udC1mYW1pbHk6ICdzb2ZpYSc7XG59XG5cbi5sYXJnZS1wcm9kdWN0LWltYWdle1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXgtaGVpZ2h0OjYwMHB4IDtcbn1cbi5wcm9kdWN0LXByaWNle1xuICAvLyBtYXJnaW4tdG9wOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLnByb2R1Y3QtcmF0aW5ne1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xufVxuXG4ucHJvZHVjdC1uYW1le1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5wcm9kdWN0LWRlc2NyaXB0aW9ue1xuICBmb250LXNpemU6IGxhcmdlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ucHJvZHVjdC1kZXNjcmlwdGlvbi1oZWFkZXJ7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgbWFyZ2luLXRvcDozMHB4O1xuXG5cbn1cbi5saW5le1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIyLCAxMjAsIDEyMCk7XG4gIGhlaWdodDogM3B4O1xuICB3aWR0aDogOTglO1xuICBtYXJnaW46YXV0bztcblxufVxuLmljb257XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIHRvcDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXNpemU6IGxhcmdlO1xufVxuXG4uYWRkLWNhcnR7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgY29sb3I6d2hpdGU7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cblxuLmFkZC1jYXJ0LWJ1dHRvbntcbiAgd2lkdGg6MTAwJTtcbiAgcGFkZGluZzogYXV0bztcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiBcblxuXG59XG5cbi5idXktbm93LWJ1dHRvbntcbiAgICAgIG1pbi13aWR0aDozMCU7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBcbiAgXG59XG4uY2hlY2tvdXQtYnV0dG9ue1xuICBtaW4td2lkdGg6MzUlO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcblxuXG59XG5cblxuXG4ucmVtb3ZlLWJ1dHRvbntcbiAgbWluLXdpZHRoOjMwJTtcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjA5LCA0LCA0KTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcblxuXG59XG4ucHJvZHVjdC1zdG9jay1zdGF0dXN7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xufVxuXG4uZGVsaXZlcnktcG9saWN5e1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXNpemU6IG1lZGl1bTtcbn1cbi5saWtlLWJ1dHRvbntcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IHh4LWxhcmdlO1xufVxuXG4ucHJvZHVjdC1jYXJkLWRldGFpbHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5jYXJkLWhlYWRlcntcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbn1cbi5jYXJkLWRldGFpbHtcbiAgcGFkZGluZzogMHB4O1xufVxuLnByb2R1Y3QtZGVzY3JpcHRpb24taGVhZGVye1xuIFxuICBmb250LXNpemU6IHh4LWxhcmdlICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5wcm9kdWN0LWRlc2NyaXB0aW9ue1xuICBmb250LXNpemU6IG1lZGl1bSAhaW1wb3J0YW50O1xufVxuLnctMTAwIHtcbiAgd2lkdGg6IDEwMCUhaW1wb3J0YW50O1xufVxuLypcbi5tYWluLWNhcmR7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDAgNnB4Izc3NztcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMCA2cHgjNzc3O1xuICAgICAgIGJveC1zaGFkb3c6IDBweCAwIDZweCM3Nzc7XG59XG4uZGVsaXZlcnktY2FyZHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMCA2cHgjNzc3O1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAwIDZweCM3Nzc7XG4gICAgICAgYm94LXNoYWRvdzogMHB4IDAgNnB4Izc3Nztcbn0qL1xuXG4uY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNhcmRzIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDgwcHgpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ub3ZlcmZsb3cge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IGxlZnQgMC41cyBlYXNlLWluLW91dDtcbn1cblxuLnNtYWxsLWNhcmR7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUxZTI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNtYWxsLWNhcmQtc2VsZWN0ZWR7XG4gIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uc21hbGwtY2FyZC1ub3Qtc2VsZWN0ZWR7XG4gIGJvcmRlcjogMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uc21hbGwtaW1ne1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcm91bmQ7XG59XG5cbi5uby1yaWdodC1tYXJnaW4ge1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbn1cblxuLnNtYWxsLWNhcmQgZGl2IHtcbiAgd2lkdGg6MTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubGVmdCxcbi5yaWdodCB7XG4gIGhlaWdodDogMzBweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4ubGVmdC5kaXNhYmxlZCwgLnJpZ2h0LmRpc2FibGVkIHtcbiAgY29sb3I6I0NDQztcbn1cblxuLmxlZnQge1xuICBsZWZ0OiAwO1xufVxuXG4ucmlnaHQge1xuICByaWdodDogMDtcbn1cblxuXG5cbi5idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY29sb3I6ICM1NTU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XG59XG5cbi5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xufVxuXG4uYnV0dG9uIC5pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5idXR0b24gLnBsdXM6YmVmb3JlIHtcbiAgY29udGVudDogXCIrXCI7XG59XG5cbi5idXR0b24gLm1pbnVzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiLVwiO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkxLjk4cHgpIHsgXG4gIC5tYWluLWNvbnRlbnQge1xuICAgIHBhZGRpbmctdG9wOiAxNDBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpIHsgXG4gIC5tYWluLWNvbnRlbnQge1xuICAgIHBhZGRpbmctdG9wOiA4MHB4O1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgfVxuXG4gIC5jYXJ0LWJ1dHRvbnN7XG4gICAgZGlzcGxheTogY29udGVudHM7XG4gIH1cblxuICAucmVtb3ZlLWJ1dHRvbiwuYnV5LW5vdy1idXR0b24sLmNoZWNrb3V0LWJ1dHRvbntcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgIG1hcmdpbi10b3A6MTBweDtcbiAgfVxuXG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTEuOThweCkgeyBcblxuICAuY2FydC1idXR0b25ze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgLmJ1eS1ub3ctYnV0dG9uLC5jaGVja291dC1idXR0b257XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIH1cbn0iXX0= */"] });


/***/ }),

/***/ "YcN/":
/*!************************************************************!*\
  !*** ./src/app/views/spin-loader/spin-loader.component.ts ***!
  \************************************************************/
/*! exports provided: SpinLoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinLoaderComponent", function() { return SpinLoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_biz_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/biz.service */ "Epua");


class SpinLoaderComponent {
    constructor(bizService) {
        this.bizService = bizService;
        this.color = "#000000";
        this.color = this.bizService.get_background_color();
    }
    ngOnInit() {
    }
}
SpinLoaderComponent.ɵfac = function SpinLoaderComponent_Factory(t) { return new (t || SpinLoaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_biz_service__WEBPACK_IMPORTED_MODULE_1__["BizService"])); };
SpinLoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinLoaderComponent, selectors: [["app-spin-loader"]], decls: 9, vars: 1, consts: [[1, "row", 2, "margin-top", "30px", "margin-bottom", "30px", "justify-content", "center"], [1, "image"], ["width", "40px", "height", "40px", "viewBox", "0 0 16 16", "xmlns", "http://www.w3.org/2000/svg", "fill", "none", "transform", "rotate(0)", 1, "hds-flight-icon--animation-loading"], ["id", "SVGRepo_bgCarrier", "stroke-width", "0"], ["id", "SVGRepo_tracerCarrier", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "SVGRepo_iconCarrier"], ["fill-rule", "evenodd", "clip-rule", "evenodd"], ["d", "M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z", "opacity", ".2"], ["d", "M7.25.75A.75.75 0 018 0a8 8 0 018 8 .75.75 0 01-1.5 0A6.5 6.5 0 008 1.5a.75.75 0 01-.75-.75z"]], template: function SpinLoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "g", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "g", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "g", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "g", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("fill", ctx.color);
    } }, styles: ["@keyframes spin {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.loader-spinner[_ngcontent-%COMP%] {\n  animation: spin 4s linear infinite;\n  height: 50px;\n  width: 50px;\n}\n.image[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  padding: 0px !important;\n  animation: spin 2s linear infinite;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NwaW4tbG9hZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0U7SUFFSSx5QkFBQTtFQUlKO0FBQ0Y7QUFEQTtFQUdFLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFHRjtBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUdBLGtDQUFBO0FBR0YiLCJmaWxlIjoic3Bpbi1sb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbkAtbW96LWtleWZyYW1lcyBzcGluIHsgXG4gIDEwMCUgeyAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH0gXG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7IFxuICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9IFxufVxuQGtleWZyYW1lcyBzcGluIHsgXG4gIDEwMCUgeyBcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgXG4gICAgICB0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7IFxuICB9IFxufVxuXG4ubG9hZGVyLXNwaW5uZXJ7XG4gIC13ZWJraXQtYW5pbWF0aW9uOnNwaW4gNHMgbGluZWFyIGluZmluaXRlO1xuICAtbW96LWFuaW1hdGlvbjpzcGluIDRzIGxpbmVhciBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOnNwaW4gNHMgbGluZWFyIGluZmluaXRlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xufVxuXG4uaW1hZ2Uge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nOiAwcHghaW1wb3J0YW50O1xuICAtd2Via2l0LWFuaW1hdGlvbjpzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgLW1vei1hbmltYXRpb246c3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjpzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcbn0iXX0= */"] });


/***/ }),

/***/ "b/hC":
/*!************************************************!*\
  !*** ./src/app/services/search-bar.service.ts ***!
  \************************************************/
/*! exports provided: SearchBarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarService", function() { return SearchBarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SearchBarService {
    constructor() {
        this.onSearch = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    search(query) {
        this.onSearch.emit(query);
    }
}
SearchBarService.ɵfac = function SearchBarService_Factory(t) { return new (t || SearchBarService)(); };
SearchBarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SearchBarService, factory: SearchBarService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "dtwp":
/*!******************************************************************!*\
  !*** ./src/app/views/payment-method/payment-method.component.ts ***!
  \******************************************************************/
/*! exports provided: PaymentMethodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentMethodComponent", function() { return PaymentMethodComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var src_app_services_user_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user-info.service */ "lg7r");
/* harmony import */ var src_app_services_biz_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/biz.service */ "Epua");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../header/header.component */ "MR1q");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../footer/footer.component */ "FPq/");










function PaymentMethodComponent_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pm_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", pm_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](pm_r2.name);
} }
function PaymentMethodComponent_option_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cct_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", cct_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](cct_r3.name);
} }
const _c0 = function (a0) { return { "background-color": a0 }; };
class PaymentMethodComponent {
    constructor(formBuilder, apiService, userInfoService, bizService, router, route) {
        this.formBuilder = formBuilder;
        this.apiService = apiService;
        this.userInfoService = userInfoService;
        this.bizService = bizService;
        this.router = router;
        this.route = route;
        this.cartItems = [];
        this.payment_methods = [{
                id: "1",
                name: "Credit Card"
            }];
        this.credit_card_types = [{
                id: "1",
                name: "America Express"
            }];
        this.cart_summary = {
            currency: '$',
            subtotal: '0',
            freight_cost: '0',
            estimated_tax: '0',
            total_cost: '0'
        };
    }
    ngOnInit() {
        this.paymentForm = this.formBuilder.group({
            order_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            payment_method: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            credit_card_type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            card_number: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            card_owner: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            expiration_date: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            cvc: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
        });
        this.cartItems = this.userInfoService.getCartItems();
        this.paymentForm.patchValue({ order_id: this.route.snapshot.params.order_id });
        this.calculateCartCost();
        this.apiService.getPaymentMethods().subscribe(res => { this.payment_methods = res; }, err => { });
        this.apiService.getCreditCardTypes().subscribe(res => { this.credit_card_types = res; }, err => { });
    }
    submitForm() {
        this.apiService.addOrderPaymentMethod(this.paymentForm.value).subscribe(res => {
            this.router.navigateByUrl("/" + this.bizService.getBizId() + '/confirm-order/' + this.route.snapshot.params.order_id);
        }, err => { });
    }
    calculateCartCost() {
        this.cart_summary.subtotal = 0;
        this.cart_summary.total_cost = 0;
        this.cart_summary.freight_cost = 0;
        for (var i = 0; i < this.cartItems.length; i++) {
            let item = this.cartItems[i];
            this.cart_summary.subtotal = this.cart_summary.subtotal + parseFloat(item.pricing.first_cost) * item.product_count;
            this.cart_summary.freight_cost = this.cart_summary.freight_cost + parseFloat(item.pricing.freight_cost) * item.product_count;
            this.cart_summary.total_cost = parseFloat(((this.cart_summary.subtotal + this.cart_summary.freight_cost)).toFixed(2));
            this.cart_summary.subtotal = this.cart_summary.total_cost;
        }
        // this.apiService.calculateCartCosts(this.userInfoService.getCartItems()).subscribe(res=>{
        //   this.cart_summary=res;
        // },err=>{});
    }
}
PaymentMethodComponent.ɵfac = function PaymentMethodComponent_Factory(t) { return new (t || PaymentMethodComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_info_service__WEBPACK_IMPORTED_MODULE_3__["UserInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_biz_service__WEBPACK_IMPORTED_MODULE_4__["BizService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
PaymentMethodComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PaymentMethodComponent, selectors: [["app-payment-method"]], decls: 90, vars: 15, consts: [[2, "padding-top", "100px"], [1, "main-content"], [1, "row"], [1, "page-title"], [3, "formGroup"], [1, "row", "form-info"], [1, "col-lg-6", "col-sm-6", "col-12", "col-form"], [1, "form-group"], ["formControlName", "payment_method", "placeholder", "Payment Method", 1, "form-select", "round-input"], [3, "value", 4, "ngFor", "ngForOf"], [1, "row", 2, "margin-top", "20px"], ["formControlName", "credit_card_type", "placeholder", "Credit Card Type", 1, "form-select", "round-input"], ["formControlName", "card_number", "placeholder", "Card Number", 1, "form-control", "round-input"], ["formControlName", "card_owner", "placeholder", "Card Owner", 1, "form-control", "round-input"], [1, "col-sm-6", "col-lg-6"], ["formControlName", "expiration_date", "placeholder", "02/23", 1, "form-control", "round-input"], [1, "col-sm-6", "col-lg-6", "small-margin-top-20"], ["formControlName", "cvc", "placeholder", "cvc", 1, "form-control", "round-input"], [1, "row", 2, "margin-top", "30px", "justify-content", "center"], [1, "submit-now-button", 3, "ngStyle", "click"], [1, "col-lg-6", "col-sm-6", "col-12", "col-summary"], [1, "card", "summary-card"], [1, "card-body"], [2, "font-weight", "700"], [2, "font-size", "medium"], [1, "row", 2, "margin-top", "15px"], [1, "line"], [2, "display", "inline-block"], [2, "float", "right"], [1, "row", 2, "margin-top", "50px"], [2, "padding-top", "20px"], [3, "value"]], template: function PaymentMethodComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Payment Method");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Payment Method");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, PaymentMethodComponent_option_16_Template, 2, 2, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Credit Card Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, PaymentMethodComponent_option_22_Template, 2, 2, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Card Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Name on Card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Expiration Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "CVC");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PaymentMethodComponent_Template_button_click_45_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Save & Continue");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Cart Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, " Order Subtotal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, " Freight Cost");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, " Estimated Tax");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Add Gift Card/Promo Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "footer", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](89, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.paymentForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.payment_methods);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.credit_card_types);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c0, ctx.bizService.get_background_color()));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.userInfoService.getCartItems().length, " items");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.cart_summary.currency, "", ctx.cart_summary.subtotal, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.cart_summary.currency, "", ctx.cart_summary.freight_cost, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.cart_summary.currency, "", ctx.cart_summary.estimated_tax, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.cart_summary.currency, "", ctx.cart_summary.total_cost, "");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_z"]], styles: [".main[_ngcontent-%COMP%] {\n  font-size: large;\n}\n\n.summary-card[_ngcontent-%COMP%] {\n  box-shadow: 0px 0 6px #777;\n}\n\n.submit-now-button[_ngcontent-%COMP%] {\n  height: 50px;\n  color: #fff;\n  font-size: large;\n  padding: auto;\n  font-weight: 500;\n  border-radius: 15px;\n  border: none;\n}\n\n.card[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  padding: 20px;\n}\n\n.page-title[_ngcontent-%COMP%] {\n  margin-top: 0px;\n  font-size: x-large;\n}\n\n.card-round[_ngcontent-%COMP%] {\n  background-color: #F0FBF9;\n  border-radius: 10px;\n  height: 100%;\n  padding: 20px;\n}\n\n.info-title[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-weight: 900;\n  font-size: large;\n}\n\n.info-title-section[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.dash[_ngcontent-%COMP%] {\n  background-color: #0c0c0c;\n  height: 5px;\n  width: 20px;\n}\n\n.line[_ngcontent-%COMP%] {\n  background-color: #f1f1f1;\n  height: 4px;\n  width: 98%;\n  margin: auto;\n}\n\n.form-info[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n.form-group[_ngcontent-%COMP%]   .round-input[_ngcontent-%COMP%] {\n  border-radius: 20px !important;\n  height: 50px;\n  padding-left: 15px;\n  border: 2px solid #C1C7D6;\n}\n\n.full-height[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.form-group[_ngcontent-%COMP%]   .text-area-height[_ngcontent-%COMP%] {\n  height: 82%;\n}\n\n.img-table[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n\n.table-borderless[_ngcontent-%COMP%] {\n  border: 0px;\n}\n\n.submit-button-section[_ngcontent-%COMP%] {\n  padding-top: 100px;\n}\n\n.btn-submit[_ngcontent-%COMP%] {\n  float: right;\n  height: 50px;\n  padding: auto;\n  border-radius: 10px;\n  font-size: large;\n}\n\n.page-title[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  font-size: x-large;\n}\n\n@media (min-width: 991.98px) {\n  .col-summary[_ngcontent-%COMP%] {\n    padding-left: 50px;\n  }\n\n  .col-form[_ngcontent-%COMP%] {\n    padding-right: 50px;\n  }\n\n  .main-content[_ngcontent-%COMP%] {\n    padding-left: 50px;\n    padding-right: 50px;\n  }\n\n  .page-title[_ngcontent-%COMP%] {\n    margin-top: 50px;\n    font-size: x-large;\n  }\n\n  .submit-now-button[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n\n@media (max-width: 991.98px) {\n  .col-summary[_ngcontent-%COMP%] {\n    padding-top: 20px;\n  }\n\n  .submit-now-button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media (max-width: 575.98px) {\n  .small-margin-top-20[_ngcontent-%COMP%] {\n    margin-top: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BheW1lbnQtbWV0aG9kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUdPLDBCQUFBO0FBQ1A7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBSUE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7QUFERjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBSUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBREY7O0FBSUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQURGOztBQUlBO0VBQ0UsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLGdCQUFBO0FBREY7O0FBSUU7RUFDRSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBREo7O0FBS0E7RUFDRSxZQUFBO0FBRkY7O0FBTUE7RUFDRSxXQUFBO0FBSEY7O0FBUUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUxGOztBQVNBO0VBQ0UsV0FBQTtBQU5GOztBQVVBO0VBQ0Usa0JBQUE7QUFQRjs7QUFVQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFQRjs7QUFVQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFQRjs7QUFXQTtFQUNFO0lBQ0Usa0JBQUE7RUFSRjs7RUFVQTtJQUNFLG1CQUFBO0VBUEY7O0VBU0E7SUFDRSxrQkFBQTtJQUNBLG1CQUFBO0VBTkY7O0VBUUE7SUFDRSxnQkFBQTtJQUNBLGtCQUFBO0VBTEY7O0VBT0E7SUFFRSxVQUFBO0VBTEY7QUFDRjs7QUFRQTtFQUNFO0lBQ0UsaUJBQUE7RUFORjs7RUFRQTtJQUNFLFdBQUE7RUFMRjtBQUNGOztBQVNBO0VBQ0U7SUFDRSxnQkFBQTtFQVBGO0FBQ0YiLCJmaWxlIjoicGF5bWVudC1tZXRob2QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbntcbiAgZm9udC1zaXplOiBsYXJnZTtcbn1cblxuLnN1bW1hcnktY2FyZHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMCA2cHgjNzc3O1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAwIDZweCM3Nzc7XG4gICAgICAgYm94LXNoYWRvdzogMHB4IDAgNnB4Izc3Nztcbn1cblxuLnN1Ym1pdC1ub3ctYnV0dG9ue1xuICBoZWlnaHQ6IDUwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IGxhcmdlO1xuICBwYWRkaW5nOiBhdXRvO1xuICBmb250LXdlaWdodDogNTAwO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3JkZXI6bm9uZTtcblxufVxuXG5cbi5jYXJke1xuICBib3JkZXItcmFkaXVzOjEwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4ucGFnZS10aXRsZXtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG59XG4uY2FyZC1yb3VuZHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YwRkJGOTtcbiAgYm9yZGVyLXJhZGl1czoxMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5pbmZvLXRpdGxle1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LXNpemU6IGxhcmdlO1xuXG59XG4uaW5mby10aXRsZS1zZWN0aW9ue1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG59XG5cblxuLmRhc2h7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMiwgMTIsIDEyKTtcbiAgaGVpZ2h0OiA1cHg7XG4gIHdpZHRoOiAyMHB4O1xufVxuXG4ubGluZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MSwgMjQxLCAyNDEpO1xuICBoZWlnaHQ6IDRweDtcbiAgd2lkdGg6IDk4JTtcbiAgbWFyZ2luOmF1dG87XG5cbn1cbi5mb3JtLWluZm97XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbmxhYmVse1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLmZvcm0tZ3JvdXAge1xuICAucm91bmQtaW5wdXR7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgI0MxQzdENjtcbiAgfVxufVxuXG4uZnVsbC1oZWlnaHR7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuXG4uZm9ybS1ncm91cCAudGV4dC1hcmVhLWhlaWdodHtcbiAgaGVpZ2h0OiA4MiU7XG59XG5cblxuXG4uaW1nLXRhYmxle1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xufVxuXG5cbi50YWJsZS1ib3JkZXJsZXNze1xuICBib3JkZXI6MHB4O1xufVxuXG5cbi5zdWJtaXQtYnV0dG9uLXNlY3Rpb257XG4gIHBhZGRpbmctdG9wOjEwMHB4O1xufVxuXG4uYnRuLXN1Ym1pdHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBhZGRpbmc6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG5cbi5wYWdlLXRpdGxle1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG59XG5cblxuQG1lZGlhIChtaW4td2lkdGg6IDk5MS45OHB4KSB7IFxuICAuY29sLXN1bW1hcnl7XG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICB9XG4gIC5jb2wtZm9ybXtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xuICB9XG4gIC5tYWluLWNvbnRlbnR7XG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gIH1cbiAgLnBhZ2UtdGl0bGV7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XG4gIH1cbiAgLnN1Ym1pdC1ub3ctYnV0dG9ue1xuICBcbiAgICB3aWR0aDogNTAlO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCl7XG4gIC5jb2wtc3VtbWFyeXtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgfVxuICAuc3VibWl0LW5vdy1idXR0b257ICBcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOThweCl7XG4gIC5zbWFsbC1tYXJnaW4tdG9wLTIwe1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "fsx9":
/*!*******************************************************************!*\
  !*** ./src/app/directives/hover-activated-accordion.directive.ts ***!
  \*******************************************************************/
/*! exports provided: HoverActivatedAccordionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoverActivatedAccordionDirective", function() { return HoverActivatedAccordionDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HoverActivatedAccordionDirective {
    constructor() {
        this.fileDropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    onMouseOver(evt) {
        this.mouseover = true;
    }
    onMouseOut(evt) {
        this.mouseover = false;
    }
}
HoverActivatedAccordionDirective.ɵfac = function HoverActivatedAccordionDirective_Factory(t) { return new (t || HoverActivatedAccordionDirective)(); };
HoverActivatedAccordionDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: HoverActivatedAccordionDirective, selectors: [["", "hoverActivatedAccordion", ""]], hostVars: 2, hostBindings: function HoverActivatedAccordionDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function HoverActivatedAccordionDirective_mouseover_HostBindingHandler($event) { return ctx.onMouseOver($event); })("mouseout", function HoverActivatedAccordionDirective_mouseout_HostBindingHandler($event) { return ctx.onMouseOut($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("display-block", ctx.mouseover);
    } }, outputs: { fileDropped: "fileDropped" } });


/***/ }),

/***/ "hWxu":
/*!****************************************************!*\
  !*** ./src/app/views/account/account.component.ts ***!
  \****************************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var src_app_services_user_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user-info.service */ "lg7r");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header/header.component */ "MR1q");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../footer/footer.component */ "FPq/");





class AccountComponent {
    constructor(apiService, userInfoService) {
        this.apiService = apiService;
        this.userInfoService = userInfoService;
        this.customer_detail = {
            "address_1": "",
            "address_2": "",
            "city": "",
            "state": "",
            "postal_code": "",
            "country": "",
            "company": "",
            "id": "",
            "banking": {
                "id": "",
                "payment_type": "",
                "bank_address": "",
                "secondary_bank_address": "",
                "account_no": "",
                "routing_no": "",
                "account_type": "",
                "card_number": "",
                "expiry_month": "",
                "expiry_year": "",
                "zip_code": "",
                "cvc_code": "",
                "card_holder": "",
                "payment_terms": "",
                "custom_payment_terms": "",
                "customer": ""
            },
            "contacts": {
                "id": "",
                "first_name": "",
                "last_name": "",
                "email": "",
                "wechat": "",
                "whatsapp": "",
                "primary_language": "",
                "secondary_language": "",
                "phone": "",
                "customer": ""
            },
            "shipping": {
                "id": "",
                "address_1": "",
                "address_2": "",
                "state": "",
                "region": "",
                "dropship": "",
                "city": "",
                "preferred_carrier": "",
                "zip_code": "",
                "country": "",
                "ship_allowance": "",
                "ship_discount": "",
                "customer": ""
            },
            "logo": "",
            "location": {},
            "allowances": [{
                    "id": "",
                    "shipment_parameter": "",
                    "preferred_carrier": "",
                    "customer": ""
                }]
        };
        this.orders = [];
    }
    ngOnInit() {
        this.apiService.getCustomerDetail(this.userInfoService.getCustomerId()).subscribe(res => {
            this.customer_detail = res;
        }, err => { });
    }
    joinName(first_name, last_name) {
        return first_name + " " + last_name;
    }
}
AccountComponent.ɵfac = function AccountComponent_Factory(t) { return new (t || AccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_info_service__WEBPACK_IMPORTED_MODULE_2__["UserInfoService"])); };
AccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccountComponent, selectors: [["app-account"]], decls: 127, vars: 19, consts: [[1, "container-fluid"], [1, "row", "main-content"], [1, "card", 2, "border", "none"], [1, "card-body", 2, "padding-top", "100px"], [1, "col-sm-12", "col-lg-12"], [1, "row", "info-title-section"], [1, "col-lg-12", "col-sm-12", "col-12"], [1, "row"], [1, "info-title"], [1, "dash", 2, "float", "right", "margin-top", "-15px"], [1, "line"], [1, "row", "form-info"], [1, "col-lg-3", "col-sm-3", "col-12"], [1, "row", 2, "margin-top", "10px"], [1, "form-group"], ["disabled", "", "type", "text", "placeholder", "Company Name", 1, "form-control", "round-input", 3, "value"], ["disabled", "", "type", "text", "placeholder", "Contact Name", 1, "form-control", "round-input", 3, "value"], ["disabled", "", "type", "text", "placeholder", "1-999-999-9999", 1, "form-control", "round-input", 3, "value"], ["disabled", "", "type", "text", "placeholder", "Email", 1, "form-control", "round-input", 3, "value"], ["disabled", "", "type", "text", "placeholder", "Address", 1, "form-control", "round-input", 3, "value"], ["disabled", "", "type", "text", "placeholder", "Secondary Address", 1, "form-control", "round-input", 3, "value"], ["disabled", "", "type", "text", "placeholder", "Country", 1, "form-control", "round-input", 3, "value"], ["disabled", "", "type", "text", "placeholder", "Utah", 1, "form-control", "round-input", 3, "value"], ["disabled", "", "type", "text", "placeholder", "84433", 1, "form-control", "round-input", 3, "value"], ["disabled", "", "type", "text", "placeholder", "Credit Card", 1, "form-control", "round-input", 3, "value"], ["disabled", "", "type", "text", "placeholder", "Card Name", 1, "form-control", "round-input", 3, "value"], ["disabled", "", "type", "text", "placeholder", "***************", 1, "form-control", "round-input", 3, "value"], ["disabled", "", "type", "text", 1, "form-control", "round-input", 3, "value"], ["disabled", "", "type", "text", "placeholder", "***", 1, "form-control", "round-input", 3, "value"], ["disabled", "", "type", "text", "placeholder", "United Stated", 1, "form-control", "round-input", 3, "value"], [2, "padding-top", "20px"]], template: function AccountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Account Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Company Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Contact Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Secondary Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Zip Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Payment Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Payment Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Card Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Card Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Expiration Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "CVC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Billing Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Zip Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "footer", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.customer_detail.company);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.joinName(ctx.customer_detail.contacts.first_name, ctx.customer_detail.contacts.last_name));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.customer_detail.contacts.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.customer_detail.contacts.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.customer_detail.address_1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.customer_detail.address_2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.customer_detail.country);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.customer_detail.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.customer_detail.postal_code);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.customer_detail.banking.payment_type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.customer_detail.banking.card_holder);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.customer_detail.banking.card_number);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("value", "", ctx.customer_detail.banking.expiry_month, "", ctx.customer_detail.banking.expiry_year, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.customer_detail.banking.cvc_code);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.customer_detail.banking.bank_address);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.customer_detail.country);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.customer_detail.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.customer_detail.banking.zip_code);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: ["*[_ngcontent-%COMP%] {\n  font-family: \"sofia\";\n}\n\n@media (min-width: 991.98px) {\n  .main-content[_ngcontent-%COMP%] {\n    padding-left: 100px;\n    padding-right: 100px;\n  }\n}\n\n.line[_ngcontent-%COMP%] {\n  background-color: #7a7878;\n  height: 3px;\n  width: 100%;\n}\n\n.icon[_ngcontent-%COMP%] {\n  right: 0;\n  margin-right: 20px;\n  top: 0;\n  position: absolute;\n  font-size: large;\n}\n\n.add-cart[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  font-size: x-large;\n  color: white;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\n.add-cart-button[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50px;\n  padding: auto;\n  background: #fff;\n  color: #f68b1e;\n  font-size: large;\n  font-weight: 500;\n  border-radius: 5px;\n  border: 1px solid #f68b1e;\n}\n\n.buy-now-button[_ngcontent-%COMP%] {\n  min-width: 30%;\n  height: 50px;\n  background: #f68b1e;\n  color: #fff;\n  font-size: large;\n  padding: auto;\n  font-weight: 500;\n  border-radius: 10px;\n}\n\n.checkout-button[_ngcontent-%COMP%] {\n  min-width: 35%;\n  height: 50px;\n  background: #f68b1e;\n  color: #fff;\n  font-size: large;\n  padding: auto;\n  font-weight: 500;\n  border-radius: 10px;\n}\n\n.remove-button[_ngcontent-%COMP%] {\n  min-width: 30%;\n  height: 50px;\n  border-color: #d10404;\n  background: white;\n  color: black;\n  font-size: large;\n  padding: auto;\n  font-weight: 500;\n  border-radius: 10px;\n}\n\n.product-stock-status[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: medium;\n}\n\n.delivery-policy[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: medium;\n}\n\n.like-button[_ngcontent-%COMP%] {\n  float: right;\n  font-size: xx-large;\n}\n\n.product-card-detail[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  padding: 10px;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.card-detail[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n\n.product-description-header[_ngcontent-%COMP%] {\n  font-size: xx-large !important;\n  font-weight: 500;\n}\n\n.product-description[_ngcontent-%COMP%] {\n  font-size: medium !important;\n}\n\n.w-100[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n\n\n\n.container[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: flex;\n  position: relative;\n  justify-content: center;\n}\n\n.cards[_ngcontent-%COMP%] {\n  width: calc(100% - 80px);\n  overflow: hidden;\n}\n\n.overflow[_ngcontent-%COMP%] {\n  position: relative;\n  transition: left 0.5s ease-in-out;\n}\n\n.small-card[_ngcontent-%COMP%] {\n  height: 100px;\n  background-color: #e0e1e2;\n  border-radius: 5px;\n  padding: 1px;\n  display: inline-block;\n  margin-right: 10px;\n  position: relative;\n}\n\n.small-card-selected[_ngcontent-%COMP%] {\n  border: solid 1px #f68b1e;\n  border-radius: 5px;\n}\n\n.small-card-not-selected[_ngcontent-%COMP%] {\n  border: 0px;\n  border-radius: 5px;\n}\n\n.small-img[_ngcontent-%COMP%] {\n  background-repeat: round;\n}\n\n.no-right-margin[_ngcontent-%COMP%] {\n  margin-right: 0px;\n}\n\n.small-card[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n}\n\n.left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n  height: 30px;\n  padding-left: 5px;\n  padding-right: 5px;\n  width: 30px;\n  color: black;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.left.disabled[_ngcontent-%COMP%], .right.disabled[_ngcontent-%COMP%] {\n  color: #CCC;\n}\n\n.left[_ngcontent-%COMP%] {\n  left: 0;\n}\n\n.right[_ngcontent-%COMP%] {\n  right: 0;\n}\n\n.button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 8px 16px;\n  background-color: #f1f1f1;\n  border: none;\n  border-radius: 4px;\n  color: #555;\n  font-size: 16px;\n  cursor: pointer;\n  transition: background-color 0.3s;\n}\n\n.button[_ngcontent-%COMP%]:hover {\n  background-color: #ddd;\n}\n\n.button[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 24px;\n  margin-right: 8px;\n  background-color: #555;\n  color: #fff;\n  border-radius: 50%;\n  font-size: 14px;\n}\n\n.button[_ngcontent-%COMP%]   .plus[_ngcontent-%COMP%]:before {\n  content: \"+\";\n}\n\n.button[_ngcontent-%COMP%]   .minus[_ngcontent-%COMP%]:before {\n  content: \"-\";\n}\n\n@media (max-width: 991.98px) {\n  .main-content[_ngcontent-%COMP%] {\n    padding-top: 80px;\n    padding-left: 5px;\n    padding-right: 5px;\n  }\n\n  .cart-buttons[_ngcontent-%COMP%] {\n    display: contents;\n  }\n\n  .remove-button[_ngcontent-%COMP%], .buy-now-button[_ngcontent-%COMP%], .checkout-button[_ngcontent-%COMP%] {\n    margin-left: 0px;\n    margin-top: 10px;\n  }\n}\n\n@media (min-width: 991.98px) {\n  .cart-buttons[_ngcontent-%COMP%] {\n    display: flex;\n  }\n\n  .buy-now-button[_ngcontent-%COMP%], .checkout-button[_ngcontent-%COMP%] {\n    margin-left: 20px;\n  }\n}\n\n.info-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-top: 10px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n.round-input[_ngcontent-%COMP%] {\n  background-color: white;\n  border: none;\n  padding-left: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FjY291bnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxvQkFBQTtBQURKOztBQUlFO0VBQ0U7SUFDSSxtQkFBQTtJQUNBLG9CQUFBO0VBRE47QUFDRjs7QUFLRTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFISjs7QUFNRTtFQUNFLFFBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBSEo7O0FBTUU7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFISjs7QUFPRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBSko7O0FBU0U7RUFDTSxjQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFOUjs7QUFVRTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQVBKOztBQVlFO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFUSjs7QUFhRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUFWSjs7QUFhRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUFWSjs7QUFZRTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQVRKOztBQVlFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBVEo7O0FBV0U7RUFDRSx1QkFBQTtBQVJKOztBQVVFO0VBQ0UsWUFBQTtBQVBKOztBQVNFO0VBRUUsOEJBQUE7RUFDQSxnQkFBQTtBQVBKOztBQVVFO0VBQ0UsNEJBQUE7QUFQSjs7QUFTRTtFQUNFLHNCQUFBO0FBTko7O0FBUUU7Ozs7Ozs7Ozs7RUFBQTs7QUFZQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUFOSjs7QUFTRTtFQUNFLHdCQUFBO0VBQ0EsZ0JBQUE7QUFOSjs7QUFTRTtFQUNFLGtCQUFBO0VBQ0EsaUNBQUE7QUFOSjs7QUFTRTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQU5KOztBQVFFO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBQUxKOztBQU9FO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBSko7O0FBTUU7RUFDRSx3QkFBQTtBQUhKOztBQU1FO0VBQ0UsaUJBQUE7QUFISjs7QUFNRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBSEo7O0FBTUU7O0VBRUUsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBSEo7O0FBTUU7RUFDRSxXQUFBO0FBSEo7O0FBTUU7RUFDRSxPQUFBO0FBSEo7O0FBTUU7RUFDRSxRQUFBO0FBSEo7O0FBUUU7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7QUFMSjs7QUFRRTtFQUNFLHNCQUFBO0FBTEo7O0FBUUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFMSjs7QUFRRTtFQUNFLFlBQUE7QUFMSjs7QUFRRTtFQUNFLFlBQUE7QUFMSjs7QUFTRTtFQUNFO0lBQ0UsaUJBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0VBTko7O0VBVUU7SUFDRSxpQkFBQTtFQVBKOztFQVVFO0lBQ0UsZ0JBQUE7SUFDQSxnQkFBQTtFQVBKO0FBQ0Y7O0FBYUU7RUFFRTtJQUNFLGFBQUE7RUFaSjs7RUFjRTtJQUNFLGlCQUFBO0VBWEo7QUFDRjs7QUFlRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUFiSjs7QUFlRTtFQUNJLGdCQUFBO0FBWk47O0FBY0U7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQVhKIiwiZmlsZSI6ImFjY291bnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuKntcbiAgICBmb250LWZhbWlseTogJ3NvZmlhJztcbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5OTEuOThweCl7XG4gICAgLm1haW4tY29udGVudHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMDBweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTAwcHg7XG4gICAgfVxufVxuICBcblxuICAubGluZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIyLCAxMjAsIDEyMCk7XG4gICAgaGVpZ2h0OiAzcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIFxuICB9XG4gIC5pY29ue1xuICAgIHJpZ2h0OiAwO1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICB0b3A6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIH1cbiAgXG4gIC5hZGQtY2FydHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIH1cbiAgXG4gIFxuICAuYWRkLWNhcnQtYnV0dG9ue1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHBhZGRpbmc6IGF1dG87XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBjb2xvcjogI2Y2OGIxZTtcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmNjhiMWU7XG4gIFxuICBcbiAgfVxuICBcbiAgLmJ1eS1ub3ctYnV0dG9ue1xuICAgICAgICBtaW4td2lkdGg6MzAlO1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmNjhiMWU7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBmb250LXNpemU6IGxhcmdlO1xuICAgICAgICBwYWRkaW5nOiBhdXRvO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIFxuICAgIFxuICB9XG4gIC5jaGVja291dC1idXR0b257XG4gICAgbWluLXdpZHRoOjM1JTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYmFja2dyb3VuZDogI2Y2OGIxZTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICAgIHBhZGRpbmc6IGF1dG87XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBcbiAgXG4gIH1cbiAgXG4gIC5yZW1vdmUtYnV0dG9ue1xuICAgIG1pbi13aWR0aDozMCU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDIwOSwgNCwgNCk7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gICAgcGFkZGluZzogYXV0bztcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIFxuICBcbiAgfVxuICAucHJvZHVjdC1zdG9jay1zdGF0dXN7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBmb250LXNpemU6IG1lZGl1bTtcbiAgfVxuICBcbiAgLmRlbGl2ZXJ5LXBvbGljeXtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICB9XG4gIC5saWtlLWJ1dHRvbntcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgfVxuICBcbiAgLnByb2R1Y3QtY2FyZC1kZXRhaWx7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG4gIC5jYXJkLWhlYWRlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xuICB9XG4gIC5jYXJkLWRldGFpbHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gIH1cbiAgLnByb2R1Y3QtZGVzY3JpcHRpb24taGVhZGVye1xuICAgXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZSAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbiAgXG4gIC5wcm9kdWN0LWRlc2NyaXB0aW9ue1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnctMTAwIHtcbiAgICB3aWR0aDogMTAwJSFpbXBvcnRhbnQ7XG4gIH1cbiAgLypcbiAgLm1haW4tY2FyZHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwIDZweCM3Nzc7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggMCA2cHgjNzc3O1xuICAgICAgICAgYm94LXNoYWRvdzogMHB4IDAgNnB4Izc3NztcbiAgfVxuICAuZGVsaXZlcnktY2FyZHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwIDZweCM3Nzc7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggMCA2cHgjNzc3O1xuICAgICAgICAgYm94LXNoYWRvdzogMHB4IDAgNnB4Izc3NztcbiAgfSovXG4gIFxuICAuY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIFxuICAuY2FyZHMge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA4MHB4KTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIFxuICAub3ZlcmZsb3cge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0cmFuc2l0aW9uOiBsZWZ0IDAuNXMgZWFzZS1pbi1vdXQ7XG4gIH1cbiAgXG4gIC5zbWFsbC1jYXJke1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTFlMjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogMXB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5zbWFsbC1jYXJkLXNlbGVjdGVke1xuICAgIGJvcmRlcjogc29saWQgMXB4ICNmNjhiMWU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB9XG4gIC5zbWFsbC1jYXJkLW5vdC1zZWxlY3RlZHtcbiAgICBib3JkZXI6IDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIH1cbiAgLnNtYWxsLWltZ3tcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcm91bmQ7XG4gIH1cbiAgXG4gIC5uby1yaWdodC1tYXJnaW4ge1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICB9XG4gIFxuICAuc21hbGwtY2FyZCBkaXYge1xuICAgIHdpZHRoOjEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gIH1cbiAgXG4gIC5sZWZ0LFxuICAucmlnaHQge1xuICAgIGhlaWdodDogMzBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIH1cbiAgXG4gIC5sZWZ0LmRpc2FibGVkLCAucmlnaHQuZGlzYWJsZWQge1xuICAgIGNvbG9yOiNDQ0M7XG4gIH1cbiAgXG4gIC5sZWZ0IHtcbiAgICBsZWZ0OiAwO1xuICB9XG4gIFxuICAucmlnaHQge1xuICAgIHJpZ2h0OiAwO1xuICB9XG4gIFxuICBcbiAgXG4gIC5idXR0b24ge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGNvbG9yOiAjNTU1O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xuICB9XG4gIFxuICAuYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICB9XG4gIFxuICAuYnV0dG9uIC5pY29uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICBcbiAgLmJ1dHRvbiAucGx1czpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiK1wiO1xuICB9XG4gIFxuICAuYnV0dG9uIC5taW51czpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiLVwiO1xuICB9XG4gIFxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkgeyBcbiAgICAubWFpbi1jb250ZW50IHtcbiAgICAgIHBhZGRpbmctdG9wOiA4MHB4O1xuICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgfVxuXG4gIFxuICAgIC5jYXJ0LWJ1dHRvbnN7XG4gICAgICBkaXNwbGF5OiBjb250ZW50cztcbiAgICB9XG4gIFxuICAgIC5yZW1vdmUtYnV0dG9uLC5idXktbm93LWJ1dHRvbiwuY2hlY2tvdXQtYnV0dG9ue1xuICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICAgIG1hcmdpbi10b3A6MTBweDtcbiAgICB9XG4gIFxuICB9XG4gIFxuXG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDk5MS45OHB4KSB7IFxuICBcbiAgICAuY2FydC1idXR0b25ze1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG4gICAgLmJ1eS1ub3ctYnV0dG9uLC5jaGVja291dC1idXR0b257XG4gICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICB9XG4gIH1cblxuXG4gIC5pbmZvLXRpdGxle1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuICBsYWJlbHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbiAgLnJvdW5kLWlucHV0e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjpub25lO1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xufVxuIl19 */"] });


/***/ }),

/***/ "lOie":
/*!****************************************************************!*\
  !*** ./src/app/views/star-rate-bar/star-rate-bar.component.ts ***!
  \****************************************************************/
/*! exports provided: StarRateBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarRateBarComponent", function() { return StarRateBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_biz_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/biz.service */ "Epua");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function StarRateBarComponent_span_2_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 6);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r2.fillStyle());
} }
function StarRateBarComponent_span_2_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 7);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r3.fillStyle());
} }
function StarRateBarComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StarRateBarComponent_span_2_i_1_Template, 1, 1, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StarRateBarComponent_span_2_i_2_Template, 1, 1, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.filled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r1.filled);
} }
class StarRateBarComponent {
    constructor(bizService) {
        this.bizService = bizService;
        this.color = "#f68b1e";
        this.rate = 0;
        this.stars = 5;
        this.label = "";
        this.size = 24;
        this.ratedata = [{ filled: false }, { filled: false }, { filled: false }, { filled: false }, { filled: false }];
        this.color = this.bizService.get_background_color();
    }
    ngOnInit() {
        this.ratedata = [];
        for (var i = 0; i < this.stars; i++) {
            if (i < this.rate) {
                this.ratedata.push({ filled: true });
            }
            else {
                this.ratedata.push({ filled: false });
            }
        }
    }
    fillStyle() {
        return {
            "font-size": this.size.toString() + "px",
            "color": this.bizService.get_background_color()
        };
    }
    emptyStyle() {
        return {
            "font-size": this.size.toString() + "px"
        };
    }
}
StarRateBarComponent.ɵfac = function StarRateBarComponent_Factory(t) { return new (t || StarRateBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_biz_service__WEBPACK_IMPORTED_MODULE_1__["BizService"])); };
StarRateBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StarRateBarComponent, selectors: [["app-star-rate-bar"]], inputs: { color: "color", rate: "rate", stars: "stars", label: "label", size: "size" }, decls: 5, vars: 2, consts: [[1, "row"], [1, "col-lg-12", "col-sm-12"], [4, "ngFor", "ngForOf"], [2, "padding-left", "10px", "font-size", "medium"], ["class", "bi bi-star-fill", 3, "ngStyle", 4, "ngIf"], ["class", "bi bi-star", 3, "ngStyle", 4, "ngIf"], [1, "bi", "bi-star-fill", 3, "ngStyle"], [1, "bi", "bi-star", 3, "ngStyle"]], template: function StarRateBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StarRateBarComponent_span_2_Template, 3, 2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ratedata);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.label, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], styles: ["input[_ngcontent-%COMP%] {\n  font-family: fontAwesome;\n}\n\ni[_ngcontent-%COMP%] {\n  color: #f68b1e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3N0YXItcmF0ZS1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3QkFBQTtBQUNKOztBQUNBO0VBQ0ksY0FBQTtBQUVKIiwiZmlsZSI6InN0YXItcmF0ZS1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dCB7ICBcbiAgICBmb250LWZhbWlseTogZm9udEF3ZXNvbWU7ICBcbn0gIFxuaXtcbiAgICBjb2xvcjogI2Y2OGIxZTtcbn1cblxuIl19 */"] });


/***/ }),

/***/ "n9tf":
/*!****************************************!*\
  !*** ./src/app/home-routing.module.ts ***!
  \****************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _views_account_account_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/account/account.component */ "hWxu");
/* harmony import */ var _views_cart_cart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/cart/cart.component */ "wlfi");
/* harmony import */ var _views_confirm_order_confirm_order_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/confirm-order/confirm-order.component */ "pVBT");
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/home/home.component */ "QlPV");
/* harmony import */ var _views_item_detail_desktop_item_detail_desktop_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/item-detail-desktop/item-detail-desktop.component */ "R7A+");
/* harmony import */ var _views_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/login/login.component */ "QB/w");
/* harmony import */ var _views_orders_orders_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/orders/orders.component */ "N8wx");
/* harmony import */ var _views_payment_method_payment_method_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/payment-method/payment-method.component */ "dtwp");
/* harmony import */ var _views_search_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/search/search.component */ "s4XM");
/* harmony import */ var _views_shipping_detail_shipping_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/shipping-detail/shipping-detail.component */ "yquH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");













const routes = [
    {
        path: '',
        component: _views_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    },
    {
        path: 'products',
        component: _views_search_search_component__WEBPACK_IMPORTED_MODULE_9__["SearchComponent"]
    },
    {
        path: 'products/:category',
        component: _views_search_search_component__WEBPACK_IMPORTED_MODULE_9__["SearchComponent"]
    },
    {
        path: 'products/:category/:subcategory',
        component: _views_search_search_component__WEBPACK_IMPORTED_MODULE_9__["SearchComponent"]
    },
    {
        path: 'partner/:partner_id',
        component: _views_search_search_component__WEBPACK_IMPORTED_MODULE_9__["SearchComponent"]
    },
    {
        path: 'collections/:collection',
        component: _views_search_search_component__WEBPACK_IMPORTED_MODULE_9__["SearchComponent"]
    },
    {
        path: 'cart',
        component: _views_cart_cart_component__WEBPACK_IMPORTED_MODULE_2__["CartComponent"]
    },
    {
        path: 'login',
        component: _views_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
    },
    {
        path: 'payment-method/:order_id',
        component: _views_payment_method_payment_method_component__WEBPACK_IMPORTED_MODULE_8__["PaymentMethodComponent"]
    },
    {
        path: 'shipping-detail',
        component: _views_shipping_detail_shipping_detail_component__WEBPACK_IMPORTED_MODULE_10__["ShippingDetailComponent"]
    },
    {
        path: 'confirm-order/:order_id',
        component: _views_confirm_order_confirm_order_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmOrderComponent"]
    },
    {
        path: 'account',
        component: _views_account_account_component__WEBPACK_IMPORTED_MODULE_1__["AccountComponent"]
    },
    {
        path: 'my-orders',
        component: _views_orders_orders_component__WEBPACK_IMPORTED_MODULE_7__["OrdersComponent"]
    },
    // {
    //   path:'product/:id',
    //   component:ItemDetailComponent
    // },
    {
        path: 'product/:id',
        component: _views_item_detail_desktop_item_detail_desktop_component__WEBPACK_IMPORTED_MODULE_5__["ItemDetailDesktopComponent"]
    },
];
class HomeRoutingModule {
}
HomeRoutingModule.ɵfac = function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); };
HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "nDZ3":
/*!********************************!*\
  !*** ./src/app/home.module.ts ***!
  \********************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _views_cart_cart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/cart/cart.component */ "wlfi");
/* harmony import */ var _views_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/footer/footer.component */ "FPq/");
/* harmony import */ var _views_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/header/header.component */ "MR1q");
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/home/home.component */ "QlPV");
/* harmony import */ var _views_item_detail_desktop_item_detail_desktop_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/item-detail-desktop/item-detail-desktop.component */ "R7A+");
/* harmony import */ var _views_item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/item-detail/item-detail.component */ "HBHD");
/* harmony import */ var _views_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/login/login.component */ "QB/w");
/* harmony import */ var _views_payment_method_payment_method_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/payment-method/payment-method.component */ "dtwp");
/* harmony import */ var _views_search_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/search/search.component */ "s4XM");
/* harmony import */ var _views_shipping_detail_shipping_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/shipping-detail/shipping-detail.component */ "yquH");
/* harmony import */ var _views_account_account_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/account/account.component */ "hWxu");
/* harmony import */ var _views_orders_orders_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/orders/orders.component */ "N8wx");
/* harmony import */ var _views_star_rate_bar_star_rate_bar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/star-rate-bar/star-rate-bar.component */ "lOie");
/* harmony import */ var _directives_hover_activated_accordion_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./directives/hover-activated-accordion.directive */ "fsx9");
/* harmony import */ var _directives_dynamic_size_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./directives/dynamic-size.directive */ "BT2B");
/* harmony import */ var _directives_hover_activated_navmenu_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./directives/hover-activated-navmenu.directive */ "IV1m");
/* harmony import */ var _directives_mouse_out_hide_navmenu_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./directives/mouse-out-hide-navmenu.directive */ "CsZ6");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./home-routing.module */ "n9tf");
/* harmony import */ var _views_confirm_order_confirm_order_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./views/confirm-order/confirm-order.component */ "pVBT");
/* harmony import */ var _views_spin_loader_spin_loader_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./views/spin-loader/spin-loader.component */ "YcN/");
/* harmony import */ var _pipe_title_case_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pipe/title-case.pipe */ "Ffdx");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/core */ "fXoL");


























class HomeModule {
    constructor() {
    }
}
HomeModule.ɵfac = function HomeModule_Factory(t) { return new (t || HomeModule)(); };
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_20__["HomeRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_pipe_title_case_pipe__WEBPACK_IMPORTED_MODULE_23__["TitleCasePipe"],
        _views_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _views_item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_7__["ItemDetailComponent"],
        _views_item_detail_desktop_item_detail_desktop_component__WEBPACK_IMPORTED_MODULE_6__["ItemDetailDesktopComponent"],
        _views_star_rate_bar_star_rate_bar_component__WEBPACK_IMPORTED_MODULE_14__["StarRateBarComponent"],
        _views_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
        _views_payment_method_payment_method_component__WEBPACK_IMPORTED_MODULE_9__["PaymentMethodComponent"],
        _views_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _views_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
        _views_search_search_component__WEBPACK_IMPORTED_MODULE_10__["SearchComponent"],
        _views_cart_cart_component__WEBPACK_IMPORTED_MODULE_2__["CartComponent"],
        _views_confirm_order_confirm_order_component__WEBPACK_IMPORTED_MODULE_21__["ConfirmOrderComponent"],
        _views_shipping_detail_shipping_detail_component__WEBPACK_IMPORTED_MODULE_11__["ShippingDetailComponent"],
        _views_account_account_component__WEBPACK_IMPORTED_MODULE_12__["AccountComponent"],
        _views_orders_orders_component__WEBPACK_IMPORTED_MODULE_13__["OrdersComponent"],
        _views_account_account_component__WEBPACK_IMPORTED_MODULE_12__["AccountComponent"],
        _directives_hover_activated_accordion_directive__WEBPACK_IMPORTED_MODULE_15__["HoverActivatedAccordionDirective"],
        _directives_hover_activated_navmenu_directive__WEBPACK_IMPORTED_MODULE_17__["HoverActivatedNavMenuDirective"],
        _directives_mouse_out_hide_navmenu_directive__WEBPACK_IMPORTED_MODULE_18__["MouseOutHideNavMenuDirective"],
        _directives_dynamic_size_directive__WEBPACK_IMPORTED_MODULE_16__["DynamicSizeDirective"],
        _views_spin_loader_spin_loader_component__WEBPACK_IMPORTED_MODULE_22__["SpinLoaderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"],
        _home_routing_module__WEBPACK_IMPORTED_MODULE_20__["HomeRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbModule"]], exports: [_views_spin_loader_spin_loader_component__WEBPACK_IMPORTED_MODULE_22__["SpinLoaderComponent"]] }); })();


/***/ }),

/***/ "pVBT":
/*!****************************************************************!*\
  !*** ./src/app/views/confirm-order/confirm-order.component.ts ***!
  \****************************************************************/
/*! exports provided: ConfirmOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmOrderComponent", function() { return ConfirmOrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_user_info_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user-info.service */ "lg7r");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var src_app_services_biz_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/biz.service */ "Epua");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../header/header.component */ "MR1q");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../footer/footer.component */ "FPq/");








function ConfirmOrderComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r1.sku, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r1.product_count, " ");
} }
class ConfirmOrderComponent {
    constructor(userInfoService, apiService, bizService, router, route) {
        this.userInfoService = userInfoService;
        this.apiService = apiService;
        this.bizService = bizService;
        this.router = router;
        this.route = route;
        this.cartItems = [];
        this.cart_summary = {
            currency: '$',
            subtotal: 0,
            freight_cost: 0,
            estimated_tax: 0,
            total_cost: 0
        };
        this.order_detail = {};
        this.cartItems = this.userInfoService.getCartItems();
    }
    ngOnInit() {
        this.calculateCartCost();
        this.userInfoService.clearCartItems();
        this.apiService.getOrderInfo({ id: this.route.snapshot.params.order_id }).subscribe(res => {
            this.order_detail = res;
        }, err => { });
    }
    reduceProductCount(item) {
        if (item.product_count > 1) {
            item.product_count = item.product_count - 1;
            this.userInfoService.updateItemCart(item);
        }
    }
    increaseProductCount(item) {
        item.product_count = item.product_count + 1;
        this.userInfoService.updateItemCart(item);
    }
    removeItem(item) {
        this.userInfoService.removeItemCart(item);
        this.cartItems = this.userInfoService.getCartItems();
        this.calculateCartCost();
    }
    calculateCartCost() {
        this.cart_summary.subtotal = 0;
        this.cart_summary.total_cost = 0;
        this.cart_summary.freight_cost = 0;
        for (var i = 0; i < this.cartItems.length; i++) {
            let item = this.cartItems[i];
            this.cart_summary.subtotal = this.cart_summary.subtotal + parseFloat(item.pricing.first_cost) * item.product_count;
            this.cart_summary.freight_cost = this.cart_summary.freight_cost + parseFloat(item.pricing.freight_cost) * item.product_count;
            this.cart_summary.total_cost = parseFloat(((this.cart_summary.subtotal + this.cart_summary.freight_cost)).toFixed(2));
            this.cart_summary.subtotal = this.cart_summary.total_cost;
        }
        // this.apiService.calculateCartCosts(this.cartItems).subscribe(res=>{
        //   this.cart_summary=res;
        // },err=>{});
    }
    checkout() {
        if (this.userInfoService.isLoggedIn()) {
            this.router.navigateByUrl("/" + this.bizService.getBizId() + "/shipping-detail");
        }
        else {
            this.router.navigateByUrl("/" + this.bizService.getBizId() + "/login");
        }
    }
}
ConfirmOrderComponent.ɵfac = function ConfirmOrderComponent_Factory(t) { return new (t || ConfirmOrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_info_service__WEBPACK_IMPORTED_MODULE_1__["UserInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_biz_service__WEBPACK_IMPORTED_MODULE_3__["BizService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
ConfirmOrderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmOrderComponent, selectors: [["app-confirm-order"]], decls: 84, vars: 11, consts: [[1, "container-fluid", "vstack", "gap-2", "main-div"], [1, "cart-items-wrapper", "mb-5", "pb-5"], [1, "d-flex", "align-items-center", "justify-content-between", "cart-items-header", "mb-3", "px-2"], [1, "card", "main-content", 2, "border", "none"], [1, "card-body"], [1, "row", "form-info"], [1, "col-lg-12", "col-sm-12", "col-12"], [1, "card", "summary-card"], [1, "col-lg-6", "col-sm-6", "col-12"], [1, "row", 2, "margin-top", "15px"], [2, "display", "inline-block"], ["width", "32px", "height", "32px", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["id", "SVGRepo_bgCarrier", "stroke-width", "0"], ["id", "SVGRepo_tracerCarrier", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "SVGRepo_iconCarrier"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z", "fill", "#f68b1e"], [2, "padding-top", "10px", "padding-left", "10px", "font-size", "xx-large", "font-weight", "600"], [2, "padding-left", "10px"], ["d", "M7 18H6.2C5.0799 18 4.51984 18 4.09202 17.782C3.71569 17.5903 3.40973 17.2843 3.21799 16.908C3 16.4802 3 15.9201 3 14.8V10.2C3 9.0799 3 8.51984 3.21799 8.09202C3.40973 7.71569 3.71569 7.40973 4.09202 7.21799C4.51984 7 5.0799 7 6.2 7H7M17 18H17.8C18.9201 18 19.4802 18 19.908 17.782C20.2843 17.5903 20.5903 17.2843 20.782 16.908C21 16.4802 21 15.9201 21 14.8V10.2C21 9.07989 21 8.51984 20.782 8.09202C20.5903 7.71569 20.2843 7.40973 19.908 7.21799C19.4802 7 18.9201 7 17.8 7H17M7 11H7.01M17 7V5.4V4.6C17 4.03995 17 3.75992 16.891 3.54601C16.7951 3.35785 16.6422 3.20487 16.454 3.10899C16.2401 3 15.9601 3 15.4 3H8.6C8.03995 3 7.75992 3 7.54601 3.10899C7.35785 3.20487 7.20487 3.35785 7.10899 3.54601C7 3.75992 7 4.03995 7 4.6V5.4V7M17 7H7M8.6 21H15.4C15.9601 21 16.2401 21 16.454 20.891C16.6422 20.7951 16.7951 20.6422 16.891 20.454C17 20.2401 17 19.9601 17 19.4V16.6C17 16.0399 17 15.7599 16.891 15.546C16.7951 15.3578 16.6422 15.2049 16.454 15.109C16.2401 15 15.9601 15 15.4 15H8.6C8.03995 15 7.75992 15 7.54601 15.109C7.35785 15.2049 7.20487 15.3578 7.10899 15.546C7 15.7599 7 16.0399 7 16.6V19.4C7 19.9601 7 20.2401 7.10899 20.454C7.20487 20.6422 7.35785 20.7951 7.54601 20.891C7.75992 21 8.03995 21 8.6 21Z", "stroke", "#000000", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [2, "font-weight", "600", "font-size", "larger"], ["class", "row", "style", "margin-top: 5px;", 4, "ngFor", "ngForOf"], [2, "font-weight", "400"], [2, "font-size", "larger", "font-weight", "600"], [2, "font-size", "medium", "font-weight", "300"], [1, "line"], [2, "float", "right"], [1, "row"], [1, "row", 2, "margin-top", "20px"], [2, "padding-top", "20px"], [1, "row", 2, "margin-top", "5px"], [1, "col-lg-7", "col-sm-7", "col-12"], [1, "col-lg-3", "col-sm-3", "col-12"], [1, "col-lg-2", "col-sm-2", "col-12"]], template: function ConfirmOrderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "g", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "g", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "g", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Order Confirmed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "g", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "g", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "g", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Order Number:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Order Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, ConfirmOrderComponent_div_40_Template, 7, 3, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Your Order has been sent to your email on file! Look forward to working with you again soon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Payment Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Order Subtotal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Freight Cost");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Estimated Tax");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "footer", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.order_detail.order_no);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cartItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.cartItems.length, " Items");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.cart_summary.currency, "", ctx.cart_summary.subtotal, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.cart_summary.currency, "", ctx.cart_summary.freight_cost, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.cart_summary.currency, "", ctx.cart_summary.estimated_tax, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.cart_summary.currency, "", ctx.cart_summary.total_cost, "");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]], styles: ["*[_ngcontent-%COMP%] {\n  color: #211e22;\n  font-family: \"sofia\" !important;\n}\n\n.summary-card[_ngcontent-%COMP%] {\n  box-shadow: 0px 0 6px #777;\n}\n\n.submit-now-button[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: auto;\n  height: 50px;\n  background: #f68b1e;\n  color: #fff;\n  font-size: large;\n  padding: auto;\n  font-weight: 500;\n  border-radius: 50px;\n}\n\n.line[_ngcontent-%COMP%] {\n  background-color: #f1f1f1;\n  height: 3px;\n  width: 98%;\n  margin: auto;\n}\n\n.item-cart[_ngcontent-%COMP%] {\n  padding: 10px;\n  box-shadow: var(--bs-box-shadow);\n}\n\n.item-cart[_ngcontent-%COMP%]:hover, .item-cart[_ngcontent-%COMP%]:focus {\n  box-shadow: 0px 0 10px #777;\n}\n\n.card[_ngcontent-%COMP%] {\n  border-radius: 30px;\n  padding: 20px;\n}\n\n.page-title[_ngcontent-%COMP%] {\n  font-size: xx-large;\n}\n\n.card-round[_ngcontent-%COMP%] {\n  background-color: #F0FBF9;\n  border-radius: 50px;\n  height: 100%;\n  padding: 20px;\n}\n\n.info-title[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-weight: 900;\n  font-size: large;\n}\n\n.info-title-section[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.dash[_ngcontent-%COMP%] {\n  background-color: #0c0c0c;\n  height: 5px;\n  width: 20px;\n}\n\n.line[_ngcontent-%COMP%] {\n  background-color: #f1f1f1;\n  height: 4px;\n  width: 98%;\n  margin: auto;\n}\n\n.form-info[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n.form-group[_ngcontent-%COMP%]   .round-input[_ngcontent-%COMP%] {\n  border-radius: 20px !important;\n  height: 50px;\n  padding-left: 20px;\n  border: 3px solid #f1f1f1;\n}\n\n.full-height[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.form-group[_ngcontent-%COMP%]   .text-area-height[_ngcontent-%COMP%] {\n  height: 82%;\n}\n\n.img-table[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n\n.table-borderless[_ngcontent-%COMP%] {\n  border: 0px;\n}\n\n.submit-button-section[_ngcontent-%COMP%] {\n  padding-top: 100px;\n}\n\n.btn-submit[_ngcontent-%COMP%] {\n  float: right;\n  height: 50px;\n  padding: auto;\n  border-radius: 40px;\n  font-size: large;\n}\n\n@media (min-width: 991.98px) {\n  .col-summary[_ngcontent-%COMP%] {\n    padding-left: 50px;\n  }\n\n  .col-cart[_ngcontent-%COMP%] {\n    padding-right: 50px;\n  }\n\n  .main-content[_ngcontent-%COMP%] {\n    padding-left: 50px;\n    padding-right: 50px;\n  }\n\n  .page-title[_ngcontent-%COMP%] {\n    font-size: x-large;\n    padding-left: 60px;\n  }\n\n  .main-div[_ngcontent-%COMP%] {\n    padding-top: 130px;\n  }\n\n  .item-price[_ngcontent-%COMP%] {\n    text-align: end;\n  }\n\n  .save-latter[_ngcontent-%COMP%] {\n    text-align: end;\n    padding: 0px;\n  }\n\n  .remove[_ngcontent-%COMP%] {\n    text-align: end;\n    padding: 0px;\n  }\n\n  .item-count[_ngcontent-%COMP%] {\n    float: right;\n  }\n}\n\n@media (max-width: 991.98px) {\n  .main-div[_ngcontent-%COMP%] {\n    padding-top: 0px;\n  }\n\n  .cart-items-header[_ngcontent-%COMP%] {\n    padding-top: 5px;\n    top: 0px !important;\n  }\n\n  .main-content[_ngcontent-%COMP%] {\n    padding-left: 0px !important;\n    padding-right: 0px !important;\n  }\n\n  .summary-card[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NvbmZpcm0tb3JkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxjQUFBO0VBQ0EsK0JBQUE7QUFIRjs7QUFRQTtFQUdPLDBCQUFBO0FBTFA7O0FBUUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBTEY7O0FBVUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQVBGOztBQVVBO0VBQ0UsYUFBQTtFQUNBLGdDQUFBO0FBUEY7O0FBV0U7RUFJTywyQkFBQTtBQVRUOztBQWFBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0FBVkY7O0FBWUE7RUFDRSxtQkFBQTtBQVRGOztBQVdBO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBUkY7O0FBV0E7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFSRjs7QUFXQTtFQUNFLG1CQUFBO0FBUkY7O0FBYUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBVkY7O0FBYUU7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQVZKOztBQWFBO0VBQ0UsZ0JBQUE7QUFWRjs7QUFhQTtFQUNFLGdCQUFBO0FBVkY7O0FBYUU7RUFDSSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBVk47O0FBY0E7RUFDRSxZQUFBO0FBWEY7O0FBZUE7RUFDRSxXQUFBO0FBWkY7O0FBaUJBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFkQTs7QUFrQkE7RUFDRSxXQUFBO0FBZkY7O0FBbUJBO0VBQ0Usa0JBQUE7QUFoQkY7O0FBbUJBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQWhCRjs7QUFvQkE7RUFDRTtJQUNFLGtCQUFBO0VBakJGOztFQW1CQTtJQUNFLG1CQUFBO0VBaEJGOztFQWtCQTtJQUNFLGtCQUFBO0lBQ0EsbUJBQUE7RUFmRjs7RUFpQkE7SUFDRSxrQkFBQTtJQUNBLGtCQUFBO0VBZEY7O0VBZ0JBO0lBQ0Usa0JBQUE7RUFiRjs7RUFlQTtJQUNFLGVBQUE7RUFaRjs7RUFjQTtJQUNFLGVBQUE7SUFDQSxZQUFBO0VBWEY7O0VBYUE7SUFDRSxlQUFBO0lBQ0EsWUFBQTtFQVZGOztFQVlBO0lBQ0UsWUFBQTtFQVRGO0FBQ0Y7O0FBYUE7RUFDRTtJQUNFLGdCQUFBO0VBWEY7O0VBYUE7SUFDRSxnQkFBQTtJQUNBLG1CQUFBO0VBVkY7O0VBYUE7SUFDRSw0QkFBQTtJQUNBLDZCQUFBO0VBVkY7O0VBWUE7SUFDRSxnQkFBQTtFQVRGO0FBQ0YiLCJmaWxlIjoiY29uZmlybS1vcmRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cblxuKntcbiAgY29sb3I6IzIxMWUyMjtcbiAgZm9udC1mYW1pbHk6ICdzb2ZpYScgIWltcG9ydGFudDtcbn1cblxuXG5cbi5zdW1tYXJ5LWNhcmR7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDAgNnB4Izc3NztcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMCA2cHgjNzc3O1xuICAgICAgIGJveC1zaGFkb3c6IDBweCAwIDZweCM3Nzc7XG59XG5cbi5zdWJtaXQtbm93LWJ1dHRvbntcbiAgd2lkdGg6MTAwJTtcbiAgcGFkZGluZzogYXV0bztcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kOiAjZjY4YjFlO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgcGFkZGluZzogYXV0bztcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcblxuXG59XG5cbi5saW5le1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQxLCAyNDEsIDI0MSk7XG4gIGhlaWdodDogM3B4O1xuICB3aWR0aDogOTglO1xuICBtYXJnaW46YXV0bztcblxufVxuLml0ZW0tY2FydCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJveC1zaGFkb3c6IHZhcigtLWJzLWJveC1zaGFkb3cpO1xufVxuLml0ZW0tY2FydCB7XG5cbiAgJjpob3ZlciwgJjpmb2N1cyB7XG4gICBcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwIDEwcHgjNzc3O1xuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDAgMTBweCM3Nzc7XG4gICAgICAgICBib3gtc2hhZG93OiAwcHggMCAxMHB4Izc3NztcbiAgfVxufVxuXG4uY2FyZHtcbiAgYm9yZGVyLXJhZGl1czozMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLnBhZ2UtdGl0bGV7XG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG59XG4uY2FyZC1yb3VuZHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YwRkJGOTtcbiAgYm9yZGVyLXJhZGl1czo1MHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5pbmZvLXRpdGxle1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LXNpemU6IGxhcmdlO1xuXG59XG4uaW5mby10aXRsZS1zZWN0aW9ue1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG59XG5cblxuLmRhc2h7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMiwgMTIsIDEyKTtcbiAgaGVpZ2h0OiA1cHg7XG4gIHdpZHRoOiAyMHB4O1xufVxuXG4gIC5saW5le1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDEsIDI0MSwgMjQxKTtcbiAgICBoZWlnaHQ6IDRweDtcbiAgICB3aWR0aDogOTglO1xuICAgIG1hcmdpbjphdXRvO1xuXG4gIH1cbi5mb3JtLWluZm97XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbmxhYmVse1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLmZvcm0tZ3JvdXAge1xuICAucm91bmQtaW5wdXR7XG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICBib3JkZXI6IDNweCBzb2xpZCByZ2IoMjQxLCAyNDEsIDI0MSk7XG4gIH1cbn1cblxuLmZ1bGwtaGVpZ2h0e1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cblxuLmZvcm0tZ3JvdXAgLnRleHQtYXJlYS1oZWlnaHR7XG4gIGhlaWdodDogODIlO1xufVxuXG5cblxuLmltZy10YWJsZXtcbndpZHRoOiAxNnB4O1xuaGVpZ2h0OiAxNnB4O1xufVxuXG5cbi50YWJsZS1ib3JkZXJsZXNze1xuICBib3JkZXI6MHB4O1xufVxuXG5cbi5zdWJtaXQtYnV0dG9uLXNlY3Rpb257XG4gIHBhZGRpbmctdG9wOjEwMHB4O1xufVxuXG4uYnRuLXN1Ym1pdHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBhZGRpbmc6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG5cblxuQG1lZGlhIChtaW4td2lkdGg6IDk5MS45OHB4KSB7IFxuICAuY29sLXN1bW1hcnl7XG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICB9XG4gIC5jb2wtY2FydHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xuICB9XG4gIC5tYWluLWNvbnRlbnR7XG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gIH1cbiAgLnBhZ2UtdGl0bGV7XG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xuICAgIHBhZGRpbmctbGVmdDogNjBweDtcbiAgfVxuICAubWFpbi1kaXZ7XG4gICAgcGFkZGluZy10b3A6IDEzMHB4O1xuICB9XG4gIC5pdGVtLXByaWNle1xuICAgIHRleHQtYWxpZ246IGVuZDtcbiAgfVxuICAuc2F2ZS1sYXR0ZXJ7XG4gICAgdGV4dC1hbGlnbjogZW5kO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgfVxuICAucmVtb3Zle1xuICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gIH1cbiAgLml0ZW0tY291bnR7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICB9XG5cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7IFxuICAubWFpbi1kaXZ7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgfVxuICAuY2FydC1pdGVtcy1oZWFkZXJ7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgICB0b3A6MHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5tYWluLWNvbnRlbnR7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgfVxuICAuc3VtbWFyeS1jYXJke1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cbn0iXX0= */"] });


/***/ }),

/***/ "s4XM":
/*!**************************************************!*\
  !*** ./src/app/views/search/search.component.ts ***!
  \**************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var src_app_services_user_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user-info.service */ "lg7r");
/* harmony import */ var src_app_services_search_bar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/search-bar.service */ "b/hC");
/* harmony import */ var src_app_services_biz_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/biz.service */ "Epua");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../header/header.component */ "MR1q");
/* harmony import */ var _directives_hover_activated_accordion_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../directives/hover-activated-accordion.directive */ "fsx9");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../footer/footer.component */ "FPq/");
/* harmony import */ var _directives_dynamic_size_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../directives/dynamic-size.directive */ "BT2B");
/* harmony import */ var _pipe_title_case_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../pipe/title-case.pipe */ "Ffdx");












function SearchComponent_li_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "products/", item_r5.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.name);
} }
function SearchComponent_li_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "collections/", item_r6.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6.name);
} }
function SearchComponent_p_169_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "titleCase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("href", "/", ctx_r2.bizService.getBizId(), "/products/", ctx_r2.category, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, ctx_r2.category));
} }
function SearchComponent_p_170_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "titleCase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " > ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "titleCase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("href", "/", ctx_r3.bizService.getBizId(), "/products/", ctx_r3.category, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 7, ctx_r3.category));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate3"]("href", "/", ctx_r3.bizService.getBizId(), "/products/", ctx_r3.category, "/", ctx_r3.sub_category, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 9, ctx_r3.sub_category));
} }
function SearchComponent_div_174_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 117);
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "product/", item_r7.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r7.product.images[0].image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function SearchComponent_div_174_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 118);
} }
function SearchComponent_div_174_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SearchComponent_div_174_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "small", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "reviews");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r7.product.rating, "| ", item_r7.product.reviews, " ");
} }
function SearchComponent_div_174_small_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "u", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login for Pricing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SearchComponent_div_174_p_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r7.currency, "", item_r7.first_cost, "");
} }
function SearchComponent_div_174_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SearchComponent_div_174_img_2_Template, 1, 2, "img", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SearchComponent_div_174_div_3_Template, 1, 0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SearchComponent_div_174_button_4_Template, 2, 0, "button", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SearchComponent_div_174_div_8_Template, 6, 2, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SearchComponent_div_174_small_11_Template, 4, 0, "small", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "small", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SearchComponent_div_174_p_14_Template, 2, 2, "p", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r7.product.images.length > 0 && item_r7.product.images[0].image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r7.product.images.length == 0 || !item_r7.product.images[0].image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.userInfoService.isLoggedIn());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "product/", item_r7.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r7.product.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.userInfoService.isLoggedIn());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.userInfoService.isLoggedIn());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("MSRP ", item_r7.currency, "", item_r7.msrp, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.userInfoService.isLoggedIn());
} }
class SearchComponent {
    constructor(apiService, userInfoService, searchBarService, bizService, route) {
        this.apiService = apiService;
        this.userInfoService = userInfoService;
        this.searchBarService = searchBarService;
        this.bizService = bizService;
        this.route = route;
        this.products = [];
        this.categories = [];
        this.collections = [];
        this.sub_category = '';
        this.category = '';
        this.searchBarService.onSearch.subscribe({
            next: (query) => {
                this.searchProducts("?search=" + query);
            }
        });
    }
    ngOnInit() {
        this.initialize();
        let partner_id = this.route.snapshot.params.partner_id;
        let collection = this.route.snapshot.params.collection;
        let category = this.route.snapshot.params.category;
        let subcategory = this.route.snapshot.params.subcategory;
        if (subcategory != null) {
            this.sub_category = subcategory;
            this.category = category;
            this.searchProducts("?product__sub_category__name=" + subcategory);
        }
        else if (category != null) {
            this.sub_category = '';
            this.category = category;
            this.searchProducts("?product__category__name=" + category);
        }
        else if (partner_id != null) {
            this.sub_category = '';
            this.category = '';
            this.searchProducts("?partner=" + partner_id);
        }
        else if (collection != null) {
            this.sub_category = '';
            this.category = '';
            this.searchProducts("?product__collection__name=" + collection);
        }
        else {
            this.getProducts();
        }
    }
    initialize() {
        this.apiService.getProductCategory('').subscribe(res => {
            this.categories = res;
        }, err => { });
        this.apiService.getCollections('').subscribe(res => {
            this.collections = res;
        }, err => { });
    }
    getProducts() {
        this.apiService.getProducts('').subscribe(res => {
            this.products = res;
        }, err => { });
    }
    searchProducts(q) {
        this.apiService.getProducts(q).subscribe(res => {
            this.products = res;
        }, err => { });
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_info_service__WEBPACK_IMPORTED_MODULE_2__["UserInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_search_bar_service__WEBPACK_IMPORTED_MODULE_3__["SearchBarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_biz_service__WEBPACK_IMPORTED_MODULE_4__["BizService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], decls: 177, vars: 5, consts: [[1, "container-fluid"], [1, "row", "search-content"], [1, "col-sm-2", "col-lg-2", "mt-4"], ["id", "rightModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal-side-nav", "right-side-nav", "fade-side-nav"], ["role", "document", 1, "modal-dialog-side-nav"], [1, "modal-content-side-nav", 2, "background-color", "white"], [1, "modal-header-side-nav", 2, "text-align", "center", "justify-content", "center", "font-weight", "700", "padding-top", "20px", "font-size", "large", "background-color", "white"], [2, "width", "100%"], [2, "margin-right", "20px"], ["type", "button", "data-dismiss", "modal", 2, "background-color", "white", "border", "none"], [1, "modal-body-side-nav"], ["id", "accordionFlushExample", 1, "accordion", "accordion-flush"], ["hoverActivatedAccordion", "", 1, "accordion-item"], ["id", "flush-headingOne", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-trigger", "hover", "data-bs-target", "#flush-collapseOne", "aria-expanded", "false", "aria-controls", "flush-collapseOne", 1, "accordion-button", "collapsed"], ["id", "flush-collapseOne", "aria-labelledby", "flush-headingOne", "data-bs-parent", "#accordionFlushExample", 1, "accordion-collapse"], [1, "accordion-body"], [2, "max-height", "200px", "overflow-y", "scroll"], ["style", "margin-bottom: 15px;", 4, "ngFor", "ngForOf"], ["id", "flush-headingTwo", 1, "accordion-header"], ["type", "button", "data-trigger", "hover", "data-bs-toggle", "collapse", "data-bs-target", "#flush-collapseTwo", "aria-expanded", "false", "aria-controls", "flush-collapseTwo", 1, "accordion-button", "collapsed"], ["id", "flush-collapseTwo", "aria-labelledby", "flush-headingTwo", "data-bs-parent", "#accordionFlushExample", 1, "accordion-collapse", "collapse"], [4, "ngFor", "ngForOf"], ["id", "flush-headingThree", 1, "accordion-header"], ["data-trigger", "hover", "type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#flush-collapseThree", "aria-expanded", "false", "aria-controls", "flush-collapseThree", 1, "accordion-button", "collapsed"], ["id", "flush-collapseThree", "aria-labelledby", "flush-headingThree", "data-bs-parent", "#accordionFlushExample", 1, "accordion-collapse", "collapse"], ["id", "colorList", 1, "facetGroup_facets__bE9U9", 2, "height", "200px", "overflow-y", "scroll"], [1, "facet_facet__IMsMJ"], ["href", "", "rel", "noopener noreferrer", "data-e2e", "Color-0", 1, "facet_facetLink__VcUM4"], ["id", "color-Grey", 1, "cl-form-checkbox"], ["id", "f8gghb83ai4i", "name", "color", "type", "checkbox", "animation", "", "value", "on", 1, "cl-form-checkbox-input"], ["for", "f8gghb83ai4i", 1, "cl-form-checkbox-label", "cl-form-checkbox--animation"], [1, "facet_facetLabel__9qyC5"], ["href", "https://www.bedbathandbeyond.com/Home-Garden/Living-Room-Furniture/Brown,/color,/713/cat.html", "rel", "noopener noreferrer", "data-e2e", "Color-1", 1, "facet_facetLink__VcUM4"], ["id", "color-Brown", 1, "cl-form-checkbox"], ["id", "f8gghb83bia3", "name", "color", "type", "checkbox", "animation", "", "value", "on", 1, "cl-form-checkbox-input"], ["for", "f8gghb83bia3", 1, "cl-form-checkbox-label", "cl-form-checkbox--animation"], ["href", "https://www.bedbathandbeyond.com/Home-Garden/Living-Room-Furniture/Black,/color,/713/cat.html", "rel", "noopener noreferrer", "data-e2e", "Color-2", 1, "facet_facetLink__VcUM4"], ["id", "color-Black", 1, "cl-form-checkbox"], ["id", "f8gghb83cfh1", "name", "color", "type", "checkbox", "animation", "", "value", "on", 1, "cl-form-checkbox-input"], ["for", "f8gghb83cfh1", 1, "cl-form-checkbox-label", "cl-form-checkbox--animation"], ["href", "https://www.bedbathandbeyond.com/Home-Garden/Living-Room-Furniture/White,/color,/713/cat.html", "rel", "noopener noreferrer", "data-e2e", "Color-3", 1, "facet_facetLink__VcUM4"], ["id", "color-White", 1, "cl-form-checkbox"], ["id", "f8gghb83chcb", "name", "color", "type", "checkbox", "animation", "", "value", "on", 1, "cl-form-checkbox-input"], ["for", "f8gghb83chcb", 1, "cl-form-checkbox-label", "cl-form-checkbox--animation"], ["href", "https://www.bedbathandbeyond.com/Home-Garden/Living-Room-Furniture/Blue,/color,/713/cat.html", "rel", "noopener noreferrer", "data-e2e", "Color-4", 1, "facet_facetLink__VcUM4"], ["id", "color-Blue", 1, "cl-form-checkbox"], ["id", "f8gghb83dg1a", "name", "color", "type", "checkbox", "animation", "", "value", "on", 1, "cl-form-checkbox-input"], ["for", "f8gghb83dg1a", 1, "cl-form-checkbox-label", "cl-form-checkbox--animation"], ["href", "https://www.bedbathandbeyond.com/Home-Garden/Living-Room-Furniture/Beige,/color,/713/cat.html", "rel", "noopener noreferrer", "data-e2e", "Color-5", 1, "facet_facetLink__VcUM4"], ["id", "color-Beige", 1, "cl-form-checkbox"], ["id", "f8gghb83d10e2", "name", "color", "type", "checkbox", "animation", "", "value", "on", 1, "cl-form-checkbox-input"], ["for", "f8gghb83d10e2", 1, "cl-form-checkbox-label", "cl-form-checkbox--animation"], ["href", "https://www.bedbathandbeyond.com/Home-Garden/Living-Room-Furniture/Green,/color,/713/cat.html", "rel", "noopener noreferrer", "data-e2e", "Color-6", 1, "facet_facetLink__VcUM4"], ["id", "color-Green", 1, "cl-form-checkbox"], ["id", "f8gghb83e113j", "name", "color", "type", "checkbox", "animation", "", "value", "on", 1, "cl-form-checkbox-input"], ["for", "f8gghb83e113j", 1, "cl-form-checkbox-label", "cl-form-checkbox--animation"], ["href", "https://www.bedbathandbeyond.com/Home-Garden/Living-Room-Furniture/Pink,/color,/713/cat.html", "rel", "noopener noreferrer", "data-e2e", "Color-7", 1, "facet_facetLink__VcUM4"], ["id", "color-Pink", 1, "cl-form-checkbox"], ["id", "f8gghb83e1217", "name", "color", "type", "checkbox", "animation", "", "value", "on", 1, "cl-form-checkbox-input"], ["for", "f8gghb83e1217", 1, "cl-form-checkbox-label", "cl-form-checkbox--animation"], ["href", "https://www.bedbathandbeyond.com/Home-Garden/Living-Room-Furniture/Yellow,/color,/713/cat.html", "rel", "noopener noreferrer", "data-e2e", "Color-8", 1, "facet_facetLink__VcUM4"], ["id", "color-Yellow", 1, "cl-form-checkbox"], ["id", "f8gghb83f2j5", "name", "color", "type", "checkbox", "animation", "", "value", "on", 1, "cl-form-checkbox-input"], ["for", "f8gghb83f2j5", 1, "cl-form-checkbox-label", "cl-form-checkbox--animation"], ["href", "https://www.bedbathandbeyond.com/Home-Garden/Living-Room-Furniture/Gold,/color,/713/cat.html", "rel", "noopener noreferrer", "data-e2e", "Color-9", 1, "facet_facetLink__VcUM4"], ["id", "color-Gold", 1, "cl-form-checkbox"], ["id", "f8gghb83f95f", "name", "color", "type", "checkbox", "animation", "", "value", "on", 1, "cl-form-checkbox-input"], ["for", "f8gghb83f95f", 1, "cl-form-checkbox-label", "cl-form-checkbox--animation"], ["href", "https://www.bedbathandbeyond.com/Home-Garden/Living-Room-Furniture/Red,/color,/713/cat.html", "rel", "noopener noreferrer", "data-e2e", "Color-10", 1, "facet_facetLink__VcUM4"], ["id", "color-Red", 1, "cl-form-checkbox"], ["id", "f8gghb83f12k7", "name", "color", "type", "checkbox", "animation", "", "value", "on", 1, "cl-form-checkbox-input"], ["for", "f8gghb83f12k7", 1, "cl-form-checkbox-label", "cl-form-checkbox--animation"], ["href", "https://www.bedbathandbeyond.com/Home-Garden/Living-Room-Furniture/Orange,/color,/713/cat.html", "rel", "noopener noreferrer", "data-e2e", "Color-11", 1, "facet_facetLink__VcUM4"], ["id", "color-Orange", 1, "cl-form-checkbox"], ["id", "f8gghb83g79e", "name", "color", "type", "checkbox", "animation", "", "value", "on", 1, "cl-form-checkbox-input"], ["for", "f8gghb83g79e", 1, "cl-form-checkbox-label", "cl-form-checkbox--animation"], ["href", "https://www.bedbathandbeyond.com/Home-Garden/Living-Room-Furniture/Silver,/color,/713/cat.html", "rel", "noopener noreferrer", "data-e2e", "Color-12", 1, "facet_facetLink__VcUM4"], ["id", "color-Silver", 1, "cl-form-checkbox"], ["id", "f8gghb83g3bi", "name", "color", "type", "checkbox", "animation", "", "value", "on", 1, "cl-form-checkbox-input"], ["for", "f8gghb83g3bi", 1, "cl-form-checkbox-label", "cl-form-checkbox--animation"], ["href", "https://www.bedbathandbeyond.com/Home-Garden/Living-Room-Furniture/Cream,/color,/713/cat.html", "rel", "noopener noreferrer", "data-e2e", "Color-13", 1, "facet_facetLink__VcUM4"], ["id", "color-Cream", 1, "cl-form-checkbox"], ["id", "f8gghb83hi0i", "name", "color", "type", "checkbox", "animation", "", "value", "on", 1, "cl-form-checkbox-input"], ["for", "f8gghb83hi0i", 1, "cl-form-checkbox-label", "cl-form-checkbox--animation"], ["href", "https://www.bedbathandbeyond.com/Home-Garden/Living-Room-Furniture/Purple,/color,/713/cat.html", "rel", "noopener noreferrer", "data-e2e", "Color-14", 1, "facet_facetLink__VcUM4"], ["id", "color-Purple", 1, "cl-form-checkbox"], ["id", "f8gghb83hbe6", "name", "color", "type", "checkbox", "animation", "", "value", "on", 1, "cl-form-checkbox-input"], ["for", "f8gghb83hbe6", 1, "cl-form-checkbox-label", "cl-form-checkbox--animation"], [1, "col-sm-10", "col-lg-10"], [1, "container-fluid", "vstack", "gap-2"], [1, "row", "btn-show-filter"], ["type", "button", "data-toggle", "modal", "data-target", "#rightModal", 1, "btn", "btn-primary", 2, "width", "fit-content", "border-radius", "20px"], [1, "cart-items-wrapper", "mb-5", "pb-5"], [1, "d-flex", "align-items-center", "justify-content-between", "cart-items-header", "mb-3", "px-2"], ["class", "mb-0 h5 ", 4, "ngIf"], [1, "btn", "text-capitalize", "btn-sm", "text-success"], [1, "row", "row-cols-2", "row-cols-md-4"], ["class", "col", "style", "margin-bottom: 40px;", 4, "ngFor", "ngForOf"], [2, "padding-top", "20px"], [2, "margin-bottom", "15px"], [2, "text-transform", "lowercase", 3, "routerLink"], [1, "mb-0", "h5"], [3, "href"], [1, "col", 2, "margin-bottom", "40px"], [1, "position-relative"], ["appDynamicSize", "", "style", "border-radius: 10%; cursor: pointer; border: 1px solid whitesmoke;", "class", "card-img-top object-fit-cover scale-up", "alt", "item image", 3, "routerLink", "src", 4, "ngIf"], ["appDynamicSize", "", "class", "card-img-top object-fit-cover scale-up", 4, "ngIf"], ["style", "margin: 15px;", "class", "btn btn-light position-absolute end-0", 4, "ngIf"], [1, "card-body", "px-2", 2, "padding-top", "15px"], [1, "fw-normal", "mb-2", "small", "fw-bold", 2, "cursor", "pointer", 3, "routerLink"], ["class", "ratings", 4, "ngIf"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "", 2, "width", "100%", "display", "flex", "justify-content", "space-between"], ["style", "font-size: 15px;font-weight: 500;text-decoration: underline;", 4, "ngIf"], [2, "font-size", "15px", "font-weight", "500"], ["class", "h5 mb-0", 4, "ngIf"], ["appDynamicSize", "", "alt", "item image", 1, "card-img-top", "object-fit-cover", "scale-up", 2, "border-radius", "10%", "cursor", "pointer", "border", "1px solid whitesmoke", 3, "routerLink", "src"], ["appDynamicSize", "", 1, "card-img-top", "object-fit-cover", "scale-up"], [1, "btn", "btn-light", "position-absolute", "end-0", 2, "margin", "15px"], [1, "bi", "bi-heart"], [1, "ratings"], [1, "bi", "bi-star-fill", "text-warning"], [1, "text-muted"], [2, "padding-left", "10px"], [2, "font-size", "15px", "font-weight", "500", "text-decoration", "underline"], ["routerLink", "login"], [2, "color", "black"], [1, "h5", "mb-0"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " X ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Categories ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, SearchComponent_li_23_Template, 3, 2, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Collections ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, SearchComponent_li_31_Template, 3, 2, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h2", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Color ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ul", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Grey ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Brown ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Black ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "label", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "White ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "label", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Blue ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Beige ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "input", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "label", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Green ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "input", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "label", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Pink ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "a", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "input", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "label", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Yellow ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "a", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "input", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "label", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Gold ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "a", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "input", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "label", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Red ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "a", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "input", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "label", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Orange ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "input", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "label", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Silver ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "a", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "input", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "label", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Cream ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "a", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "input", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "label", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Purple ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "h2", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, " Material ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "h2", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, " Shipping Type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "h2", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, " Price Per Item ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "button", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, " Sort & Filter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](169, SearchComponent_p_169_Template, 4, 5, "p", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](170, SearchComponent_p_170_Template, 8, 11, "p", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "button", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "see more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](174, SearchComponent_div_174_Template, 15, 10, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "footer", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.collections);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sub_category == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sub_category != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _directives_hover_activated_accordion_directive__WEBPACK_IMPORTED_MODULE_7__["HoverActivatedAccordionDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _directives_dynamic_size_directive__WEBPACK_IMPORTED_MODULE_10__["DynamicSizeDirective"]], pipes: [_pipe_title_case_pipe__WEBPACK_IMPORTED_MODULE_11__["TitleCasePipe"]], styles: ["*[_ngcontent-%COMP%] {\n  font-family: \"sofia\" !important;\n}\n\n.bottom-card[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  width: 100%;\n  min-height: 400px;\n  background-image: url(\"https://images.pexels.com/photos/271771/pexels-photo-271771.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=2060\");\n}\n\n.card-text[_ngcontent-%COMP%] {\n  text-align: center;\n  height: 400px;\n  background: -webkit-linear-gradient(rgba(0, 255, 2, 0), rgba(0, 255, 2, 0) 0%), -webkit-linear-gradient(-20deg, rgba(4, 0, 255, 0) 50%, rgba(255, 255, 235, 0.7) 0%);\n}\n\n.scale-up[_ngcontent-%COMP%] {\n  transition: transform 0.3s;\n}\n\n.scale-up[_ngcontent-%COMP%]:hover {\n  transform: scale(1.03);\n}\n\n.txt[_ngcontent-%COMP%] {\n  height: 400px;\n  display: table-cell;\n  vertical-align: middle;\n  width: inherit;\n}\n\n.txt2[_ngcontent-%COMP%] {\n  display: grid;\n}\n\n.w-100[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n\n.brands-div[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding-left: 50px;\n  padding-right: 50px;\n  display: flex;\n  position: relative;\n  justify-content: center;\n}\n\n.brands-cards[_ngcontent-%COMP%] {\n  width: calc(100% - 80px);\n  overflow: hidden;\n  height: 250px;\n}\n\n.overflow[_ngcontent-%COMP%] {\n  position: relative;\n  transition: left 0.5s ease-in-out;\n}\n\n.brand-card[_ngcontent-%COMP%] {\n  height: 250px;\n  background-color: #e0e1e2;\n  border-radius: 5px;\n  display: inline-block;\n  padding-right: 10px;\n  position: relative;\n}\n\n.no-right-margin[_ngcontent-%COMP%] {\n  margin-right: 0px;\n}\n\n.brand-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 48px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 30px;\n  color: black;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.left.disabled[_ngcontent-%COMP%], .right.disabled[_ngcontent-%COMP%] {\n  color: #CCC;\n}\n\n.left[_ngcontent-%COMP%] {\n  margin-left: 50px;\n  left: 0;\n}\n\n.right[_ngcontent-%COMP%] {\n  right: 0;\n  margin-right: 50px;\n}\n\n.sidebar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  text-decoration: none;\n  color: black;\n  font-size: large;\n}\n\n.sidebar-nav[_ngcontent-%COMP%] {\n  list-style: none;\n}\n\n.sidebar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  list-style: none;\n}\n\n.sidebar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  color: #f68b1e;\n  background: rgba(255, 255, 255, 0.2);\n}\n\n.sidebar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active, .sidebar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n  text-decoration: none;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style: none;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #333;\n}\n\n.display-block[_ngcontent-%COMP%]   .accordion-collapse[_ngcontent-%COMP%] {\n  display: block;\n}\n\n@media (max-width: 400.98px) {\n  .modal-side-nav.left-side-nav.fade-side-nav[_ngcontent-%COMP%]   .modal-dialog-side-nav[_ngcontent-%COMP%] {\n    left: -100%;\n  }\n\n  .modal-side-nav.right-side-nav.fade-side-nav[_ngcontent-%COMP%]   .modal-dialog-side-nav[_ngcontent-%COMP%] {\n    right: -100%;\n  }\n\n  .modal-side-nav[_ngcontent-%COMP%]   .modal-dialog-side-nav[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media (min-width: 400.98px) and (max-width: 991.98px) {\n  .modal-side-nav.left-side-nav.fade-side-nav[_ngcontent-%COMP%]   .modal-dialog-side-nav[_ngcontent-%COMP%] {\n    left: -320px;\n  }\n\n  .modal-side-nav.right-side-nav.fade-side-nav[_ngcontent-%COMP%]   .modal-dialog-side-nav[_ngcontent-%COMP%] {\n    right: -320px;\n  }\n\n  .modal-side-nav[_ngcontent-%COMP%]   .modal-dialog-side-nav[_ngcontent-%COMP%] {\n    width: 320px;\n  }\n}\n\n@media (min-width: 991.98px) {\n  .modal-header-side-nav[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .search-content[_ngcontent-%COMP%] {\n    padding-top: 130px;\n  }\n\n  .btn-show-filter[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n@media (max-width: 991.98px) {\n  .search-content[_ngcontent-%COMP%] {\n    padding-top: 60px;\n  }\n\n  .modal-header-side-nav[_ngcontent-%COMP%] {\n    display: flex;\n    background-color: white;\n  }\n\n  .modal-side-nav[_ngcontent-%COMP%]   .modal-dialog-side-nav[_ngcontent-%COMP%] {\n    position: fixed;\n    margin: auto;\n    height: 100%;\n    transform: translate3d(0%, 0, 0);\n  }\n\n  .modal-side-nav[_ngcontent-%COMP%]   .modal-content-side-nav[_ngcontent-%COMP%] {\n    height: 100%;\n    overflow-y: auto;\n  }\n\n  .modal-side-nav[_ngcontent-%COMP%]   .modal-body-side-nav[_ngcontent-%COMP%] {\n    padding: 15px 15px 80px;\n    min-height: 100%;\n    background: white;\n  }\n\n  .modal-side-nav.left-side-nav.fade-side-nav[_ngcontent-%COMP%]   .modal-dialog-side-nav[_ngcontent-%COMP%] {\n    transition: opacity 0.1s linear, left 0.1s ease-out;\n    min-height: 1000px;\n    top: 0px;\n    z-index: 10000;\n  }\n\n  .modal-side-nav.left-side-nav.fade-side-nav.show[_ngcontent-%COMP%]   .modal-dialog-side-nav[_ngcontent-%COMP%] {\n    left: 0;\n  }\n\n  .modal-side-nav.right-side-nav.fade-side-nav[_ngcontent-%COMP%]   .modal-dialog-side-nav[_ngcontent-%COMP%] {\n    transition: opacity 0.1s linear, right 0.1s ease-out;\n    min-height: 1000px;\n    top: 0px;\n    z-index: 10000;\n  }\n\n  .modal-side-nav.right-side-nav.fade-side-nav.show[_ngcontent-%COMP%]   .modal-dialog-side-nav[_ngcontent-%COMP%] {\n    right: 0;\n  }\n\n  .modal-content-side-nav[_ngcontent-%COMP%] {\n    border-radius: 0;\n    border: none;\n  }\n\n  .modal-header-side-nav[_ngcontent-%COMP%] {\n    border-bottom-color: #eeeeee;\n    background-color: #fafafa;\n  }\n\n  .container-side-nav[_ngcontent-%COMP%] {\n    padding-top: 2rem;\n  }\n\n  .btn-side-nav[_ngcontent-%COMP%] {\n    margin-bottom: 2rem;\n  }\n}\n\n@media (max-width: 991.98px) {\n  main[_ngcontent-%COMP%] {\n    padding-left: 15px !important;\n    padding-right: 15 !important;\n  }\n}\n\n.facetGroup_facets__bE9U9[_ngcontent-%COMP%] {\n  list-style: none;\n  max-height: inherit;\n  overflow-x: hidden;\n  overflow-y: auto;\n  position: relative;\n}\n\n.facet_facet__IMsMJ[_ngcontent-%COMP%] {\n  color: #2f3337;\n  line-height: 20px;\n  padding: 8px 0 16px;\n}\n\n.facet_facetLink__VcUM4[_ngcontent-%COMP%] {\n  color: #545658;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  font-size: 14px;\n  position: relative;\n  text-decoration: none;\n  vertical-align: -6px;\n  width: 100%;\n}\n\n.cl-form-checkbox[_ngcontent-%COMP%], .cl-form-toggle[_ngcontent-%COMP%], .cl-form-radio[_ngcontent-%COMP%] {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  position: relative;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%], input[type=radio][_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  padding: 0;\n}\n\n.cl-form-checkbox-input[_ngcontent-%COMP%], .cl-form-toggle-input[_ngcontent-%COMP%], .cl-form-radio-input[_ngcontent-%COMP%] {\n  height: 24px;\n  width: 24px;\n  margin: 0;\n}\n\n.facet_facetLink__VcUM4[_ngcontent-%COMP%]   .cl-form-checkbox-label[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  bottom: 5px;\n}\n\n.cl-form-checkbox-label[_ngcontent-%COMP%], .cl-form-toggle-label[_ngcontent-%COMP%], .cl-form-radio-label[_ngcontent-%COMP%] {\n  align-items: flex-start;\n  cursor: pointer;\n  display: inline-flex;\n  font-size: 16px;\n  line-height: 1.5;\n  position: relative;\n  margin-left: 10px;\n}\n\n.accordion-body[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  color: #f68b1e;\n}\n\n.facet_facetLabel__9qyC5[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 5px;\n  text-decoration: none;\n  color: #333;\n}\n\n.facet_facetCount__FnICr[_ngcontent-%COMP%] {\n  margin-left: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLCtCQUFBO0FBQUY7O0FBSUM7RUFDRyxtQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHNJQUFBO0FBREo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxvS0FDQTtBQURKOztBQUtBO0VBQ0UsMEJBQUE7QUFGRjs7QUFLQTtFQUNFLHNCQUFBO0FBRkY7O0FBS0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFGSjs7QUFLQTtFQUNJLGFBQUE7QUFGSjs7QUFNQTtFQUNJLHNCQUFBO0FBSEo7O0FBT0E7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQUpKOztBQU9FO0VBQ0Usd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFKSjs7QUFPRTtFQUNFLGtCQUFBO0VBQ0EsaUNBQUE7QUFKSjs7QUFPRTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBSko7O0FBT0U7RUFDRSxpQkFBQTtBQUpKOztBQU9FO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQUpKOztBQU9FOztFQUVFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBSko7O0FBT0U7RUFDRSxXQUFBO0FBSko7O0FBT0U7RUFDRSxpQkFBQTtFQUNBLE9BQUE7QUFKSjs7QUFPRTtFQUNFLFFBQUE7RUFDQSxrQkFBQTtBQUpKOztBQU1FO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBSEo7O0FBUUE7RUFDRSxnQkFBQTtBQUxGOztBQU9BO0VBQ0UsZ0JBQUE7QUFKRjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLG9DQUFBO0FBSEY7O0FBTUE7O0VBRUUscUJBQUE7QUFIRjs7QUFPQTtFQUNFLGdCQUFBO0FBSkY7O0FBTUE7RUFDRSxxQkFBQTtFQUNBLFdBQUE7QUFIRjs7QUFPRTtFQUNFLGNBQUE7QUFKSjs7QUFhQTtFQUNFO0lBQ0UsV0FBQTtFQVZGOztFQWVBO0lBQ0UsWUFBQTtFQVpGOztFQWdCQTtJQUNFLFdBQUE7RUFiRjtBQUNGOztBQWlCQTtFQUNFO0lBQ0UsWUFBQTtFQWZGOztFQW9CQTtJQUNFLGFBQUE7RUFqQkY7O0VBb0JBO0lBQ0UsWUFBQTtFQWpCRjtBQUNGOztBQW9CQTtFQUNFO0lBQ0UsYUFBQTtFQWxCRjs7RUFvQkE7SUFDRSxrQkFBQTtFQWpCRjs7RUFtQkE7SUFDRSxhQUFBO0VBaEJGO0FBQ0Y7O0FBbUJBO0VBQ0U7SUFDRSxpQkFBQTtFQWpCRjs7RUFtQkE7SUFDRSxhQUFBO0lBQ0EsdUJBQUE7RUFoQkY7O0VBa0JFO0lBQ0UsZUFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0lBQ0EsZ0NBQUE7RUFmSjs7RUFpQkU7SUFDRSxZQUFBO0lBQ0EsZ0JBQUE7RUFkSjs7RUFnQkU7SUFDRSx1QkFBQTtJQUVBLGdCQUFBO0lBQ0EsaUJBQUE7RUFkSjs7RUFpQkU7SUFFRSxtREFBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLGNBQUE7RUFmSjs7RUFrQkU7SUFDRSxPQUFBO0VBZko7O0VBaUJFO0lBRUUsb0RBQUE7SUFDQSxrQkFBQTtJQUNBLFFBQUE7SUFDQSxjQUFBO0VBZko7O0VBaUJFO0lBQ0UsUUFBQTtFQWRKOztFQWdCRTtJQUNFLGdCQUFBO0lBQ0EsWUFBQTtFQWJKOztFQWVFO0lBQ0UsNEJBQUE7SUFDQSx5QkFBQTtFQVpKOztFQWNFO0lBQ0UsaUJBQUE7RUFYSjs7RUFhRTtJQUNFLG1CQUFBO0VBVko7QUFDRjs7QUFlQTtFQUVFO0lBQ0UsNkJBQUE7SUFDQSw0QkFBQTtFQWRGO0FBQ0Y7O0FBaUJBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQWZGOztBQWtCQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBZkY7O0FBa0JBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtBQWZGOztBQWtCQTtFQUNFLDJEQUFBO0VBQ0Esa0JBQUE7QUFmRjs7QUFpQkE7RUFDRSxzQkFBQTtFQUNBLFVBQUE7QUFkRjs7QUFnQkE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFiRjs7QUFnQkE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUFiRjs7QUFnQkE7RUFDRSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFiRjs7QUFtQkU7RUFDRSxjQUFBO0FBaEJKOztBQXFCQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQWxCRjs7QUFxQkE7RUFDRSxnQkFBQTtBQWxCRiIsImZpbGUiOiJzZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbip7XG4gIGZvbnQtZmFtaWx5OiAnc29maWEnICFpbXBvcnRhbnQ7XG59XG5cblxuIC5ib3R0b20tY2FyZHsgICAgXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy8yNzE3NzEvcGV4ZWxzLXBob3RvLTI3MTc3MS5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2ImZHByPTImaD00MDAmdz0yMDYwXCIpO1xufVxuLmNhcmQtdGV4dHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICBiYWNrZ3JvdW5kOiBcbiAgICAtd2Via2l0LWxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDI1NSwgMiwgMCksIHJnYmEoMCwgMjU1LCAyLCAwLjApIDAlKSxcbiAgIC13ZWJraXQtbGluZWFyLWdyYWRpZW50KC0yMGRlZywgcmdiYSg0LCAwLCAyNTUsIDApIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjM1LCAwLjcpIDAlKTtcbn1cblxuLnNjYWxlLXVwIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7IFxufVxuXG4uc2NhbGUtdXA6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xufVxuXG4udHh0e1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHdpZHRoOiBpbmhlcml0O1xuICAgIFxufVxuLnR4dDJ7XG4gICAgZGlzcGxheTogZ3JpZDtcbn1cblxuXG4udy0xMDAge1xuICAgIHdpZHRoOiAxMDAlIWltcG9ydGFudDtcbiAgfVxuXG4gIFxuLmJyYW5kcy1kaXYge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5icmFuZHMtY2FyZHMge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA4MHB4KTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGhlaWdodDogMjUwcHg7XG4gIH1cbiAgXG4gIC5vdmVyZmxvdyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRyYW5zaXRpb246IGxlZnQgMC41cyBlYXNlLWluLW91dDtcbiAgfVxuICBcbiAgLmJyYW5kLWNhcmQge1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTFlMjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIFxuICAubm8tcmlnaHQtbWFyZ2luIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgfVxuICBcbiAgLmJyYW5kLWNhcmQgc3BhbiB7XG4gICAgZm9udC1zaXplOjQ4cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgfVxuICBcbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB9XG4gIFxuICAubGVmdC5kaXNhYmxlZCwgLnJpZ2h0LmRpc2FibGVkIHtcbiAgICBjb2xvcjojQ0NDO1xuICB9XG4gIFxuICAubGVmdCB7XG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gICAgbGVmdDogMDtcbiAgfVxuICBcbiAgLnJpZ2h0IHtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gIH1cbiAgLnNpZGViYXItbmF2IGxpIGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcblxufVxuXG5cbi5zaWRlYmFyLW5hdntcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5zaWRlYmFyLW5hdiBsaSBhOmhvdmVyIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5zaWRlYmFyLW5hdiBsaSBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI2Y2OGIxZTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjIpO1xufVxuXG4uc2lkZWJhci1uYXYgbGkgYTphY3RpdmUsXG4uc2lkZWJhci1uYXYgbGkgYTpmb2N1cyB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxufVxuXG51bHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbmF7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IzMzMztcbn1cblxuLmRpc3BsYXktYmxvY2t7XG4gIC5hY2NvcmRpb24tY29sbGFwc2V7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cblxuXG4vLyAuYWNjb3JkaW9uOmhvdmVyIGRpdntcbi8vICAgZGlzcGxheTpibG9jayAhaW1wb3J0YW50O1xuLy8gfVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDAwLjk4cHgpeyBcbiAgLm1vZGFsLXNpZGUtbmF2LmxlZnQtc2lkZS1uYXYuZmFkZS1zaWRlLW5hdiAubW9kYWwtZGlhbG9nLXNpZGUtbmF2IHtcbiAgICBsZWZ0OiAtMTAwJTtcblxuXG4gIH1cbiBcbiAgLm1vZGFsLXNpZGUtbmF2LnJpZ2h0LXNpZGUtbmF2LmZhZGUtc2lkZS1uYXYgLm1vZGFsLWRpYWxvZy1zaWRlLW5hdiB7XG4gICAgcmlnaHQ6IC0xMDAlO1xuXG4gIH1cblxuICAubW9kYWwtc2lkZS1uYXYgLm1vZGFsLWRpYWxvZy1zaWRlLW5hdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNDAwLjk4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTEuOThweCl7IFxuICAubW9kYWwtc2lkZS1uYXYubGVmdC1zaWRlLW5hdi5mYWRlLXNpZGUtbmF2IC5tb2RhbC1kaWFsb2ctc2lkZS1uYXYge1xuICAgIGxlZnQ6IC0zMjBweDtcblxuXG4gIH1cbiBcbiAgLm1vZGFsLXNpZGUtbmF2LnJpZ2h0LXNpZGUtbmF2LmZhZGUtc2lkZS1uYXYgLm1vZGFsLWRpYWxvZy1zaWRlLW5hdiB7XG4gICAgcmlnaHQ6IC0zMjBweDtcblxuICB9XG4gIC5tb2RhbC1zaWRlLW5hdiAubW9kYWwtZGlhbG9nLXNpZGUtbmF2IHtcbiAgICB3aWR0aDogMzIwcHg7XG4gIH1cblxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MS45OHB4KXsgXG4gIC5tb2RhbC1oZWFkZXItc2lkZS1uYXZ7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuc2VhcmNoLWNvbnRlbnR7XG4gICAgcGFkZGluZy10b3A6IDEzMHB4O1xuICB9XG4gIC5idG4tc2hvdy1maWx0ZXJ7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpeyBcbiAgLnNlYXJjaC1jb250ZW50e1xuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xuICB9XG4gIC5tb2RhbC1oZWFkZXItc2lkZS1uYXZ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgfVxuICAgIC5tb2RhbC1zaWRlLW5hdiAubW9kYWwtZGlhbG9nLXNpZGUtbmF2IHtcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCUsIDAsIDApO1xuICAgIH1cbiAgICAubW9kYWwtc2lkZS1uYXYgLm1vZGFsLWNvbnRlbnQtc2lkZS1uYXYge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICB9XG4gICAgLm1vZGFsLXNpZGUtbmF2IC5tb2RhbC1ib2R5LXNpZGUtbmF2IHtcbiAgICAgIHBhZGRpbmc6IDE1cHggMTVweCA4MHB4O1xuXG4gICAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG5cbiAgICB9XG4gICAgLm1vZGFsLXNpZGUtbmF2LmxlZnQtc2lkZS1uYXYuZmFkZS1zaWRlLW5hdiAubW9kYWwtZGlhbG9nLXNpZGUtbmF2IHtcblxuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjFzIGxpbmVhciwgbGVmdCAwLjFzIGVhc2Utb3V0O1xuICAgICAgbWluLWhlaWdodDogMTAwMHB4O1xuICAgICAgdG9wOiAwcHg7XG4gICAgICB6LWluZGV4OiAxMDAwMDtcblxuICAgIH1cbiAgICAubW9kYWwtc2lkZS1uYXYubGVmdC1zaWRlLW5hdi5mYWRlLXNpZGUtbmF2LnNob3cgLm1vZGFsLWRpYWxvZy1zaWRlLW5hdiB7XG4gICAgICBsZWZ0OiAwO1xuICAgIH1cbiAgICAubW9kYWwtc2lkZS1uYXYucmlnaHQtc2lkZS1uYXYuZmFkZS1zaWRlLW5hdiAubW9kYWwtZGlhbG9nLXNpZGUtbmF2IHtcbiAgICBcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xcyBsaW5lYXIsIHJpZ2h0IDAuMXMgZWFzZS1vdXQ7XG4gICAgICBtaW4taGVpZ2h0OiAxMDAwcHg7XG4gICAgICB0b3A6IDBweDtcbiAgICAgIHotaW5kZXg6IDEwMDAwO1xuICAgIH1cbiAgICAubW9kYWwtc2lkZS1uYXYucmlnaHQtc2lkZS1uYXYuZmFkZS1zaWRlLW5hdi5zaG93IC5tb2RhbC1kaWFsb2ctc2lkZS1uYXYge1xuICAgICAgcmlnaHQ6IDA7XG4gICAgfVxuICAgIC5tb2RhbC1jb250ZW50LXNpZGUtbmF2IHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgfVxuICAgIC5tb2RhbC1oZWFkZXItc2lkZS1uYXYge1xuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2VlZWVlZTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gICAgfVxuICAgIC5jb250YWluZXItc2lkZS1uYXYge1xuICAgICAgcGFkZGluZy10b3A6IDJyZW07XG4gICAgfVxuICAgIC5idG4tc2lkZS1uYXYge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICB9XG5cbn1cblxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpeyBcblxuICBtYWlue1xuICAgIHBhZGRpbmctbGVmdDogMTVweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1ICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLmZhY2V0R3JvdXBfZmFjZXRzX19iRTlVOSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1heC1oZWlnaHQ6IGluaGVyaXQ7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZmFjZXRfZmFjZXRfX0lNc01KIHtcbiAgY29sb3I6ICMyZjMzMzc7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBwYWRkaW5nOiA4cHggMCAxNnB4O1xufVxuXG4uZmFjZXRfZmFjZXRMaW5rX19WY1VNNCB7XG4gIGNvbG9yOiAjNTQ1NjU4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHZlcnRpY2FsLWFsaWduOiAtNnB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNsLWZvcm0tY2hlY2tib3gsIC5jbC1mb3JtLXRvZ2dsZSwgLmNsLWZvcm0tcmFkaW8ge1xuICBmb250LWZhbWlseTogJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLCBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAwO1xufVxuLmNsLWZvcm0tY2hlY2tib3gtaW5wdXQsIC5jbC1mb3JtLXRvZ2dsZS1pbnB1dCwgLmNsLWZvcm0tcmFkaW8taW5wdXQge1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAyNHB4O1xuICBtYXJnaW46IDA7XG59XG5cbi5mYWNldF9mYWNldExpbmtfX1ZjVU00IC5jbC1mb3JtLWNoZWNrYm94LWxhYmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgYm90dG9tOiA1cHg7XG59XG5cbi5jbC1mb3JtLWNoZWNrYm94LWxhYmVsLCAuY2wtZm9ybS10b2dnbGUtbGFiZWwsIC5jbC1mb3JtLXJhZGlvLWxhYmVsIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiBcbn1cblxuXG4uYWNjb3JkaW9uLWJvZHkgPiB1bCA+IGxpOmhvdmVye1xuICBhe1xuICAgIGNvbG9yOiAjZjY4YjFlO1xuICB9XG59XG5cblxuLmZhY2V0X2ZhY2V0TGFiZWxfXzlxeUM1IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMzMzNcbn1cblxuLmZhY2V0X2ZhY2V0Q291bnRfX0ZuSUNyIHtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbn0iXX0= */"] });


/***/ }),

/***/ "wlfi":
/*!**********************************************!*\
  !*** ./src/app/views/cart/cart.component.ts ***!
  \**********************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_user_info_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user-info.service */ "lg7r");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var src_app_services_biz_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/biz.service */ "Epua");
/* harmony import */ var src_app_services_login_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/login-modal.service */ "5D85");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../header/header.component */ "MR1q");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../footer/footer.component */ "FPq/");
/* harmony import */ var _star_rate_bar_star_rate_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../star-rate-bar/star-rate-bar.component */ "lOie");










function CartComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No Items ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { "margin-top": "0px" }; };
const _c1 = function () { return { "margin-top": "30px" }; };
const _c2 = function (a1) { return ["/product", a1]; };
function CartComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-star-rate-bar", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Size: Queen Duvet Cover + 2 Shams");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Color: White");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_14_Template_span_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const item_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.reduceProductCount(item_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_14_Template_span_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const item_r2 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.increaseProductCount(item_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Save for later");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_14_Template_i_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const item_r2 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.removeItem(item_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", item_r2.id == ctx_r1.cartItems[0].id ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0) : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c2, item_r2.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r2.images[0].image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c2, item_r2.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rate", item_r2.rating)("label", item_r2.reviews)("size", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$ ", item_r2.pricing.first_cost, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.product_count);
} }
const _c3 = function (a0) { return { "background-color": a0 }; };
class CartComponent {
    constructor(userInfoService, apiService, bizService, loginModalService, router) {
        this.userInfoService = userInfoService;
        this.apiService = apiService;
        this.bizService = bizService;
        this.loginModalService = loginModalService;
        this.router = router;
        this.cartItems = [];
        this.cart_summary = {
            currency: '$',
            subtotal: 0,
            freight_cost: 0,
            estimated_tax: 0,
            total_cost: 0
        };
        this.cartItems = this.userInfoService.getCartItems();
    }
    ngOnInit() {
        this.calculateCartCost();
    }
    reduceProductCount(item) {
        if (item.product_count > 1) {
            item.product_count = item.product_count - 1;
            this.userInfoService.updateItemCart(item);
        }
    }
    increaseProductCount(item) {
        item.product_count = item.product_count + 1;
        this.userInfoService.updateItemCart(item);
    }
    removeItem(item) {
        this.userInfoService.removeItemCart(item);
        this.cartItems = this.userInfoService.getCartItems();
        this.calculateCartCost();
    }
    calculateCartCost() {
        this.cart_summary.subtotal = 0;
        this.cart_summary.total_cost = 0;
        this.cart_summary.freight_cost = 0;
        for (var i = 0; i < this.cartItems.length; i++) {
            let item = this.cartItems[i];
            this.cart_summary.subtotal = this.cart_summary.subtotal + parseFloat(item.pricing.first_cost) * item.product_count;
            this.cart_summary.freight_cost = this.cart_summary.freight_cost + parseFloat(item.pricing.freight_cost) * item.product_count;
            this.cart_summary.total_cost = parseFloat(((this.cart_summary.subtotal + this.cart_summary.freight_cost)).toFixed(2));
            this.cart_summary.subtotal = this.cart_summary.total_cost;
        }
        // this.apiService.calculateCartCosts(this.cartItems).subscribe(res=>{
        //   this.cart_summary=res;
        // },err=>{});
    }
    checkout() {
        if (this.userInfoService.isLoggedIn()) {
            this.router.navigateByUrl("/" + this.bizService.getBizId() + "/shipping-detail");
        }
        else {
            this.loginModalService.open();
            // this.router.navigateByUrl("/"+this.bizService.getBizId()+"/login")
        }
    }
}
CartComponent.ɵfac = function CartComponent_Factory(t) { return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_info_service__WEBPACK_IMPORTED_MODULE_1__["UserInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_biz_service__WEBPACK_IMPORTED_MODULE_3__["BizService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_login_modal_service__WEBPACK_IMPORTED_MODULE_4__["LoginModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartComponent, selectors: [["app-cart"]], decls: 53, vars: 13, consts: [[1, "container-fluid", "vstack", "gap-2", "main-div"], [1, "cart-items-wrapper", "mb-5", "pb-5"], [1, "d-flex", "align-items-center", "justify-content-between", "cart-items-header", "mb-3", "px-2"], [1, "row"], [1, "page-title"], [1, "card", "main-content", 2, "border", "none"], [1, "card-body"], [1, "row", "form-info"], [1, "col-lg-8", "col-sm-8", "col-12", "col-cart"], ["class", "row", 4, "ngIf"], ["class", "item-cart", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "col-sm-4", "col-12", "col-summary"], [1, "card", "summary-card"], [1, "row", 2, "margin-top", "15px"], [2, "display", "inline-block"], [2, "float", "right"], [1, "line"], [1, "row", 2, "margin-top", "20px"], [1, "btn", "submit-now-button", 3, "ngStyle", "click"], [1, "row", 2, "margin-top", "50px"], [2, "padding-top", "20px"], [1, "item-cart", 3, "ngStyle"], [1, "col-sm-3", "col-lg-3", 2, "overflow", "hidden"], [3, "routerLink"], ["width", "200px", "height", "200px", 3, "src"], [1, "col-sm-6", "col-lg-6"], [2, "font-weight", "400", "font-size", "large"], [2, "text-decoration", "none", "font-size", "x-large", 3, "routerLink"], [3, "rate", "label", "size"], [1, "col-sm-3", "col-lg-3"], [1, "row", "item-price"], [2, "font-size", "xx-large", "font-weight", "400"], [1, "row", 2, "margin-top", "10px"], [1, "col-sm-12", "col-lg-12"], [1, "item-count", 2, "border", "2px solid rgb(90, 90, 90)", "border-radius", "30px", "width", "fit-content", "padding", "0px", "display", "flex", "height", "35px"], [2, "padding-left", "15px", "padding-right", "10px", "padding-top", "3px", "padding-bottom", "3px", "font-size", "medium", 3, "click"], [1, "fa", "fa-minus", 2, "font-family", "'Font Awesome 6 Free' !important"], [2, "padding-left", "10px", "padding-right", "10px", "padding-top", "3px", "padding-bottom", "3px", "font-weight", "500", "font-size", "large", "border-right", "2px solid rgb(90, 90, 90)", "border-left", "2px solid black", "width", "50px", "text-align", "center"], [2, "padding-left", "10px", "padding-right", "15px", "padding-top", "3px", "padding-bottom", "3px", "font-size", "medium", 3, "click"], [1, "fa", "fa-plus", 2, "font-family", "'Font Awesome 6 Free' !important"], [1, "row", "save-latter"], [1, "col-sm-12"], [2, "padding", "0px"], [1, "row", "remove", 2, "margin-top", "10px"], [1, "fa", "fa-trash", 2, "font-family", "'Font Awesome 6 Free' !important", 3, "click"]], template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "My cart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CartComponent_div_13_Template, 3, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CartComponent_div_14_Template, 44, 16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Order Subtotal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Freight Cost");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Estimated Tax");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_Template_button_click_45_listener() { return ctx.checkout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Proceed to Checkout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Add Gift Card/Promo Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "footer", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cartItems.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cartItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.cart_summary.currency, "", ctx.cart_summary.subtotal, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.cart_summary.currency, "", ctx.cart_summary.freight_cost, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.cart_summary.currency, "", ctx.cart_summary.estimated_tax, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.cart_summary.currency, "", ctx.cart_summary.total_cost, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c3, ctx.bizService.get_background_color()));
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _star_rate_bar_star_rate_bar_component__WEBPACK_IMPORTED_MODULE_9__["StarRateBarComponent"]], styles: ["*[_ngcontent-%COMP%] {\n  color: #211e22;\n  font-family: \"sofia\" !important;\n}\n\n.summary-card[_ngcontent-%COMP%] {\n  box-shadow: 0px 0 6px #777;\n}\n\n.submit-now-button[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #f68b1e;\n  color: #fff;\n  font-weight: 500;\n  border-radius: 20px;\n}\n\n.line[_ngcontent-%COMP%] {\n  background-color: #f1f1f1;\n  height: 3px;\n  width: 98%;\n  margin: auto;\n}\n\n.item-cart[_ngcontent-%COMP%] {\n  padding: 10px;\n  box-shadow: var(--bs-box-shadow);\n}\n\n.item-cart[_ngcontent-%COMP%]:hover, .item-cart[_ngcontent-%COMP%]:focus {\n  box-shadow: 0px 0 10px #777;\n}\n\n.card[_ngcontent-%COMP%] {\n  border-radius: 30px;\n  padding: 20px;\n}\n\n.page-title[_ngcontent-%COMP%] {\n  font-size: xx-large;\n}\n\n.card-round[_ngcontent-%COMP%] {\n  background-color: #F0FBF9;\n  border-radius: 50px;\n  height: 100%;\n  padding: 20px;\n}\n\n.info-title[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-weight: 900;\n  font-size: large;\n}\n\n.info-title-section[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.dash[_ngcontent-%COMP%] {\n  background-color: #0c0c0c;\n  height: 5px;\n  width: 20px;\n}\n\n.line[_ngcontent-%COMP%] {\n  background-color: #f1f1f1;\n  height: 4px;\n  width: 98%;\n  margin: auto;\n}\n\n.form-info[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n.form-group[_ngcontent-%COMP%]   .round-input[_ngcontent-%COMP%] {\n  border-radius: 20px !important;\n  height: 50px;\n  padding-left: 20px;\n  border: 3px solid #f1f1f1;\n}\n\n.full-height[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.form-group[_ngcontent-%COMP%]   .text-area-height[_ngcontent-%COMP%] {\n  height: 82%;\n}\n\n.img-table[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n\n.table-borderless[_ngcontent-%COMP%] {\n  border: 0px;\n}\n\n.submit-button-section[_ngcontent-%COMP%] {\n  padding-top: 100px;\n}\n\n.btn-submit[_ngcontent-%COMP%] {\n  float: right;\n  height: 50px;\n  padding: auto;\n  border-radius: 40px;\n  font-size: large;\n}\n\n@media (min-width: 991.98px) {\n  .col-summary[_ngcontent-%COMP%] {\n    padding-left: 50px;\n  }\n\n  .col-cart[_ngcontent-%COMP%] {\n    padding-right: 50px;\n  }\n\n  .main-content[_ngcontent-%COMP%] {\n    padding-left: 50px;\n    padding-right: 50px;\n  }\n\n  .page-title[_ngcontent-%COMP%] {\n    font-size: x-large;\n    padding-left: 60px;\n  }\n\n  .main-div[_ngcontent-%COMP%] {\n    padding-top: 130px;\n  }\n\n  .item-price[_ngcontent-%COMP%] {\n    text-align: end;\n  }\n\n  .save-latter[_ngcontent-%COMP%] {\n    text-align: end;\n    padding: 0px;\n  }\n\n  .remove[_ngcontent-%COMP%] {\n    text-align: end;\n    padding: 0px;\n  }\n\n  .item-count[_ngcontent-%COMP%] {\n    float: right;\n  }\n}\n\n@media (max-width: 991.98px) {\n  .main-div[_ngcontent-%COMP%] {\n    padding-top: 0px;\n  }\n\n  .cart-items-header[_ngcontent-%COMP%] {\n    padding-top: 5px;\n    top: 0px !important;\n  }\n\n  .main-content[_ngcontent-%COMP%] {\n    padding-left: 0px !important;\n    padding-right: 0px !important;\n  }\n\n  .summary-card[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NhcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxjQUFBO0VBQ0EsK0JBQUE7QUFIRjs7QUFRQTtFQUdPLDBCQUFBO0FBTFA7O0FBUUE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUxGOztBQVdBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFSRjs7QUFXQTtFQUNFLGFBQUE7RUFDQSxnQ0FBQTtBQVJGOztBQVlFO0VBSU8sMkJBQUE7QUFWVDs7QUFjQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtBQVhGOztBQWFBO0VBQ0UsbUJBQUE7QUFWRjs7QUFZQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQVRGOztBQVlBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBVEY7O0FBWUE7RUFDRSxtQkFBQTtBQVRGOztBQWNBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQVhGOztBQWNFO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFYSjs7QUFjQTtFQUNFLGdCQUFBO0FBWEY7O0FBY0E7RUFDRSxnQkFBQTtBQVhGOztBQWNFO0VBQ0ksOEJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQVhOOztBQWVBO0VBQ0UsWUFBQTtBQVpGOztBQWdCQTtFQUNFLFdBQUE7QUFiRjs7QUFrQkE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQWZBOztBQW1CQTtFQUNFLFdBQUE7QUFoQkY7O0FBb0JBO0VBQ0Usa0JBQUE7QUFqQkY7O0FBb0JBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQWpCRjs7QUFxQkE7RUFDRTtJQUNFLGtCQUFBO0VBbEJGOztFQW9CQTtJQUNFLG1CQUFBO0VBakJGOztFQW1CQTtJQUNFLGtCQUFBO0lBQ0EsbUJBQUE7RUFoQkY7O0VBa0JBO0lBQ0Usa0JBQUE7SUFDQSxrQkFBQTtFQWZGOztFQWlCQTtJQUNFLGtCQUFBO0VBZEY7O0VBZ0JBO0lBQ0UsZUFBQTtFQWJGOztFQWVBO0lBQ0UsZUFBQTtJQUNBLFlBQUE7RUFaRjs7RUFjQTtJQUNFLGVBQUE7SUFDQSxZQUFBO0VBWEY7O0VBYUE7SUFDRSxZQUFBO0VBVkY7QUFDRjs7QUFjQTtFQUNFO0lBQ0UsZ0JBQUE7RUFaRjs7RUFjQTtJQUNFLGdCQUFBO0lBQ0EsbUJBQUE7RUFYRjs7RUFjQTtJQUNFLDRCQUFBO0lBQ0EsNkJBQUE7RUFYRjs7RUFhQTtJQUNFLGdCQUFBO0VBVkY7QUFDRiIsImZpbGUiOiJjYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuXG4qe1xuICBjb2xvcjojMjExZTIyO1xuICBmb250LWZhbWlseTogJ3NvZmlhJyAhaW1wb3J0YW50O1xufVxuXG5cblxuLnN1bW1hcnktY2FyZHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMCA2cHgjNzc3O1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAwIDZweCM3Nzc7XG4gICAgICAgYm94LXNoYWRvdzogMHB4IDAgNnB4Izc3Nztcbn1cblxuLnN1Ym1pdC1ub3ctYnV0dG9ue1xuICB3aWR0aDoxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZjY4YjFlO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcblxuXG59XG5cblxuLmxpbmV7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDEsIDI0MSwgMjQxKTtcbiAgaGVpZ2h0OiAzcHg7XG4gIHdpZHRoOiA5OCU7XG4gIG1hcmdpbjphdXRvO1xuXG59XG4uaXRlbS1jYXJ0IHtcbiAgcGFkZGluZzogMTBweDtcbiAgYm94LXNoYWRvdzogdmFyKC0tYnMtYm94LXNoYWRvdyk7XG59XG4uaXRlbS1jYXJ0IHtcblxuICAmOmhvdmVyLCAmOmZvY3VzIHtcbiAgIFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDAgMTBweCM3Nzc7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggMCAxMHB4Izc3NztcbiAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwIDEwcHgjNzc3O1xuICB9XG59XG5cbi5jYXJke1xuICBib3JkZXItcmFkaXVzOjMwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4ucGFnZS10aXRsZXtcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcbn1cbi5jYXJkLXJvdW5ke1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGQkY5O1xuICBib3JkZXItcmFkaXVzOjUwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmluZm8tdGl0bGV7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG5cbn1cbi5pbmZvLXRpdGxlLXNlY3Rpb257XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbn1cblxuXG4uZGFzaHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyLCAxMiwgMTIpO1xuICBoZWlnaHQ6IDVweDtcbiAgd2lkdGg6IDIwcHg7XG59XG5cbiAgLmxpbmV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MSwgMjQxLCAyNDEpO1xuICAgIGhlaWdodDogNHB4O1xuICAgIHdpZHRoOiA5OCU7XG4gICAgbWFyZ2luOmF1dG87XG5cbiAgfVxuLmZvcm0taW5mb3tcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxubGFiZWx7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4uZm9ybS1ncm91cCB7XG4gIC5yb3VuZC1pbnB1dHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYigyNDEsIDI0MSwgMjQxKTtcbiAgfVxufVxuXG4uZnVsbC1oZWlnaHR7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuXG4uZm9ybS1ncm91cCAudGV4dC1hcmVhLWhlaWdodHtcbiAgaGVpZ2h0OiA4MiU7XG59XG5cblxuXG4uaW1nLXRhYmxle1xud2lkdGg6IDE2cHg7XG5oZWlnaHQ6IDE2cHg7XG59XG5cblxuLnRhYmxlLWJvcmRlcmxlc3N7XG4gIGJvcmRlcjowcHg7XG59XG5cblxuLnN1Ym1pdC1idXR0b24tc2VjdGlvbntcbiAgcGFkZGluZy10b3A6MTAwcHg7XG59XG5cbi5idG4tc3VibWl0e1xuICBmbG9hdDogcmlnaHQ7XG4gIGhlaWdodDogNTBweDtcbiAgcGFkZGluZzogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgZm9udC1zaXplOiBsYXJnZTtcbn1cblxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkxLjk4cHgpIHsgXG4gIC5jb2wtc3VtbWFyeXtcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gIH1cbiAgLmNvbC1jYXJ0e1xuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gIH1cbiAgLm1haW4tY29udGVudHtcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcbiAgfVxuICAucGFnZS10aXRsZXtcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xuICB9XG4gIC5tYWluLWRpdntcbiAgICBwYWRkaW5nLXRvcDogMTMwcHg7XG4gIH1cbiAgLml0ZW0tcHJpY2V7XG4gICAgdGV4dC1hbGlnbjogZW5kO1xuICB9XG4gIC5zYXZlLWxhdHRlcntcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgcGFkZGluZzogMHB4O1xuICB9XG4gIC5yZW1vdmV7XG4gICAgdGV4dC1hbGlnbjogZW5kO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgfVxuICAuaXRlbS1jb3VudHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gIH1cblxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpIHsgXG4gIC5tYWluLWRpdntcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuICB9XG4gIC5jYXJ0LWl0ZW1zLWhlYWRlcntcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIHRvcDowcHggIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLm1haW4tY29udGVudHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5zdW1tYXJ5LWNhcmR7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxufSJdfQ== */"] });


/***/ }),

/***/ "yquH":
/*!********************************************************************!*\
  !*** ./src/app/views/shipping-detail/shipping-detail.component.ts ***!
  \********************************************************************/
/*! exports provided: ShippingDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingDetailComponent", function() { return ShippingDetailComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var src_app_services_user_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user-info.service */ "lg7r");
/* harmony import */ var src_app_services_biz_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/biz.service */ "Epua");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../header/header.component */ "MR1q");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../footer/footer.component */ "FPq/");










function ShippingDetailComponent_option_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", c_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](c_r1);
} }
const _c0 = function (a0) { return { "background-color": a0 }; };
class ShippingDetailComponent {
    constructor(formBuilder, apiService, userInfoService, bizService, router) {
        this.formBuilder = formBuilder;
        this.apiService = apiService;
        this.userInfoService = userInfoService;
        this.bizService = bizService;
        this.router = router;
        this.cartItems = [];
        this.cart_summary = {
            currency: '$',
            subtotal: '0',
            freight_cost: '0',
            estimated_tax: '0',
            total_cost: '0'
        };
        this.countries = ["United States", "Germany", "United Kingdom"];
    }
    ngOnInit() {
        this.shippingForm = this.formBuilder.group({
            contact: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            country: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            address_2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            state: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            postal_code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
        });
        this.cartItems = this.userInfoService.getCartItems();
        this.calculateCartCost();
    }
    saveShippingDetail() {
        this.cartItems = this.userInfoService.getCartItems();
        var payload = {
            customer: this.userInfoService.getCustomerId(),
            products: [],
            new_customer: "No",
            order_channel: "Api",
            customer_location_id: "",
            channel: this.cartItems[0].channel,
            "shipping": Object.assign({
                "shipping_method": "FOB",
                "carrier": "FredEx"
            }, this.shippingForm.value),
            amount: this.cart_summary.total_cost
        };
        payload["shipping"];
        for (var i = 0; i < this.cartItems.length; i++) {
            payload.products.push({
                id: this.cartItems[i].id,
                quantity: this.cartItems[i].product_count,
                channel: this.cartItems[i].channel
            });
        }
        this.apiService.createNewOrder(payload).subscribe(res => {
            this.router.navigateByUrl("/" + this.bizService.getBizId() + "/payment-method/" + res.order_id);
        }, err => {
        });
        // this.apiService.addCustomerLocation(this.shippingForm.value).subscribe(res=>{
        // },err=>{})
    }
    calculateCartCost() {
        this.cart_summary.subtotal = 0;
        this.cart_summary.total_cost = 0;
        this.cart_summary.freight_cost = 0;
        for (var i = 0; i < this.cartItems.length; i++) {
            let item = this.cartItems[i];
            this.cart_summary.subtotal = this.cart_summary.subtotal + parseFloat(item.pricing.first_cost) * item.product_count;
            this.cart_summary.freight_cost = this.cart_summary.freight_cost + parseFloat(item.pricing.freight_cost) * item.product_count;
            this.cart_summary.total_cost = parseFloat(((this.cart_summary.subtotal + this.cart_summary.freight_cost)).toFixed(2));
            this.cart_summary.subtotal = this.cart_summary.total_cost;
        }
        // this.apiService.calculateCartCosts(this.userInfoService.getCartItems()).subscribe(res=>{
        //   this.cart_summary=res;
        // },err=>{});
    }
}
ShippingDetailComponent.ɵfac = function ShippingDetailComponent_Factory(t) { return new (t || ShippingDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_info_service__WEBPACK_IMPORTED_MODULE_3__["UserInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_biz_service__WEBPACK_IMPORTED_MODULE_4__["BizService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
ShippingDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ShippingDetailComponent, selectors: [["app-shipping-detail"]], decls: 104, vars: 14, consts: [[2, "padding-top", "100px"], [1, "main-content"], [1, "row"], [1, "page-title"], [3, "formGroup"], [1, "row", "form-info"], [1, "col-lg-6", "col-sm-6", "col-12", "col-form"], [1, "form-group"], ["formControlName", "contact", "placeholder", "Full Name", 1, "form-control", "round-input"], ["formControlName", "phone", "placeholder", "Phone Number", 1, "form-control", "round-input"], [1, "row", 2, "margin-top", "20px"], ["formControlName", "country", "placeholder", "Select Country", 1, "form-select", "round-input"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "address", "placeholder", "Address", 1, "form-control", "round-input"], ["formControlName", "address_2", "placeholder", "Address 2", 1, "form-control", "round-input"], ["formControlName", "city", "placeholder", "City", 1, "form-control", "round-input"], [1, "col-sm-6", "col-lg-6"], ["formControlName", "state", "placeholder", "State/Region", 1, "form-control", "round-input"], [1, "col-sm-6", "col-lg-6", "small-margin-top-20"], ["formControlName", "postal_code", "placeholder", "Postal Code", 1, "form-control", "round-input"], [1, "row", 2, "margin-top", "30px", "justify-content", "center"], [1, "submit-now-button", 3, "ngStyle", "click"], [1, "col-lg-6", "col-sm-6", "col-12", "col-summary"], [1, "card", "summary-card"], [1, "card-body"], [2, "font-weight", "700"], [2, "font-size", "medium"], [1, "row", 2, "margin-top", "15px"], [1, "line"], [2, "display", "inline-block"], [2, "float", "right"], [1, "row", 2, "margin-top", "50px"], [2, "font-weight", "700", "font-size", "large"], [2, "padding-top", "20px"], [3, "value"]], template: function ShippingDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Shipping Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Full Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, ShippingDetailComponent_option_26_Template, 2, 2, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Address ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Address 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "State/Region");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Zip/Postal Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShippingDetailComponent_Template_button_click_54_listener() { return ctx.saveShippingDetail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Save & Continue");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Cart Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, " Order Subtotal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, " Freight Cost");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, " Estimated Tax");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](86, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "Delivery Method");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "Estimated Arrival May 15th, 2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "UPS Ground");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "footer", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](103, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.shippingForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.countries);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c0, ctx.bizService.get_background_color()));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.userInfoService.getCartItems().length, " items");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.cart_summary.currency, "", ctx.cart_summary.subtotal, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.cart_summary.currency, "", ctx.cart_summary.freight_cost, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.cart_summary.currency, "", ctx.cart_summary.estimated_tax, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.cart_summary.currency, "", ctx.cart_summary.total_cost, "");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_z"]], styles: [".main[_ngcontent-%COMP%] {\n  font-size: large;\n}\n\n.summary-card[_ngcontent-%COMP%] {\n  box-shadow: 0px 0 6px #777;\n}\n\n.submit-now-button[_ngcontent-%COMP%] {\n  height: 50px;\n  color: #fff;\n  font-size: large;\n  padding: auto;\n  font-weight: 500;\n  border-radius: 15px;\n  border: none;\n}\n\n.card[_ngcontent-%COMP%] {\n  border-radius: 30px;\n  padding: 20px;\n}\n\n.card-round[_ngcontent-%COMP%] {\n  background-color: #F0FBF9;\n  border-radius: 50px;\n  height: 100%;\n  padding: 20px;\n}\n\n.info-title[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-weight: 900;\n  font-size: large;\n}\n\n.info-title-section[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.dash[_ngcontent-%COMP%] {\n  background-color: #0c0c0c;\n  height: 5px;\n  width: 20px;\n}\n\n.line[_ngcontent-%COMP%] {\n  background-color: #f1f1f1;\n  height: 4px;\n  width: 98%;\n  margin: auto;\n}\n\n.form-info[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.form-group[_ngcontent-%COMP%]   .round-input[_ngcontent-%COMP%] {\n  border-radius: 15px !important;\n  height: 50px;\n  padding-left: 20px;\n  border: 2px solid #C1C7D6;\n}\n\n.full-height[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.form-group[_ngcontent-%COMP%]   .text-area-height[_ngcontent-%COMP%] {\n  height: 82%;\n}\n\n.img-table[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n\n.table-borderless[_ngcontent-%COMP%] {\n  border: 0px;\n}\n\n.submit-button-section[_ngcontent-%COMP%] {\n  padding-top: 100px;\n}\n\n.btn-submit[_ngcontent-%COMP%] {\n  float: right;\n  height: 50px;\n  padding: auto;\n  border-radius: 10px;\n  font-size: large;\n}\n\n.page-title[_ngcontent-%COMP%] {\n  margin-top: 0px;\n  font-size: large;\n}\n\n@media (min-width: 991.98px) {\n  .col-summary[_ngcontent-%COMP%] {\n    padding-left: 50px;\n  }\n\n  .col-form[_ngcontent-%COMP%] {\n    padding-right: 50px;\n  }\n\n  .main-content[_ngcontent-%COMP%] {\n    padding-left: 50px;\n    padding-right: 50px;\n  }\n\n  .page-title[_ngcontent-%COMP%] {\n    margin-top: 50px;\n    font-size: x-large;\n  }\n\n  .submit-now-button[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n\n@media (max-width: 991.98px) {\n  .col-summary[_ngcontent-%COMP%] {\n    padding-top: 20px;\n  }\n\n  .submit-now-button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media (max-width: 575.98px) {\n  .small-margin-top-20[_ngcontent-%COMP%] {\n    margin-top: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NoaXBwaW5nLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFHTywwQkFBQTtBQUNQOztBQUVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUdBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0FBQUY7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFJQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFERjs7QUFJQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBREY7O0FBSUE7RUFDRSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsZ0JBQUE7QUFERjs7QUFJRTtFQUNJLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFETjs7QUFLQTtFQUNFLFlBQUE7QUFGRjs7QUFNQTtFQUNFLFdBQUE7QUFIRjs7QUFRQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBTEE7O0FBU0E7RUFDRSxXQUFBO0FBTkY7O0FBVUE7RUFDRSxrQkFBQTtBQVBGOztBQVVBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQVBGOztBQVVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBUEY7O0FBYUE7RUFDRTtJQUNFLGtCQUFBO0VBVkY7O0VBWUE7SUFDRSxtQkFBQTtFQVRGOztFQVdBO0lBQ0Usa0JBQUE7SUFDQSxtQkFBQTtFQVJGOztFQVVBO0lBQ0UsZ0JBQUE7SUFDQSxrQkFBQTtFQVBGOztFQVNBO0lBRUUsVUFBQTtFQVBGO0FBQ0Y7O0FBYUE7RUFDRTtJQUNFLGlCQUFBO0VBWEY7O0VBYUE7SUFDRSxXQUFBO0VBVkY7QUFDRjs7QUFjQTtFQUNFO0lBQ0UsZ0JBQUE7RUFaRjtBQUNGIiwiZmlsZSI6InNoaXBwaW5nLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWlue1xuICBmb250LXNpemU6IGxhcmdlO1xufVxuXG4uc3VtbWFyeS1jYXJke1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwIDZweCM3Nzc7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDAgNnB4Izc3NztcbiAgICAgICBib3gtc2hhZG93OiAwcHggMCA2cHgjNzc3O1xufVxuXG4uc3VibWl0LW5vdy1idXR0b257XG4gIGhlaWdodDogNTBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIHBhZGRpbmc6IGF1dG87XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlcjpub25lO1xuXG59XG5cbi5jYXJke1xuICBib3JkZXItcmFkaXVzOjMwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4uY2FyZC1yb3VuZHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YwRkJGOTtcbiAgYm9yZGVyLXJhZGl1czo1MHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5pbmZvLXRpdGxle1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LXNpemU6IGxhcmdlO1xuXG59XG4uaW5mby10aXRsZS1zZWN0aW9ue1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG59XG5cblxuLmRhc2h7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMiwgMTIsIDEyKTtcbiAgaGVpZ2h0OiA1cHg7XG4gIHdpZHRoOiAyMHB4O1xufVxuXG4ubGluZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MSwgMjQxLCAyNDEpO1xuICBoZWlnaHQ6IDRweDtcbiAgd2lkdGg6IDk4JTtcbiAgbWFyZ2luOmF1dG87XG5cbn1cbi5mb3JtLWluZm97XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbmxhYmVse1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmZvcm0tZ3JvdXAge1xuICAucm91bmQtaW5wdXR7XG4gICAgICBib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjQzFDN0Q2O1xuICB9XG59XG5cbi5mdWxsLWhlaWdodHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5cbi5mb3JtLWdyb3VwIC50ZXh0LWFyZWEtaGVpZ2h0e1xuICBoZWlnaHQ6IDgyJTtcbn1cblxuXG5cbi5pbWctdGFibGV7XG53aWR0aDogMTZweDtcbmhlaWdodDogMTZweDtcbn1cblxuXG4udGFibGUtYm9yZGVybGVzc3tcbiAgYm9yZGVyOjBweDtcbn1cblxuXG4uc3VibWl0LWJ1dHRvbi1zZWN0aW9ue1xuICBwYWRkaW5nLXRvcDoxMDBweDtcbn1cblxuLmJ0bi1zdWJtaXR7XG4gIGZsb2F0OiByaWdodDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBwYWRkaW5nOiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmb250LXNpemU6IGxhcmdlO1xufVxuXG4ucGFnZS10aXRsZXtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBmb250LXNpemU6IGxhcmdlO1xufVxuXG5cblxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkxLjk4cHgpIHsgXG4gIC5jb2wtc3VtbWFyeXtcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gIH1cbiAgLmNvbC1mb3Jte1xuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gIH1cbiAgLm1haW4tY29udGVudHtcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcbiAgfVxuICAucGFnZS10aXRsZXtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgfVxuICAuc3VibWl0LW5vdy1idXR0b257XG4gIFxuICAgIHdpZHRoOiA1MCU7XG4gIH1cblxuICBcbn1cblxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpe1xuICAuY29sLXN1bW1hcnl7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gIH1cbiAgLnN1Ym1pdC1ub3ctYnV0dG9ueyAgXG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpe1xuICAuc21hbGwtbWFyZ2luLXRvcC0yMHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG59XG4iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=home-module.js.map