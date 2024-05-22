# unstorage-driver-black-hole

Provides an [unstorage](https://unstorage.unjs.io/) driver which does not store anything.

Useful for local development.

## Installation

```bash
# Using pnpm
pnpm add unstorage-driver-black-hole

# Using yarn
yarn add unstorage-driver-black-hole

# Using npm
npm install unstorage-driver-black-hole
```

## Usage

```ts
import { createStorage } from 'unstorage';
import blackHoleStorage from 'unstorage-driver-black-hole';

const storage = createStorage({
  driver: blackHoleStorage(),
});
```
