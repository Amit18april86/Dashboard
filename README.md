# Dashboard

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Connecting Json-server
Run `npm install json-server -g` to globally install json-server for development

create users.json file to any folder and add user entry like
{
  "users": [
    {
      "id": 1,
      "name": "Amit Sharma",
      "firstName": "Amit",
      "lastName": "Sharma",
      "maritial": "single",
      "email": "amit18april86@gmail.com",
      "password": "amitsharma"
    },
    ...
    ...
 }
 
 run `json-server --watch path_to_users.json`
 This will start a json server at localhost:3000
 
 Once the server is up and running , login with
 web app using given credentials. Install redux devtool to understand the redux flow.
 
## Developers

Full Name  | Email Address
---------- | -------------
Amit Sharma| amit18april86@gmail.com
