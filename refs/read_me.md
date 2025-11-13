# Node Version 20.x

- Node Package Manager (npm)
- Node Native Modules (os, fs, events, util etc)
- Node Runtime Environment (NRE)

## NPM Version 8.x

# Web Development

- HTML: Content Presentation
- CSS: Appearence, Layout, Animation etc
- JavaScript: Action / Behaviour

# JavaScript -

- Scripting Language
- DOM Manipulation
- Event based
- Dynamic Language
- Light-weigth and Fast
- Client-side (browser) as well as Server-side (NRE)
- Loosely typed
- Single Threaded (Worker Process / Different Thread - libvu Library)
- Non-blocking
- Asynchronous

## MEAN : Mongo Express Angular Node

## MERN : Mongo Express React Node

### JSON - JavaScript Object Notation

- Human readable
- Easy to understand
- JSON.stringify() : converts JS objects into string
- JSON.parse(): converts JS Object string into JS Object

### XML

## JS Prototyping

- **proto**
- Object.create()
- 'prototype' Property
- 'extends' keyword

### JavaScript Engine

- Creational Phase : allocates memory to variables and functions
- Executional Phase : executes the program

### JavaScript Datatypes

- Primitive: String, Number, Boolean, Symbol
- Reference: Object, Array, Date, Function

### Principle of Immutability

- Mutable : can change/modify value
- Immutable: can't modify value

### shallow copy and deep copy

- Shallow Copy: Original Object will change, if we change the cloned object
- Deep Copy: Original Object does not change, if we change the cloned object

## ES6+ Features

- Arrow Function
- Destructuring
- Block Scope
- Rest / Spread
- Template Literals
- Default Parameter

## Async Behaviour

- Timers
- Remote Server Call
- Read/Write
- I/O
- Socket
- Time consuming Operation

- Callbacks
- Promise
- Observable

### Promises : placeholder for future value

- Promise Life Cycle : Pending, Settled (fulfilled / rejected)
- Promise API Methods: all, allSettled, race, any, resolve, reject

# TypeScript : JavaScript with type syntax

- Code safety
- Better tooling
- Readable
- Better intellisense

## Various Types in TypeScript

- All JavaScript Data-Types including both Primitive as well Reference
- unknown, any, tuple, null, undefined, never enums etc

## Creating TypeScript Project using Vite

> npm create vite@latest

## OOPS Concepts

## Generics: placeholder for datatypes to achieve reusability

## Decorators

- Class: @Component({}), @Directive({}), @Injectable({})
- Property : @Input(), @Output()
- Method : @HostListener()
- Parameter: @skip(), @optional()

## Module System

- import statement
- export keyword

# ANGULAR

## Building blocks

- Components : @Component({})
- Directives : @Directive({})
- Pipes: @Pipe({})
- Services: @Injectable({})
- Modules: @NgModule({})

## JavaScript Libraries and Frameworks-

- [Angular]: Google; 2014; SPA, Remote Server Call, DOM Manipulation, State Management, Template, Components, Form Validation, MV\* Pattern, Animation etc
- AngularJS : v1.x, Library, 2011
- React: 35kb; Facebook; Library, Quickly render the UI, State, Props, Components, Virtual DOM, Diffing Algorithm, reconcialiation; React Router for SPA; Formik, react-hook-form, yup etc for Form Validation; Redux for State Management etc
- [Vue] : 'Evan You', Progressive framework, emerging, VDOM, Components, Template, State Management, Form Validation, SPA, DOM Manipulation etc
- JQuery: DOM manipulation, AJAX Calls, Animation etc
- [NextJS]: React based Framework; Server-side framework (SSR)
- [Ember] : 2010; Components, Template, State Management, Form Validation, SPA, DOM Manipulation etc
- Backbone : MVC Pattern at client side
- Knockout : MVVM Pattern; Two way data binding
- D3: Charts
- PReact : 8-10kb
- Polymer: Rich web component
- Stencil: Web Apps, VDOM, Component etc
- Electron: Desktop based apps

- Node: Server side platform
- Express / Koa / Hapi / Kraken / SailJS : Web App Server for NodeJS platform

- DOM: Document Object Model - hierarchical representation of HTML elements
  html
  head
  link
  meta
  script
  style
  body
  header
  ul
  li
  a
  main
  section
  blockquotes

## Angular CLI Tool (ng) - v17.x (module based app and standalone app)

> [sudo] npm install @angular/cli@17 -g
> ng version
> ng new frontend --no-standalone --no-routing
> cd frontend
> npm start / ng serve

## Atomic Design Principle

- Atom: smallest unit; e.g one button, one input field
- Molecules: combo of atoms. e.g SearchBar -> One button + one input field
- Organism: combo of molecules. e.g NavigationBar -> Barnd Image + Various Links + Search Bar
- Template: combo of organism. e.g A Form
- Page: A Complete Page

## CLI Commands

- ng generate component path/to/component
- ng g c path/to/component
- ng g d path/to/directive
- ng g s path/to/servuce
- ng g p path/to/pipe
- ng g m path/to/module

- ng generate help

- ng g c components/users
- ng g c components/users/user-img
- ng g c components/users/user-info

### Adding Bootstrap Package

