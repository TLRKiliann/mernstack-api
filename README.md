# MERN-stack API

with MySQL db in LAN

- code : class react with ts

- style : Sass

---

# Testing

└─ $ ▶ pnpm add -D vitest

(package.json)

```
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "test": "vitest",
    "coverage": "vitest run --coverage"
  }
```

└─ $ ▶ npm i -D jsdom @testing-library/react

└─ $ ▶ pnpm install -D react-test-renderer

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

## Importations

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
└─ $ ▶ npm install -g ndb

- alternatively, with yarn
└─ $ ▶ yarn global add ndb

- run tests with debugger enabled
└─ $ ▶ ndb npm run test
or
└─ $ ▶ ndb pnpm run test

---

Coverage of moment :

 % Coverage report from c8
----------------|---------|----------|---------|---------|-------------------
File            | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------------|---------|----------|---------|---------|-------------------
All files       |     100 |      100 |     100 |     100 |                   
 src            |     100 |      100 |     100 |     100 |                   
  App.tsx       |     100 |      100 |     100 |     100 |                   
 src/components |     100 |      100 |     100 |     100 |                   
  Footer.tsx    |     100 |      100 |     100 |     100 |                   
  Header.tsx    |     100 |      100 |     100 |     100 |                   
  MainComp.tsx  |     100 |      100 |     100 |     100 |                   
  MainTitle.tsx |     100 |      100 |     100 |     100 |                   
  Review.tsx    |     100 |      100 |     100 |     100 |                   
 src/notes      |     100 |      100 |     100 |     100 |                   
  db_notes.ts   |     100 |      100 |     100 |     100 |                   
----------------|---------|----------|---------|---------|-------------------
