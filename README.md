# patternfly-backstage-theme

This is a POC to create a theme for [Backstage](https://github.com/backstage/backstage) that follows the Patternfly color scheme and layouts as closely as possible.

Currently this repository consists of two packages:

* theme - the theme itself and a simple build for it
* storybook - a storybook that's intended to grab the stories from the Backstage upstream repository and get them running with the theme applied

To get up and running:

`npm install`

and then to build everything set `BACKSTAGE_SOURCE_ROOT` in your environment to point to a clone of the [Backstage source tree](https://github.com/backstage/backstage) and run `npm run build`, for example:

`BACKSTAGE_SOURCE_ROOT=/home/happy_developer/Source/backstage npm run build`

And to work with storybook, use `npm run storybook`:

`BACKSTAGE_SOURCE_ROOT=/home/happy_developer/Source/backstage npm run storybook`

Storybook will be available at http://localhost:6006

To develop the theme run:

`npm run dev`

this also requires the aforementioned environment variable in your environment.  This command starts up the theme package in dev mode so it rebuilds on changes and runs storybook in parallel.  Currently it's necessary to manually refresh the browser when making changes in the theme package.
