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
└─ $ ▶ npm install -g ndb
or
└─ $ ▶ pnpm install -g ndb

- alternatively, with yarn
└─ $ ▶ yarn global add ndb

- run tests with debugger enabled
└─ $ ▶ ndb npm run test
or
└─ $ ▶ ndb pnpm run test
