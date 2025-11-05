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
