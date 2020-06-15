# FAQ

This is the starter kit to create your own add-on for [wako](https://wako.app).

> ### What is an add-on?

An add-on, is an external script, which will add new features to wako.
There are two types of add-ons:

- Officials, made by the wako team.
- The unofficial ones, made by the communities.

**Be careful when installing third party add-ons, wako is not responsible for what these add-ons do.**

> ### What the add-on can do?

An add-on can have 4 different actions:

- movies
- episodes
- episodes-item-option
- shows

These actions are defined in the [plugin's manifest](https://github.com/wako-app/addon-starter-kit/blob/master/projects/plugin/src/manifest.json#L8).

When a user browses a movie detail page for example, wako will load all the add-ons with action `movies` and
will call them with the current [Movie](https://github.com/wako-app/mobile-sdk/blob/master/src/entities/movie.ts) object.
It does the same for the other 3 actions. Then you have all the metadata of the current page and can do whatever you want.
For example here, when a user is on the TV Shows detail page, we will display a button to play the trailer of the TV show on Kodi.

In addition you can manage a page for the settings of your add-on and a page for its details (if you want to add more features).

As wako is made in JavaScript, it is quite possible to modify the content of the pages and their appearance.

> ### Getting started?

wako is written in JavaScript using [Angular](https://angular.io) and [Ionic framework](https://ionicframework.com).
To create your own add-on, the easiest way to do so is to clone this project and start writing your code.

All your code, needs to be written in `./projects/plugin/src/`.

The code in `./src`, it's only for dev purpose to simulate wako and test your add-on.

Your entry point will be `./projects/plugin/src/plugin/plugin.module.ts` where you defined the component you want to load in wako.

> ### Test your add-on

There are two ways to test your add-on:

- `npm start`, will run behind the scene `ng serve`. This is the fastest way to test your add-on will you keep developing it
- `npm run start:wako-like`, this will build your add-on and the app will consume it like wako does. This is the recommended method
  once you think your add-on is ready to publish. You can still edit your code this way, but it will take more time to refresh the page since the build process could be long

### Test your add-on on your phone

Now that you think your add-on is completely finished, it's time to test it on your mobile. To do so, edit the file `package.json` and replace the `X.X.X.X` with your computer local IP.
Then run this command: `npm run serve:wako-like`. This will act exactly as `npm run start:wako-like` but will make the project accessible via any devices in your local network.
Then install the add-on inside wako via your manifest.json URL, like: `http://X.X.X.X:4200/assets/plugins/manifest.json` where `X.X.X.X` is your own IP address.
`
