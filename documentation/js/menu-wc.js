'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">world-champion documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AboutModule.html" data-type="entity-link" >AboutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AboutModule-b7c324985c2758297cffa4bfb698be9ea923133078423446c5b1fc151ef47e5a50794f579e4b49e29ba0a55bbed067360ad092b4cf2379dbe37e9748ea98e81a"' : 'data-target="#xs-components-links-module-AboutModule-b7c324985c2758297cffa4bfb698be9ea923133078423446c5b1fc151ef47e5a50794f579e4b49e29ba0a55bbed067360ad092b4cf2379dbe37e9748ea98e81a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AboutModule-b7c324985c2758297cffa4bfb698be9ea923133078423446c5b1fc151ef47e5a50794f579e4b49e29ba0a55bbed067360ad092b4cf2379dbe37e9748ea98e81a"' :
                                            'id="xs-components-links-module-AboutModule-b7c324985c2758297cffa4bfb698be9ea923133078423446c5b1fc151ef47e5a50794f579e4b49e29ba0a55bbed067360ad092b4cf2379dbe37e9748ea98e81a"' }>
                                            <li class="link">
                                                <a href="components/AboutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AboutComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-63dab73a1292b7a2e47c3152c5c94e98d3f30b495505b9c9761be780dcf05335028426b52c0ceacf99ba9f633fda144f9067bb506f833ab565f8e233187a86f2"' : 'data-target="#xs-components-links-module-AppModule-63dab73a1292b7a2e47c3152c5c94e98d3f30b495505b9c9761be780dcf05335028426b52c0ceacf99ba9f633fda144f9067bb506f833ab565f8e233187a86f2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-63dab73a1292b7a2e47c3152c5c94e98d3f30b495505b9c9761be780dcf05335028426b52c0ceacf99ba9f633fda144f9067bb506f833ab565f8e233187a86f2"' :
                                            'id="xs-components-links-module-AppModule-63dab73a1292b7a2e47c3152c5c94e98d3f30b495505b9c9761be780dcf05335028426b52c0ceacf99ba9f633fda144f9067bb506f833ab565f8e233187a86f2"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotFoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link" >HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-d596968949de96cba907147cc99a30ea2cb6e118e2b102e5c5ef2b785d5be1ddc3ce24b1644878c6b6743d792b4575ad4d438a9f5d6968830842f11a07605953"' : 'data-target="#xs-components-links-module-HomeModule-d596968949de96cba907147cc99a30ea2cb6e118e2b102e5c5ef2b785d5be1ddc3ce24b1644878c6b6743d792b4575ad4d438a9f5d6968830842f11a07605953"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-d596968949de96cba907147cc99a30ea2cb6e118e2b102e5c5ef2b785d5be1ddc3ce24b1644878c6b6743d792b4575ad4d438a9f5d6968830842f11a07605953"' :
                                            'id="xs-components-links-module-HomeModule-d596968949de96cba907147cc99a30ea2cb6e118e2b102e5c5ef2b785d5be1ddc3ce24b1644878c6b6743d792b4575ad4d438a9f5d6968830842f11a07605953"' }>
                                            <li class="link">
                                                <a href="components/DriverStandingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DriverStandingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-HomeModule-d596968949de96cba907147cc99a30ea2cb6e118e2b102e5c5ef2b785d5be1ddc3ce24b1644878c6b6743d792b4575ad4d438a9f5d6968830842f11a07605953"' : 'data-target="#xs-injectables-links-module-HomeModule-d596968949de96cba907147cc99a30ea2cb6e118e2b102e5c5ef2b785d5be1ddc3ce24b1644878c6b6743d792b4575ad4d438a9f5d6968830842f11a07605953"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-HomeModule-d596968949de96cba907147cc99a30ea2cb6e118e2b102e5c5ef2b785d5be1ddc3ce24b1644878c6b6743d792b4575ad4d438a9f5d6968830842f11a07605953"' :
                                        'id="xs-injectables-links-module-HomeModule-d596968949de96cba907147cc99a30ea2cb6e118e2b102e5c5ef2b785d5be1ddc3ce24b1644878c6b6743d792b4575ad4d438a9f5d6968830842f11a07605953"' }>
                                        <li class="link">
                                            <a href="injectables/RaceApiService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RaceApiService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeRoutingModule.html" data-type="entity-link" >HomeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LayoutModule.html" data-type="entity-link" >LayoutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LayoutModule-199c8b4c50b927bc41e352673a0964932b40f19c7c6dcf0012cb94f3f17e55e6237a7a7f8fc545a70c83c666c0ff768dfe5191b2a7e2b52f58185404f7085412"' : 'data-target="#xs-components-links-module-LayoutModule-199c8b4c50b927bc41e352673a0964932b40f19c7c6dcf0012cb94f3f17e55e6237a7a7f8fc545a70c83c666c0ff768dfe5191b2a7e2b52f58185404f7085412"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LayoutModule-199c8b4c50b927bc41e352673a0964932b40f19c7c6dcf0012cb94f3f17e55e6237a7a7f8fc545a70c83c666c0ff768dfe5191b2a7e2b52f58185404f7085412"' :
                                            'id="xs-components-links-module-LayoutModule-199c8b4c50b927bc41e352673a0964932b40f19c7c6dcf0012cb94f3f17e55e6237a7a7f8fc545a70c83c666c0ff768dfe5191b2a7e2b52f58185404f7085412"' }>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SeasonDropDownComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SeasonDropDownComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PipesModule.html" data-type="entity-link" >PipesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-PipesModule-ee3b25ce57f074497d22bce69b9f2c9dfc4c31426882da11787f8ee150102c4e1b31f0cbb9b87fc1691e46c827c87129403f40228945f87d2ebf822636abd7ec"' : 'data-target="#xs-pipes-links-module-PipesModule-ee3b25ce57f074497d22bce69b9f2c9dfc4c31426882da11787f8ee150102c4e1b31f0cbb9b87fc1691e46c827c87129403f40228945f87d2ebf822636abd7ec"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-PipesModule-ee3b25ce57f074497d22bce69b9f2c9dfc4c31426882da11787f8ee150102c4e1b31f0cbb9b87fc1691e46c827c87129403f40228945f87d2ebf822636abd7ec"' :
                                            'id="xs-pipes-links-module-PipesModule-ee3b25ce57f074497d22bce69b9f2c9dfc4c31426882da11787f8ee150102c4e1b31f0cbb9b87fc1691e46c827c87129403f40228945f87d2ebf822636abd7ec"' }>
                                            <li class="link">
                                                <a href="pipes/SeasonFilterPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SeasonFilterPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-c8369626006468f504fa364cfa323570cb66b6fd2874480baa32bed09bd42e40ab86ef2a223c5e5b7d80e1090ea929c4b11052e3ec1f2515ccb5509d3c98458d"' : 'data-target="#xs-components-links-module-SharedModule-c8369626006468f504fa364cfa323570cb66b6fd2874480baa32bed09bd42e40ab86ef2a223c5e5b7d80e1090ea929c4b11052e3ec1f2515ccb5509d3c98458d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-c8369626006468f504fa364cfa323570cb66b6fd2874480baa32bed09bd42e40ab86ef2a223c5e5b7d80e1090ea929c4b11052e3ec1f2515ccb5509d3c98458d"' :
                                            'id="xs-components-links-module-SharedModule-c8369626006468f504fa364cfa323570cb66b6fd2874480baa32bed09bd42e40ab86ef2a223c5e5b7d80e1090ea929c4b11052e3ec1f2515ccb5509d3c98458d"' }>
                                            <li class="link">
                                                <a href="components/TableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TableComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ConstructorApiService.html" data-type="entity-link" >ConstructorApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConstructorsEffects.html" data-type="entity-link" >ConstructorsEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DriverApiService.html" data-type="entity-link" >DriverApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DriverEffects.html" data-type="entity-link" >DriverEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DriverStandingApiService.html" data-type="entity-link" >DriverStandingApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DriverStandingEffects.html" data-type="entity-link" >DriverStandingEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RaceApiService.html" data-type="entity-link" >RaceApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RaceEffects.html" data-type="entity-link" >RaceEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SeasonHelperService.html" data-type="entity-link" >SeasonHelperService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AppState.html" data-type="entity-link" >AppState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Circuit.html" data-type="entity-link" >Circuit</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Constructor.html" data-type="entity-link" >Constructor</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Constructor-1.html" data-type="entity-link" >Constructor</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ConstructorPayload.html" data-type="entity-link" >ConstructorPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ConstructorState.html" data-type="entity-link" >ConstructorState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ConstructorTable.html" data-type="entity-link" >ConstructorTable</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/default_state.html" data-type="entity-link" >default_state</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Driver.html" data-type="entity-link" >Driver</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Driver-1.html" data-type="entity-link" >Driver</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DriverPayload.html" data-type="entity-link" >DriverPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DriverStanding.html" data-type="entity-link" >DriverStanding</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DriverStandingPayload.html" data-type="entity-link" >DriverStandingPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DriverStandingState.html" data-type="entity-link" >DriverStandingState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DriverState.html" data-type="entity-link" >DriverState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DriverTable.html" data-type="entity-link" >DriverTable</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDataSet.html" data-type="entity-link" >IDataSet</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITableDataContract.html" data-type="entity-link" >ITableDataContract</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITableSchema.html" data-type="entity-link" >ITableSchema</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Location.html" data-type="entity-link" >Location</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MRData.html" data-type="entity-link" >MRData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MRData-1.html" data-type="entity-link" >MRData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MRData-2.html" data-type="entity-link" >MRData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MRData-3.html" data-type="entity-link" >MRData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Race.html" data-type="entity-link" >Race</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RacePayload.html" data-type="entity-link" >RacePayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RaceState.html" data-type="entity-link" >RaceState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RaceTable.html" data-type="entity-link" >RaceTable</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StandingsList.html" data-type="entity-link" >StandingsList</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StandingsTable.html" data-type="entity-link" >StandingsTable</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});