> npm install bootstrap
> update angular.json build>options>style -> "./node_modules/bootstrap/dist/css/bootstrap.min.css"
> restart the server

## Building blocks

- Components: create the reusable UI
- Directives : DOM Manipulation
- Pipes: Format the data on UI
- Services: Business logic (state management, XHR, logic)
- Modules: Modular the app, Encapsulation

## Components : Resuable peice of code; creates UI

- Data Binding

  > Property Binding
  > Event Binding
  > Two way data binding -> [(ngModel)]

- Nested Component Communication

  > Parent to Child -> Property Binding + @Input()
  > Child to Parent -> EventEmitter + @Output() + Event Binding

- Content Projection

  > ng-content

- Component Life Cycle
  > ngOnChanges
  > ngOnInit
  > ngDoCheck
  > ngAfterContentInit
  > ngAfterContentChecked
  > ngAfterViewInit
  > ngAfterViewChecked
  > ngOnDestroy

## Directives: marker on UI

- Component Directuve: selector with template
- Attribute Directive: only apply to appearence to the DOM element
  > ngStyle
  > ngClass
- Structural Directive: affects the template
  > *ngIf
  > *ngFor
  > \*ngSwitch
- Custom Directive
  > ng g d directives/better-highlight
  > @HostBinding()
  > @HostListener()
  > ElementRef : access of DOM element reference
  > Renderer2 : to manipulate DOM element

## Pipes

- ng g p pipes/country-code

## Custom Sorting functionality

### Pure Pipes

friends = ["Joey", "Monica", "Ross"]
friends.push("Chandler"); // Impure Change

friends = ["Joey", "Monica", "Ross", "Chandler"] // Pure Change

## Forms

- Template driven form:

  > 'ngForm'
  > App logic inside teample
  > HTML5 Validations (eg. required, email, minlength, pattern etc)
  > Disabling submit button
  > visual feedback

- Reactive form / Model driven form
  > FormControl, FormGroup, FormBuilder, FormArray
  > Validators / Custom Validator Functions (Element level, Form level)
  > Error Messages
  > Validation are imposed on Class Model

### Classes and State attached to Forms / Forms elements

- Touched / Untouched
- Pristine / Dirty
- Valid / Invalid

---

# Services : Injectable

- DIP: Dependency Injection Principle
- SRP: Single Responsibility Principle

> ng g s services/user

## Service Registration (Creation the Injectable Token)

- Self-registration (root) : Singleton effect - application-wide
- Providers Array in Root Module : Singleton effect - application-wide including other services
- Providers Array in Root Component : Singleton effect - Self component and all the components but not in other services
- Providers Array in Other Component : Singleton effect - Self component and only the child components

## DI Modifiers

- @Self(): look-up for token in the self component
- @Host(): look-up for token in Self as well as in parent component
- @SkipSelf(): don't look-up for token in the self component
- @Optional(): makes the injected dependency as optional. Ignores null injector error

CompA -> CompB

CompA => CompB (Siblings)

# Observables vs Promises

## Observable

- series of events
- lazy, by default
- keep observing the data source
- Powerful operators support
- Cancelable
- both async and sync
- consumed using subscribe() method

## Promises

- one shot
- eagerly executed
- polling required
- No Operator support
- Not cancelable
- always async
- consume using .then().catch() / async...await

## Subjects are both - Observer and Observable

- Observable : pipe(), subscribe()
- Observer : next(), error(), complete()

### Subject Types -

- Behaviour Subject : initialize upcoming subscription with seed value
- Replay Subject: replays last n number of emission for the upcoming subscription
- Async Subject: last emitted value upon completion

---

# JSON SERVER Config

- Install json-server
  > [sudo] npm install json-server@0.17.4 -g
  > json-server -v
- Create json file -> db.json
- Running the json-server
  > json-server --watch db.json

---

# HttpClient Service - CRUD app

- IExpense : Data Model
- ExpenseService : performs all CRUD Operations
- ExpensesComponent : displays all expenses
- ExpenseItem : display individual expense, also delete the expense
- ExpenseForm: add / edit the expense

---

## Firebase Config for User Auth

apiKey: "AIzaSyBnNnK6wzhLKZVkU5sOgCyHFXnpO47h--4",
authDomain: "sk-ng-nov-25.firebaseapp.com",

### Install Firebase SDK

> npm install firebase

### Interceptors

### Global Error Handler

---

# Single Page App

- browser will not reload / refresh the page
- server will send complet SPA in one go
- deep linking
- bookmarkable URL
- better UI/UX

## Routing Terminologies

- Routes: APP_ROUTES : create the route configuration
- RouterModule (forRoot, forChild) : register routes with the app
- RouterOutlet: space to load the component template
- RouterLink: Prevent page reloading
- Router Service: programmatic navigation
- Route Guard:
  > CanActivate - allow / disallow to enter into the route
  > CanDeactivate - allow / disallow to leave the route

## Hashbang Mode

- http://www.example.com/index/#!/first

## HTML5 Mode / Regular Mode (default in Angular)

- http://www.example.com/index/first

---

# Courses App

- Course Model - id, title, duration, logo
- Course Service: Http Call (CRUD)
- Courses Component : display all the courses title
- CourseDetail Component: individual course detail
- CourseForm Component: Add / Edit course
- Routing
