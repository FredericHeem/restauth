

> RestAuth

A Rest client supporting authentication with JSON Web Token and cookies. Useful for testing authenticated REST API.

[![NPM version][npm-image]][npm-url]
[![Dependency Status][daviddm-image]][daviddm-url]

## Install

```sh
$ npm install --save restauth
```

## Usage

```js

import {Client} from 'restauth';

let config = {
  username:"alice",
  password:"password",
  url:"http://localhost:3000/api/"
};

let client = new Client(config);
let resLogin = await client.login();
assert(resLogin);
let me = await client.get('v1/me');
assert(me);

```

## Test

    $ npm test

## License

MIT © [Frederic Heem](https://github.com/FredericHeem)


[npm-image]: https://badge.fury.io/js/restauth.svg
[npm-url]: https://npmjs.org/package/restauth
[travis-image]: https://travis-ci.org/FredericHeem/restauth.svg?branch=master
[travis-url]: https://travis-ci.org/FredericHeem/restauth
[daviddm-image]: https://david-dm.org/FredericHeem/restauth.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/FredericHeem/restauth
