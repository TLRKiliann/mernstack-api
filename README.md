# MERN-stack API (under development)

CHAT application with Vite - React - TypeScript

with mariadb in LAN

- front : react-router-dom v6 with security access

- backend: express - cors - dotenv - mariadb

- backend: express - cors - dotenv - server-json

---

# Structure

```
src \
| \
|--App.tsx (react-router-dom (v6)) \
| \
|--assets (img of project) \
| \
|--components \
| \
|--models (db will be replaced by axios) \
| \
|--pages (main pages for navbar & subscribe) \
| \
|--services (authentification) \
| \
|--backend \
	| \
	-----> index.ts \
	| \
	-----> routes \
	| \
	-----> dbConnection.ts \
```

---

# Install

└─ $ ▶ pnpm create vite

└─ $ ▶ cd vite-project

└─ $ ▶ pnpm install

└─ $ ▶ pnpm install react-router-dom

└─ $ ▶ pnpm install -D sass

└─ $ ▶ pnpm install axios

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
    "@fontsource/dejavu-sans": "^4.5.4",
    "@fontsource/junction": "^4.5.3",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^4.6.0",
    "react-router-dom": "^6.4.3"
  },
  "devDependencies": {
    "@testing-library/dom": "^8.19.0",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^14.4.3",
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

# Backend

└─ $ ▶ pnpm init

└─ $ ▶ pnpm install --save-dev json-server

└─ $ ▶ pnpm install --save-dev nodemon

└─ $ ▶ tsc --version \
//Version 4.8.4 \
if not installed run:

└─ $ ▶ pnpm install -g typescript

└─ $ ▶ tsc --init (or npx tsc --init)

└─ $ ▶ pnpm install -D typescript

└─ $ ▶ pnpm install -D @types/node

└─ $ ▶ pnpm install -D @types/express

└─ $ ▶ pnpm install -D ts-node

└─ $ ▶ pnpm install express

└─ $ ▶ pnpm install cors

└─ $ ▶ pnpm install dotenv

└─ $ ▶ pnpm install --save-dev mariadb

## CMD Line

└─ $ ▶ pnpm start (server.js)

└─ $ ▶ pnpm run dev (server.js restart in every changes)

└─ $ ▶ pnpm run server (db.json restart in every changes)

---

# Testing

(package.json)

```
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "test": "vitest",
    "coverage": "vitest run --coverage"

    ("typecheck": "vitest typecheck" that's experimental...)
  }
```

## Install

└─ $ ▶ pnpm add -D vitest

└─ $ ▶ npm i -D jsdom @testing-library/react

└─ $ ▶ pnpm install -D react-test-renderer

└─ $ ▶ pnpm install -D @testing-library/dom@>=7.21.4

└─ $ ▶ pnpm install -D @testing-library/user-event

└─ $ ▶ pnpm run test

└─ $ ▶ pnpm run coverage

---

(src/setupTest.ts)

```
import '@testing-library/jest-dom';
```

---

(tsconfig.json)

```
  "include": ["src", "./setupTest.ts"],
```

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
      setupFiles: ['src/setupTest.ts']
    }
})
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

---

```
MariaDB [mytable]> SHOW COLUMNS FROM members;
+---------------+------------------+------+-----+---------+-------+
| Field         | Type             | Null | Key | Default | Extra |
+---------------+------------------+------+-----+---------+-------+
| order_id      | int(11)          | NO   | PRI | NULL    |       |
| img           | varchar(255)     | YES  |     | NULL    |       |
| firstName     | varchar(255)     | YES  |     | NULL    |       |
| lastName      | varchar(255)     | YES  |     | NULL    |       |
| age           | int(10) unsigned | YES  |     | NULL    |       |
| email         | varchar(255)     | YES  |     | NULL    |       |
| location      | varchar(255)     | YES  |     | NULL    |       |
| gender        | varchar(255)     | YES  |     | NULL    |       |
| mainroom      | varchar(255)     | YES  |     | NULL    |       |
| room          | varchar(255)     | YES  |     | NULL    |       |
| isConnected   | tinyint(1)       | YES  |     | NULL    |       |
| signalRecieve | tinyint(1)       | YES  |     | NULL    |       |
| sentMsg       | tinyint(1)       | YES  |     | NULL    |       |
| messagebox    | varchar(255)     | YES  |     | NULL    |       |
| returnConfirm | tinyint(1)       | YES  |     | NULL    |       |
+---------------+------------------+------+-----+---------+-------+
15 rows in set (0.005 sec)
```
