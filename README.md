# MERN-stack Chat application

CHAT application with Vite - React - TypeScript - Sass with mariadb in LAN

### EN

The objective of this application is to make connected users interact.
Once connected, the user can invite another user of his choice who is in the same room, by selecting the type of room in which he wants to invite him.
He can choose between 3 possibilities: "Question, Private, Info".
If the other user confirms the invitation, both users are in
the room selected by the user who made the request. Otherwise they
stay in the current room.


### FR

L'objectif de cette application est de faire interagir les utilisateurs connectés.
Une fois connecté l'utilisateur peur inviter un autre utilisateur de son choix qui
se trouve dans la même room, en sélectionnant le type de room dans laquelle il
souhaite l'inviter. Il a le choix entre 3 possibilités : "Question, Private, Info".
Si l'autre utilisateur confirme l'invitation, les 2 utilisateur se retrouvent dans
dans la room séléctionnée par l'utilisateur à l'origine de la demande. Sinon, ils
resent dans la room actuelle.

---

## Install

cd vite-project

└─ $ ▶ pnpm install

└─ $ ▶ pnpm run dev

---

## Hooks

used hook for this application :

- useState

- useEffect

- useContext

- useRef

- useParams

- useNavigate

- custom hook

---

## Modules

- front : react-router-dom v6 - axios

- backend mode prod : express - cors - dotenv - mariadb

- backend mode dev : express - cors - dotenv - server-json

---

## Structure

```
src
|
|--App.tsx (react-router-dom (v6))
|
|--index.scss (all indexation of sass files)
|
|--assets (img of project)
|
|--actions (to call services)
|
|--api (config)
|
|--components (reusable component)
|     |
|     -----> terminalchat
|     |
|     -----> privatechat
|
|--context (useContext)
|
|--hook (custom hook)
|
|--models (type)
|
|--pages
|
|--services (axios services)
|
|--backend
  	|
  	-----> index.ts (server)
  	|
  	-----> routes
  	|
  	-----> dbConnection.ts
    |
    -----> .env (hidden for security)

```

---

# Initial installation

└─ $ ▶ pnpm create vite

└─ $ ▶ cd vite-project

└─ $ ▶ pnpm install

└─ $ ▶ pnpm install react-router-dom

└─ $ ▶ pnpm install -D sass

└─ $ ▶ pnpm install axios

└─ $ ▶ pnpm install react-icons

---

## Configuration with Sass

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

## Table overview

Table for all members:

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

Table for terminal chat:

```
MariaDB [mytable]> SHOW COLUMNS FROM tableroom;
+-------+--------------+------+-----+---------+-------+
| Field | Type         | Null | Key | Default | Extra |
+-------+--------------+------+-----+---------+-------+
| id    | int(11)      | NO   | PRI | NULL    |       |
| date  | varchar(255) | YES  |     | NULL    |       |
| usr   | varchar(150) | YES  |     | NULL    |       |
| msg   | varchar(255) | YES  |     | NULL    |       |
| room  | varchar(200) | YES  |     | NULL    |       |
+-------+--------------+------+-----+---------+-------+
5 rows in set (0.005 sec)
```
