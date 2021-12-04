'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  _inherits(_class, _HTMLElement);

  var _super = _createSuper(_class);

  function _class() {
    var _this;

    _classCallCheck(this, _class);

    _this = _super.call(this);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }

  _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">world-champion documentation</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"overview.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>README\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>Dependencies\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">Modules</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/AboutModule.html\" data-type=\"entity-link\" >AboutModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-AboutModule-b7c324985c2758297cffa4bfb698be9ea923133078423446c5b1fc151ef47e5a50794f579e4b49e29ba0a55bbed067360ad092b4cf2379dbe37e9748ea98e81a"' : 'data-target="#xs-components-links-module-AboutModule-b7c324985c2758297cffa4bfb698be9ea923133078423446c5b1fc151ef47e5a50794f579e4b49e29ba0a55bbed067360ad092b4cf2379dbe37e9748ea98e81a"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-AboutModule-b7c324985c2758297cffa4bfb698be9ea923133078423446c5b1fc151ef47e5a50794f579e4b49e29ba0a55bbed067360ad092b4cf2379dbe37e9748ea98e81a"' : 'id="xs-components-links-module-AboutModule-b7c324985c2758297cffa4bfb698be9ea923133078423446c5b1fc151ef47e5a50794f579e4b49e29ba0a55bbed067360ad092b4cf2379dbe37e9748ea98e81a"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/AboutComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AboutComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AppModule.html\" data-type=\"entity-link\" >AppModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-AppModule-63dab73a1292b7a2e47c3152c5c94e98d3f30b495505b9c9761be780dcf05335028426b52c0ceacf99ba9f633fda144f9067bb506f833ab565f8e233187a86f2"' : 'data-target="#xs-components-links-module-AppModule-63dab73a1292b7a2e47c3152c5c94e98d3f30b495505b9c9761be780dcf05335028426b52c0ceacf99ba9f633fda144f9067bb506f833ab565f8e233187a86f2"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-AppModule-63dab73a1292b7a2e47c3152c5c94e98d3f30b495505b9c9761be780dcf05335028426b52c0ceacf99ba9f633fda144f9067bb506f833ab565f8e233187a86f2"' : 'id="xs-components-links-module-AppModule-63dab73a1292b7a2e47c3152c5c94e98d3f30b495505b9c9761be780dcf05335028426b52c0ceacf99ba9f633fda144f9067bb506f833ab565f8e233187a86f2"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/AppComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AppComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/NotFoundComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >NotFoundComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AppRoutingModule.html\" data-type=\"entity-link\" >AppRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/HomeModule.html\" data-type=\"entity-link\" >HomeModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-HomeModule-d596968949de96cba907147cc99a30ea2cb6e118e2b102e5c5ef2b785d5be1ddc3ce24b1644878c6b6743d792b4575ad4d438a9f5d6968830842f11a07605953"' : 'data-target="#xs-components-links-module-HomeModule-d596968949de96cba907147cc99a30ea2cb6e118e2b102e5c5ef2b785d5be1ddc3ce24b1644878c6b6743d792b4575ad4d438a9f5d6968830842f11a07605953"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-HomeModule-d596968949de96cba907147cc99a30ea2cb6e118e2b102e5c5ef2b785d5be1ddc3ce24b1644878c6b6743d792b4575ad4d438a9f5d6968830842f11a07605953"' : 'id="xs-components-links-module-HomeModule-d596968949de96cba907147cc99a30ea2cb6e118e2b102e5c5ef2b785d5be1ddc3ce24b1644878c6b6743d792b4575ad4d438a9f5d6968830842f11a07605953"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/DriverStandingComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >DriverStandingComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/HomeComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >HomeComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-HomeModule-d596968949de96cba907147cc99a30ea2cb6e118e2b102e5c5ef2b785d5be1ddc3ce24b1644878c6b6743d792b4575ad4d438a9f5d6968830842f11a07605953"' : 'data-target="#xs-injectables-links-module-HomeModule-d596968949de96cba907147cc99a30ea2cb6e118e2b102e5c5ef2b785d5be1ddc3ce24b1644878c6b6743d792b4575ad4d438a9f5d6968830842f11a07605953"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-HomeModule-d596968949de96cba907147cc99a30ea2cb6e118e2b102e5c5ef2b785d5be1ddc3ce24b1644878c6b6743d792b4575ad4d438a9f5d6968830842f11a07605953"' : 'id="xs-injectables-links-module-HomeModule-d596968949de96cba907147cc99a30ea2cb6e118e2b102e5c5ef2b785d5be1ddc3ce24b1644878c6b6743d792b4575ad4d438a9f5d6968830842f11a07605953"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/RaceApiService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >RaceApiService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/HomeRoutingModule.html\" data-type=\"entity-link\" >HomeRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/LayoutModule.html\" data-type=\"entity-link\" >LayoutModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-LayoutModule-199c8b4c50b927bc41e352673a0964932b40f19c7c6dcf0012cb94f3f17e55e6237a7a7f8fc545a70c83c666c0ff768dfe5191b2a7e2b52f58185404f7085412"' : 'data-target="#xs-components-links-module-LayoutModule-199c8b4c50b927bc41e352673a0964932b40f19c7c6dcf0012cb94f3f17e55e6237a7a7f8fc545a70c83c666c0ff768dfe5191b2a7e2b52f58185404f7085412"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-LayoutModule-199c8b4c50b927bc41e352673a0964932b40f19c7c6dcf0012cb94f3f17e55e6237a7a7f8fc545a70c83c666c0ff768dfe5191b2a7e2b52f58185404f7085412"' : 'id="xs-components-links-module-LayoutModule-199c8b4c50b927bc41e352673a0964932b40f19c7c6dcf0012cb94f3f17e55e6237a7a7f8fc545a70c83c666c0ff768dfe5191b2a7e2b52f58185404f7085412"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/NavbarComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >NavbarComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/SeasonDropDownComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >SeasonDropDownComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/PipesModule.html\" data-type=\"entity-link\" >PipesModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#pipes-links-module-PipesModule-ee3b25ce57f074497d22bce69b9f2c9dfc4c31426882da11787f8ee150102c4e1b31f0cbb9b87fc1691e46c827c87129403f40228945f87d2ebf822636abd7ec"' : 'data-target="#xs-pipes-links-module-PipesModule-ee3b25ce57f074497d22bce69b9f2c9dfc4c31426882da11787f8ee150102c4e1b31f0cbb9b87fc1691e46c827c87129403f40228945f87d2ebf822636abd7ec"', ">\n                                            <span class=\"icon ion-md-add\"></span>\n                                            <span>Pipes</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="pipes-links-module-PipesModule-ee3b25ce57f074497d22bce69b9f2c9dfc4c31426882da11787f8ee150102c4e1b31f0cbb9b87fc1691e46c827c87129403f40228945f87d2ebf822636abd7ec"' : 'id="xs-pipes-links-module-PipesModule-ee3b25ce57f074497d22bce69b9f2c9dfc4c31426882da11787f8ee150102c4e1b31f0cbb9b87fc1691e46c827c87129403f40228945f87d2ebf822636abd7ec"', ">\n                                            <li class=\"link\">\n                                                <a href=\"pipes/SeasonFilterPipe.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >SeasonFilterPipe</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/SharedModule.html\" data-type=\"entity-link\" >SharedModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-SharedModule-c8369626006468f504fa364cfa323570cb66b6fd2874480baa32bed09bd42e40ab86ef2a223c5e5b7d80e1090ea929c4b11052e3ec1f2515ccb5509d3c98458d"' : 'data-target="#xs-components-links-module-SharedModule-c8369626006468f504fa364cfa323570cb66b6fd2874480baa32bed09bd42e40ab86ef2a223c5e5b7d80e1090ea929c4b11052e3ec1f2515ccb5509d3c98458d"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-SharedModule-c8369626006468f504fa364cfa323570cb66b6fd2874480baa32bed09bd42e40ab86ef2a223c5e5b7d80e1090ea929c4b11052e3ec1f2515ccb5509d3c98458d"' : 'id="xs-components-links-module-SharedModule-c8369626006468f504fa364cfa323570cb66b6fd2874480baa32bed09bd42e40ab86ef2a223c5e5b7d80e1090ea929c4b11052e3ec1f2515ccb5509d3c98458d"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/TableComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >TableComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                </ul>\n                </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"', ">\n                                <span class=\"icon ion-md-arrow-round-down\"></span>\n                                <span>Injectables</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"injectables/ConstructorApiService.html\" data-type=\"entity-link\" >ConstructorApiService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/ConstructorsEffects.html\" data-type=\"entity-link\" >ConstructorsEffects</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/DriverApiService.html\" data-type=\"entity-link\" >DriverApiService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/DriverEffects.html\" data-type=\"entity-link\" >DriverEffects</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/DriverStandingApiService.html\" data-type=\"entity-link\" >DriverStandingApiService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/DriverStandingEffects.html\" data-type=\"entity-link\" >DriverStandingEffects</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/RaceApiService.html\" data-type=\"entity-link\" >RaceApiService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/RaceEffects.html\" data-type=\"entity-link\" >RaceEffects</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/SeasonHelperService.html\" data-type=\"entity-link\" >SeasonHelperService</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"', ">\n                            <span class=\"icon ion-md-information-circle-outline\"></span>\n                            <span>Interfaces</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"', ">\n                            <li class=\"link\">\n                                <a href=\"interfaces/AppState.html\" data-type=\"entity-link\" >AppState</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Circuit.html\" data-type=\"entity-link\" >Circuit</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Constructor.html\" data-type=\"entity-link\" >Constructor</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Constructor-1.html\" data-type=\"entity-link\" >Constructor</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/ConstructorPayload.html\" data-type=\"entity-link\" >ConstructorPayload</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/ConstructorState.html\" data-type=\"entity-link\" >ConstructorState</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/ConstructorTable.html\" data-type=\"entity-link\" >ConstructorTable</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/default_state.html\" data-type=\"entity-link\" >default_state</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Driver.html\" data-type=\"entity-link\" >Driver</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Driver-1.html\" data-type=\"entity-link\" >Driver</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/DriverPayload.html\" data-type=\"entity-link\" >DriverPayload</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/DriverStanding.html\" data-type=\"entity-link\" >DriverStanding</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/DriverStandingPayload.html\" data-type=\"entity-link\" >DriverStandingPayload</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/DriverStandingState.html\" data-type=\"entity-link\" >DriverStandingState</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/DriverState.html\" data-type=\"entity-link\" >DriverState</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/DriverTable.html\" data-type=\"entity-link\" >DriverTable</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/IDataSet.html\" data-type=\"entity-link\" >IDataSet</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/ITableDataContract.html\" data-type=\"entity-link\" >ITableDataContract</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/ITableSchema.html\" data-type=\"entity-link\" >ITableSchema</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Location.html\" data-type=\"entity-link\" >Location</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/MRData.html\" data-type=\"entity-link\" >MRData</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/MRData-1.html\" data-type=\"entity-link\" >MRData</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/MRData-2.html\" data-type=\"entity-link\" >MRData</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/MRData-3.html\" data-type=\"entity-link\" >MRData</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Race.html\" data-type=\"entity-link\" >Race</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/RacePayload.html\" data-type=\"entity-link\" >RacePayload</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/RaceState.html\" data-type=\"entity-link\" >RaceState</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/RaceTable.html\" data-type=\"entity-link\" >RaceTable</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/StandingsList.html\" data-type=\"entity-link\" >StandingsList</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/StandingsTable.html\" data-type=\"entity-link\" >StandingsTable</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>Miscellaneous</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/typealiases.html\" data-type=\"entity-link\">Type aliases</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/variables.html\" data-type=\"entity-link\">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <a data-type=\"chapter-link\" href=\"routes.html\"><span class=\"icon ion-ios-git-branch\"></span>Routes</a>\n                        </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>Documentation coverage</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"copyright\">\n                        Documentation generated using <a href=\"https://compodoc.app/\" target=\"_blank\">\n                            <img data-src=\"images/compodoc-vectorise.png\" class=\"img-responsive\" data-type=\"compodoc-logo\">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);

  return _class;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));