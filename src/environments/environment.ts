// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: true,
  analytics: {
    trackingId: 'UA-255878-12'
  },
  firebase: {
    apiKey: "AIzaSyDlBS8IGUeive98D9C8v8qsbBuZv9lCR5E",
    authDomain: "mwsgr-ad962.firebaseapp.com",
    databaseURL: "https://mwsgr-ad962.firebaseio.com",
    projectId: "mwsgr-ad962",
    storageBucket: "",
    messagingSenderId: "90519343933"
  }
};
