# @sane/dns

Promisified 'dns' API, for typescript.

Just import it and use it like the regular 'dns' module.

Install
-------

```bash
npm install @sane/dns --save
```

Api
---

See [src/index.ts](src/index.ts) for a list of promisifed methods.

Example
-------

```javascript
import * as dns from '@sane/dns';

dns.reverseAsync('8.8.8.8')
    .then(() => {
        // ...
    });
```

Release
-------

1. Bump up the version number in package.json
1. Add a section for the new release in CHANGELOG.md
1. Run npm run-script compile to ensure it builds
1. Commit
1. Run npm publish
1. Create a git tag for the new release and push it
