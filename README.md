### Bug report

With `import-in-the-middle` enabled, I found a bug where assigning to a 
`let` variable in a module does not work as expected.

This is a simplified version of what happens in a SvelteKit application,
using [this module](https://github.com/sveltejs/kit/blob/master/packages/kit/src/runtime/shared-server.js).

I have tested this behavior with Node 20.9.0 and 18.18.2.

#### Expected behavior

```bash
$ npm run test
> iitm-sveltekit-repro@0.0.1 test
> node index.js

setting env, env.FOO is bar
using env from another module, env.FOO is bar
```

#### Actual behavior with import-in-the-middle
```bash
$ npm run test:iitm

> iitm-sveltekit-repro@0.0.1 test:iitm
> node --experimental-loader import-in-the-middle/hook.mjs index.js

(node:12408) ExperimentalWarning: Custom ESM Loaders is an experimental feature and might change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
setting env, env.FOO is bar
using env from another module, env.FOO is baz
```