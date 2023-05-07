# Recipes - Demo App

Recipes app allows user to pick a recipe and read ingredients and todo steps to cook it.

## Tech stack

- Frontend, Web: React, Next.js, TypeScript, Tailwind CSS
- Frontend, Mobile: React Native, Expo, TypeScript, Solito, Moti, NativeWind
- Backend: Next.js
- Tests: e2e test with cypress
- Prettier: run `yarn prettier` to format codebase

## Demo

**Web**

Recipes in Vercel Cloud: [https://recipes-nextjs-expo-next.vercel.app/](https://recipes-nextjs-expo-next.vercel.app/)

**Mobile**

Expo: [https://expo.dev/@iryna/solito-nativewind](https://expo.dev/@iryna/solito-nativewind)

Open the following link on your iOS devices and follow the instructions to install the development profile:

https://expo.dev/register-device/d485b975-6c0b-46cf-a0cb-57a7a1057de9


## Folder layout

- `apps` entry points for each app

  - `expo`
  - `next`

- `packages` shared packages across apps
  - `app` you'll be importing most files from `app/`
    - `features` (don't use a `screens` folder. organize by feature.)
    - `provider` (all the providers that wrap the app, and some no-ops for Web.)
    - `navigation` Next.js has a `pages/` folder. React Native doesn't. This folder contains navigation-related code for RN. You may use it for any navigation code, such as custom links.
    - `design` your app's design system. organize this as you please.
      - `typography` (components for all the different text styles)
      - `layout` (components for layouts)

## Start the app in local environment

- Install dependencies: `yarn`

- Next.js local dev: `yarn web`
  - Runs `yarn next`
- Expo local dev:
  - First, build a dev client onto your device or simulator
    - `cd apps/expo`
    - Then, either `expo run:ios`, or `eas build`
  - After building the dev client, from the root of the monorepo...
    - `yarn native` (This runs `expo start --dev-client`)

## Screenshots

![Alt](https://user-images.githubusercontent.com/33914030/236697939-a3b57f96-0bab-4a3e-a818-60ccaa44fadb.png 'Recipes')

![Alt](https://user-images.githubusercontent.com/33914030/236697937-d5504c6f-6004-4a0a-af9e-74306ac71b9d.png 'Recipe Details')
