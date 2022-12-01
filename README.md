# MERN-stack API

with MySQL db in LAN

- code : class react with ts

- style : Sass

---

# Structure

src
|\
|--App.tsx (react-router-dom (v6)) \
| \
|--assets (img of project)
|
|--components
|
|--models (db will be replaced by axios)
|
|--pages (main pages for navbar & subscribe)
|
|--services (authentification)

---

# Install

└─ $ ▶ pnpm create vite

└─ $ ▶ cd vite-project

└─ $ ▶ pnpm install

└─ $ ▶ pnpm install react-router-dom

└─ $ ▶ pnpm install -D sass

---

(index.html)

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style lang="sass">
      @import url('./src/index.scss')
    </style>
    <title>MERN-stack API</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

(package.json)

```
{
  "name": "vite-project",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "test": "vitest",
    "coverage": "vitest run --coverage",
    "typecheck": "vitest typecheck"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^4.6.0",
    "react-router-dom": "^6.4.3"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@types/react": "^18.0.24",
    "@types/react-dom": "^18.0.8",
    "@vitejs/plugin-react": "^2.2.0",
    "@vitest/coverage-c8": "^0.25.0",
    "jsdom": "^20.0.2",
    "react-test-renderer": "^18.2.0",
    "sass": "^1.56.0",
    "typescript": "^4.6.4",
    "vite": "^3.2.3",
    "vitest": "^0.25.0"
  }
}
```

(vite.config.ts)

```
/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
    test: {
      globals: true,
      environment: 'jsdom',
    }
})
```

(index.scss)

```
@import './App.scss';
@import './stylePages/Login.scss';
@import './stylePages/Home.scss';
@import './stylePages/Services.scss';
@import './stylePages/Contact.scss';
@import './pages/volets/VoletRight.scss';
@import './pages/volets/VoletLeft.scss';

@import './stylePages/Login.scss';
@import './stylePages/Home.scss';
@import './stylePages/Services.scss';
@import './stylePages/Contact.scss';

@import './components/styleComponents/ChatUser.scss';
@import './components/styleComponents/ChatComputer.scss';
@import './components/styleComponents/Footer.scss';
@import './components/styleComponents/MainComp.scss';
@import './components/styleComponents/NavBar.scss';


:root {
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}
```

└─ $ ▶ pnpm run dev

---

# Testing

```
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "test": "vitest",
    "coverage": "vitest run --coverage"
  }
```

## Install

└─ $ ▶ pnpm add -D vitest

└─ $ ▶ npm i -D jsdom @testing-library/react

└─ $ ▶ pnpm install -D react-test-renderer

└─ $ ▶ pnpm run test

└─ $ ▶ pnpm run coverage

pnpm install -D @testing-library/dom@>=7.21.4

pnpm install -D @testing-library/user-event

---

(vitest.config.ts)

```
/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
    test: {
      globals: true,
      environment: 'jsdom',
    }
})
```

---

```
import React from "react";
import {beforeEach, describe, expect, test, it, vi} from 'vitest';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import "@testing-library/jest-dom";
import { act } from 'react-dom/test-utils';
import {create} from 'react-test-renderer';
import App from "../App.jsx";
```

---

## Debug

- install ndb globally

└─ $ ▶ pnpm install -g ndb

or

└─ $ ▶ pnpm install -g ndb

- alternatively, with yarn

└─ $ ▶ yarn global add ndb

- run tests with debugger enabled

└─ $ ▶ ndb npm run test

or

└─ $ ▶ ndb pnpm run test

---

Coverage of moment :

