# WorldChampion

This project is developed to consume World F1 Champion from Ergast Api

It's developed based on Angular , NgRx and RxJs

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Branches

This project is separated into 4 main branches

- Development ==> the web version which is able to run normally on web platform and fully responsive in case that it's running on small screens

- SSR ==> Angular Universal Server Side Rendering , this branch is included all configuration to let the project to be run on SSR mode
  To run the project with SSR you may need to use npm run dev:ssr

- PWA ==> This branch is included PWA configuration like manifest and service worker in case that it's required to work offline, just bear in mind for the first time it needs to cache data

to run PWA application locally you may need to run
ng build
http-server -p 8080 -c-1 dist/world-champion

- Capacitor ==> this project is included native Android and IOS project which is wrapping web application into Native Web Viewer and also included a simple sample of using native API into web application.

to run application on mobile you may need to configure your local environment to be able to run x-code or android studio then,
run :
ng build
npx cap sync ios
npx cap sync android
npx cap open ios
npx cap open android

and run simulator on x-code or android studio

## Further Documentation

In case of knowing more about project structure, dependencies, modules and ... you may refer to the documentation folder beside the project and open index.html
