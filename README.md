# Front_end: 

React-Native boopstapped with: `npx create-expo-app`

## Getting Started

npm current version: 9.8.1

Install npm: `npm install -g npm@9.8.1`

Install all missing dependencies: `npm i`

## Run Your App: 

App can be tested On Expo

Run Frontend App: 

If you have an expo account, contact me so that i can
add you to the organization so that you run the front end on your personal computer

### Local run:
If you decide to run and test the app locally, go to file: 
`front_end/app.json`

find the line:
```json
"extra": {
      "eas": {
        "projectId": "SOME_NUMBER_HERE"`
      }
    },
```

change it to:
```json
"extra": {

    },
```
and run the app similarly:

move to front_end dir:
`cd front_end`
install missing dependence if any:
`npm i` 
start expo deployment:
`npx expo start`

Alternative start command if expo cannot detect project: 

`npx expo start --tunnel`

[More about Expo and React-Native](https://reactnative.dev/docs/environment-setup)

[Folder Structure](folder_structure.md)

[React Nagivation Docs](https://reactnavigation.org/docs/getting-started/)


